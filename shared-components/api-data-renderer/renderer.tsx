import React from 'react'
import AudioBlock from './block-renderer/audio-block'
import BackgroundImageBlock from './block-renderer/background-image-block'
import BackgroundVideoBlock from './block-renderer/background-video-block'
import BlockquoteBlock from './block-renderer/blockquote-block'
import CodeBlock from './block-renderer/code-block'
import ColorBoxBlock from './block-renderer/color-box'
import DividerBlock from './block-renderer/divider-block'
import EmbedCodeBlock from './block-renderer/embed-code-block'
import { Header2Block, Header3Block } from './block-renderer/header-block'
import ImageBlock from './block-renderer/image-block'
import InfoboxBlock from './block-renderer/infobox-block'
import { OrderListBlock, UnorderListBlock } from './block-renderer/list-block'
import SideIndexBlock from './block-renderer/side-index-block'
import SlideshowBlock from './block-renderer/slideshow-block'
import TableBlock from './block-renderer/table-block'
import type { ApiData, ApiDataBlock } from './block-renderer/types'
import UnstyledBlock from './block-renderer/unstyled-block'
import VideoBlock from './block-renderer/video-block'
import YoutubeBlock from './block-renderer/youtube-block'
import { ApiDataBlockType } from './types'
import { getOrganizationFromSourceCustomId } from './utils'
import { DesktopGptAd } from '../gpt-ad/desktop-gpt-ad'
import { MobileGptAd } from '../gpt-ad/mobile-gpt-ad'

export type { ApiData } from './block-renderer/types'

export default function ApiDataRenderer({
  apiData,
  sourceCustomId,
  isBrief,
}: {
  apiData: ApiData
  sourceCustomId: string
  isBrief: boolean
}) {
  const organization =
    getOrganizationFromSourceCustomId(sourceCustomId) || 'mirror-media'

  const getApiDataBlockJsx = (apiDataBlock: ApiDataBlock) => {
    switch (apiDataBlock.type) {
      case ApiDataBlockType.Unstyled:
        return (
          <UnstyledBlock key={apiDataBlock.id} apiDataBlock={apiDataBlock} />
        )
      case ApiDataBlockType.HeaderTwo:
        return (
          <Header2Block
            key={apiDataBlock.id}
            organization={organization}
            apiDataBlock={apiDataBlock}
          />
        )
      case ApiDataBlockType.HeaderThree:
        return (
          <Header3Block
            key={apiDataBlock.id}
            organization={organization}
            apiDataBlock={apiDataBlock}
          />
        )
      case ApiDataBlockType.Blockquote:
        return (
          <BlockquoteBlock key={apiDataBlock.id} apiDataBlock={apiDataBlock} />
        )
      case ApiDataBlockType.UnorderList:
        return (
          <UnorderListBlock key={apiDataBlock.id} apiDataBlock={apiDataBlock} />
        )
      case ApiDataBlockType.OrderList:
        return (
          <OrderListBlock key={apiDataBlock.id} apiDataBlock={apiDataBlock} />
        )
      case ApiDataBlockType.CodeBlock:
        return <CodeBlock key={apiDataBlock.id} apiDataBlock={apiDataBlock} />
      case ApiDataBlockType.Divider:
        return <DividerBlock key={apiDataBlock.id} />
      case ApiDataBlockType.Image:
        return <ImageBlock key={apiDataBlock.id} apiDataBlock={apiDataBlock} />
      case ApiDataBlockType.Video:
      case ApiDataBlockType.VideoV2:
        return (
          <VideoBlock
            key={apiDataBlock.id}
            organization={organization}
            apiDataBlock={apiDataBlock}
          />
        )
      case ApiDataBlockType.Slideshow:
      case ApiDataBlockType.SlideshowV2:
        return (
          <SlideshowBlock key={apiDataBlock.id} apiDataBlock={apiDataBlock} />
        )
      case ApiDataBlockType.Infobox:
        return (
          <InfoboxBlock key={apiDataBlock.id} apiDataBlock={apiDataBlock} />
        )
      case ApiDataBlockType.Audio:
      case ApiDataBlockType.AudioV2:
        return (
          <AudioBlock
            key={apiDataBlock.id}
            organization={organization}
            apiDataBlock={apiDataBlock}
          />
        )
      case ApiDataBlockType.Table:
        return <TableBlock key={apiDataBlock.id} apiDataBlock={apiDataBlock} />
      case ApiDataBlockType.ColorBox:
        return (
          <ColorBoxBlock key={apiDataBlock.id} apiDataBlock={apiDataBlock} />
        )
      case ApiDataBlockType.BackgroundImage:
        return (
          <BackgroundImageBlock
            key={apiDataBlock.id}
            organization={organization}
            apiDataBlock={apiDataBlock}
          />
        )
      case ApiDataBlockType.BackgroundVideo:
        return (
          <BackgroundVideoBlock
            key={apiDataBlock.id}
            organization={organization}
            apiDataBlock={apiDataBlock}
          />
        )
      case ApiDataBlockType.RelatedPost:
        return
      case ApiDataBlockType.SideIndex:
        return (
          <SideIndexBlock
            key={apiDataBlock.id}
            organization={organization}
            apiDataBlock={apiDataBlock}
          />
        )
      case ApiDataBlockType.Youtube:
        return (
          <YoutubeBlock
            key={apiDataBlock.id}
            organization={organization}
            apiDataBlock={apiDataBlock}
          />
        )
      case ApiDataBlockType.EmbedCode:
        return (
          <EmbedCodeBlock key={apiDataBlock.id} apiDataBlock={apiDataBlock} />
        )

      default: {
        const exhaustiveCheck: never = apiDataBlock
        console.error('unhandled apiData type', exhaustiveCheck)
        return null
      }
    }
  }

  return (
    <article className={`${isBrief ? 'brief' : 'content'} story-renderer`}>
      {apiData.map((apiDataBlock, i) => {
        const apiDataBlockJsx = getApiDataBlockJsx(apiDataBlock)
        return (
          <React.Fragment key={i}>
            {!isBrief && i === 1 && (
              <MobileGptAd
                slotKey="mirrordaily_article_MW_336x280_AT1"
                customClasses="mx-auto"
              />
            )}
            {!isBrief && i === 3 && (
              <DesktopGptAd
                slotKey="mirrordaily_article_PC_640x390_AT1"
                customClasses="mx-auto"
              />
            )}
            {!isBrief && i === 5 && (
              <MobileGptAd
                slotKey="mirrordaily_article_MW_336x280_AT2"
                customClasses="mx-auto"
              />
            )}
            {apiDataBlockJsx}
          </React.Fragment>
        )
      })}
    </article>
  )
}
