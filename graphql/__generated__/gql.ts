/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  'fragment EditorChoiceData on EditorChoice {\n  outlink\n  heroImage {\n    ...ImageData\n  }\n  choices {\n    ...PostItem\n  }\n}':
    types.EditorChoiceDataFragmentDoc,
  'fragment ImageData on Photo {\n  id\n  resized {\n    original\n    w480\n    w800\n    w1200\n    w1600\n    w2400\n  }\n  resizedWebp {\n    original\n    w480\n    w800\n    w1200\n    w1600\n    w2400\n  }\n}':
    types.ImageDataFragmentDoc,
  'fragment PostOverview on Post {\n  id\n  title\n  publishedDate\n  apiDataBrief\n  apiData\n  heroImage {\n    ...ImageData\n  }\n  og_image {\n    ...ImageData\n  }\n}\n\nfragment PostItem on Post {\n  id\n  title\n  heroImage {\n    ...ImageData\n  }\n}\n\nfragment TopicPost on Post {\n  id\n  title\n  apiDataBrief\n  apiData\n  heroImage {\n    ...ImageData\n  }\n}\n\nfragment RelatedPost on Post {\n  id\n  title\n  heroImage {\n    ...ImageData\n  }\n  og_image {\n    ...ImageData\n  }\n  sections {\n    name\n    color\n  }\n}':
    types.PostOverviewFragmentDoc,
  'fragment LatestShorts on Video {\n  id\n  name\n  uploader\n  videoSrc\n  youtubeUrl\n  heroImage {\n    ...ImageData\n  }\n}\n\nfragment ShortsData on Video {\n  id\n  name\n  state\n  isShorts\n  uploader\n  videoSection\n  tags(take: 1) {\n    id\n  }\n}':
    types.LatestShortsFragmentDoc,
  'mutation CreateShortsPreview($name: String!, $file: Upload!) {\n  photo: createPhoto(data: {name: $name, imageFile: {upload: $file}}) {\n    id\n  }\n}':
    types.CreateShortsPreviewDocument,
  'mutation CreateCreativityShorts($title: String!, $photoId: ID!, $file: Upload!, $author: String, $authorEmail: String!, $description: String) {\n  shorts: createVideo(\n    data: {videoSection: "creativity", state: "draft", isShorts: true, name: $title, file: {upload: $file}, uploader: $author, uploaderEmail: $authorEmail, content: $description, heroImage: {connect: {id: $photoId}}}\n  ) {\n    id\n  }\n}':
    types.CreateCreativityShortsDocument,
  'query GetCategoryInformation($slug: String) {\n  category(where: {slug: $slug}) {\n    slug\n    name\n    state\n    sections {\n      slug\n      color\n    }\n  }\n}':
    types.GetCategoryInformationDocument,
  'query GetAuthorInformation($id: ID!) {\n  contact(where: {id: $id}) {\n    id\n    name\n  }\n}':
    types.GetAuthorInformationDocument,
  'query GetEditorChoices {\n  editorChoices(\n    orderBy: [{order: asc}]\n    take: 10\n    where: {state: {equals: "published"}}\n  ) {\n    ...EditorChoiceData\n  }\n}':
    types.GetEditorChoicesDocument,
  'query GetLiveEventForHomepage($startDate: DateTime!, $endDate: DateTime!) {\n  events(\n    orderBy: [{publishedDate: desc}]\n    take: 1\n    where: {eventType: {equals: "livestreaming"}, state: {equals: "published"}, startDate: {lte: $startDate}, OR: [{endDate: {gt: $endDate}}, {endDate: {equals: null}}]}\n  ) {\n    name\n    link\n    heroImage {\n      ...ImageData\n    }\n  }\n}':
    types.GetLiveEventForHomepageDocument,
  'query GetExternalById($id: ID!) {\n  external(where: {id: $id}) {\n    id\n    title\n    thumb\n    publishedDate\n    brief\n    content\n    tags {\n      name\n      slug\n    }\n    partner {\n      name\n      slug\n    }\n  }\n}\n\nquery GetRelatedPostsByExternalId($id: ID!) {\n  external(where: {id: $id}) {\n    relateds {\n      ...RelatedPost\n    }\n  }\n}\n\nquery GetExternalsByPartnerSlug($skip: Int!, $take: Int!, $slug: String!) {\n  externals(\n    skip: $skip\n    take: $take\n    where: {partner: {slug: {equals: $slug}}}\n    orderBy: {publishedDate: desc}\n  ) {\n    id\n    title\n    brief\n    publishedDate\n    thumb\n  }\n}':
    types.GetExternalByIdDocument,
  'query GetPartnerInformation($slug: String!) {\n  partner(where: {slug: $slug}) {\n    name\n  }\n}':
    types.GetPartnerInformationDocument,
  'query GetPostsBySectionSlug($skip: Int!, $take: Int, $slug: String!) {\n  posts(\n    skip: $skip\n    take: $take\n    where: {state: {equals: "published"}, sections: {some: {slug: {equals: $slug}}}}\n    orderBy: [{publishedDate: desc}]\n  ) {\n    ...PostOverview\n  }\n}\n\nquery GetFlashNews {\n  posts(\n    take: 8\n    orderBy: [{publishedDate: desc}]\n    where: {state: {equals: "published"}}\n  ) {\n    id\n    title\n  }\n}\n\nquery GetPostsByCategorySlug($skip: Int!, $take: Int, $slug: String!) {\n  posts(\n    skip: $skip\n    take: $take\n    where: {state: {equals: "published"}, categories: {some: {slug: {equals: $slug}}}}\n    orderBy: [{publishedDate: desc}]\n  ) {\n    ...PostOverview\n  }\n}\n\nquery GetPostsByAuthorId($skip: Int!, $take: Int!, $id: ID!) {\n  posts(\n    skip: $skip\n    take: $take\n    where: {state: {equals: "published"}, OR: [{writers: {some: {id: {equals: $id}}}}, {photographers: {some: {id: {equals: $id}}}}, {designers: {some: {id: {equals: $id}}}}, {engineers: {some: {id: {equals: $id}}}}]}\n    orderBy: [{publishedDate: desc}]\n  ) {\n    sections {\n      name\n      color\n    }\n    ...PostOverview\n  }\n}\n\nquery GetPostsByTagSlug($skip: Int!, $take: Int!, $slug: String!) {\n  posts(\n    skip: $skip\n    take: $take\n    where: {state: {equals: "published"}, OR: [{tags: {some: {slug: {equals: $slug}}}}, {tags_algo: {some: {slug: {equals: $slug}}}}]}\n    orderBy: [{publishedDate: desc}]\n  ) {\n    sections {\n      name\n      color\n    }\n    ...PostOverview\n  }\n}\n\nquery GetPostById($id: ID!) {\n  post(where: {id: $id}) {\n    id\n    title\n    subtitle\n    heroCaption\n    publishedDate\n    heroImage {\n      ...ImageData\n    }\n    og_image {\n      ...ImageData\n    }\n    tags {\n      slug\n      name\n    }\n    tags_algo {\n      slug\n      name\n    }\n    sections {\n      name\n      color\n    }\n    writers {\n      id\n      name\n    }\n    photographers {\n      id\n      name\n    }\n    designers {\n      id\n      name\n    }\n    engineers {\n      id\n      name\n    }\n    apiData\n    apiDataBrief\n    Warning {\n      content\n    }\n    isAdult\n  }\n}\n\nquery GetRelatedPostsById($id: ID!) {\n  post(where: {id: $id}) {\n    relateds {\n      ...RelatedPost\n    }\n  }\n}':
    types.GetPostsBySectionSlugDocument,
  'query GetSectionInformation($slug: String!) {\n  section(where: {slug: $slug}) {\n    slug\n    name\n    color\n    state\n  }\n}':
    types.GetSectionInformationDocument,
  'query GetTagInformation($slug: String!) {\n  tag(where: {slug: $slug}) {\n    name\n    slug\n  }\n}':
    types.GetTagInformationDocument,
  'query GetTopics {\n  topics(\n    orderBy: [{sortOrder: asc}, {id: desc}]\n    where: {state: {equals: "published"}}\n  ) {\n    name\n    slug\n    posts(\n      take: 4\n      orderBy: [{publishedDate: desc}]\n      where: {state: {equals: "published"}}\n    ) {\n      ...PostItem\n    }\n  }\n}\n\nquery GetTopicBasicInfo($slug: String!) {\n  topic(where: {slug: $slug}) {\n    slug\n    name\n    og_title\n    apiDataBrief\n    og_description\n    state\n    leading\n    type\n    style\n    heroUrl\n    heroVideo {\n      state\n      videoSrc\n      heroImage {\n        ...ImageData\n      }\n    }\n    og_image {\n      ...ImageData\n    }\n    heroImage {\n      ...ImageData\n    }\n    slideshow_images {\n      id\n      name\n      topicKeywords\n      ...ImageData\n    }\n    manualOrderOfSlideshowImages\n    tags {\n      id\n      name\n      slug\n    }\n  }\n}\n\nquery GetListTypeTopcPosts($slug: String!, $take: Int!, $skip: Int = 0, $withAmount: Boolean! = false) {\n  topic(where: {slug: $slug}) {\n    posts(\n      where: {state: {equals: "published"}}\n      orderBy: [{isFeatured: desc}, {publishedDate: desc}, {id: desc}]\n      take: $take\n      skip: $skip\n    ) {\n      ...TopicPost\n    }\n    postsCount(where: {state: {equals: "published"}}) @include(if: $withAmount)\n  }\n}\n\nquery GetGroupTypeTopicPosts($slug: String!) {\n  topic(where: {slug: $slug}) {\n    posts(\n      where: {state: {equals: "published"}}\n      orderBy: [{isFeatured: desc}, {publishedDate: desc}, {id: desc}]\n    ) {\n      ...TopicPost\n      tags {\n        id\n      }\n    }\n  }\n}\n\nquery GetTopicList($skip: Int, $take: Int) {\n  topics(\n    where: {state: {equals: "published"}}\n    orderBy: [{sortOrder: asc}, {createdAt: desc}]\n    skip: $skip\n    take: $take\n  ) {\n    id\n    name\n    slug\n    apiDataBrief\n    heroImage {\n      ...ImageData\n    }\n  }\n}':
    types.GetTopicsDocument,
  'query GetLatestShorts($amount: Int!, $start: Int!) {\n  news: videos(\n    skip: $start\n    take: $amount\n    orderBy: [{publishedDate: desc}]\n    where: {state: {equals: "published"}, isShorts: {equals: true}, videoSection: {equals: "news"}}\n  ) {\n    ...LatestShorts\n  }\n  creativity: videos(\n    skip: $start\n    take: $amount\n    orderBy: [{publishedDate: desc}]\n    where: {state: {equals: "published"}, isShorts: {equals: true}, videoSection: {equals: "creativity"}}\n  ) {\n    ...LatestShorts\n  }\n}\n\nquery GetShortsData($id: ID!) {\n  video(where: {id: $id}) {\n    ...ShortsData\n  }\n}\n\nquery GetShortsByTagAndVideoSection($tagId: ID!, $section: String!, $skip: Int = 0, $take: Int = 0) {\n  videos(\n    orderBy: [{publishedDate: desc}]\n    where: {state: {equals: "published"}, videoSection: {equals: $section}, tags: {some: {id: {equals: $tagId}}}}\n    take: $take\n    skip: $skip\n  ) {\n    ...LatestShorts\n  }\n}\n\nquery GetShortsByVideoSection($section: String!, $skip: Int = 0, $take: Int = 0) {\n  videos(\n    orderBy: [{publishedDate: desc}]\n    where: {state: {equals: "published"}, videoSection: {equals: $section}}\n    take: $take\n    skip: $skip\n  ) {\n    ...LatestShorts\n  }\n}':
    types.GetLatestShortsDocument,
}

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'fragment EditorChoiceData on EditorChoice {\n  outlink\n  heroImage {\n    ...ImageData\n  }\n  choices {\n    ...PostItem\n  }\n}'
): (typeof documents)['fragment EditorChoiceData on EditorChoice {\n  outlink\n  heroImage {\n    ...ImageData\n  }\n  choices {\n    ...PostItem\n  }\n}']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'fragment ImageData on Photo {\n  id\n  resized {\n    original\n    w480\n    w800\n    w1200\n    w1600\n    w2400\n  }\n  resizedWebp {\n    original\n    w480\n    w800\n    w1200\n    w1600\n    w2400\n  }\n}'
): (typeof documents)['fragment ImageData on Photo {\n  id\n  resized {\n    original\n    w480\n    w800\n    w1200\n    w1600\n    w2400\n  }\n  resizedWebp {\n    original\n    w480\n    w800\n    w1200\n    w1600\n    w2400\n  }\n}']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'fragment PostOverview on Post {\n  id\n  title\n  publishedDate\n  apiDataBrief\n  apiData\n  heroImage {\n    ...ImageData\n  }\n  og_image {\n    ...ImageData\n  }\n}\n\nfragment PostItem on Post {\n  id\n  title\n  heroImage {\n    ...ImageData\n  }\n}\n\nfragment TopicPost on Post {\n  id\n  title\n  apiDataBrief\n  apiData\n  heroImage {\n    ...ImageData\n  }\n}\n\nfragment RelatedPost on Post {\n  id\n  title\n  heroImage {\n    ...ImageData\n  }\n  og_image {\n    ...ImageData\n  }\n  sections {\n    name\n    color\n  }\n}'
): (typeof documents)['fragment PostOverview on Post {\n  id\n  title\n  publishedDate\n  apiDataBrief\n  apiData\n  heroImage {\n    ...ImageData\n  }\n  og_image {\n    ...ImageData\n  }\n}\n\nfragment PostItem on Post {\n  id\n  title\n  heroImage {\n    ...ImageData\n  }\n}\n\nfragment TopicPost on Post {\n  id\n  title\n  apiDataBrief\n  apiData\n  heroImage {\n    ...ImageData\n  }\n}\n\nfragment RelatedPost on Post {\n  id\n  title\n  heroImage {\n    ...ImageData\n  }\n  og_image {\n    ...ImageData\n  }\n  sections {\n    name\n    color\n  }\n}']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'fragment LatestShorts on Video {\n  id\n  name\n  uploader\n  videoSrc\n  youtubeUrl\n  heroImage {\n    ...ImageData\n  }\n}\n\nfragment ShortsData on Video {\n  id\n  name\n  state\n  isShorts\n  uploader\n  videoSection\n  tags(take: 1) {\n    id\n  }\n}'
): (typeof documents)['fragment LatestShorts on Video {\n  id\n  name\n  uploader\n  videoSrc\n  youtubeUrl\n  heroImage {\n    ...ImageData\n  }\n}\n\nfragment ShortsData on Video {\n  id\n  name\n  state\n  isShorts\n  uploader\n  videoSection\n  tags(take: 1) {\n    id\n  }\n}']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'mutation CreateShortsPreview($name: String!, $file: Upload!) {\n  photo: createPhoto(data: {name: $name, imageFile: {upload: $file}}) {\n    id\n  }\n}'
): (typeof documents)['mutation CreateShortsPreview($name: String!, $file: Upload!) {\n  photo: createPhoto(data: {name: $name, imageFile: {upload: $file}}) {\n    id\n  }\n}']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'mutation CreateCreativityShorts($title: String!, $photoId: ID!, $file: Upload!, $author: String, $authorEmail: String!, $description: String) {\n  shorts: createVideo(\n    data: {videoSection: "creativity", state: "draft", isShorts: true, name: $title, file: {upload: $file}, uploader: $author, uploaderEmail: $authorEmail, content: $description, heroImage: {connect: {id: $photoId}}}\n  ) {\n    id\n  }\n}'
): (typeof documents)['mutation CreateCreativityShorts($title: String!, $photoId: ID!, $file: Upload!, $author: String, $authorEmail: String!, $description: String) {\n  shorts: createVideo(\n    data: {videoSection: "creativity", state: "draft", isShorts: true, name: $title, file: {upload: $file}, uploader: $author, uploaderEmail: $authorEmail, content: $description, heroImage: {connect: {id: $photoId}}}\n  ) {\n    id\n  }\n}']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'query GetCategoryInformation($slug: String) {\n  category(where: {slug: $slug}) {\n    slug\n    name\n    state\n    sections {\n      slug\n      color\n    }\n  }\n}'
): (typeof documents)['query GetCategoryInformation($slug: String) {\n  category(where: {slug: $slug}) {\n    slug\n    name\n    state\n    sections {\n      slug\n      color\n    }\n  }\n}']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'query GetAuthorInformation($id: ID!) {\n  contact(where: {id: $id}) {\n    id\n    name\n  }\n}'
): (typeof documents)['query GetAuthorInformation($id: ID!) {\n  contact(where: {id: $id}) {\n    id\n    name\n  }\n}']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'query GetEditorChoices {\n  editorChoices(\n    orderBy: [{order: asc}]\n    take: 10\n    where: {state: {equals: "published"}}\n  ) {\n    ...EditorChoiceData\n  }\n}'
): (typeof documents)['query GetEditorChoices {\n  editorChoices(\n    orderBy: [{order: asc}]\n    take: 10\n    where: {state: {equals: "published"}}\n  ) {\n    ...EditorChoiceData\n  }\n}']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'query GetLiveEventForHomepage($startDate: DateTime!, $endDate: DateTime!) {\n  events(\n    orderBy: [{publishedDate: desc}]\n    take: 1\n    where: {eventType: {equals: "livestreaming"}, state: {equals: "published"}, startDate: {lte: $startDate}, OR: [{endDate: {gt: $endDate}}, {endDate: {equals: null}}]}\n  ) {\n    name\n    link\n    heroImage {\n      ...ImageData\n    }\n  }\n}'
): (typeof documents)['query GetLiveEventForHomepage($startDate: DateTime!, $endDate: DateTime!) {\n  events(\n    orderBy: [{publishedDate: desc}]\n    take: 1\n    where: {eventType: {equals: "livestreaming"}, state: {equals: "published"}, startDate: {lte: $startDate}, OR: [{endDate: {gt: $endDate}}, {endDate: {equals: null}}]}\n  ) {\n    name\n    link\n    heroImage {\n      ...ImageData\n    }\n  }\n}']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'query GetExternalById($id: ID!) {\n  external(where: {id: $id}) {\n    id\n    title\n    thumb\n    publishedDate\n    brief\n    content\n    tags {\n      name\n      slug\n    }\n    partner {\n      name\n      slug\n    }\n  }\n}\n\nquery GetRelatedPostsByExternalId($id: ID!) {\n  external(where: {id: $id}) {\n    relateds {\n      ...RelatedPost\n    }\n  }\n}\n\nquery GetExternalsByPartnerSlug($skip: Int!, $take: Int!, $slug: String!) {\n  externals(\n    skip: $skip\n    take: $take\n    where: {partner: {slug: {equals: $slug}}}\n    orderBy: {publishedDate: desc}\n  ) {\n    id\n    title\n    brief\n    publishedDate\n    thumb\n  }\n}'
): (typeof documents)['query GetExternalById($id: ID!) {\n  external(where: {id: $id}) {\n    id\n    title\n    thumb\n    publishedDate\n    brief\n    content\n    tags {\n      name\n      slug\n    }\n    partner {\n      name\n      slug\n    }\n  }\n}\n\nquery GetRelatedPostsByExternalId($id: ID!) {\n  external(where: {id: $id}) {\n    relateds {\n      ...RelatedPost\n    }\n  }\n}\n\nquery GetExternalsByPartnerSlug($skip: Int!, $take: Int!, $slug: String!) {\n  externals(\n    skip: $skip\n    take: $take\n    where: {partner: {slug: {equals: $slug}}}\n    orderBy: {publishedDate: desc}\n  ) {\n    id\n    title\n    brief\n    publishedDate\n    thumb\n  }\n}']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'query GetPartnerInformation($slug: String!) {\n  partner(where: {slug: $slug}) {\n    name\n  }\n}'
): (typeof documents)['query GetPartnerInformation($slug: String!) {\n  partner(where: {slug: $slug}) {\n    name\n  }\n}']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'query GetPostsBySectionSlug($skip: Int!, $take: Int, $slug: String!) {\n  posts(\n    skip: $skip\n    take: $take\n    where: {state: {equals: "published"}, sections: {some: {slug: {equals: $slug}}}}\n    orderBy: [{publishedDate: desc}]\n  ) {\n    ...PostOverview\n  }\n}\n\nquery GetFlashNews {\n  posts(\n    take: 8\n    orderBy: [{publishedDate: desc}]\n    where: {state: {equals: "published"}}\n  ) {\n    id\n    title\n  }\n}\n\nquery GetPostsByCategorySlug($skip: Int!, $take: Int, $slug: String!) {\n  posts(\n    skip: $skip\n    take: $take\n    where: {state: {equals: "published"}, categories: {some: {slug: {equals: $slug}}}}\n    orderBy: [{publishedDate: desc}]\n  ) {\n    ...PostOverview\n  }\n}\n\nquery GetPostsByAuthorId($skip: Int!, $take: Int!, $id: ID!) {\n  posts(\n    skip: $skip\n    take: $take\n    where: {state: {equals: "published"}, OR: [{writers: {some: {id: {equals: $id}}}}, {photographers: {some: {id: {equals: $id}}}}, {designers: {some: {id: {equals: $id}}}}, {engineers: {some: {id: {equals: $id}}}}]}\n    orderBy: [{publishedDate: desc}]\n  ) {\n    sections {\n      name\n      color\n    }\n    ...PostOverview\n  }\n}\n\nquery GetPostsByTagSlug($skip: Int!, $take: Int!, $slug: String!) {\n  posts(\n    skip: $skip\n    take: $take\n    where: {state: {equals: "published"}, OR: [{tags: {some: {slug: {equals: $slug}}}}, {tags_algo: {some: {slug: {equals: $slug}}}}]}\n    orderBy: [{publishedDate: desc}]\n  ) {\n    sections {\n      name\n      color\n    }\n    ...PostOverview\n  }\n}\n\nquery GetPostById($id: ID!) {\n  post(where: {id: $id}) {\n    id\n    title\n    subtitle\n    heroCaption\n    publishedDate\n    heroImage {\n      ...ImageData\n    }\n    og_image {\n      ...ImageData\n    }\n    tags {\n      slug\n      name\n    }\n    tags_algo {\n      slug\n      name\n    }\n    sections {\n      name\n      color\n    }\n    writers {\n      id\n      name\n    }\n    photographers {\n      id\n      name\n    }\n    designers {\n      id\n      name\n    }\n    engineers {\n      id\n      name\n    }\n    apiData\n    apiDataBrief\n    Warning {\n      content\n    }\n    isAdult\n  }\n}\n\nquery GetRelatedPostsById($id: ID!) {\n  post(where: {id: $id}) {\n    relateds {\n      ...RelatedPost\n    }\n  }\n}'
): (typeof documents)['query GetPostsBySectionSlug($skip: Int!, $take: Int, $slug: String!) {\n  posts(\n    skip: $skip\n    take: $take\n    where: {state: {equals: "published"}, sections: {some: {slug: {equals: $slug}}}}\n    orderBy: [{publishedDate: desc}]\n  ) {\n    ...PostOverview\n  }\n}\n\nquery GetFlashNews {\n  posts(\n    take: 8\n    orderBy: [{publishedDate: desc}]\n    where: {state: {equals: "published"}}\n  ) {\n    id\n    title\n  }\n}\n\nquery GetPostsByCategorySlug($skip: Int!, $take: Int, $slug: String!) {\n  posts(\n    skip: $skip\n    take: $take\n    where: {state: {equals: "published"}, categories: {some: {slug: {equals: $slug}}}}\n    orderBy: [{publishedDate: desc}]\n  ) {\n    ...PostOverview\n  }\n}\n\nquery GetPostsByAuthorId($skip: Int!, $take: Int!, $id: ID!) {\n  posts(\n    skip: $skip\n    take: $take\n    where: {state: {equals: "published"}, OR: [{writers: {some: {id: {equals: $id}}}}, {photographers: {some: {id: {equals: $id}}}}, {designers: {some: {id: {equals: $id}}}}, {engineers: {some: {id: {equals: $id}}}}]}\n    orderBy: [{publishedDate: desc}]\n  ) {\n    sections {\n      name\n      color\n    }\n    ...PostOverview\n  }\n}\n\nquery GetPostsByTagSlug($skip: Int!, $take: Int!, $slug: String!) {\n  posts(\n    skip: $skip\n    take: $take\n    where: {state: {equals: "published"}, OR: [{tags: {some: {slug: {equals: $slug}}}}, {tags_algo: {some: {slug: {equals: $slug}}}}]}\n    orderBy: [{publishedDate: desc}]\n  ) {\n    sections {\n      name\n      color\n    }\n    ...PostOverview\n  }\n}\n\nquery GetPostById($id: ID!) {\n  post(where: {id: $id}) {\n    id\n    title\n    subtitle\n    heroCaption\n    publishedDate\n    heroImage {\n      ...ImageData\n    }\n    og_image {\n      ...ImageData\n    }\n    tags {\n      slug\n      name\n    }\n    tags_algo {\n      slug\n      name\n    }\n    sections {\n      name\n      color\n    }\n    writers {\n      id\n      name\n    }\n    photographers {\n      id\n      name\n    }\n    designers {\n      id\n      name\n    }\n    engineers {\n      id\n      name\n    }\n    apiData\n    apiDataBrief\n    Warning {\n      content\n    }\n    isAdult\n  }\n}\n\nquery GetRelatedPostsById($id: ID!) {\n  post(where: {id: $id}) {\n    relateds {\n      ...RelatedPost\n    }\n  }\n}']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'query GetSectionInformation($slug: String!) {\n  section(where: {slug: $slug}) {\n    slug\n    name\n    color\n    state\n  }\n}'
): (typeof documents)['query GetSectionInformation($slug: String!) {\n  section(where: {slug: $slug}) {\n    slug\n    name\n    color\n    state\n  }\n}']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'query GetTagInformation($slug: String!) {\n  tag(where: {slug: $slug}) {\n    name\n    slug\n  }\n}'
): (typeof documents)['query GetTagInformation($slug: String!) {\n  tag(where: {slug: $slug}) {\n    name\n    slug\n  }\n}']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'query GetTopics {\n  topics(\n    orderBy: [{sortOrder: asc}, {id: desc}]\n    where: {state: {equals: "published"}}\n  ) {\n    name\n    slug\n    posts(\n      take: 4\n      orderBy: [{publishedDate: desc}]\n      where: {state: {equals: "published"}}\n    ) {\n      ...PostItem\n    }\n  }\n}\n\nquery GetTopicBasicInfo($slug: String!) {\n  topic(where: {slug: $slug}) {\n    slug\n    name\n    og_title\n    apiDataBrief\n    og_description\n    state\n    leading\n    type\n    style\n    heroUrl\n    heroVideo {\n      state\n      videoSrc\n      heroImage {\n        ...ImageData\n      }\n    }\n    og_image {\n      ...ImageData\n    }\n    heroImage {\n      ...ImageData\n    }\n    slideshow_images {\n      id\n      name\n      topicKeywords\n      ...ImageData\n    }\n    manualOrderOfSlideshowImages\n    tags {\n      id\n      name\n      slug\n    }\n  }\n}\n\nquery GetListTypeTopcPosts($slug: String!, $take: Int!, $skip: Int = 0, $withAmount: Boolean! = false) {\n  topic(where: {slug: $slug}) {\n    posts(\n      where: {state: {equals: "published"}}\n      orderBy: [{isFeatured: desc}, {publishedDate: desc}, {id: desc}]\n      take: $take\n      skip: $skip\n    ) {\n      ...TopicPost\n    }\n    postsCount(where: {state: {equals: "published"}}) @include(if: $withAmount)\n  }\n}\n\nquery GetGroupTypeTopicPosts($slug: String!) {\n  topic(where: {slug: $slug}) {\n    posts(\n      where: {state: {equals: "published"}}\n      orderBy: [{isFeatured: desc}, {publishedDate: desc}, {id: desc}]\n    ) {\n      ...TopicPost\n      tags {\n        id\n      }\n    }\n  }\n}\n\nquery GetTopicList($skip: Int, $take: Int) {\n  topics(\n    where: {state: {equals: "published"}}\n    orderBy: [{sortOrder: asc}, {createdAt: desc}]\n    skip: $skip\n    take: $take\n  ) {\n    id\n    name\n    slug\n    apiDataBrief\n    heroImage {\n      ...ImageData\n    }\n  }\n}'
): (typeof documents)['query GetTopics {\n  topics(\n    orderBy: [{sortOrder: asc}, {id: desc}]\n    where: {state: {equals: "published"}}\n  ) {\n    name\n    slug\n    posts(\n      take: 4\n      orderBy: [{publishedDate: desc}]\n      where: {state: {equals: "published"}}\n    ) {\n      ...PostItem\n    }\n  }\n}\n\nquery GetTopicBasicInfo($slug: String!) {\n  topic(where: {slug: $slug}) {\n    slug\n    name\n    og_title\n    apiDataBrief\n    og_description\n    state\n    leading\n    type\n    style\n    heroUrl\n    heroVideo {\n      state\n      videoSrc\n      heroImage {\n        ...ImageData\n      }\n    }\n    og_image {\n      ...ImageData\n    }\n    heroImage {\n      ...ImageData\n    }\n    slideshow_images {\n      id\n      name\n      topicKeywords\n      ...ImageData\n    }\n    manualOrderOfSlideshowImages\n    tags {\n      id\n      name\n      slug\n    }\n  }\n}\n\nquery GetListTypeTopcPosts($slug: String!, $take: Int!, $skip: Int = 0, $withAmount: Boolean! = false) {\n  topic(where: {slug: $slug}) {\n    posts(\n      where: {state: {equals: "published"}}\n      orderBy: [{isFeatured: desc}, {publishedDate: desc}, {id: desc}]\n      take: $take\n      skip: $skip\n    ) {\n      ...TopicPost\n    }\n    postsCount(where: {state: {equals: "published"}}) @include(if: $withAmount)\n  }\n}\n\nquery GetGroupTypeTopicPosts($slug: String!) {\n  topic(where: {slug: $slug}) {\n    posts(\n      where: {state: {equals: "published"}}\n      orderBy: [{isFeatured: desc}, {publishedDate: desc}, {id: desc}]\n    ) {\n      ...TopicPost\n      tags {\n        id\n      }\n    }\n  }\n}\n\nquery GetTopicList($skip: Int, $take: Int) {\n  topics(\n    where: {state: {equals: "published"}}\n    orderBy: [{sortOrder: asc}, {createdAt: desc}]\n    skip: $skip\n    take: $take\n  ) {\n    id\n    name\n    slug\n    apiDataBrief\n    heroImage {\n      ...ImageData\n    }\n  }\n}']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'query GetLatestShorts($amount: Int!, $start: Int!) {\n  news: videos(\n    skip: $start\n    take: $amount\n    orderBy: [{publishedDate: desc}]\n    where: {state: {equals: "published"}, isShorts: {equals: true}, videoSection: {equals: "news"}}\n  ) {\n    ...LatestShorts\n  }\n  creativity: videos(\n    skip: $start\n    take: $amount\n    orderBy: [{publishedDate: desc}]\n    where: {state: {equals: "published"}, isShorts: {equals: true}, videoSection: {equals: "creativity"}}\n  ) {\n    ...LatestShorts\n  }\n}\n\nquery GetShortsData($id: ID!) {\n  video(where: {id: $id}) {\n    ...ShortsData\n  }\n}\n\nquery GetShortsByTagAndVideoSection($tagId: ID!, $section: String!, $skip: Int = 0, $take: Int = 0) {\n  videos(\n    orderBy: [{publishedDate: desc}]\n    where: {state: {equals: "published"}, videoSection: {equals: $section}, tags: {some: {id: {equals: $tagId}}}}\n    take: $take\n    skip: $skip\n  ) {\n    ...LatestShorts\n  }\n}\n\nquery GetShortsByVideoSection($section: String!, $skip: Int = 0, $take: Int = 0) {\n  videos(\n    orderBy: [{publishedDate: desc}]\n    where: {state: {equals: "published"}, videoSection: {equals: $section}}\n    take: $take\n    skip: $skip\n  ) {\n    ...LatestShorts\n  }\n}'
): (typeof documents)['query GetLatestShorts($amount: Int!, $start: Int!) {\n  news: videos(\n    skip: $start\n    take: $amount\n    orderBy: [{publishedDate: desc}]\n    where: {state: {equals: "published"}, isShorts: {equals: true}, videoSection: {equals: "news"}}\n  ) {\n    ...LatestShorts\n  }\n  creativity: videos(\n    skip: $start\n    take: $amount\n    orderBy: [{publishedDate: desc}]\n    where: {state: {equals: "published"}, isShorts: {equals: true}, videoSection: {equals: "creativity"}}\n  ) {\n    ...LatestShorts\n  }\n}\n\nquery GetShortsData($id: ID!) {\n  video(where: {id: $id}) {\n    ...ShortsData\n  }\n}\n\nquery GetShortsByTagAndVideoSection($tagId: ID!, $section: String!, $skip: Int = 0, $take: Int = 0) {\n  videos(\n    orderBy: [{publishedDate: desc}]\n    where: {state: {equals: "published"}, videoSection: {equals: $section}, tags: {some: {id: {equals: $tagId}}}}\n    take: $take\n    skip: $skip\n  ) {\n    ...LatestShorts\n  }\n}\n\nquery GetShortsByVideoSection($section: String!, $skip: Int = 0, $take: Int = 0) {\n  videos(\n    orderBy: [{publishedDate: desc}]\n    where: {state: {equals: "published"}, videoSection: {equals: $section}}\n    take: $take\n    skip: $skip\n  ) {\n    ...LatestShorts\n  }\n}']

export function gql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
