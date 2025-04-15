import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { HeaderData, LatestPost, PopularNews } from '@/types/common'
import {
  fetchLatestPost,
  fetchPopularPost,
} from '@/utils/client-side-data-fetch'
import type { PickupItemInTopNewsSection } from '@/types/homepage'
import { fetchLiveEvent } from '@/app/actions'

type LatestPostState = {
  isInitialized: boolean
  liveEvent: PickupItemInTopNewsSection | null
  latestPosts: LatestPost[]
  popularNews: PopularNews[]
}

const initialState: LatestPostState = {
  isInitialized: false,
  liveEvent: null,
  latestPosts: [],
  popularNews: [],
}

export const initializeData = createAsyncThunk(
  'homepage/initialize',
  async (headerData: HeaderData[]) => {
    const liveEvent = await fetchLiveEvent()
    const latestPosts = await fetchLatestPost(headerData, 1)
    const popularNews = await fetchPopularPost(headerData)

    return {
      liveEvent,
      latestPosts,
      popularNews,
    }
  }
)

const homepageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    resetAllState: () => initialState,
    setLiveEvent: (
      state,
      action: PayloadAction<PickupItemInTopNewsSection | null>
    ) => {
      state.liveEvent = action.payload
    },
    setLatestPosts: (state, action: PayloadAction<LatestPost[]>) => {
      state.latestPosts = action.payload
    },
    setPopularNews: (state, action: PayloadAction<PopularNews[]>) => {
      state.popularNews = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initializeData.fulfilled, (state, action) => {
      const { liveEvent, latestPosts, popularNews } = action.payload

      state.isInitialized = true
      state.liveEvent = liveEvent
      state.latestPosts = latestPosts
      state.popularNews = popularNews
    })
  },
})

export const homepageSliceActions = homepageSlice.actions

export default homepageSlice.reducer
