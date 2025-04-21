'use client'

import type {
  ApiDataBlockBase,
  ApiDataBlockType,
  Organization,
  Video_Readr,
  VideoV2_MM,
  VideoImage,
} from '../types'

type ContentVideo_Readr = {
  video: Video_Readr
}

type ContentVideoV2_MM = {
  desc: string
  video: VideoV2_MM
}

// since video V1 and v2 for readr stores the same data structure, we handle them as one
interface ApiDataVideo_Readr extends ApiDataBlockBase {
  type: ApiDataBlockType.Video | ApiDataBlockType.VideoV2
  content: [ContentVideo_Readr]
  alignment: 'center'
}

/**
 *  From 2023, video button store new structure for MM and then had been updated the version to v2.
 *  The v1 version data were removed from the db so no longer need to handle them.
 */
interface ApiDataVideoV2_MM extends ApiDataBlockBase {
  type: ApiDataBlockType.VideoV2
  content: [ContentVideoV2_MM]
  alignment: 'center'
}

export type ApiDataVideo = ApiDataVideo_Readr | ApiDataVideoV2_MM

type VideoProps = {
  video: {
    id: string
    url: string
    name: string
    heroImage: VideoImage | null
  }
}

const Video = ({ video }: VideoProps) => {
  // const heroImage = video.heroImage?.resized?.original
  return (
    <div className="video-block">
      <video
        src={video.url}
        loop
        controls
        // poster={heroImage}
        // preload="metadata"
      />
    </div>
  )
}

export default function VideoBlock({
  apiDataBlock,
  organization,
}: {
  apiDataBlock: ApiDataVideo
  organization: Organization
}) {
  switch (organization) {
    case 'mirror-media': {
      const apiDataAudio = apiDataBlock as ApiDataVideoV2_MM
      const videoData = apiDataAudio.content[0]?.video
      return (
        <Video
          video={{
            id: videoData.id,
            name: videoData.name,
            url: videoData.videoSrc,
            heroImage: videoData.heroImage,
          }}
        />
      )
    }
    case 'readr-media': {
      const apiDataAudio = apiDataBlock as ApiDataVideo_Readr
      const videoData = apiDataAudio.content[0]?.video
      return (
        <Video
          video={{
            id: videoData.id,
            name: videoData.name,
            url: videoData.url,
            heroImage: videoData.coverPhoto,
          }}
        />
      )
    }
    default:
      return null
  }
}
