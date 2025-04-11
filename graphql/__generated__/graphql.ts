/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  DateTime: { input: any; output: any }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any }
}

export type AudioFile = {
  __typename?: 'AudioFile'
  apiData?: Maybe<Scalars['JSON']['output']>
  audioSrc?: Maybe<Scalars['String']['output']>
  content?: Maybe<Scalars['JSON']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  createdBy?: Maybe<User>
  file?: Maybe<FileFieldOutput>
  heroImage?: Maybe<Photo>
  id: Scalars['ID']['output']
  name?: Maybe<Scalars['String']['output']>
  tags?: Maybe<Array<Tag>>
  tagsCount?: Maybe<Scalars['Int']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  updatedBy?: Maybe<User>
  urlOriginal?: Maybe<Scalars['String']['output']>
}

export type AudioFileTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>
  orderBy?: Array<TagOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: TagWhereInput
}

export type AudioFileTagsCountArgs = {
  where?: TagWhereInput
}

export type AudioFileCreateInput = {
  apiData?: InputMaybe<Scalars['JSON']['input']>
  content?: InputMaybe<Scalars['JSON']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>
  file?: InputMaybe<FileFieldInput>
  heroImage?: InputMaybe<PhotoRelateToOneForCreateInput>
  name?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<TagRelateToManyForCreateInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForCreateInput>
  urlOriginal?: InputMaybe<Scalars['String']['input']>
}

export type AudioFileOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>
  id?: InputMaybe<OrderDirection>
  name?: InputMaybe<OrderDirection>
  updatedAt?: InputMaybe<OrderDirection>
  urlOriginal?: InputMaybe<OrderDirection>
}

export type AudioFileUpdateArgs = {
  data: AudioFileUpdateInput
  where: AudioFileWhereUniqueInput
}

export type AudioFileUpdateInput = {
  apiData?: InputMaybe<Scalars['JSON']['input']>
  content?: InputMaybe<Scalars['JSON']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>
  file?: InputMaybe<FileFieldInput>
  heroImage?: InputMaybe<PhotoRelateToOneForUpdateInput>
  name?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<TagRelateToManyForUpdateInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForUpdateInput>
  urlOriginal?: InputMaybe<Scalars['String']['input']>
}

export type AudioFileWhereInput = {
  AND?: InputMaybe<Array<AudioFileWhereInput>>
  NOT?: InputMaybe<Array<AudioFileWhereInput>>
  OR?: InputMaybe<Array<AudioFileWhereInput>>
  createdAt?: InputMaybe<DateTimeNullableFilter>
  createdBy?: InputMaybe<UserWhereInput>
  heroImage?: InputMaybe<PhotoWhereInput>
  id?: InputMaybe<IdFilter>
  name?: InputMaybe<StringFilter>
  tags?: InputMaybe<TagManyRelationFilter>
  updatedAt?: InputMaybe<DateTimeNullableFilter>
  updatedBy?: InputMaybe<UserWhereInput>
  urlOriginal?: InputMaybe<StringFilter>
}

export type AudioFileWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type AuthenticatedItem = User

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>
  not?: InputMaybe<BooleanFilter>
}

export type Category = {
  __typename?: 'Category'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  createdBy?: Maybe<User>
  heroImage?: Maybe<Photo>
  id: Scalars['ID']['output']
  name?: Maybe<Scalars['String']['output']>
  order?: Maybe<Scalars['Int']['output']>
  posts?: Maybe<Array<Post>>
  postsCount?: Maybe<Scalars['Int']['output']>
  sections?: Maybe<Array<Section>>
  sectionsCount?: Maybe<Scalars['Int']['output']>
  slug?: Maybe<Scalars['String']['output']>
  state?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  updatedBy?: Maybe<User>
}

export type CategoryPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>
  orderBy?: Array<PostOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: PostWhereInput
}

export type CategoryPostsCountArgs = {
  where?: PostWhereInput
}

export type CategorySectionsArgs = {
  cursor?: InputMaybe<SectionWhereUniqueInput>
  orderBy?: Array<SectionOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: SectionWhereInput
}

export type CategorySectionsCountArgs = {
  where?: SectionWhereInput
}

export type CategoryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>
  heroImage?: InputMaybe<PhotoRelateToOneForCreateInput>
  name?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Scalars['Int']['input']>
  posts?: InputMaybe<PostRelateToManyForCreateInput>
  sections?: InputMaybe<SectionRelateToManyForCreateInput>
  slug?: InputMaybe<Scalars['String']['input']>
  state?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForCreateInput>
}

export type CategoryManyRelationFilter = {
  every?: InputMaybe<CategoryWhereInput>
  none?: InputMaybe<CategoryWhereInput>
  some?: InputMaybe<CategoryWhereInput>
}

export type CategoryOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>
  id?: InputMaybe<OrderDirection>
  name?: InputMaybe<OrderDirection>
  order?: InputMaybe<OrderDirection>
  slug?: InputMaybe<OrderDirection>
  state?: InputMaybe<OrderDirection>
  updatedAt?: InputMaybe<OrderDirection>
}

export type CategoryRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>
  create?: InputMaybe<Array<CategoryCreateInput>>
}

export type CategoryRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>
  create?: InputMaybe<Array<CategoryCreateInput>>
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>
  set?: InputMaybe<Array<CategoryWhereUniqueInput>>
}

export type CategoryRelateToOneForCreateInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>
  create?: InputMaybe<CategoryCreateInput>
}

export type CategoryRelateToOneForUpdateInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>
  create?: InputMaybe<CategoryCreateInput>
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
}

export type CategoryUpdateArgs = {
  data: CategoryUpdateInput
  where: CategoryWhereUniqueInput
}

export type CategoryUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>
  heroImage?: InputMaybe<PhotoRelateToOneForUpdateInput>
  name?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Scalars['Int']['input']>
  posts?: InputMaybe<PostRelateToManyForUpdateInput>
  sections?: InputMaybe<SectionRelateToManyForUpdateInput>
  slug?: InputMaybe<Scalars['String']['input']>
  state?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForUpdateInput>
}

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>
  NOT?: InputMaybe<Array<CategoryWhereInput>>
  OR?: InputMaybe<Array<CategoryWhereInput>>
  createdAt?: InputMaybe<DateTimeNullableFilter>
  createdBy?: InputMaybe<UserWhereInput>
  heroImage?: InputMaybe<PhotoWhereInput>
  id?: InputMaybe<IdFilter>
  name?: InputMaybe<StringFilter>
  order?: InputMaybe<IntNullableFilter>
  posts?: InputMaybe<PostManyRelationFilter>
  sections?: InputMaybe<SectionManyRelationFilter>
  slug?: InputMaybe<StringFilter>
  state?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeNullableFilter>
  updatedBy?: InputMaybe<UserWhereInput>
}

export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type Contact = {
  __typename?: 'Contact'
  content?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  createdBy?: Maybe<User>
  id: Scalars['ID']['output']
  name?: Maybe<Scalars['String']['output']>
  sections?: Maybe<Array<Section>>
  sectionsCount?: Maybe<Scalars['Int']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  updatedBy?: Maybe<User>
}

export type ContactSectionsArgs = {
  cursor?: InputMaybe<SectionWhereUniqueInput>
  orderBy?: Array<SectionOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: SectionWhereInput
}

export type ContactSectionsCountArgs = {
  where?: SectionWhereInput
}

export type ContactCreateInput = {
  content?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>
  name?: InputMaybe<Scalars['String']['input']>
  sections?: InputMaybe<SectionRelateToManyForCreateInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForCreateInput>
}

export type ContactManyRelationFilter = {
  every?: InputMaybe<ContactWhereInput>
  none?: InputMaybe<ContactWhereInput>
  some?: InputMaybe<ContactWhereInput>
}

export type ContactOrderByInput = {
  content?: InputMaybe<OrderDirection>
  createdAt?: InputMaybe<OrderDirection>
  id?: InputMaybe<OrderDirection>
  name?: InputMaybe<OrderDirection>
  updatedAt?: InputMaybe<OrderDirection>
}

export type ContactRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ContactWhereUniqueInput>>
  create?: InputMaybe<Array<ContactCreateInput>>
}

export type ContactRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ContactWhereUniqueInput>>
  create?: InputMaybe<Array<ContactCreateInput>>
  disconnect?: InputMaybe<Array<ContactWhereUniqueInput>>
  set?: InputMaybe<Array<ContactWhereUniqueInput>>
}

export type ContactRelateToOneForCreateInput = {
  connect?: InputMaybe<ContactWhereUniqueInput>
  create?: InputMaybe<ContactCreateInput>
}

export type ContactRelateToOneForUpdateInput = {
  connect?: InputMaybe<ContactWhereUniqueInput>
  create?: InputMaybe<ContactCreateInput>
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
}

export type ContactUpdateArgs = {
  data: ContactUpdateInput
  where: ContactWhereUniqueInput
}

export type ContactUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>
  name?: InputMaybe<Scalars['String']['input']>
  sections?: InputMaybe<SectionRelateToManyForUpdateInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForUpdateInput>
}

export type ContactWhereInput = {
  AND?: InputMaybe<Array<ContactWhereInput>>
  NOT?: InputMaybe<Array<ContactWhereInput>>
  OR?: InputMaybe<Array<ContactWhereInput>>
  content?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeNullableFilter>
  createdBy?: InputMaybe<UserWhereInput>
  id?: InputMaybe<IdFilter>
  name?: InputMaybe<StringFilter>
  sections?: InputMaybe<SectionManyRelationFilter>
  updatedAt?: InputMaybe<DateTimeNullableFilter>
  updatedBy?: InputMaybe<UserWhereInput>
}

export type ContactWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  password?: InputMaybe<Scalars['String']['input']>
  role?: InputMaybe<Scalars['String']['input']>
}

export type CustomNestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  not?: InputMaybe<CustomNestedStringFilter>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type CustomStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<CustomNestedStringFilter>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  gt?: InputMaybe<Scalars['DateTime']['input']>
  gte?: InputMaybe<Scalars['DateTime']['input']>
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>
  lt?: InputMaybe<Scalars['DateTime']['input']>
  lte?: InputMaybe<Scalars['DateTime']['input']>
  not?: InputMaybe<DateTimeFilter>
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>
}

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  gt?: InputMaybe<Scalars['DateTime']['input']>
  gte?: InputMaybe<Scalars['DateTime']['input']>
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>
  lt?: InputMaybe<Scalars['DateTime']['input']>
  lte?: InputMaybe<Scalars['DateTime']['input']>
  not?: InputMaybe<DateTimeNullableFilter>
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>
}

export type EditorChoice = {
  __typename?: 'EditorChoice'
  choices?: Maybe<Post>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  createdBy?: Maybe<User>
  heroImage?: Maybe<Photo>
  id: Scalars['ID']['output']
  order?: Maybe<Scalars['Int']['output']>
  outlink?: Maybe<Scalars['String']['output']>
  state?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  updatedBy?: Maybe<User>
}

export type EditorChoiceCreateInput = {
  choices?: InputMaybe<PostRelateToOneForCreateInput>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>
  heroImage?: InputMaybe<PhotoRelateToOneForCreateInput>
  order?: InputMaybe<Scalars['Int']['input']>
  outlink?: InputMaybe<Scalars['String']['input']>
  state?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForCreateInput>
}

export type EditorChoiceOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>
  id?: InputMaybe<OrderDirection>
  order?: InputMaybe<OrderDirection>
  outlink?: InputMaybe<OrderDirection>
  state?: InputMaybe<OrderDirection>
  updatedAt?: InputMaybe<OrderDirection>
}

export type EditorChoiceUpdateArgs = {
  data: EditorChoiceUpdateInput
  where: EditorChoiceWhereUniqueInput
}

export type EditorChoiceUpdateInput = {
  choices?: InputMaybe<PostRelateToOneForUpdateInput>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>
  heroImage?: InputMaybe<PhotoRelateToOneForUpdateInput>
  order?: InputMaybe<Scalars['Int']['input']>
  outlink?: InputMaybe<Scalars['String']['input']>
  state?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForUpdateInput>
}

export type EditorChoiceWhereInput = {
  AND?: InputMaybe<Array<EditorChoiceWhereInput>>
  NOT?: InputMaybe<Array<EditorChoiceWhereInput>>
  OR?: InputMaybe<Array<EditorChoiceWhereInput>>
  choices?: InputMaybe<PostWhereInput>
  createdAt?: InputMaybe<DateTimeNullableFilter>
  createdBy?: InputMaybe<UserWhereInput>
  heroImage?: InputMaybe<PhotoWhereInput>
  id?: InputMaybe<IdFilter>
  order?: InputMaybe<IntNullableFilter>
  outlink?: InputMaybe<StringFilter>
  state?: InputMaybe<StringNullableFilter>
  updatedAt?: InputMaybe<DateTimeNullableFilter>
  updatedBy?: InputMaybe<UserWhereInput>
}

export type EditorChoiceWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  order?: InputMaybe<Scalars['Int']['input']>
}

export type Event = {
  __typename?: 'Event'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  createdBy?: Maybe<User>
  endDate?: Maybe<Scalars['DateTime']['output']>
  eventType?: Maybe<Scalars['String']['output']>
  heroImage?: Maybe<Photo>
  id: Scalars['ID']['output']
  isFeatured?: Maybe<Scalars['Boolean']['output']>
  link?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  publishedDate?: Maybe<Scalars['DateTime']['output']>
  sections?: Maybe<Array<Section>>
  sectionsCount?: Maybe<Scalars['Int']['output']>
  slug?: Maybe<Scalars['String']['output']>
  startDate?: Maybe<Scalars['DateTime']['output']>
  state?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  updatedBy?: Maybe<User>
}

export type EventSectionsArgs = {
  cursor?: InputMaybe<SectionWhereUniqueInput>
  orderBy?: Array<SectionOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: SectionWhereInput
}

export type EventSectionsCountArgs = {
  where?: SectionWhereInput
}

export type EventCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>
  endDate?: InputMaybe<Scalars['DateTime']['input']>
  eventType?: InputMaybe<Scalars['String']['input']>
  heroImage?: InputMaybe<PhotoRelateToOneForCreateInput>
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>
  link?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  publishedDate?: InputMaybe<Scalars['DateTime']['input']>
  sections?: InputMaybe<SectionRelateToManyForCreateInput>
  slug?: InputMaybe<Scalars['String']['input']>
  startDate?: InputMaybe<Scalars['DateTime']['input']>
  state?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForCreateInput>
}

export type EventOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>
  endDate?: InputMaybe<OrderDirection>
  eventType?: InputMaybe<OrderDirection>
  id?: InputMaybe<OrderDirection>
  isFeatured?: InputMaybe<OrderDirection>
  link?: InputMaybe<OrderDirection>
  name?: InputMaybe<OrderDirection>
  publishedDate?: InputMaybe<OrderDirection>
  slug?: InputMaybe<OrderDirection>
  startDate?: InputMaybe<OrderDirection>
  state?: InputMaybe<OrderDirection>
  updatedAt?: InputMaybe<OrderDirection>
}

export type EventUpdateArgs = {
  data: EventUpdateInput
  where: EventWhereUniqueInput
}

export type EventUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>
  endDate?: InputMaybe<Scalars['DateTime']['input']>
  eventType?: InputMaybe<Scalars['String']['input']>
  heroImage?: InputMaybe<PhotoRelateToOneForUpdateInput>
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>
  link?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  publishedDate?: InputMaybe<Scalars['DateTime']['input']>
  sections?: InputMaybe<SectionRelateToManyForUpdateInput>
  slug?: InputMaybe<Scalars['String']['input']>
  startDate?: InputMaybe<Scalars['DateTime']['input']>
  state?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForUpdateInput>
}

export type EventWhereInput = {
  AND?: InputMaybe<Array<EventWhereInput>>
  NOT?: InputMaybe<Array<EventWhereInput>>
  OR?: InputMaybe<Array<EventWhereInput>>
  createdAt?: InputMaybe<DateTimeNullableFilter>
  createdBy?: InputMaybe<UserWhereInput>
  endDate?: InputMaybe<DateTimeNullableFilter>
  eventType?: InputMaybe<StringNullableFilter>
  heroImage?: InputMaybe<PhotoWhereInput>
  id?: InputMaybe<IdFilter>
  isFeatured?: InputMaybe<BooleanFilter>
  link?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  publishedDate?: InputMaybe<DateTimeNullableFilter>
  sections?: InputMaybe<SectionManyRelationFilter>
  slug?: InputMaybe<StringFilter>
  startDate?: InputMaybe<DateTimeFilter>
  state?: InputMaybe<StringNullableFilter>
  updatedAt?: InputMaybe<DateTimeNullableFilter>
  updatedBy?: InputMaybe<UserWhereInput>
}

export type EventWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type External = {
  __typename?: 'External'
  brief?: Maybe<Scalars['String']['output']>
  content?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  createdBy?: Maybe<User>
  extend_byline?: Maybe<Scalars['String']['output']>
  groups?: Maybe<Array<Group>>
  groupsCount?: Maybe<Scalars['Int']['output']>
  id: Scalars['ID']['output']
  partner?: Maybe<Partner>
  publishedDate?: Maybe<Scalars['DateTime']['output']>
  publishedDateString?: Maybe<Scalars['String']['output']>
  relateds?: Maybe<Array<Post>>
  relatedsCount?: Maybe<Scalars['Int']['output']>
  slug?: Maybe<Scalars['String']['output']>
  source?: Maybe<Scalars['String']['output']>
  state?: Maybe<Scalars['String']['output']>
  tags?: Maybe<Array<Tag>>
  tagsCount?: Maybe<Scalars['Int']['output']>
  thumb?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  updatedBy?: Maybe<User>
}

export type ExternalGroupsArgs = {
  cursor?: InputMaybe<GroupWhereUniqueInput>
  orderBy?: Array<GroupOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: GroupWhereInput
}

export type ExternalGroupsCountArgs = {
  where?: GroupWhereInput
}

export type ExternalRelatedsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>
  orderBy?: Array<PostOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: PostWhereInput
}

export type ExternalRelatedsCountArgs = {
  where?: PostWhereInput
}

export type ExternalTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>
  orderBy?: Array<TagOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: TagWhereInput
}

export type ExternalTagsCountArgs = {
  where?: TagWhereInput
}

export type ExternalCreateInput = {
  brief?: InputMaybe<Scalars['String']['input']>
  content?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>
  extend_byline?: InputMaybe<Scalars['String']['input']>
  groups?: InputMaybe<GroupRelateToManyForCreateInput>
  partner?: InputMaybe<PartnerRelateToOneForCreateInput>
  publishedDate?: InputMaybe<Scalars['DateTime']['input']>
  publishedDateString?: InputMaybe<Scalars['String']['input']>
  relateds?: InputMaybe<PostRelateToManyForCreateInput>
  slug?: InputMaybe<Scalars['String']['input']>
  source?: InputMaybe<Scalars['String']['input']>
  state?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<TagRelateToManyForCreateInput>
  thumb?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForCreateInput>
}

export type ExternalManyRelationFilter = {
  every?: InputMaybe<ExternalWhereInput>
  none?: InputMaybe<ExternalWhereInput>
  some?: InputMaybe<ExternalWhereInput>
}

export type ExternalOrderByInput = {
  brief?: InputMaybe<OrderDirection>
  content?: InputMaybe<OrderDirection>
  createdAt?: InputMaybe<OrderDirection>
  extend_byline?: InputMaybe<OrderDirection>
  id?: InputMaybe<OrderDirection>
  publishedDate?: InputMaybe<OrderDirection>
  publishedDateString?: InputMaybe<OrderDirection>
  source?: InputMaybe<OrderDirection>
  state?: InputMaybe<OrderDirection>
  thumb?: InputMaybe<OrderDirection>
  title?: InputMaybe<OrderDirection>
  updatedAt?: InputMaybe<OrderDirection>
}

export type ExternalRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ExternalWhereUniqueInput>>
  create?: InputMaybe<Array<ExternalCreateInput>>
}

export type ExternalRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ExternalWhereUniqueInput>>
  create?: InputMaybe<Array<ExternalCreateInput>>
  disconnect?: InputMaybe<Array<ExternalWhereUniqueInput>>
  set?: InputMaybe<Array<ExternalWhereUniqueInput>>
}

export type ExternalUpdateArgs = {
  data: ExternalUpdateInput
  where: ExternalWhereUniqueInput
}

export type ExternalUpdateInput = {
  brief?: InputMaybe<Scalars['String']['input']>
  content?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>
  extend_byline?: InputMaybe<Scalars['String']['input']>
  groups?: InputMaybe<GroupRelateToManyForUpdateInput>
  partner?: InputMaybe<PartnerRelateToOneForUpdateInput>
  publishedDate?: InputMaybe<Scalars['DateTime']['input']>
  publishedDateString?: InputMaybe<Scalars['String']['input']>
  relateds?: InputMaybe<PostRelateToManyForUpdateInput>
  slug?: InputMaybe<Scalars['String']['input']>
  source?: InputMaybe<Scalars['String']['input']>
  state?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<TagRelateToManyForUpdateInput>
  thumb?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForUpdateInput>
}

export type ExternalWhereInput = {
  AND?: InputMaybe<Array<ExternalWhereInput>>
  NOT?: InputMaybe<Array<ExternalWhereInput>>
  OR?: InputMaybe<Array<ExternalWhereInput>>
  brief?: InputMaybe<StringFilter>
  content?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeNullableFilter>
  createdBy?: InputMaybe<UserWhereInput>
  extend_byline?: InputMaybe<StringFilter>
  groups?: InputMaybe<GroupManyRelationFilter>
  id?: InputMaybe<IdFilter>
  partner?: InputMaybe<PartnerWhereInput>
  publishedDate?: InputMaybe<DateTimeNullableFilter>
  publishedDateString?: InputMaybe<StringFilter>
  relateds?: InputMaybe<PostManyRelationFilter>
  source?: InputMaybe<StringFilter>
  state?: InputMaybe<StringNullableFilter>
  tags?: InputMaybe<TagManyRelationFilter>
  thumb?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeNullableFilter>
  updatedBy?: InputMaybe<UserWhereInput>
}

export type ExternalWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type FileFieldInput = {
  upload: Scalars['Upload']['input']
}

export type FileFieldOutput = {
  __typename?: 'FileFieldOutput'
  filename: Scalars['String']['output']
  filesize: Scalars['Int']['output']
  url: Scalars['String']['output']
}

export type Game = {
  __typename?: 'Game'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  createdBy?: Maybe<User>
  descriptions?: Maybe<Scalars['String']['output']>
  heroImage?: Maybe<Photo>
  id: Scalars['ID']['output']
  isFeatured?: Maybe<Scalars['Boolean']['output']>
  link?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  publishedDate?: Maybe<Scalars['DateTime']['output']>
  sortOrder?: Maybe<Scalars['Int']['output']>
  state?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  updatedBy?: Maybe<User>
}

export type GameCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>
  descriptions?: InputMaybe<Scalars['String']['input']>
  heroImage?: InputMaybe<PhotoRelateToOneForCreateInput>
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>
  link?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  publishedDate?: InputMaybe<Scalars['DateTime']['input']>
  sortOrder?: InputMaybe<Scalars['Int']['input']>
  state?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForCreateInput>
}

export type GameOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>
  descriptions?: InputMaybe<OrderDirection>
  id?: InputMaybe<OrderDirection>
  isFeatured?: InputMaybe<OrderDirection>
  link?: InputMaybe<OrderDirection>
  name?: InputMaybe<OrderDirection>
  publishedDate?: InputMaybe<OrderDirection>
  sortOrder?: InputMaybe<OrderDirection>
  state?: InputMaybe<OrderDirection>
  updatedAt?: InputMaybe<OrderDirection>
}

export type GameUpdateArgs = {
  data: GameUpdateInput
  where: GameWhereUniqueInput
}

export type GameUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>
  descriptions?: InputMaybe<Scalars['String']['input']>
  heroImage?: InputMaybe<PhotoRelateToOneForUpdateInput>
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>
  link?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  publishedDate?: InputMaybe<Scalars['DateTime']['input']>
  sortOrder?: InputMaybe<Scalars['Int']['input']>
  state?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForUpdateInput>
}

export type GameWhereInput = {
  AND?: InputMaybe<Array<GameWhereInput>>
  NOT?: InputMaybe<Array<GameWhereInput>>
  OR?: InputMaybe<Array<GameWhereInput>>
  createdAt?: InputMaybe<DateTimeNullableFilter>
  createdBy?: InputMaybe<UserWhereInput>
  heroImage?: InputMaybe<PhotoWhereInput>
  id?: InputMaybe<IdFilter>
  isFeatured?: InputMaybe<BooleanFilter>
  link?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  publishedDate?: InputMaybe<DateTimeNullableFilter>
  sortOrder?: InputMaybe<IntNullableFilter>
  state?: InputMaybe<StringNullableFilter>
  updatedAt?: InputMaybe<DateTimeNullableFilter>
  updatedBy?: InputMaybe<UserWhereInput>
}

export type GameWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Group = {
  __typename?: 'Group'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  createdBy?: Maybe<User>
  externals?: Maybe<Array<External>>
  externalsCount?: Maybe<Scalars['Int']['output']>
  id: Scalars['ID']['output']
  keyword?: Maybe<Scalars['String']['output']>
  posts?: Maybe<Array<Post>>
  postsCount?: Maybe<Scalars['Int']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  updatedBy?: Maybe<User>
}

export type GroupExternalsArgs = {
  cursor?: InputMaybe<ExternalWhereUniqueInput>
  orderBy?: Array<ExternalOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: ExternalWhereInput
}

export type GroupExternalsCountArgs = {
  where?: ExternalWhereInput
}

export type GroupPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>
  orderBy?: Array<PostOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: PostWhereInput
}

export type GroupPostsCountArgs = {
  where?: PostWhereInput
}

export type GroupCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>
  externals?: InputMaybe<ExternalRelateToManyForCreateInput>
  keyword?: InputMaybe<Scalars['String']['input']>
  posts?: InputMaybe<PostRelateToManyForCreateInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForCreateInput>
}

export type GroupManyRelationFilter = {
  every?: InputMaybe<GroupWhereInput>
  none?: InputMaybe<GroupWhereInput>
  some?: InputMaybe<GroupWhereInput>
}

export type GroupOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>
  id?: InputMaybe<OrderDirection>
  keyword?: InputMaybe<OrderDirection>
  updatedAt?: InputMaybe<OrderDirection>
}

export type GroupRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<GroupWhereUniqueInput>>
  create?: InputMaybe<Array<GroupCreateInput>>
}

export type GroupRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<GroupWhereUniqueInput>>
  create?: InputMaybe<Array<GroupCreateInput>>
  disconnect?: InputMaybe<Array<GroupWhereUniqueInput>>
  set?: InputMaybe<Array<GroupWhereUniqueInput>>
}

export type GroupUpdateArgs = {
  data: GroupUpdateInput
  where: GroupWhereUniqueInput
}

export type GroupUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>
  externals?: InputMaybe<ExternalRelateToManyForUpdateInput>
  keyword?: InputMaybe<Scalars['String']['input']>
  posts?: InputMaybe<PostRelateToManyForUpdateInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForUpdateInput>
}

export type GroupWhereInput = {
  AND?: InputMaybe<Array<GroupWhereInput>>
  NOT?: InputMaybe<Array<GroupWhereInput>>
  OR?: InputMaybe<Array<GroupWhereInput>>
  createdAt?: InputMaybe<DateTimeNullableFilter>
  createdBy?: InputMaybe<UserWhereInput>
  externals?: InputMaybe<ExternalManyRelationFilter>
  id?: InputMaybe<IdFilter>
  keyword?: InputMaybe<StringFilter>
  posts?: InputMaybe<PostManyRelationFilter>
  updatedAt?: InputMaybe<DateTimeNullableFilter>
  updatedBy?: InputMaybe<UserWhereInput>
}

export type GroupWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Header = {
  __typename?: 'Header'
  category?: Maybe<Category>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  createdBy?: Maybe<User>
  id: Scalars['ID']['output']
  order?: Maybe<Scalars['Int']['output']>
  section?: Maybe<Section>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  updatedBy?: Maybe<User>
}

export type HeaderCreateInput = {
  category?: InputMaybe<CategoryRelateToOneForCreateInput>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>
  order?: InputMaybe<Scalars['Int']['input']>
  section?: InputMaybe<SectionRelateToOneForCreateInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForCreateInput>
}

export type HeaderOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>
  id?: InputMaybe<OrderDirection>
  order?: InputMaybe<OrderDirection>
  updatedAt?: InputMaybe<OrderDirection>
}

export type HeaderUpdateArgs = {
  data: HeaderUpdateInput
  where: HeaderWhereUniqueInput
}

export type HeaderUpdateInput = {
  category?: InputMaybe<CategoryRelateToOneForUpdateInput>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>
  order?: InputMaybe<Scalars['Int']['input']>
  section?: InputMaybe<SectionRelateToOneForUpdateInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForUpdateInput>
}

export type HeaderWhereInput = {
  AND?: InputMaybe<Array<HeaderWhereInput>>
  NOT?: InputMaybe<Array<HeaderWhereInput>>
  OR?: InputMaybe<Array<HeaderWhereInput>>
  category?: InputMaybe<CategoryWhereInput>
  createdAt?: InputMaybe<DateTimeNullableFilter>
  createdBy?: InputMaybe<UserWhereInput>
  id?: InputMaybe<IdFilter>
  order?: InputMaybe<IntNullableFilter>
  section?: InputMaybe<SectionWhereInput>
  updatedAt?: InputMaybe<DateTimeNullableFilter>
  updatedBy?: InputMaybe<UserWhereInput>
}

export type HeaderWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  order?: InputMaybe<Scalars['Int']['input']>
}

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']['input']>
  gt?: InputMaybe<Scalars['ID']['input']>
  gte?: InputMaybe<Scalars['ID']['input']>
  in?: InputMaybe<Array<Scalars['ID']['input']>>
  lt?: InputMaybe<Scalars['ID']['input']>
  lte?: InputMaybe<Scalars['ID']['input']>
  not?: InputMaybe<IdFilter>
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>
}

export enum ImageExtension {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
  Webp = 'webp',
}

export type ImageFieldInput = {
  upload: Scalars['Upload']['input']
}

export type ImageFieldOutput = {
  __typename?: 'ImageFieldOutput'
  extension: ImageExtension
  filesize: Scalars['Int']['output']
  height: Scalars['Int']['output']
  id: Scalars['ID']['output']
  url: Scalars['String']['output']
  width: Scalars['Int']['output']
}

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  in?: InputMaybe<Array<Scalars['Int']['input']>>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  not?: InputMaybe<IntNullableFilter>
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>
}

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta'
  list?: Maybe<KeystoneAdminUiListMeta>
  lists: Array<KeystoneAdminUiListMeta>
}

export type KeystoneAdminMetaListArgs = {
  key: Scalars['String']['input']
}

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta'
  description?: Maybe<Scalars['String']['output']>
  fields: Array<KeystoneAdminUiFieldMeta>
  label: Scalars['String']['output']
}

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta'
  createView: KeystoneAdminUiFieldMetaCreateView
  customViewsIndex?: Maybe<Scalars['Int']['output']>
  description?: Maybe<Scalars['String']['output']>
  fieldMeta?: Maybe<Scalars['JSON']['output']>
  isFilterable: Scalars['Boolean']['output']
  isNonNull?: Maybe<Array<KeystoneAdminUiFieldMetaIsNonNull>>
  isOrderable: Scalars['Boolean']['output']
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>
  label: Scalars['String']['output']
  listView: KeystoneAdminUiFieldMetaListView
  path: Scalars['String']['output']
  search?: Maybe<QueryMode>
  viewsIndex: Scalars['Int']['output']
}

export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView'
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode
}

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update',
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView'
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>
}

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read',
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar',
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView'
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode
}

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read',
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta'
  description?: Maybe<Scalars['String']['output']>
  fields: Array<KeystoneAdminUiFieldMeta>
  groups: Array<KeystoneAdminUiFieldGroupMeta>
  hideCreate: Scalars['Boolean']['output']
  hideDelete: Scalars['Boolean']['output']
  initialColumns: Array<Scalars['String']['output']>
  initialSort?: Maybe<KeystoneAdminUiSort>
  isHidden: Scalars['Boolean']['output']
  isSingleton: Scalars['Boolean']['output']
  itemQueryName: Scalars['String']['output']
  key: Scalars['String']['output']
  label: Scalars['String']['output']
  labelField: Scalars['String']['output']
  listQueryName: Scalars['String']['output']
  pageSize: Scalars['Int']['output']
  path: Scalars['String']['output']
  plural: Scalars['String']['output']
  singular: Scalars['String']['output']
}

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort'
  direction: KeystoneAdminUiSortDirection
  field: Scalars['String']['output']
}

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta'
  adminMeta: KeystoneAdminMeta
}

export type Mutation = {
  __typename?: 'Mutation'
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>
  createAudioFile?: Maybe<AudioFile>
  createAudioFiles?: Maybe<Array<Maybe<AudioFile>>>
  createCategories?: Maybe<Array<Maybe<Category>>>
  createCategory?: Maybe<Category>
  createContact?: Maybe<Contact>
  createContacts?: Maybe<Array<Maybe<Contact>>>
  createEditorChoice?: Maybe<EditorChoice>
  createEditorChoices?: Maybe<Array<Maybe<EditorChoice>>>
  createEvent?: Maybe<Event>
  createEvents?: Maybe<Array<Maybe<Event>>>
  createExternal?: Maybe<External>
  createExternals?: Maybe<Array<Maybe<External>>>
  createGame?: Maybe<Game>
  createGames?: Maybe<Array<Maybe<Game>>>
  createGroup?: Maybe<Group>
  createGroups?: Maybe<Array<Maybe<Group>>>
  createHeader?: Maybe<Header>
  createHeaders?: Maybe<Array<Maybe<Header>>>
  createInitialUser: UserAuthenticationWithPasswordSuccess
  createPartner?: Maybe<Partner>
  createPartners?: Maybe<Array<Maybe<Partner>>>
  createPhoto?: Maybe<Photo>
  createPhotos?: Maybe<Array<Maybe<Photo>>>
  createPopularTag?: Maybe<PopularTag>
  createPopularTags?: Maybe<Array<Maybe<PopularTag>>>
  createPost?: Maybe<Post>
  createPosts?: Maybe<Array<Maybe<Post>>>
  createSection?: Maybe<Section>
  createSections?: Maybe<Array<Maybe<Section>>>
  createTag?: Maybe<Tag>
  createTags?: Maybe<Array<Maybe<Tag>>>
  createTopic?: Maybe<Topic>
  createTopics?: Maybe<Array<Maybe<Topic>>>
  createUser?: Maybe<User>
  createUsers?: Maybe<Array<Maybe<User>>>
  createVideo?: Maybe<Video>
  createVideos?: Maybe<Array<Maybe<Video>>>
  createWarning?: Maybe<Warning>
  createWarnings?: Maybe<Array<Maybe<Warning>>>
  deleteAudioFile?: Maybe<AudioFile>
  deleteAudioFiles?: Maybe<Array<Maybe<AudioFile>>>
  deleteCategories?: Maybe<Array<Maybe<Category>>>
  deleteCategory?: Maybe<Category>
  deleteContact?: Maybe<Contact>
  deleteContacts?: Maybe<Array<Maybe<Contact>>>
  deleteEditorChoice?: Maybe<EditorChoice>
  deleteEditorChoices?: Maybe<Array<Maybe<EditorChoice>>>
  deleteEvent?: Maybe<Event>
  deleteEvents?: Maybe<Array<Maybe<Event>>>
  deleteExternal?: Maybe<External>
  deleteExternals?: Maybe<Array<Maybe<External>>>
  deleteGame?: Maybe<Game>
  deleteGames?: Maybe<Array<Maybe<Game>>>
  deleteGroup?: Maybe<Group>
  deleteGroups?: Maybe<Array<Maybe<Group>>>
  deleteHeader?: Maybe<Header>
  deleteHeaders?: Maybe<Array<Maybe<Header>>>
  deletePartner?: Maybe<Partner>
  deletePartners?: Maybe<Array<Maybe<Partner>>>
  deletePhoto?: Maybe<Photo>
  deletePhotos?: Maybe<Array<Maybe<Photo>>>
  deletePopularTag?: Maybe<PopularTag>
  deletePopularTags?: Maybe<Array<Maybe<PopularTag>>>
  deletePost?: Maybe<Post>
  deletePosts?: Maybe<Array<Maybe<Post>>>
  deleteSection?: Maybe<Section>
  deleteSections?: Maybe<Array<Maybe<Section>>>
  deleteTag?: Maybe<Tag>
  deleteTags?: Maybe<Array<Maybe<Tag>>>
  deleteTopic?: Maybe<Topic>
  deleteTopics?: Maybe<Array<Maybe<Topic>>>
  deleteUser?: Maybe<User>
  deleteUsers?: Maybe<Array<Maybe<User>>>
  deleteVideo?: Maybe<Video>
  deleteVideos?: Maybe<Array<Maybe<Video>>>
  deleteWarning?: Maybe<Warning>
  deleteWarnings?: Maybe<Array<Maybe<Warning>>>
  endSession: Scalars['Boolean']['output']
  updateAudioFile?: Maybe<AudioFile>
  updateAudioFiles?: Maybe<Array<Maybe<AudioFile>>>
  updateCategories?: Maybe<Array<Maybe<Category>>>
  updateCategory?: Maybe<Category>
  updateContact?: Maybe<Contact>
  updateContacts?: Maybe<Array<Maybe<Contact>>>
  updateEditorChoice?: Maybe<EditorChoice>
  updateEditorChoices?: Maybe<Array<Maybe<EditorChoice>>>
  updateEvent?: Maybe<Event>
  updateEvents?: Maybe<Array<Maybe<Event>>>
  updateExternal?: Maybe<External>
  updateExternals?: Maybe<Array<Maybe<External>>>
  updateGame?: Maybe<Game>
  updateGames?: Maybe<Array<Maybe<Game>>>
  updateGroup?: Maybe<Group>
  updateGroups?: Maybe<Array<Maybe<Group>>>
  updateHeader?: Maybe<Header>
  updateHeaders?: Maybe<Array<Maybe<Header>>>
  updatePartner?: Maybe<Partner>
  updatePartners?: Maybe<Array<Maybe<Partner>>>
  updatePhoto?: Maybe<Photo>
  updatePhotos?: Maybe<Array<Maybe<Photo>>>
  updatePopularTag?: Maybe<PopularTag>
  updatePopularTags?: Maybe<Array<Maybe<PopularTag>>>
  updatePost?: Maybe<Post>
  updatePosts?: Maybe<Array<Maybe<Post>>>
  updateSection?: Maybe<Section>
  updateSections?: Maybe<Array<Maybe<Section>>>
  updateTag?: Maybe<Tag>
  updateTags?: Maybe<Array<Maybe<Tag>>>
  updateTopic?: Maybe<Topic>
  updateTopics?: Maybe<Array<Maybe<Topic>>>
  updateUser?: Maybe<User>
  updateUsers?: Maybe<Array<Maybe<User>>>
  updateVideo?: Maybe<Video>
  updateVideos?: Maybe<Array<Maybe<Video>>>
  updateWarning?: Maybe<Warning>
  updateWarnings?: Maybe<Array<Maybe<Warning>>>
}

export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type MutationCreateAudioFileArgs = {
  data: AudioFileCreateInput
}

export type MutationCreateAudioFilesArgs = {
  data: Array<AudioFileCreateInput>
}

export type MutationCreateCategoriesArgs = {
  data: Array<CategoryCreateInput>
}

export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput
}

export type MutationCreateContactArgs = {
  data: ContactCreateInput
}

export type MutationCreateContactsArgs = {
  data: Array<ContactCreateInput>
}

export type MutationCreateEditorChoiceArgs = {
  data: EditorChoiceCreateInput
}

export type MutationCreateEditorChoicesArgs = {
  data: Array<EditorChoiceCreateInput>
}

export type MutationCreateEventArgs = {
  data: EventCreateInput
}

export type MutationCreateEventsArgs = {
  data: Array<EventCreateInput>
}

export type MutationCreateExternalArgs = {
  data: ExternalCreateInput
}

export type MutationCreateExternalsArgs = {
  data: Array<ExternalCreateInput>
}

export type MutationCreateGameArgs = {
  data: GameCreateInput
}

export type MutationCreateGamesArgs = {
  data: Array<GameCreateInput>
}

export type MutationCreateGroupArgs = {
  data: GroupCreateInput
}

export type MutationCreateGroupsArgs = {
  data: Array<GroupCreateInput>
}

export type MutationCreateHeaderArgs = {
  data: HeaderCreateInput
}

export type MutationCreateHeadersArgs = {
  data: Array<HeaderCreateInput>
}

export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput
}

export type MutationCreatePartnerArgs = {
  data: PartnerCreateInput
}

export type MutationCreatePartnersArgs = {
  data: Array<PartnerCreateInput>
}

export type MutationCreatePhotoArgs = {
  data: PhotoCreateInput
}

export type MutationCreatePhotosArgs = {
  data: Array<PhotoCreateInput>
}

export type MutationCreatePopularTagArgs = {
  data: PopularTagCreateInput
}

export type MutationCreatePopularTagsArgs = {
  data: Array<PopularTagCreateInput>
}

export type MutationCreatePostArgs = {
  data: PostCreateInput
}

export type MutationCreatePostsArgs = {
  data: Array<PostCreateInput>
}

export type MutationCreateSectionArgs = {
  data: SectionCreateInput
}

export type MutationCreateSectionsArgs = {
  data: Array<SectionCreateInput>
}

export type MutationCreateTagArgs = {
  data: TagCreateInput
}

export type MutationCreateTagsArgs = {
  data: Array<TagCreateInput>
}

export type MutationCreateTopicArgs = {
  data: TopicCreateInput
}

export type MutationCreateTopicsArgs = {
  data: Array<TopicCreateInput>
}

export type MutationCreateUserArgs = {
  data: UserCreateInput
}

export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>
}

export type MutationCreateVideoArgs = {
  data: VideoCreateInput
}

export type MutationCreateVideosArgs = {
  data: Array<VideoCreateInput>
}

export type MutationCreateWarningArgs = {
  data: WarningCreateInput
}

export type MutationCreateWarningsArgs = {
  data: Array<WarningCreateInput>
}

export type MutationDeleteAudioFileArgs = {
  where: AudioFileWhereUniqueInput
}

export type MutationDeleteAudioFilesArgs = {
  where: Array<AudioFileWhereUniqueInput>
}

export type MutationDeleteCategoriesArgs = {
  where: Array<CategoryWhereUniqueInput>
}

export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput
}

export type MutationDeleteContactArgs = {
  where: ContactWhereUniqueInput
}

export type MutationDeleteContactsArgs = {
  where: Array<ContactWhereUniqueInput>
}

export type MutationDeleteEditorChoiceArgs = {
  where: EditorChoiceWhereUniqueInput
}

export type MutationDeleteEditorChoicesArgs = {
  where: Array<EditorChoiceWhereUniqueInput>
}

export type MutationDeleteEventArgs = {
  where: EventWhereUniqueInput
}

export type MutationDeleteEventsArgs = {
  where: Array<EventWhereUniqueInput>
}

export type MutationDeleteExternalArgs = {
  where: ExternalWhereUniqueInput
}

export type MutationDeleteExternalsArgs = {
  where: Array<ExternalWhereUniqueInput>
}

export type MutationDeleteGameArgs = {
  where: GameWhereUniqueInput
}

export type MutationDeleteGamesArgs = {
  where: Array<GameWhereUniqueInput>
}

export type MutationDeleteGroupArgs = {
  where: GroupWhereUniqueInput
}

export type MutationDeleteGroupsArgs = {
  where: Array<GroupWhereUniqueInput>
}

export type MutationDeleteHeaderArgs = {
  where: HeaderWhereUniqueInput
}

export type MutationDeleteHeadersArgs = {
  where: Array<HeaderWhereUniqueInput>
}

export type MutationDeletePartnerArgs = {
  where: PartnerWhereUniqueInput
}

export type MutationDeletePartnersArgs = {
  where: Array<PartnerWhereUniqueInput>
}

export type MutationDeletePhotoArgs = {
  where: PhotoWhereUniqueInput
}

export type MutationDeletePhotosArgs = {
  where: Array<PhotoWhereUniqueInput>
}

export type MutationDeletePopularTagArgs = {
  where: PopularTagWhereUniqueInput
}

export type MutationDeletePopularTagsArgs = {
  where: Array<PopularTagWhereUniqueInput>
}

export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput
}

export type MutationDeletePostsArgs = {
  where: Array<PostWhereUniqueInput>
}

export type MutationDeleteSectionArgs = {
  where: SectionWhereUniqueInput
}

export type MutationDeleteSectionsArgs = {
  where: Array<SectionWhereUniqueInput>
}

export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput
}

export type MutationDeleteTagsArgs = {
  where: Array<TagWhereUniqueInput>
}

export type MutationDeleteTopicArgs = {
  where: TopicWhereUniqueInput
}

export type MutationDeleteTopicsArgs = {
  where: Array<TopicWhereUniqueInput>
}

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput
}

export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>
}

export type MutationDeleteVideoArgs = {
  where: VideoWhereUniqueInput
}

export type MutationDeleteVideosArgs = {
  where: Array<VideoWhereUniqueInput>
}

export type MutationDeleteWarningArgs = {
  where: WarningWhereUniqueInput
}

export type MutationDeleteWarningsArgs = {
  where: Array<WarningWhereUniqueInput>
}

export type MutationUpdateAudioFileArgs = {
  data: AudioFileUpdateInput
  where: AudioFileWhereUniqueInput
}

export type MutationUpdateAudioFilesArgs = {
  data: Array<AudioFileUpdateArgs>
}

export type MutationUpdateCategoriesArgs = {
  data: Array<CategoryUpdateArgs>
}

export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput
  where: CategoryWhereUniqueInput
}

export type MutationUpdateContactArgs = {
  data: ContactUpdateInput
  where: ContactWhereUniqueInput
}

export type MutationUpdateContactsArgs = {
  data: Array<ContactUpdateArgs>
}

export type MutationUpdateEditorChoiceArgs = {
  data: EditorChoiceUpdateInput
  where: EditorChoiceWhereUniqueInput
}

export type MutationUpdateEditorChoicesArgs = {
  data: Array<EditorChoiceUpdateArgs>
}

export type MutationUpdateEventArgs = {
  data: EventUpdateInput
  where: EventWhereUniqueInput
}

export type MutationUpdateEventsArgs = {
  data: Array<EventUpdateArgs>
}

export type MutationUpdateExternalArgs = {
  data: ExternalUpdateInput
  where: ExternalWhereUniqueInput
}

export type MutationUpdateExternalsArgs = {
  data: Array<ExternalUpdateArgs>
}

export type MutationUpdateGameArgs = {
  data: GameUpdateInput
  where: GameWhereUniqueInput
}

export type MutationUpdateGamesArgs = {
  data: Array<GameUpdateArgs>
}

export type MutationUpdateGroupArgs = {
  data: GroupUpdateInput
  where: GroupWhereUniqueInput
}

export type MutationUpdateGroupsArgs = {
  data: Array<GroupUpdateArgs>
}

export type MutationUpdateHeaderArgs = {
  data: HeaderUpdateInput
  where: HeaderWhereUniqueInput
}

export type MutationUpdateHeadersArgs = {
  data: Array<HeaderUpdateArgs>
}

export type MutationUpdatePartnerArgs = {
  data: PartnerUpdateInput
  where: PartnerWhereUniqueInput
}

export type MutationUpdatePartnersArgs = {
  data: Array<PartnerUpdateArgs>
}

export type MutationUpdatePhotoArgs = {
  data: PhotoUpdateInput
  where: PhotoWhereUniqueInput
}

export type MutationUpdatePhotosArgs = {
  data: Array<PhotoUpdateArgs>
}

export type MutationUpdatePopularTagArgs = {
  data: PopularTagUpdateInput
  where: PopularTagWhereUniqueInput
}

export type MutationUpdatePopularTagsArgs = {
  data: Array<PopularTagUpdateArgs>
}

export type MutationUpdatePostArgs = {
  data: PostUpdateInput
  where: PostWhereUniqueInput
}

export type MutationUpdatePostsArgs = {
  data: Array<PostUpdateArgs>
}

export type MutationUpdateSectionArgs = {
  data: SectionUpdateInput
  where: SectionWhereUniqueInput
}

export type MutationUpdateSectionsArgs = {
  data: Array<SectionUpdateArgs>
}

export type MutationUpdateTagArgs = {
  data: TagUpdateInput
  where: TagWhereUniqueInput
}

export type MutationUpdateTagsArgs = {
  data: Array<TagUpdateArgs>
}

export type MutationUpdateTopicArgs = {
  data: TopicUpdateInput
  where: TopicWhereUniqueInput
}

export type MutationUpdateTopicsArgs = {
  data: Array<TopicUpdateArgs>
}

export type MutationUpdateUserArgs = {
  data: UserUpdateInput
  where: UserWhereUniqueInput
}

export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>
}

export type MutationUpdateVideoArgs = {
  data: VideoUpdateInput
  where: VideoWhereUniqueInput
}

export type MutationUpdateVideosArgs = {
  data: Array<VideoUpdateArgs>
}

export type MutationUpdateWarningArgs = {
  data: WarningUpdateInput
  where: WarningWhereUniqueInput
}

export type MutationUpdateWarningsArgs = {
  data: Array<WarningUpdateArgs>
}

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  not?: InputMaybe<NestedStringFilter>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  not?: InputMaybe<NestedStringNullableFilter>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type Partner = {
  __typename?: 'Partner'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  createdBy?: Maybe<User>
  id: Scalars['ID']['output']
  name?: Maybe<Scalars['String']['output']>
  public?: Maybe<Scalars['Boolean']['output']>
  showOnIndex?: Maybe<Scalars['Boolean']['output']>
  slug?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  updatedBy?: Maybe<User>
  website?: Maybe<Scalars['String']['output']>
}

export type PartnerCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>
  name?: InputMaybe<Scalars['String']['input']>
  public?: InputMaybe<Scalars['Boolean']['input']>
  showOnIndex?: InputMaybe<Scalars['Boolean']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForCreateInput>
  website?: InputMaybe<Scalars['String']['input']>
}

export type PartnerOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>
  id?: InputMaybe<OrderDirection>
  name?: InputMaybe<OrderDirection>
  public?: InputMaybe<OrderDirection>
  showOnIndex?: InputMaybe<OrderDirection>
  slug?: InputMaybe<OrderDirection>
  updatedAt?: InputMaybe<OrderDirection>
  website?: InputMaybe<OrderDirection>
}

export type PartnerRelateToOneForCreateInput = {
  connect?: InputMaybe<PartnerWhereUniqueInput>
  create?: InputMaybe<PartnerCreateInput>
}

export type PartnerRelateToOneForUpdateInput = {
  connect?: InputMaybe<PartnerWhereUniqueInput>
  create?: InputMaybe<PartnerCreateInput>
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
}

export type PartnerUpdateArgs = {
  data: PartnerUpdateInput
  where: PartnerWhereUniqueInput
}

export type PartnerUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>
  name?: InputMaybe<Scalars['String']['input']>
  public?: InputMaybe<Scalars['Boolean']['input']>
  showOnIndex?: InputMaybe<Scalars['Boolean']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForUpdateInput>
  website?: InputMaybe<Scalars['String']['input']>
}

export type PartnerWhereInput = {
  AND?: InputMaybe<Array<PartnerWhereInput>>
  NOT?: InputMaybe<Array<PartnerWhereInput>>
  OR?: InputMaybe<Array<PartnerWhereInput>>
  createdAt?: InputMaybe<DateTimeNullableFilter>
  createdBy?: InputMaybe<UserWhereInput>
  id?: InputMaybe<IdFilter>
  name?: InputMaybe<StringFilter>
  public?: InputMaybe<BooleanFilter>
  showOnIndex?: InputMaybe<BooleanFilter>
  slug?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeNullableFilter>
  updatedBy?: InputMaybe<UserWhereInput>
  website?: InputMaybe<StringFilter>
}

export type PartnerWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type PasswordState = {
  __typename?: 'PasswordState'
  isSet: Scalars['Boolean']['output']
}

export type Photo = {
  __typename?: 'Photo'
  copyRight?: Maybe<Scalars['Boolean']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  createdBy?: Maybe<User>
  defaultImage?: Maybe<Scalars['Boolean']['output']>
  id: Scalars['ID']['output']
  imageFile?: Maybe<ImageFieldOutput>
  name?: Maybe<Scalars['String']['output']>
  resized?: Maybe<ResizedImages>
  resizedWebp?: Maybe<ResizedWebPImages>
  topicKeywords?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  updatedBy?: Maybe<User>
  waterMark?: Maybe<Scalars['Boolean']['output']>
}

export type PhotoCreateInput = {
  copyRight?: InputMaybe<Scalars['Boolean']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>
  defaultImage?: InputMaybe<Scalars['Boolean']['input']>
  imageFile?: InputMaybe<ImageFieldInput>
  name?: InputMaybe<Scalars['String']['input']>
  topicKeywords?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForCreateInput>
  waterMark?: InputMaybe<Scalars['Boolean']['input']>
}

export type PhotoManyRelationFilter = {
  every?: InputMaybe<PhotoWhereInput>
  none?: InputMaybe<PhotoWhereInput>
  some?: InputMaybe<PhotoWhereInput>
}

export type PhotoOrderByInput = {
  copyRight?: InputMaybe<OrderDirection>
  createdAt?: InputMaybe<OrderDirection>
  defaultImage?: InputMaybe<OrderDirection>
  id?: InputMaybe<OrderDirection>
  name?: InputMaybe<OrderDirection>
  topicKeywords?: InputMaybe<OrderDirection>
  updatedAt?: InputMaybe<OrderDirection>
  waterMark?: InputMaybe<OrderDirection>
}

export type PhotoRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PhotoWhereUniqueInput>>
  create?: InputMaybe<Array<PhotoCreateInput>>
}

export type PhotoRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PhotoWhereUniqueInput>>
  create?: InputMaybe<Array<PhotoCreateInput>>
  disconnect?: InputMaybe<Array<PhotoWhereUniqueInput>>
  set?: InputMaybe<Array<PhotoWhereUniqueInput>>
}

export type PhotoRelateToOneForCreateInput = {
  connect?: InputMaybe<PhotoWhereUniqueInput>
  create?: InputMaybe<PhotoCreateInput>
}

export type PhotoRelateToOneForUpdateInput = {
  connect?: InputMaybe<PhotoWhereUniqueInput>
  create?: InputMaybe<PhotoCreateInput>
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
}

export type PhotoUpdateArgs = {
  data: PhotoUpdateInput
  where: PhotoWhereUniqueInput
}

export type PhotoUpdateInput = {
  copyRight?: InputMaybe<Scalars['Boolean']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>
  defaultImage?: InputMaybe<Scalars['Boolean']['input']>
  imageFile?: InputMaybe<ImageFieldInput>
  name?: InputMaybe<Scalars['String']['input']>
  topicKeywords?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForUpdateInput>
  waterMark?: InputMaybe<Scalars['Boolean']['input']>
}

export type PhotoWhereInput = {
  AND?: InputMaybe<Array<PhotoWhereInput>>
  NOT?: InputMaybe<Array<PhotoWhereInput>>
  OR?: InputMaybe<Array<PhotoWhereInput>>
  copyRight?: InputMaybe<BooleanFilter>
  createdAt?: InputMaybe<DateTimeNullableFilter>
  createdBy?: InputMaybe<UserWhereInput>
  defaultImage?: InputMaybe<BooleanFilter>
  id?: InputMaybe<IdFilter>
  name?: InputMaybe<StringFilter>
  topicKeywords?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeNullableFilter>
  updatedBy?: InputMaybe<UserWhereInput>
  waterMark?: InputMaybe<BooleanFilter>
}

export type PhotoWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type PopularTag = {
  __typename?: 'PopularTag'
  choices?: Maybe<Tag>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  createdBy?: Maybe<User>
  id: Scalars['ID']['output']
  order?: Maybe<Scalars['Int']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  updatedBy?: Maybe<User>
}

export type PopularTagCreateInput = {
  choices?: InputMaybe<TagRelateToOneForCreateInput>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>
  order?: InputMaybe<Scalars['Int']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForCreateInput>
}

export type PopularTagOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>
  id?: InputMaybe<OrderDirection>
  order?: InputMaybe<OrderDirection>
  updatedAt?: InputMaybe<OrderDirection>
}

export type PopularTagUpdateArgs = {
  data: PopularTagUpdateInput
  where: PopularTagWhereUniqueInput
}

export type PopularTagUpdateInput = {
  choices?: InputMaybe<TagRelateToOneForUpdateInput>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>
  order?: InputMaybe<Scalars['Int']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForUpdateInput>
}

export type PopularTagWhereInput = {
  AND?: InputMaybe<Array<PopularTagWhereInput>>
  NOT?: InputMaybe<Array<PopularTagWhereInput>>
  OR?: InputMaybe<Array<PopularTagWhereInput>>
  choices?: InputMaybe<TagWhereInput>
  createdAt?: InputMaybe<DateTimeNullableFilter>
  createdBy?: InputMaybe<UserWhereInput>
  id?: InputMaybe<IdFilter>
  order?: InputMaybe<IntNullableFilter>
  updatedAt?: InputMaybe<DateTimeNullableFilter>
  updatedBy?: InputMaybe<UserWhereInput>
}

export type PopularTagWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  order?: InputMaybe<Scalars['Int']['input']>
}

export type Post = {
  __typename?: 'Post'
  Warning?: Maybe<Warning>
  adTrace?: Maybe<Scalars['String']['output']>
  apiData?: Maybe<Scalars['JSON']['output']>
  apiDataBrief?: Maybe<Scalars['JSON']['output']>
  brief?: Maybe<Scalars['JSON']['output']>
  camera_man?: Maybe<Array<Contact>>
  camera_manCount?: Maybe<Scalars['Int']['output']>
  categories?: Maybe<Array<Category>>
  categoriesCount?: Maybe<Scalars['Int']['output']>
  categoriesInInputOrder?: Maybe<Array<Maybe<Category>>>
  content?: Maybe<Scalars['JSON']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  createdBy?: Maybe<User>
  css?: Maybe<Scalars['String']['output']>
  defaultHeroImage?: Maybe<Photo>
  designers?: Maybe<Array<Contact>>
  designersCount?: Maybe<Scalars['Int']['output']>
  engineers?: Maybe<Array<Contact>>
  engineersCount?: Maybe<Scalars['Int']['output']>
  extend_byline?: Maybe<Scalars['String']['output']>
  from_External_relateds?: Maybe<Array<External>>
  from_External_relatedsCount?: Maybe<Scalars['Int']['output']>
  groups?: Maybe<Array<Group>>
  groupsCount?: Maybe<Scalars['Int']['output']>
  heroCaption?: Maybe<Scalars['String']['output']>
  heroImage?: Maybe<Photo>
  heroVideo?: Maybe<Video>
  hiddenAdvertised?: Maybe<Scalars['Boolean']['output']>
  id: Scalars['ID']['output']
  isAdult?: Maybe<Scalars['Boolean']['output']>
  isAdvertised?: Maybe<Scalars['Boolean']['output']>
  isFeatured?: Maybe<Scalars['Boolean']['output']>
  isMember?: Maybe<Scalars['Boolean']['output']>
  lockBy?: Maybe<User>
  lockExpireAt?: Maybe<Scalars['DateTime']['output']>
  manualOrderOfCategories?: Maybe<Scalars['JSON']['output']>
  manualOrderOfRelatedVideos?: Maybe<Scalars['JSON']['output']>
  manualOrderOfRelateds?: Maybe<Scalars['JSON']['output']>
  manualOrderOfSections?: Maybe<Scalars['JSON']['output']>
  manualOrderOfWriters?: Maybe<Scalars['JSON']['output']>
  og_description?: Maybe<Scalars['String']['output']>
  og_image?: Maybe<Photo>
  og_title?: Maybe<Scalars['String']['output']>
  photographers?: Maybe<Array<Contact>>
  photographersCount?: Maybe<Scalars['Int']['output']>
  preview?: Maybe<Scalars['JSON']['output']>
  publishedDate?: Maybe<Scalars['DateTime']['output']>
  publishedDateString?: Maybe<Scalars['String']['output']>
  redirect?: Maybe<Scalars['String']['output']>
  related_videos?: Maybe<Array<Video>>
  related_videosCount?: Maybe<Scalars['Int']['output']>
  related_videosInInputOrder?: Maybe<Array<Maybe<Video>>>
  relateds?: Maybe<Array<Post>>
  relatedsCount?: Maybe<Scalars['Int']['output']>
  relatedsInInputOrder?: Maybe<Array<Maybe<Post>>>
  sections?: Maybe<Array<Section>>
  sectionsCount?: Maybe<Scalars['Int']['output']>
  sectionsInInputOrder?: Maybe<Array<Maybe<Section>>>
  slug?: Maybe<Scalars['String']['output']>
  state?: Maybe<Scalars['String']['output']>
  style?: Maybe<Scalars['String']['output']>
  subtitle?: Maybe<Scalars['String']['output']>
  tags?: Maybe<Array<Tag>>
  tagsCount?: Maybe<Scalars['Int']['output']>
  tags_algo?: Maybe<Array<Tag>>
  tags_algoCount?: Maybe<Scalars['Int']['output']>
  title?: Maybe<Scalars['String']['output']>
  topics?: Maybe<Topic>
  trimmedApiData?: Maybe<Scalars['JSON']['output']>
  trimmedContent?: Maybe<Scalars['JSON']['output']>
  updateTimeStamp?: Maybe<Scalars['Boolean']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  updatedBy?: Maybe<User>
  vocals?: Maybe<Array<Contact>>
  vocalsCount?: Maybe<Scalars['Int']['output']>
  writers?: Maybe<Array<Contact>>
  writersCount?: Maybe<Scalars['Int']['output']>
  writersInInputOrder?: Maybe<Array<Maybe<Contact>>>
}

export type PostCamera_ManArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>
  orderBy?: Array<ContactOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: ContactWhereInput
}

export type PostCamera_ManCountArgs = {
  where?: ContactWhereInput
}

export type PostCategoriesArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>
  orderBy?: Array<CategoryOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: CategoryWhereInput
}

export type PostCategoriesCountArgs = {
  where?: CategoryWhereInput
}

export type PostDesignersArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>
  orderBy?: Array<ContactOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: ContactWhereInput
}

export type PostDesignersCountArgs = {
  where?: ContactWhereInput
}

export type PostEngineersArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>
  orderBy?: Array<ContactOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: ContactWhereInput
}

export type PostEngineersCountArgs = {
  where?: ContactWhereInput
}

export type PostFrom_External_RelatedsArgs = {
  cursor?: InputMaybe<ExternalWhereUniqueInput>
  orderBy?: Array<ExternalOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: ExternalWhereInput
}

export type PostFrom_External_RelatedsCountArgs = {
  where?: ExternalWhereInput
}

export type PostGroupsArgs = {
  cursor?: InputMaybe<GroupWhereUniqueInput>
  orderBy?: Array<GroupOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: GroupWhereInput
}

export type PostGroupsCountArgs = {
  where?: GroupWhereInput
}

export type PostPhotographersArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>
  orderBy?: Array<ContactOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: ContactWhereInput
}

export type PostPhotographersCountArgs = {
  where?: ContactWhereInput
}

export type PostRelated_VideosArgs = {
  cursor?: InputMaybe<VideoWhereUniqueInput>
  orderBy?: Array<VideoOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: VideoWhereInput
}

export type PostRelated_VideosCountArgs = {
  where?: VideoWhereInput
}

export type PostRelatedsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>
  orderBy?: Array<PostOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: PostWhereInput
}

export type PostRelatedsCountArgs = {
  where?: PostWhereInput
}

export type PostSectionsArgs = {
  cursor?: InputMaybe<SectionWhereUniqueInput>
  orderBy?: Array<SectionOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: SectionWhereInput
}

export type PostSectionsCountArgs = {
  where?: SectionWhereInput
}

export type PostTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>
  orderBy?: Array<TagOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: TagWhereInput
}

export type PostTagsCountArgs = {
  where?: TagWhereInput
}

export type PostTags_AlgoArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>
  orderBy?: Array<TagOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: TagWhereInput
}

export type PostTags_AlgoCountArgs = {
  where?: TagWhereInput
}

export type PostVocalsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>
  orderBy?: Array<ContactOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: ContactWhereInput
}

export type PostVocalsCountArgs = {
  where?: ContactWhereInput
}

export type PostWritersArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>
  orderBy?: Array<ContactOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: ContactWhereInput
}

export type PostWritersCountArgs = {
  where?: ContactWhereInput
}

export type PostCreateInput = {
  Warning?: InputMaybe<WarningRelateToOneForCreateInput>
  adTrace?: InputMaybe<Scalars['String']['input']>
  apiData?: InputMaybe<Scalars['JSON']['input']>
  apiDataBrief?: InputMaybe<Scalars['JSON']['input']>
  brief?: InputMaybe<Scalars['JSON']['input']>
  camera_man?: InputMaybe<ContactRelateToManyForCreateInput>
  categories?: InputMaybe<CategoryRelateToManyForCreateInput>
  content?: InputMaybe<Scalars['JSON']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>
  css?: InputMaybe<Scalars['String']['input']>
  defaultHeroImage?: InputMaybe<PhotoRelateToOneForCreateInput>
  designers?: InputMaybe<ContactRelateToManyForCreateInput>
  engineers?: InputMaybe<ContactRelateToManyForCreateInput>
  extend_byline?: InputMaybe<Scalars['String']['input']>
  from_External_relateds?: InputMaybe<ExternalRelateToManyForCreateInput>
  groups?: InputMaybe<GroupRelateToManyForCreateInput>
  heroCaption?: InputMaybe<Scalars['String']['input']>
  heroImage?: InputMaybe<PhotoRelateToOneForCreateInput>
  heroVideo?: InputMaybe<VideoRelateToOneForCreateInput>
  hiddenAdvertised?: InputMaybe<Scalars['Boolean']['input']>
  isAdult?: InputMaybe<Scalars['Boolean']['input']>
  isAdvertised?: InputMaybe<Scalars['Boolean']['input']>
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>
  isMember?: InputMaybe<Scalars['Boolean']['input']>
  lockBy?: InputMaybe<UserRelateToOneForCreateInput>
  lockExpireAt?: InputMaybe<Scalars['DateTime']['input']>
  manualOrderOfCategories?: InputMaybe<Scalars['JSON']['input']>
  manualOrderOfRelatedVideos?: InputMaybe<Scalars['JSON']['input']>
  manualOrderOfRelateds?: InputMaybe<Scalars['JSON']['input']>
  manualOrderOfSections?: InputMaybe<Scalars['JSON']['input']>
  manualOrderOfWriters?: InputMaybe<Scalars['JSON']['input']>
  og_description?: InputMaybe<Scalars['String']['input']>
  og_image?: InputMaybe<PhotoRelateToOneForCreateInput>
  og_title?: InputMaybe<Scalars['String']['input']>
  photographers?: InputMaybe<ContactRelateToManyForCreateInput>
  publishedDate?: InputMaybe<Scalars['DateTime']['input']>
  publishedDateString?: InputMaybe<Scalars['String']['input']>
  redirect?: InputMaybe<Scalars['String']['input']>
  related_videos?: InputMaybe<VideoRelateToManyForCreateInput>
  relateds?: InputMaybe<PostRelateToManyForCreateInput>
  sections?: InputMaybe<SectionRelateToManyForCreateInput>
  slug?: InputMaybe<Scalars['String']['input']>
  state?: InputMaybe<Scalars['String']['input']>
  style?: InputMaybe<Scalars['String']['input']>
  subtitle?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<TagRelateToManyForCreateInput>
  tags_algo?: InputMaybe<TagRelateToManyForCreateInput>
  title?: InputMaybe<Scalars['String']['input']>
  topics?: InputMaybe<TopicRelateToOneForCreateInput>
  updateTimeStamp?: InputMaybe<Scalars['Boolean']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForCreateInput>
  vocals?: InputMaybe<ContactRelateToManyForCreateInput>
  writers?: InputMaybe<ContactRelateToManyForCreateInput>
}

export type PostManyRelationFilter = {
  every?: InputMaybe<PostWhereInput>
  none?: InputMaybe<PostWhereInput>
  some?: InputMaybe<PostWhereInput>
}

export type PostOrderByInput = {
  adTrace?: InputMaybe<OrderDirection>
  createdAt?: InputMaybe<OrderDirection>
  css?: InputMaybe<OrderDirection>
  extend_byline?: InputMaybe<OrderDirection>
  heroCaption?: InputMaybe<OrderDirection>
  hiddenAdvertised?: InputMaybe<OrderDirection>
  id?: InputMaybe<OrderDirection>
  isAdult?: InputMaybe<OrderDirection>
  isAdvertised?: InputMaybe<OrderDirection>
  isFeatured?: InputMaybe<OrderDirection>
  isMember?: InputMaybe<OrderDirection>
  lockExpireAt?: InputMaybe<OrderDirection>
  og_description?: InputMaybe<OrderDirection>
  og_title?: InputMaybe<OrderDirection>
  publishedDate?: InputMaybe<OrderDirection>
  publishedDateString?: InputMaybe<OrderDirection>
  redirect?: InputMaybe<OrderDirection>
  state?: InputMaybe<OrderDirection>
  style?: InputMaybe<OrderDirection>
  subtitle?: InputMaybe<OrderDirection>
  title?: InputMaybe<OrderDirection>
  updateTimeStamp?: InputMaybe<OrderDirection>
  updatedAt?: InputMaybe<OrderDirection>
}

export type PostRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>
  create?: InputMaybe<Array<PostCreateInput>>
}

export type PostRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>
  create?: InputMaybe<Array<PostCreateInput>>
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>
  set?: InputMaybe<Array<PostWhereUniqueInput>>
}

export type PostRelateToOneForCreateInput = {
  connect?: InputMaybe<PostWhereUniqueInput>
  create?: InputMaybe<PostCreateInput>
}

export type PostRelateToOneForUpdateInput = {
  connect?: InputMaybe<PostWhereUniqueInput>
  create?: InputMaybe<PostCreateInput>
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
}

export type PostUpdateArgs = {
  data: PostUpdateInput
  where: PostWhereUniqueInput
}

export type PostUpdateInput = {
  Warning?: InputMaybe<WarningRelateToOneForUpdateInput>
  adTrace?: InputMaybe<Scalars['String']['input']>
  apiData?: InputMaybe<Scalars['JSON']['input']>
  apiDataBrief?: InputMaybe<Scalars['JSON']['input']>
  brief?: InputMaybe<Scalars['JSON']['input']>
  camera_man?: InputMaybe<ContactRelateToManyForUpdateInput>
  categories?: InputMaybe<CategoryRelateToManyForUpdateInput>
  content?: InputMaybe<Scalars['JSON']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>
  css?: InputMaybe<Scalars['String']['input']>
  defaultHeroImage?: InputMaybe<PhotoRelateToOneForUpdateInput>
  designers?: InputMaybe<ContactRelateToManyForUpdateInput>
  engineers?: InputMaybe<ContactRelateToManyForUpdateInput>
  extend_byline?: InputMaybe<Scalars['String']['input']>
  from_External_relateds?: InputMaybe<ExternalRelateToManyForUpdateInput>
  groups?: InputMaybe<GroupRelateToManyForUpdateInput>
  heroCaption?: InputMaybe<Scalars['String']['input']>
  heroImage?: InputMaybe<PhotoRelateToOneForUpdateInput>
  heroVideo?: InputMaybe<VideoRelateToOneForUpdateInput>
  hiddenAdvertised?: InputMaybe<Scalars['Boolean']['input']>
  isAdult?: InputMaybe<Scalars['Boolean']['input']>
  isAdvertised?: InputMaybe<Scalars['Boolean']['input']>
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>
  isMember?: InputMaybe<Scalars['Boolean']['input']>
  lockBy?: InputMaybe<UserRelateToOneForUpdateInput>
  lockExpireAt?: InputMaybe<Scalars['DateTime']['input']>
  manualOrderOfCategories?: InputMaybe<Scalars['JSON']['input']>
  manualOrderOfRelatedVideos?: InputMaybe<Scalars['JSON']['input']>
  manualOrderOfRelateds?: InputMaybe<Scalars['JSON']['input']>
  manualOrderOfSections?: InputMaybe<Scalars['JSON']['input']>
  manualOrderOfWriters?: InputMaybe<Scalars['JSON']['input']>
  og_description?: InputMaybe<Scalars['String']['input']>
  og_image?: InputMaybe<PhotoRelateToOneForUpdateInput>
  og_title?: InputMaybe<Scalars['String']['input']>
  photographers?: InputMaybe<ContactRelateToManyForUpdateInput>
  publishedDate?: InputMaybe<Scalars['DateTime']['input']>
  publishedDateString?: InputMaybe<Scalars['String']['input']>
  redirect?: InputMaybe<Scalars['String']['input']>
  related_videos?: InputMaybe<VideoRelateToManyForUpdateInput>
  relateds?: InputMaybe<PostRelateToManyForUpdateInput>
  sections?: InputMaybe<SectionRelateToManyForUpdateInput>
  slug?: InputMaybe<Scalars['String']['input']>
  state?: InputMaybe<Scalars['String']['input']>
  style?: InputMaybe<Scalars['String']['input']>
  subtitle?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<TagRelateToManyForUpdateInput>
  tags_algo?: InputMaybe<TagRelateToManyForUpdateInput>
  title?: InputMaybe<Scalars['String']['input']>
  topics?: InputMaybe<TopicRelateToOneForUpdateInput>
  updateTimeStamp?: InputMaybe<Scalars['Boolean']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForUpdateInput>
  vocals?: InputMaybe<ContactRelateToManyForUpdateInput>
  writers?: InputMaybe<ContactRelateToManyForUpdateInput>
}

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>
  NOT?: InputMaybe<Array<PostWhereInput>>
  OR?: InputMaybe<Array<PostWhereInput>>
  Warning?: InputMaybe<WarningWhereInput>
  adTrace?: InputMaybe<StringFilter>
  camera_man?: InputMaybe<ContactManyRelationFilter>
  categories?: InputMaybe<CategoryManyRelationFilter>
  createdAt?: InputMaybe<DateTimeNullableFilter>
  createdBy?: InputMaybe<UserWhereInput>
  css?: InputMaybe<StringFilter>
  defaultHeroImage?: InputMaybe<PhotoWhereInput>
  designers?: InputMaybe<ContactManyRelationFilter>
  engineers?: InputMaybe<ContactManyRelationFilter>
  extend_byline?: InputMaybe<StringFilter>
  heroImage?: InputMaybe<PhotoWhereInput>
  heroVideo?: InputMaybe<VideoWhereInput>
  hiddenAdvertised?: InputMaybe<BooleanFilter>
  id?: InputMaybe<IdFilter>
  isAdult?: InputMaybe<BooleanFilter>
  isAdvertised?: InputMaybe<BooleanFilter>
  isFeatured?: InputMaybe<BooleanFilter>
  isMember?: InputMaybe<BooleanFilter>
  lockExpireAt?: InputMaybe<DateTimeNullableFilter>
  og_title?: InputMaybe<StringFilter>
  photographers?: InputMaybe<ContactManyRelationFilter>
  publishedDate?: InputMaybe<DateTimeFilter>
  publishedDateString?: InputMaybe<StringFilter>
  redirect?: InputMaybe<StringFilter>
  relateds?: InputMaybe<PostManyRelationFilter>
  sections?: InputMaybe<SectionManyRelationFilter>
  state?: InputMaybe<StringNullableFilter>
  style?: InputMaybe<StringNullableFilter>
  subtitle?: InputMaybe<StringFilter>
  tags?: InputMaybe<TagManyRelationFilter>
  tags_algo?: InputMaybe<TagManyRelationFilter>
  title?: InputMaybe<StringFilter>
  topics?: InputMaybe<TopicWhereInput>
  updatedAt?: InputMaybe<DateTimeNullableFilter>
  updatedBy?: InputMaybe<UserWhereInput>
  vocals?: InputMaybe<ContactManyRelationFilter>
  writers?: InputMaybe<ContactManyRelationFilter>
}

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Query = {
  __typename?: 'Query'
  audioFile?: Maybe<AudioFile>
  audioFiles?: Maybe<Array<AudioFile>>
  audioFilesCount?: Maybe<Scalars['Int']['output']>
  authenticatedItem?: Maybe<AuthenticatedItem>
  categories?: Maybe<Array<Category>>
  categoriesCount?: Maybe<Scalars['Int']['output']>
  category?: Maybe<Category>
  contact?: Maybe<Contact>
  contacts?: Maybe<Array<Contact>>
  contactsCount?: Maybe<Scalars['Int']['output']>
  editorChoice?: Maybe<EditorChoice>
  editorChoices?: Maybe<Array<EditorChoice>>
  editorChoicesCount?: Maybe<Scalars['Int']['output']>
  event?: Maybe<Event>
  events?: Maybe<Array<Event>>
  eventsCount?: Maybe<Scalars['Int']['output']>
  external?: Maybe<External>
  externals?: Maybe<Array<External>>
  externalsCount?: Maybe<Scalars['Int']['output']>
  game?: Maybe<Game>
  games?: Maybe<Array<Game>>
  gamesCount?: Maybe<Scalars['Int']['output']>
  group?: Maybe<Group>
  groups?: Maybe<Array<Group>>
  groupsCount?: Maybe<Scalars['Int']['output']>
  header?: Maybe<Header>
  headers?: Maybe<Array<Header>>
  headersCount?: Maybe<Scalars['Int']['output']>
  keystone: KeystoneMeta
  partner?: Maybe<Partner>
  partners?: Maybe<Array<Partner>>
  partnersCount?: Maybe<Scalars['Int']['output']>
  photo?: Maybe<Photo>
  photos?: Maybe<Array<Photo>>
  photosCount?: Maybe<Scalars['Int']['output']>
  popularTag?: Maybe<PopularTag>
  popularTags?: Maybe<Array<PopularTag>>
  popularTagsCount?: Maybe<Scalars['Int']['output']>
  post?: Maybe<Post>
  posts?: Maybe<Array<Post>>
  postsCount?: Maybe<Scalars['Int']['output']>
  section?: Maybe<Section>
  sections?: Maybe<Array<Section>>
  sectionsCount?: Maybe<Scalars['Int']['output']>
  tag?: Maybe<Tag>
  tags?: Maybe<Array<Tag>>
  tagsCount?: Maybe<Scalars['Int']['output']>
  topic?: Maybe<Topic>
  topics?: Maybe<Array<Topic>>
  topicsCount?: Maybe<Scalars['Int']['output']>
  user?: Maybe<User>
  users?: Maybe<Array<User>>
  usersCount?: Maybe<Scalars['Int']['output']>
  video?: Maybe<Video>
  videos?: Maybe<Array<Video>>
  videosCount?: Maybe<Scalars['Int']['output']>
  warning?: Maybe<Warning>
  warnings?: Maybe<Array<Warning>>
  warningsCount?: Maybe<Scalars['Int']['output']>
}

export type QueryAudioFileArgs = {
  where: AudioFileWhereUniqueInput
}

export type QueryAudioFilesArgs = {
  cursor?: InputMaybe<AudioFileWhereUniqueInput>
  orderBy?: Array<AudioFileOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: AudioFileWhereInput
}

export type QueryAudioFilesCountArgs = {
  where?: AudioFileWhereInput
}

export type QueryCategoriesArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>
  orderBy?: Array<CategoryOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: CategoryWhereInput
}

export type QueryCategoriesCountArgs = {
  where?: CategoryWhereInput
}

export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput
}

export type QueryContactArgs = {
  where: ContactWhereUniqueInput
}

export type QueryContactsArgs = {
  cursor?: InputMaybe<ContactWhereUniqueInput>
  orderBy?: Array<ContactOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: ContactWhereInput
}

export type QueryContactsCountArgs = {
  where?: ContactWhereInput
}

export type QueryEditorChoiceArgs = {
  where: EditorChoiceWhereUniqueInput
}

export type QueryEditorChoicesArgs = {
  cursor?: InputMaybe<EditorChoiceWhereUniqueInput>
  orderBy?: Array<EditorChoiceOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: EditorChoiceWhereInput
}

export type QueryEditorChoicesCountArgs = {
  where?: EditorChoiceWhereInput
}

export type QueryEventArgs = {
  where: EventWhereUniqueInput
}

export type QueryEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>
  orderBy?: Array<EventOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: EventWhereInput
}

export type QueryEventsCountArgs = {
  where?: EventWhereInput
}

export type QueryExternalArgs = {
  where: ExternalWhereUniqueInput
}

export type QueryExternalsArgs = {
  cursor?: InputMaybe<ExternalWhereUniqueInput>
  orderBy?: Array<ExternalOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: ExternalWhereInput
}

export type QueryExternalsCountArgs = {
  where?: ExternalWhereInput
}

export type QueryGameArgs = {
  where: GameWhereUniqueInput
}

export type QueryGamesArgs = {
  cursor?: InputMaybe<GameWhereUniqueInput>
  orderBy?: Array<GameOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: GameWhereInput
}

export type QueryGamesCountArgs = {
  where?: GameWhereInput
}

export type QueryGroupArgs = {
  where: GroupWhereUniqueInput
}

export type QueryGroupsArgs = {
  cursor?: InputMaybe<GroupWhereUniqueInput>
  orderBy?: Array<GroupOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: GroupWhereInput
}

export type QueryGroupsCountArgs = {
  where?: GroupWhereInput
}

export type QueryHeaderArgs = {
  where: HeaderWhereUniqueInput
}

export type QueryHeadersArgs = {
  cursor?: InputMaybe<HeaderWhereUniqueInput>
  orderBy?: Array<HeaderOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: HeaderWhereInput
}

export type QueryHeadersCountArgs = {
  where?: HeaderWhereInput
}

export type QueryPartnerArgs = {
  where: PartnerWhereUniqueInput
}

export type QueryPartnersArgs = {
  cursor?: InputMaybe<PartnerWhereUniqueInput>
  orderBy?: Array<PartnerOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: PartnerWhereInput
}

export type QueryPartnersCountArgs = {
  where?: PartnerWhereInput
}

export type QueryPhotoArgs = {
  where: PhotoWhereUniqueInput
}

export type QueryPhotosArgs = {
  cursor?: InputMaybe<PhotoWhereUniqueInput>
  orderBy?: Array<PhotoOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: PhotoWhereInput
}

export type QueryPhotosCountArgs = {
  where?: PhotoWhereInput
}

export type QueryPopularTagArgs = {
  where: PopularTagWhereUniqueInput
}

export type QueryPopularTagsArgs = {
  cursor?: InputMaybe<PopularTagWhereUniqueInput>
  orderBy?: Array<PopularTagOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: PopularTagWhereInput
}

export type QueryPopularTagsCountArgs = {
  where?: PopularTagWhereInput
}

export type QueryPostArgs = {
  where: PostWhereUniqueInput
}

export type QueryPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>
  orderBy?: Array<PostOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: PostWhereInput
}

export type QueryPostsCountArgs = {
  where?: PostWhereInput
}

export type QuerySectionArgs = {
  where: SectionWhereUniqueInput
}

export type QuerySectionsArgs = {
  cursor?: InputMaybe<SectionWhereUniqueInput>
  orderBy?: Array<SectionOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: SectionWhereInput
}

export type QuerySectionsCountArgs = {
  where?: SectionWhereInput
}

export type QueryTagArgs = {
  where: TagWhereUniqueInput
}

export type QueryTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>
  orderBy?: Array<TagOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: TagWhereInput
}

export type QueryTagsCountArgs = {
  where?: TagWhereInput
}

export type QueryTopicArgs = {
  where: TopicWhereUniqueInput
}

export type QueryTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>
  orderBy?: Array<TopicOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: TopicWhereInput
}

export type QueryTopicsCountArgs = {
  where?: TopicWhereInput
}

export type QueryUserArgs = {
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>
  orderBy?: Array<UserOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: UserWhereInput
}

export type QueryUsersCountArgs = {
  where?: UserWhereInput
}

export type QueryVideoArgs = {
  where: VideoWhereUniqueInput
}

export type QueryVideosArgs = {
  cursor?: InputMaybe<VideoWhereUniqueInput>
  orderBy?: Array<VideoOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: VideoWhereInput
}

export type QueryVideosCountArgs = {
  where?: VideoWhereInput
}

export type QueryWarningArgs = {
  where: WarningWhereUniqueInput
}

export type QueryWarningsArgs = {
  cursor?: InputMaybe<WarningWhereUniqueInput>
  orderBy?: Array<WarningOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: WarningWhereInput
}

export type QueryWarningsCountArgs = {
  where?: WarningWhereInput
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type ResizedImages = {
  __typename?: 'ResizedImages'
  original?: Maybe<Scalars['String']['output']>
  w480?: Maybe<Scalars['String']['output']>
  w800?: Maybe<Scalars['String']['output']>
  w1200?: Maybe<Scalars['String']['output']>
  w1600?: Maybe<Scalars['String']['output']>
  w2400?: Maybe<Scalars['String']['output']>
}

export type ResizedWebPImages = {
  __typename?: 'ResizedWebPImages'
  original?: Maybe<Scalars['String']['output']>
  w480?: Maybe<Scalars['String']['output']>
  w800?: Maybe<Scalars['String']['output']>
  w1200?: Maybe<Scalars['String']['output']>
  w1600?: Maybe<Scalars['String']['output']>
  w2400?: Maybe<Scalars['String']['output']>
}

export type Section = {
  __typename?: 'Section'
  categories?: Maybe<Array<Category>>
  categoriesCount?: Maybe<Scalars['Int']['output']>
  color?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  createdBy?: Maybe<User>
  description?: Maybe<Scalars['String']['output']>
  heroImage?: Maybe<Photo>
  id: Scalars['ID']['output']
  isFeatured?: Maybe<Scalars['Boolean']['output']>
  name?: Maybe<Scalars['String']['output']>
  order?: Maybe<Scalars['Int']['output']>
  posts?: Maybe<Array<Post>>
  postsCount?: Maybe<Scalars['Int']['output']>
  slug?: Maybe<Scalars['String']['output']>
  state?: Maybe<Scalars['String']['output']>
  topics?: Maybe<Array<Topic>>
  topicsCount?: Maybe<Scalars['Int']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  updatedBy?: Maybe<User>
}

export type SectionCategoriesArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>
  orderBy?: Array<CategoryOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: CategoryWhereInput
}

export type SectionCategoriesCountArgs = {
  where?: CategoryWhereInput
}

export type SectionPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>
  orderBy?: Array<PostOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: PostWhereInput
}

export type SectionPostsCountArgs = {
  where?: PostWhereInput
}

export type SectionTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>
  orderBy?: Array<TopicOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: TopicWhereInput
}

export type SectionTopicsCountArgs = {
  where?: TopicWhereInput
}

export type SectionCreateInput = {
  categories?: InputMaybe<CategoryRelateToManyForCreateInput>
  color?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>
  description?: InputMaybe<Scalars['String']['input']>
  heroImage?: InputMaybe<PhotoRelateToOneForCreateInput>
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Scalars['Int']['input']>
  posts?: InputMaybe<PostRelateToManyForCreateInput>
  slug?: InputMaybe<Scalars['String']['input']>
  state?: InputMaybe<Scalars['String']['input']>
  topics?: InputMaybe<TopicRelateToManyForCreateInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForCreateInput>
}

export type SectionManyRelationFilter = {
  every?: InputMaybe<SectionWhereInput>
  none?: InputMaybe<SectionWhereInput>
  some?: InputMaybe<SectionWhereInput>
}

export type SectionOrderByInput = {
  color?: InputMaybe<OrderDirection>
  createdAt?: InputMaybe<OrderDirection>
  description?: InputMaybe<OrderDirection>
  id?: InputMaybe<OrderDirection>
  isFeatured?: InputMaybe<OrderDirection>
  name?: InputMaybe<OrderDirection>
  order?: InputMaybe<OrderDirection>
  slug?: InputMaybe<OrderDirection>
  state?: InputMaybe<OrderDirection>
  updatedAt?: InputMaybe<OrderDirection>
}

export type SectionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<SectionWhereUniqueInput>>
  create?: InputMaybe<Array<SectionCreateInput>>
}

export type SectionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<SectionWhereUniqueInput>>
  create?: InputMaybe<Array<SectionCreateInput>>
  disconnect?: InputMaybe<Array<SectionWhereUniqueInput>>
  set?: InputMaybe<Array<SectionWhereUniqueInput>>
}

export type SectionRelateToOneForCreateInput = {
  connect?: InputMaybe<SectionWhereUniqueInput>
  create?: InputMaybe<SectionCreateInput>
}

export type SectionRelateToOneForUpdateInput = {
  connect?: InputMaybe<SectionWhereUniqueInput>
  create?: InputMaybe<SectionCreateInput>
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
}

export type SectionUpdateArgs = {
  data: SectionUpdateInput
  where: SectionWhereUniqueInput
}

export type SectionUpdateInput = {
  categories?: InputMaybe<CategoryRelateToManyForUpdateInput>
  color?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>
  description?: InputMaybe<Scalars['String']['input']>
  heroImage?: InputMaybe<PhotoRelateToOneForUpdateInput>
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Scalars['Int']['input']>
  posts?: InputMaybe<PostRelateToManyForUpdateInput>
  slug?: InputMaybe<Scalars['String']['input']>
  state?: InputMaybe<Scalars['String']['input']>
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForUpdateInput>
}

export type SectionWhereInput = {
  AND?: InputMaybe<Array<SectionWhereInput>>
  NOT?: InputMaybe<Array<SectionWhereInput>>
  OR?: InputMaybe<Array<SectionWhereInput>>
  categories?: InputMaybe<CategoryManyRelationFilter>
  color?: InputMaybe<CustomStringFilter>
  createdAt?: InputMaybe<DateTimeNullableFilter>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<StringFilter>
  heroImage?: InputMaybe<PhotoWhereInput>
  id?: InputMaybe<IdFilter>
  isFeatured?: InputMaybe<BooleanFilter>
  name?: InputMaybe<StringFilter>
  order?: InputMaybe<IntNullableFilter>
  posts?: InputMaybe<PostManyRelationFilter>
  slug?: InputMaybe<StringFilter>
  state?: InputMaybe<StringFilter>
  topics?: InputMaybe<TopicManyRelationFilter>
  updatedAt?: InputMaybe<DateTimeNullableFilter>
  updatedBy?: InputMaybe<UserWhereInput>
}

export type SectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<NestedStringFilter>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<NestedStringNullableFilter>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type Tag = {
  __typename?: 'Tag'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  createdBy?: Maybe<User>
  externals?: Maybe<Array<External>>
  externalsCount?: Maybe<Scalars['Int']['output']>
  id: Scalars['ID']['output']
  name?: Maybe<Scalars['String']['output']>
  posts?: Maybe<Array<Post>>
  postsCount?: Maybe<Scalars['Int']['output']>
  posts_algo?: Maybe<Array<Post>>
  posts_algoCount?: Maybe<Scalars['Int']['output']>
  slug?: Maybe<Scalars['String']['output']>
  topics?: Maybe<Array<Topic>>
  topicsCount?: Maybe<Scalars['Int']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  updatedBy?: Maybe<User>
}

export type TagExternalsArgs = {
  cursor?: InputMaybe<ExternalWhereUniqueInput>
  orderBy?: Array<ExternalOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: ExternalWhereInput
}

export type TagExternalsCountArgs = {
  where?: ExternalWhereInput
}

export type TagPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>
  orderBy?: Array<PostOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: PostWhereInput
}

export type TagPostsCountArgs = {
  where?: PostWhereInput
}

export type TagPosts_AlgoArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>
  orderBy?: Array<PostOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: PostWhereInput
}

export type TagPosts_AlgoCountArgs = {
  where?: PostWhereInput
}

export type TagTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>
  orderBy?: Array<TopicOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: TopicWhereInput
}

export type TagTopicsCountArgs = {
  where?: TopicWhereInput
}

export type TagCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>
  externals?: InputMaybe<ExternalRelateToManyForCreateInput>
  name?: InputMaybe<Scalars['String']['input']>
  posts?: InputMaybe<PostRelateToManyForCreateInput>
  posts_algo?: InputMaybe<PostRelateToManyForCreateInput>
  slug?: InputMaybe<Scalars['String']['input']>
  topics?: InputMaybe<TopicRelateToManyForCreateInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForCreateInput>
}

export type TagManyRelationFilter = {
  every?: InputMaybe<TagWhereInput>
  none?: InputMaybe<TagWhereInput>
  some?: InputMaybe<TagWhereInput>
}

export type TagOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>
  id?: InputMaybe<OrderDirection>
  name?: InputMaybe<OrderDirection>
  slug?: InputMaybe<OrderDirection>
  updatedAt?: InputMaybe<OrderDirection>
}

export type TagRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>
  create?: InputMaybe<Array<TagCreateInput>>
}

export type TagRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>
  create?: InputMaybe<Array<TagCreateInput>>
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>
  set?: InputMaybe<Array<TagWhereUniqueInput>>
}

export type TagRelateToOneForCreateInput = {
  connect?: InputMaybe<TagWhereUniqueInput>
  create?: InputMaybe<TagCreateInput>
}

export type TagRelateToOneForUpdateInput = {
  connect?: InputMaybe<TagWhereUniqueInput>
  create?: InputMaybe<TagCreateInput>
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
}

export type TagUpdateArgs = {
  data: TagUpdateInput
  where: TagWhereUniqueInput
}

export type TagUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>
  externals?: InputMaybe<ExternalRelateToManyForUpdateInput>
  name?: InputMaybe<Scalars['String']['input']>
  posts?: InputMaybe<PostRelateToManyForUpdateInput>
  posts_algo?: InputMaybe<PostRelateToManyForUpdateInput>
  slug?: InputMaybe<Scalars['String']['input']>
  topics?: InputMaybe<TopicRelateToManyForUpdateInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForUpdateInput>
}

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>
  NOT?: InputMaybe<Array<TagWhereInput>>
  OR?: InputMaybe<Array<TagWhereInput>>
  createdAt?: InputMaybe<DateTimeNullableFilter>
  createdBy?: InputMaybe<UserWhereInput>
  externals?: InputMaybe<ExternalManyRelationFilter>
  id?: InputMaybe<IdFilter>
  name?: InputMaybe<StringFilter>
  posts?: InputMaybe<PostManyRelationFilter>
  posts_algo?: InputMaybe<PostManyRelationFilter>
  slug?: InputMaybe<StringFilter>
  topics?: InputMaybe<TopicManyRelationFilter>
  updatedAt?: InputMaybe<DateTimeNullableFilter>
  updatedBy?: InputMaybe<UserWhereInput>
}

export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type Topic = {
  __typename?: 'Topic'
  apiDataBrief?: Maybe<Scalars['JSON']['output']>
  brief?: Maybe<Scalars['JSON']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  createdBy?: Maybe<User>
  dfp?: Maybe<Scalars['String']['output']>
  heroImage?: Maybe<Photo>
  heroUrl?: Maybe<Scalars['String']['output']>
  heroVideo?: Maybe<Video>
  id: Scalars['ID']['output']
  isFeatured?: Maybe<Scalars['Boolean']['output']>
  javascript?: Maybe<Scalars['String']['output']>
  leading?: Maybe<Scalars['String']['output']>
  manualOrderOfSlideshowImages?: Maybe<Scalars['JSON']['output']>
  mobile_dfp?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  og_description?: Maybe<Scalars['String']['output']>
  og_image?: Maybe<Photo>
  og_title?: Maybe<Scalars['String']['output']>
  posts?: Maybe<Array<Post>>
  postsCount?: Maybe<Scalars['Int']['output']>
  sections?: Maybe<Array<Section>>
  sectionsCount?: Maybe<Scalars['Int']['output']>
  slideshow_images?: Maybe<Array<Photo>>
  slideshow_imagesCount?: Maybe<Scalars['Int']['output']>
  slideshow_imagesInInputOrder?: Maybe<Array<Maybe<Photo>>>
  slug?: Maybe<Scalars['String']['output']>
  sortOrder?: Maybe<Scalars['Int']['output']>
  state?: Maybe<Scalars['String']['output']>
  style?: Maybe<Scalars['String']['output']>
  tags?: Maybe<Array<Tag>>
  tagsCount?: Maybe<Scalars['Int']['output']>
  title_style?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  updatedBy?: Maybe<User>
}

export type TopicPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>
  orderBy?: Array<PostOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: PostWhereInput
}

export type TopicPostsCountArgs = {
  where?: PostWhereInput
}

export type TopicSectionsArgs = {
  cursor?: InputMaybe<SectionWhereUniqueInput>
  orderBy?: Array<SectionOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: SectionWhereInput
}

export type TopicSectionsCountArgs = {
  where?: SectionWhereInput
}

export type TopicSlideshow_ImagesArgs = {
  cursor?: InputMaybe<PhotoWhereUniqueInput>
  orderBy?: Array<PhotoOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: PhotoWhereInput
}

export type TopicSlideshow_ImagesCountArgs = {
  where?: PhotoWhereInput
}

export type TopicTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>
  orderBy?: Array<TagOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: TagWhereInput
}

export type TopicTagsCountArgs = {
  where?: TagWhereInput
}

export type TopicCreateInput = {
  apiDataBrief?: InputMaybe<Scalars['JSON']['input']>
  brief?: InputMaybe<Scalars['JSON']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>
  dfp?: InputMaybe<Scalars['String']['input']>
  heroImage?: InputMaybe<PhotoRelateToOneForCreateInput>
  heroUrl?: InputMaybe<Scalars['String']['input']>
  heroVideo?: InputMaybe<VideoRelateToOneForCreateInput>
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>
  javascript?: InputMaybe<Scalars['String']['input']>
  leading?: InputMaybe<Scalars['String']['input']>
  manualOrderOfSlideshowImages?: InputMaybe<Scalars['JSON']['input']>
  mobile_dfp?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  og_description?: InputMaybe<Scalars['String']['input']>
  og_image?: InputMaybe<PhotoRelateToOneForCreateInput>
  og_title?: InputMaybe<Scalars['String']['input']>
  posts?: InputMaybe<PostRelateToManyForCreateInput>
  sections?: InputMaybe<SectionRelateToManyForCreateInput>
  slideshow_images?: InputMaybe<PhotoRelateToManyForCreateInput>
  slug?: InputMaybe<Scalars['String']['input']>
  sortOrder?: InputMaybe<Scalars['Int']['input']>
  state?: InputMaybe<Scalars['String']['input']>
  style?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<TagRelateToManyForCreateInput>
  title_style?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForCreateInput>
}

export type TopicManyRelationFilter = {
  every?: InputMaybe<TopicWhereInput>
  none?: InputMaybe<TopicWhereInput>
  some?: InputMaybe<TopicWhereInput>
}

export type TopicOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>
  dfp?: InputMaybe<OrderDirection>
  heroUrl?: InputMaybe<OrderDirection>
  id?: InputMaybe<OrderDirection>
  isFeatured?: InputMaybe<OrderDirection>
  javascript?: InputMaybe<OrderDirection>
  leading?: InputMaybe<OrderDirection>
  mobile_dfp?: InputMaybe<OrderDirection>
  name?: InputMaybe<OrderDirection>
  og_description?: InputMaybe<OrderDirection>
  og_title?: InputMaybe<OrderDirection>
  slug?: InputMaybe<OrderDirection>
  sortOrder?: InputMaybe<OrderDirection>
  state?: InputMaybe<OrderDirection>
  style?: InputMaybe<OrderDirection>
  title_style?: InputMaybe<OrderDirection>
  type?: InputMaybe<OrderDirection>
  updatedAt?: InputMaybe<OrderDirection>
}

export type TopicRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TopicWhereUniqueInput>>
  create?: InputMaybe<Array<TopicCreateInput>>
}

export type TopicRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TopicWhereUniqueInput>>
  create?: InputMaybe<Array<TopicCreateInput>>
  disconnect?: InputMaybe<Array<TopicWhereUniqueInput>>
  set?: InputMaybe<Array<TopicWhereUniqueInput>>
}

export type TopicRelateToOneForCreateInput = {
  connect?: InputMaybe<TopicWhereUniqueInput>
  create?: InputMaybe<TopicCreateInput>
}

export type TopicRelateToOneForUpdateInput = {
  connect?: InputMaybe<TopicWhereUniqueInput>
  create?: InputMaybe<TopicCreateInput>
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
}

export type TopicUpdateArgs = {
  data: TopicUpdateInput
  where: TopicWhereUniqueInput
}

export type TopicUpdateInput = {
  apiDataBrief?: InputMaybe<Scalars['JSON']['input']>
  brief?: InputMaybe<Scalars['JSON']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>
  dfp?: InputMaybe<Scalars['String']['input']>
  heroImage?: InputMaybe<PhotoRelateToOneForUpdateInput>
  heroUrl?: InputMaybe<Scalars['String']['input']>
  heroVideo?: InputMaybe<VideoRelateToOneForUpdateInput>
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>
  javascript?: InputMaybe<Scalars['String']['input']>
  leading?: InputMaybe<Scalars['String']['input']>
  manualOrderOfSlideshowImages?: InputMaybe<Scalars['JSON']['input']>
  mobile_dfp?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  og_description?: InputMaybe<Scalars['String']['input']>
  og_image?: InputMaybe<PhotoRelateToOneForUpdateInput>
  og_title?: InputMaybe<Scalars['String']['input']>
  posts?: InputMaybe<PostRelateToManyForUpdateInput>
  sections?: InputMaybe<SectionRelateToManyForUpdateInput>
  slideshow_images?: InputMaybe<PhotoRelateToManyForUpdateInput>
  slug?: InputMaybe<Scalars['String']['input']>
  sortOrder?: InputMaybe<Scalars['Int']['input']>
  state?: InputMaybe<Scalars['String']['input']>
  style?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<TagRelateToManyForUpdateInput>
  title_style?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForUpdateInput>
}

export type TopicWhereInput = {
  AND?: InputMaybe<Array<TopicWhereInput>>
  NOT?: InputMaybe<Array<TopicWhereInput>>
  OR?: InputMaybe<Array<TopicWhereInput>>
  createdAt?: InputMaybe<DateTimeNullableFilter>
  createdBy?: InputMaybe<UserWhereInput>
  dfp?: InputMaybe<StringFilter>
  heroImage?: InputMaybe<PhotoWhereInput>
  heroUrl?: InputMaybe<StringNullableFilter>
  heroVideo?: InputMaybe<VideoWhereInput>
  id?: InputMaybe<IdFilter>
  isFeatured?: InputMaybe<BooleanFilter>
  javascript?: InputMaybe<StringFilter>
  leading?: InputMaybe<StringNullableFilter>
  mobile_dfp?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  og_description?: InputMaybe<StringFilter>
  og_image?: InputMaybe<PhotoWhereInput>
  og_title?: InputMaybe<StringFilter>
  posts?: InputMaybe<PostManyRelationFilter>
  sections?: InputMaybe<SectionManyRelationFilter>
  slideshow_images?: InputMaybe<PhotoManyRelationFilter>
  slug?: InputMaybe<StringFilter>
  sortOrder?: InputMaybe<IntNullableFilter>
  state?: InputMaybe<StringNullableFilter>
  style?: InputMaybe<StringFilter>
  tags?: InputMaybe<TagManyRelationFilter>
  title_style?: InputMaybe<StringNullableFilter>
  type?: InputMaybe<StringNullableFilter>
  updatedAt?: InputMaybe<DateTimeNullableFilter>
  updatedBy?: InputMaybe<UserWhereInput>
}

export type TopicWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type User = {
  __typename?: 'User'
  author?: Maybe<Contact>
  email?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  isProtected?: Maybe<Scalars['Boolean']['output']>
  name?: Maybe<Scalars['String']['output']>
  password?: Maybe<PasswordState>
  role?: Maybe<Scalars['String']['output']>
  sections?: Maybe<Array<Section>>
  sectionsCount?: Maybe<Scalars['Int']['output']>
}

export type UserSectionsArgs = {
  cursor?: InputMaybe<SectionWhereUniqueInput>
  orderBy?: Array<SectionOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: SectionWhereInput
}

export type UserSectionsCountArgs = {
  where?: SectionWhereInput
}

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure'
  message: Scalars['String']['output']
}

export type UserAuthenticationWithPasswordResult =
  | UserAuthenticationWithPasswordFailure
  | UserAuthenticationWithPasswordSuccess

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess'
  item: User
  sessionToken: Scalars['String']['output']
}

export type UserCreateInput = {
  author?: InputMaybe<ContactRelateToOneForCreateInput>
  email?: InputMaybe<Scalars['String']['input']>
  isProtected?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  password?: InputMaybe<Scalars['String']['input']>
  role?: InputMaybe<Scalars['String']['input']>
  sections?: InputMaybe<SectionRelateToManyForCreateInput>
}

export type UserOrderByInput = {
  email?: InputMaybe<OrderDirection>
  id?: InputMaybe<OrderDirection>
  isProtected?: InputMaybe<OrderDirection>
  name?: InputMaybe<OrderDirection>
  role?: InputMaybe<OrderDirection>
}

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>
  create?: InputMaybe<UserCreateInput>
}

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>
  create?: InputMaybe<UserCreateInput>
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
}

export type UserUpdateArgs = {
  data: UserUpdateInput
  where: UserWhereUniqueInput
}

export type UserUpdateInput = {
  author?: InputMaybe<ContactRelateToOneForUpdateInput>
  email?: InputMaybe<Scalars['String']['input']>
  isProtected?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  password?: InputMaybe<Scalars['String']['input']>
  role?: InputMaybe<Scalars['String']['input']>
  sections?: InputMaybe<SectionRelateToManyForUpdateInput>
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>
  NOT?: InputMaybe<Array<UserWhereInput>>
  OR?: InputMaybe<Array<UserWhereInput>>
  author?: InputMaybe<ContactWhereInput>
  email?: InputMaybe<StringFilter>
  id?: InputMaybe<IdFilter>
  isProtected?: InputMaybe<BooleanFilter>
  name?: InputMaybe<StringFilter>
  role?: InputMaybe<StringFilter>
  sections?: InputMaybe<SectionManyRelationFilter>
}

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Video = {
  __typename?: 'Video'
  content?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  createdBy?: Maybe<User>
  file?: Maybe<FileFieldOutput>
  heroImage?: Maybe<Photo>
  id: Scalars['ID']['output']
  isFeed?: Maybe<Scalars['Boolean']['output']>
  isShorts?: Maybe<Scalars['Boolean']['output']>
  manualOrderOfRelatedPosts?: Maybe<Scalars['JSON']['output']>
  name?: Maybe<Scalars['String']['output']>
  publishedDate?: Maybe<Scalars['DateTime']['output']>
  related_posts?: Maybe<Array<Post>>
  related_postsCount?: Maybe<Scalars['Int']['output']>
  related_postsInInputOrder?: Maybe<Array<Maybe<Post>>>
  state?: Maybe<Scalars['String']['output']>
  tags?: Maybe<Array<Tag>>
  tagsCount?: Maybe<Scalars['Int']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  updatedBy?: Maybe<User>
  uploader?: Maybe<Scalars['String']['output']>
  uploaderEmail?: Maybe<Scalars['String']['output']>
  videoSection?: Maybe<Scalars['String']['output']>
  videoSrc?: Maybe<Scalars['String']['output']>
  youtubeUrl?: Maybe<Scalars['String']['output']>
}

export type VideoRelated_PostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>
  orderBy?: Array<PostOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: PostWhereInput
}

export type VideoRelated_PostsCountArgs = {
  where?: PostWhereInput
}

export type VideoTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>
  orderBy?: Array<TagOrderByInput>
  skip?: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  where?: TagWhereInput
}

export type VideoTagsCountArgs = {
  where?: TagWhereInput
}

export type VideoCreateInput = {
  content?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>
  file?: InputMaybe<FileFieldInput>
  heroImage?: InputMaybe<PhotoRelateToOneForCreateInput>
  isFeed?: InputMaybe<Scalars['Boolean']['input']>
  isShorts?: InputMaybe<Scalars['Boolean']['input']>
  manualOrderOfRelatedPosts?: InputMaybe<Scalars['JSON']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  publishedDate?: InputMaybe<Scalars['DateTime']['input']>
  related_posts?: InputMaybe<PostRelateToManyForCreateInput>
  state?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<TagRelateToManyForCreateInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForCreateInput>
  uploader?: InputMaybe<Scalars['String']['input']>
  uploaderEmail?: InputMaybe<Scalars['String']['input']>
  videoSection?: InputMaybe<Scalars['String']['input']>
  youtubeUrl?: InputMaybe<Scalars['String']['input']>
}

export type VideoOrderByInput = {
  content?: InputMaybe<OrderDirection>
  createdAt?: InputMaybe<OrderDirection>
  id?: InputMaybe<OrderDirection>
  isFeed?: InputMaybe<OrderDirection>
  isShorts?: InputMaybe<OrderDirection>
  name?: InputMaybe<OrderDirection>
  publishedDate?: InputMaybe<OrderDirection>
  state?: InputMaybe<OrderDirection>
  updatedAt?: InputMaybe<OrderDirection>
  uploader?: InputMaybe<OrderDirection>
  uploaderEmail?: InputMaybe<OrderDirection>
  videoSection?: InputMaybe<OrderDirection>
  youtubeUrl?: InputMaybe<OrderDirection>
}

export type VideoRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<VideoWhereUniqueInput>>
  create?: InputMaybe<Array<VideoCreateInput>>
}

export type VideoRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<VideoWhereUniqueInput>>
  create?: InputMaybe<Array<VideoCreateInput>>
  disconnect?: InputMaybe<Array<VideoWhereUniqueInput>>
  set?: InputMaybe<Array<VideoWhereUniqueInput>>
}

export type VideoRelateToOneForCreateInput = {
  connect?: InputMaybe<VideoWhereUniqueInput>
  create?: InputMaybe<VideoCreateInput>
}

export type VideoRelateToOneForUpdateInput = {
  connect?: InputMaybe<VideoWhereUniqueInput>
  create?: InputMaybe<VideoCreateInput>
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
}

export type VideoUpdateArgs = {
  data: VideoUpdateInput
  where: VideoWhereUniqueInput
}

export type VideoUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>
  file?: InputMaybe<FileFieldInput>
  heroImage?: InputMaybe<PhotoRelateToOneForUpdateInput>
  isFeed?: InputMaybe<Scalars['Boolean']['input']>
  isShorts?: InputMaybe<Scalars['Boolean']['input']>
  manualOrderOfRelatedPosts?: InputMaybe<Scalars['JSON']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  publishedDate?: InputMaybe<Scalars['DateTime']['input']>
  related_posts?: InputMaybe<PostRelateToManyForUpdateInput>
  state?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<TagRelateToManyForUpdateInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForUpdateInput>
  uploader?: InputMaybe<Scalars['String']['input']>
  uploaderEmail?: InputMaybe<Scalars['String']['input']>
  videoSection?: InputMaybe<Scalars['String']['input']>
  youtubeUrl?: InputMaybe<Scalars['String']['input']>
}

export type VideoWhereInput = {
  AND?: InputMaybe<Array<VideoWhereInput>>
  NOT?: InputMaybe<Array<VideoWhereInput>>
  OR?: InputMaybe<Array<VideoWhereInput>>
  content?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeNullableFilter>
  createdBy?: InputMaybe<UserWhereInput>
  heroImage?: InputMaybe<PhotoWhereInput>
  id?: InputMaybe<IdFilter>
  isFeed?: InputMaybe<BooleanFilter>
  isShorts?: InputMaybe<BooleanFilter>
  name?: InputMaybe<StringFilter>
  publishedDate?: InputMaybe<DateTimeNullableFilter>
  related_posts?: InputMaybe<PostManyRelationFilter>
  state?: InputMaybe<StringNullableFilter>
  tags?: InputMaybe<TagManyRelationFilter>
  updatedAt?: InputMaybe<DateTimeNullableFilter>
  updatedBy?: InputMaybe<UserWhereInput>
  uploader?: InputMaybe<StringFilter>
  uploaderEmail?: InputMaybe<StringFilter>
  videoSection?: InputMaybe<StringNullableFilter>
  youtubeUrl?: InputMaybe<StringFilter>
}

export type VideoWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Warning = {
  __typename?: 'Warning'
  content?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  createdBy?: Maybe<User>
  id: Scalars['ID']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  updatedBy?: Maybe<User>
}

export type WarningCreateInput = {
  content?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForCreateInput>
}

export type WarningOrderByInput = {
  content?: InputMaybe<OrderDirection>
  createdAt?: InputMaybe<OrderDirection>
  id?: InputMaybe<OrderDirection>
  updatedAt?: InputMaybe<OrderDirection>
}

export type WarningRelateToOneForCreateInput = {
  connect?: InputMaybe<WarningWhereUniqueInput>
  create?: InputMaybe<WarningCreateInput>
}

export type WarningRelateToOneForUpdateInput = {
  connect?: InputMaybe<WarningWhereUniqueInput>
  create?: InputMaybe<WarningCreateInput>
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
}

export type WarningUpdateArgs = {
  data: WarningUpdateInput
  where: WarningWhereUniqueInput
}

export type WarningUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  updatedBy?: InputMaybe<UserRelateToOneForUpdateInput>
}

export type WarningWhereInput = {
  AND?: InputMaybe<Array<WarningWhereInput>>
  NOT?: InputMaybe<Array<WarningWhereInput>>
  OR?: InputMaybe<Array<WarningWhereInput>>
  content?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeNullableFilter>
  createdBy?: InputMaybe<UserWhereInput>
  id?: InputMaybe<IdFilter>
  updatedAt?: InputMaybe<DateTimeNullableFilter>
  updatedBy?: InputMaybe<UserWhereInput>
}

export type WarningWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type EditorChoiceDataFragment = {
  __typename?: 'EditorChoice'
  outlink?: string | null
  heroImage?: {
    __typename?: 'Photo'
    id: string
    resized?: {
      __typename?: 'ResizedImages'
      original?: string | null
      w480?: string | null
      w800?: string | null
      w1200?: string | null
      w1600?: string | null
      w2400?: string | null
    } | null
    resizedWebp?: {
      __typename?: 'ResizedWebPImages'
      original?: string | null
      w480?: string | null
      w800?: string | null
      w1200?: string | null
      w1600?: string | null
      w2400?: string | null
    } | null
  } | null
  choices?: {
    __typename?: 'Post'
    id: string
    title?: string | null
    heroImage?: {
      __typename?: 'Photo'
      id: string
      resized?: {
        __typename?: 'ResizedImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
      resizedWebp?: {
        __typename?: 'ResizedWebPImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
    } | null
  } | null
}

export type ImageDataFragment = {
  __typename?: 'Photo'
  id: string
  resized?: {
    __typename?: 'ResizedImages'
    original?: string | null
    w480?: string | null
    w800?: string | null
    w1200?: string | null
    w1600?: string | null
    w2400?: string | null
  } | null
  resizedWebp?: {
    __typename?: 'ResizedWebPImages'
    original?: string | null
    w480?: string | null
    w800?: string | null
    w1200?: string | null
    w1600?: string | null
    w2400?: string | null
  } | null
}

export type PostOverviewFragment = {
  __typename?: 'Post'
  id: string
  title?: string | null
  createdAt?: any | null
  apiDataBrief?: any | null
  apiData?: any | null
  heroImage?: {
    __typename?: 'Photo'
    id: string
    resized?: {
      __typename?: 'ResizedImages'
      original?: string | null
      w480?: string | null
      w800?: string | null
      w1200?: string | null
      w1600?: string | null
      w2400?: string | null
    } | null
    resizedWebp?: {
      __typename?: 'ResizedWebPImages'
      original?: string | null
      w480?: string | null
      w800?: string | null
      w1200?: string | null
      w1600?: string | null
      w2400?: string | null
    } | null
  } | null
  og_image?: {
    __typename?: 'Photo'
    id: string
    resized?: {
      __typename?: 'ResizedImages'
      original?: string | null
      w480?: string | null
      w800?: string | null
      w1200?: string | null
      w1600?: string | null
      w2400?: string | null
    } | null
    resizedWebp?: {
      __typename?: 'ResizedWebPImages'
      original?: string | null
      w480?: string | null
      w800?: string | null
      w1200?: string | null
      w1600?: string | null
      w2400?: string | null
    } | null
  } | null
}

export type PostItemFragment = {
  __typename?: 'Post'
  id: string
  title?: string | null
  heroImage?: {
    __typename?: 'Photo'
    id: string
    resized?: {
      __typename?: 'ResizedImages'
      original?: string | null
      w480?: string | null
      w800?: string | null
      w1200?: string | null
      w1600?: string | null
      w2400?: string | null
    } | null
    resizedWebp?: {
      __typename?: 'ResizedWebPImages'
      original?: string | null
      w480?: string | null
      w800?: string | null
      w1200?: string | null
      w1600?: string | null
      w2400?: string | null
    } | null
  } | null
}

export type TopicPostFragment = {
  __typename?: 'Post'
  id: string
  title?: string | null
  apiDataBrief?: any | null
  apiData?: any | null
  heroImage?: {
    __typename?: 'Photo'
    id: string
    resized?: {
      __typename?: 'ResizedImages'
      original?: string | null
      w480?: string | null
      w800?: string | null
      w1200?: string | null
      w1600?: string | null
      w2400?: string | null
    } | null
    resizedWebp?: {
      __typename?: 'ResizedWebPImages'
      original?: string | null
      w480?: string | null
      w800?: string | null
      w1200?: string | null
      w1600?: string | null
      w2400?: string | null
    } | null
  } | null
}

export type RelatedPostFragment = {
  __typename?: 'Post'
  id: string
  title?: string | null
  heroImage?: {
    __typename?: 'Photo'
    id: string
    resized?: {
      __typename?: 'ResizedImages'
      original?: string | null
      w480?: string | null
      w800?: string | null
      w1200?: string | null
      w1600?: string | null
      w2400?: string | null
    } | null
    resizedWebp?: {
      __typename?: 'ResizedWebPImages'
      original?: string | null
      w480?: string | null
      w800?: string | null
      w1200?: string | null
      w1600?: string | null
      w2400?: string | null
    } | null
  } | null
  og_image?: {
    __typename?: 'Photo'
    id: string
    resized?: {
      __typename?: 'ResizedImages'
      original?: string | null
      w480?: string | null
      w800?: string | null
      w1200?: string | null
      w1600?: string | null
      w2400?: string | null
    } | null
    resizedWebp?: {
      __typename?: 'ResizedWebPImages'
      original?: string | null
      w480?: string | null
      w800?: string | null
      w1200?: string | null
      w1600?: string | null
      w2400?: string | null
    } | null
  } | null
  sections?: Array<{
    __typename?: 'Section'
    name?: string | null
    color?: string | null
  }> | null
}

export type LatestShortsFragment = {
  __typename?: 'Video'
  id: string
  name?: string | null
  uploader?: string | null
  videoSrc?: string | null
  youtubeUrl?: string | null
  heroImage?: {
    __typename?: 'Photo'
    id: string
    resized?: {
      __typename?: 'ResizedImages'
      original?: string | null
      w480?: string | null
      w800?: string | null
      w1200?: string | null
      w1600?: string | null
      w2400?: string | null
    } | null
    resizedWebp?: {
      __typename?: 'ResizedWebPImages'
      original?: string | null
      w480?: string | null
      w800?: string | null
      w1200?: string | null
      w1600?: string | null
      w2400?: string | null
    } | null
  } | null
}

export type ShortsDataFragment = {
  __typename?: 'Video'
  id: string
  name?: string | null
  state?: string | null
  isShorts?: boolean | null
  uploader?: string | null
  videoSection?: string | null
  tags?: Array<{ __typename?: 'Tag'; id: string }> | null
}

export type CreateShortsPreviewMutationVariables = Exact<{
  name: Scalars['String']['input']
  file: Scalars['Upload']['input']
}>

export type CreateShortsPreviewMutation = {
  __typename?: 'Mutation'
  photo?: { __typename?: 'Photo'; id: string } | null
}

export type CreateCreativityShortsMutationVariables = Exact<{
  title: Scalars['String']['input']
  photoId: Scalars['ID']['input']
  file: Scalars['Upload']['input']
  author?: InputMaybe<Scalars['String']['input']>
  authorEmail: Scalars['String']['input']
  description?: InputMaybe<Scalars['String']['input']>
}>

export type CreateCreativityShortsMutation = {
  __typename?: 'Mutation'
  shorts?: { __typename?: 'Video'; id: string } | null
}

export type GetCategoryInformationQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>
}>

export type GetCategoryInformationQuery = {
  __typename?: 'Query'
  category?: {
    __typename?: 'Category'
    slug?: string | null
    name?: string | null
    state?: string | null
    sections?: Array<{
      __typename?: 'Section'
      slug?: string | null
      color?: string | null
    }> | null
  } | null
}

export type GetAuthorInformationQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type GetAuthorInformationQuery = {
  __typename?: 'Query'
  contact?: { __typename?: 'Contact'; id: string; name?: string | null } | null
}

export type GetEditorChoicesQueryVariables = Exact<{ [key: string]: never }>

export type GetEditorChoicesQuery = {
  __typename?: 'Query'
  editorChoices?: Array<{
    __typename?: 'EditorChoice'
    outlink?: string | null
    heroImage?: {
      __typename?: 'Photo'
      id: string
      resized?: {
        __typename?: 'ResizedImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
      resizedWebp?: {
        __typename?: 'ResizedWebPImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
    } | null
    choices?: {
      __typename?: 'Post'
      id: string
      title?: string | null
      heroImage?: {
        __typename?: 'Photo'
        id: string
        resized?: {
          __typename?: 'ResizedImages'
          original?: string | null
          w480?: string | null
          w800?: string | null
          w1200?: string | null
          w1600?: string | null
          w2400?: string | null
        } | null
        resizedWebp?: {
          __typename?: 'ResizedWebPImages'
          original?: string | null
          w480?: string | null
          w800?: string | null
          w1200?: string | null
          w1600?: string | null
          w2400?: string | null
        } | null
      } | null
    } | null
  }> | null
}

export type GetLiveEventForHomepageQueryVariables = Exact<{
  startDate: Scalars['DateTime']['input']
}>

export type GetLiveEventForHomepageQuery = {
  __typename?: 'Query'
  events?: Array<{
    __typename?: 'Event'
    name?: string | null
    link?: string | null
    heroImage?: {
      __typename?: 'Photo'
      id: string
      resized?: {
        __typename?: 'ResizedImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
      resizedWebp?: {
        __typename?: 'ResizedWebPImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
    } | null
  }> | null
}

export type GetExternalByIdQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type GetExternalByIdQuery = {
  __typename?: 'Query'
  external?: {
    __typename?: 'External'
    id: string
    title?: string | null
    thumb?: string | null
    extend_byline?: string | null
    publishedDate?: any | null
    brief?: string | null
    content?: string | null
    tags?: Array<{
      __typename?: 'Tag'
      name?: string | null
      slug?: string | null
    }> | null
  } | null
}

export type GetRelatedPostsByExternalIdQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type GetRelatedPostsByExternalIdQuery = {
  __typename?: 'Query'
  external?: {
    __typename?: 'External'
    relateds?: Array<{
      __typename?: 'Post'
      id: string
      title?: string | null
      heroImage?: {
        __typename?: 'Photo'
        id: string
        resized?: {
          __typename?: 'ResizedImages'
          original?: string | null
          w480?: string | null
          w800?: string | null
          w1200?: string | null
          w1600?: string | null
          w2400?: string | null
        } | null
        resizedWebp?: {
          __typename?: 'ResizedWebPImages'
          original?: string | null
          w480?: string | null
          w800?: string | null
          w1200?: string | null
          w1600?: string | null
          w2400?: string | null
        } | null
      } | null
      og_image?: {
        __typename?: 'Photo'
        id: string
        resized?: {
          __typename?: 'ResizedImages'
          original?: string | null
          w480?: string | null
          w800?: string | null
          w1200?: string | null
          w1600?: string | null
          w2400?: string | null
        } | null
        resizedWebp?: {
          __typename?: 'ResizedWebPImages'
          original?: string | null
          w480?: string | null
          w800?: string | null
          w1200?: string | null
          w1600?: string | null
          w2400?: string | null
        } | null
      } | null
      sections?: Array<{
        __typename?: 'Section'
        name?: string | null
        color?: string | null
      }> | null
    }> | null
  } | null
}

export type GetExternalsByPartnerSlugQueryVariables = Exact<{
  skip: Scalars['Int']['input']
  take: Scalars['Int']['input']
  slug: Scalars['String']['input']
}>

export type GetExternalsByPartnerSlugQuery = {
  __typename?: 'Query'
  externals?: Array<{
    __typename?: 'External'
    id: string
    title?: string | null
    brief?: string | null
    publishedDate?: any | null
    thumb?: string | null
  }> | null
}

export type GetPartnerInformationQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type GetPartnerInformationQuery = {
  __typename?: 'Query'
  partner?: { __typename?: 'Partner'; name?: string | null } | null
}

export type GetPostsBySectionSlugQueryVariables = Exact<{
  skip: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  slug: Scalars['String']['input']
}>

export type GetPostsBySectionSlugQuery = {
  __typename?: 'Query'
  posts?: Array<{
    __typename?: 'Post'
    id: string
    title?: string | null
    createdAt?: any | null
    apiDataBrief?: any | null
    apiData?: any | null
    heroImage?: {
      __typename?: 'Photo'
      id: string
      resized?: {
        __typename?: 'ResizedImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
      resizedWebp?: {
        __typename?: 'ResizedWebPImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
    } | null
    og_image?: {
      __typename?: 'Photo'
      id: string
      resized?: {
        __typename?: 'ResizedImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
      resizedWebp?: {
        __typename?: 'ResizedWebPImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
    } | null
  }> | null
}

export type GetFlashNewsQueryVariables = Exact<{ [key: string]: never }>

export type GetFlashNewsQuery = {
  __typename?: 'Query'
  posts?: Array<{
    __typename?: 'Post'
    id: string
    title?: string | null
  }> | null
}

export type GetPostsByCategorySlugQueryVariables = Exact<{
  skip: Scalars['Int']['input']
  take?: InputMaybe<Scalars['Int']['input']>
  slug: Scalars['String']['input']
}>

export type GetPostsByCategorySlugQuery = {
  __typename?: 'Query'
  posts?: Array<{
    __typename?: 'Post'
    id: string
    title?: string | null
    createdAt?: any | null
    apiDataBrief?: any | null
    apiData?: any | null
    heroImage?: {
      __typename?: 'Photo'
      id: string
      resized?: {
        __typename?: 'ResizedImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
      resizedWebp?: {
        __typename?: 'ResizedWebPImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
    } | null
    og_image?: {
      __typename?: 'Photo'
      id: string
      resized?: {
        __typename?: 'ResizedImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
      resizedWebp?: {
        __typename?: 'ResizedWebPImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
    } | null
  }> | null
}

export type GetPostsByAuthorIdQueryVariables = Exact<{
  skip: Scalars['Int']['input']
  take: Scalars['Int']['input']
  id: Scalars['ID']['input']
}>

export type GetPostsByAuthorIdQuery = {
  __typename?: 'Query'
  posts?: Array<{
    __typename?: 'Post'
    id: string
    title?: string | null
    createdAt?: any | null
    apiDataBrief?: any | null
    apiData?: any | null
    sections?: Array<{
      __typename?: 'Section'
      name?: string | null
      color?: string | null
    }> | null
    heroImage?: {
      __typename?: 'Photo'
      id: string
      resized?: {
        __typename?: 'ResizedImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
      resizedWebp?: {
        __typename?: 'ResizedWebPImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
    } | null
    og_image?: {
      __typename?: 'Photo'
      id: string
      resized?: {
        __typename?: 'ResizedImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
      resizedWebp?: {
        __typename?: 'ResizedWebPImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
    } | null
  }> | null
}

export type GetPostsByTagSlugQueryVariables = Exact<{
  skip: Scalars['Int']['input']
  take: Scalars['Int']['input']
  slug: Scalars['String']['input']
}>

export type GetPostsByTagSlugQuery = {
  __typename?: 'Query'
  posts?: Array<{
    __typename?: 'Post'
    id: string
    title?: string | null
    createdAt?: any | null
    apiDataBrief?: any | null
    apiData?: any | null
    sections?: Array<{
      __typename?: 'Section'
      name?: string | null
      color?: string | null
    }> | null
    heroImage?: {
      __typename?: 'Photo'
      id: string
      resized?: {
        __typename?: 'ResizedImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
      resizedWebp?: {
        __typename?: 'ResizedWebPImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
    } | null
    og_image?: {
      __typename?: 'Photo'
      id: string
      resized?: {
        __typename?: 'ResizedImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
      resizedWebp?: {
        __typename?: 'ResizedWebPImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
    } | null
  }> | null
}

export type GetPostByIdQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type GetPostByIdQuery = {
  __typename?: 'Query'
  post?: {
    __typename?: 'Post'
    id: string
    title?: string | null
    subtitle?: string | null
    heroCaption?: string | null
    publishedDate?: any | null
    apiData?: any | null
    apiDataBrief?: any | null
    isAdult?: boolean | null
    heroImage?: {
      __typename?: 'Photo'
      id: string
      resized?: {
        __typename?: 'ResizedImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
      resizedWebp?: {
        __typename?: 'ResizedWebPImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
    } | null
    og_image?: {
      __typename?: 'Photo'
      id: string
      resized?: {
        __typename?: 'ResizedImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
      resizedWebp?: {
        __typename?: 'ResizedWebPImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
    } | null
    tags?: Array<{
      __typename?: 'Tag'
      slug?: string | null
      name?: string | null
    }> | null
    tags_algo?: Array<{
      __typename?: 'Tag'
      slug?: string | null
      name?: string | null
    }> | null
    sections?: Array<{
      __typename?: 'Section'
      name?: string | null
      color?: string | null
    }> | null
    writers?: Array<{
      __typename?: 'Contact'
      id: string
      name?: string | null
    }> | null
    photographers?: Array<{
      __typename?: 'Contact'
      id: string
      name?: string | null
    }> | null
    designers?: Array<{
      __typename?: 'Contact'
      id: string
      name?: string | null
    }> | null
    Warning?: { __typename?: 'Warning'; content?: string | null } | null
  } | null
}

export type GetRelatedPostsByIdQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type GetRelatedPostsByIdQuery = {
  __typename?: 'Query'
  post?: {
    __typename?: 'Post'
    relateds?: Array<{
      __typename?: 'Post'
      id: string
      title?: string | null
      heroImage?: {
        __typename?: 'Photo'
        id: string
        resized?: {
          __typename?: 'ResizedImages'
          original?: string | null
          w480?: string | null
          w800?: string | null
          w1200?: string | null
          w1600?: string | null
          w2400?: string | null
        } | null
        resizedWebp?: {
          __typename?: 'ResizedWebPImages'
          original?: string | null
          w480?: string | null
          w800?: string | null
          w1200?: string | null
          w1600?: string | null
          w2400?: string | null
        } | null
      } | null
      og_image?: {
        __typename?: 'Photo'
        id: string
        resized?: {
          __typename?: 'ResizedImages'
          original?: string | null
          w480?: string | null
          w800?: string | null
          w1200?: string | null
          w1600?: string | null
          w2400?: string | null
        } | null
        resizedWebp?: {
          __typename?: 'ResizedWebPImages'
          original?: string | null
          w480?: string | null
          w800?: string | null
          w1200?: string | null
          w1600?: string | null
          w2400?: string | null
        } | null
      } | null
      sections?: Array<{
        __typename?: 'Section'
        name?: string | null
        color?: string | null
      }> | null
    }> | null
  } | null
}

export type GetSectionInformationQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type GetSectionInformationQuery = {
  __typename?: 'Query'
  section?: {
    __typename?: 'Section'
    slug?: string | null
    name?: string | null
    color?: string | null
    state?: string | null
  } | null
}

export type GetTagInformationQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type GetTagInformationQuery = {
  __typename?: 'Query'
  tag?: {
    __typename?: 'Tag'
    name?: string | null
    slug?: string | null
  } | null
}

export type GetTopicsQueryVariables = Exact<{ [key: string]: never }>

export type GetTopicsQuery = {
  __typename?: 'Query'
  topics?: Array<{
    __typename?: 'Topic'
    name?: string | null
    slug?: string | null
    posts?: Array<{
      __typename?: 'Post'
      id: string
      title?: string | null
      heroImage?: {
        __typename?: 'Photo'
        id: string
        resized?: {
          __typename?: 'ResizedImages'
          original?: string | null
          w480?: string | null
          w800?: string | null
          w1200?: string | null
          w1600?: string | null
          w2400?: string | null
        } | null
        resizedWebp?: {
          __typename?: 'ResizedWebPImages'
          original?: string | null
          w480?: string | null
          w800?: string | null
          w1200?: string | null
          w1600?: string | null
          w2400?: string | null
        } | null
      } | null
    }> | null
  }> | null
}

export type GetTopicBasicInfoQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type GetTopicBasicInfoQuery = {
  __typename?: 'Query'
  topic?: {
    __typename?: 'Topic'
    slug?: string | null
    name?: string | null
    og_title?: string | null
    apiDataBrief?: any | null
    og_description?: string | null
    state?: string | null
    leading?: string | null
    type?: string | null
    style?: string | null
    heroUrl?: string | null
    manualOrderOfSlideshowImages?: any | null
    heroVideo?: {
      __typename?: 'Video'
      state?: string | null
      videoSrc?: string | null
      heroImage?: {
        __typename?: 'Photo'
        id: string
        resized?: {
          __typename?: 'ResizedImages'
          original?: string | null
          w480?: string | null
          w800?: string | null
          w1200?: string | null
          w1600?: string | null
          w2400?: string | null
        } | null
        resizedWebp?: {
          __typename?: 'ResizedWebPImages'
          original?: string | null
          w480?: string | null
          w800?: string | null
          w1200?: string | null
          w1600?: string | null
          w2400?: string | null
        } | null
      } | null
    } | null
    og_image?: {
      __typename?: 'Photo'
      id: string
      resized?: {
        __typename?: 'ResizedImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
      resizedWebp?: {
        __typename?: 'ResizedWebPImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
    } | null
    heroImage?: {
      __typename?: 'Photo'
      id: string
      resized?: {
        __typename?: 'ResizedImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
      resizedWebp?: {
        __typename?: 'ResizedWebPImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
    } | null
    slideshow_images?: Array<{
      __typename?: 'Photo'
      id: string
      name?: string | null
      topicKeywords?: string | null
      resized?: {
        __typename?: 'ResizedImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
      resizedWebp?: {
        __typename?: 'ResizedWebPImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
    }> | null
    tags?: Array<{
      __typename?: 'Tag'
      id: string
      name?: string | null
      slug?: string | null
    }> | null
  } | null
}

export type GetListTypeTopcPostsQueryVariables = Exact<{
  slug: Scalars['String']['input']
  take: Scalars['Int']['input']
  skip?: InputMaybe<Scalars['Int']['input']>
  withAmount?: Scalars['Boolean']['input']
}>

export type GetListTypeTopcPostsQuery = {
  __typename?: 'Query'
  topic?: {
    __typename?: 'Topic'
    postsCount?: number | null
    posts?: Array<{
      __typename?: 'Post'
      id: string
      title?: string | null
      apiDataBrief?: any | null
      apiData?: any | null
      heroImage?: {
        __typename?: 'Photo'
        id: string
        resized?: {
          __typename?: 'ResizedImages'
          original?: string | null
          w480?: string | null
          w800?: string | null
          w1200?: string | null
          w1600?: string | null
          w2400?: string | null
        } | null
        resizedWebp?: {
          __typename?: 'ResizedWebPImages'
          original?: string | null
          w480?: string | null
          w800?: string | null
          w1200?: string | null
          w1600?: string | null
          w2400?: string | null
        } | null
      } | null
    }> | null
  } | null
}

export type GetGroupTypeTopicPostsQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type GetGroupTypeTopicPostsQuery = {
  __typename?: 'Query'
  topic?: {
    __typename?: 'Topic'
    posts?: Array<{
      __typename?: 'Post'
      id: string
      title?: string | null
      apiDataBrief?: any | null
      apiData?: any | null
      tags?: Array<{ __typename?: 'Tag'; id: string }> | null
      heroImage?: {
        __typename?: 'Photo'
        id: string
        resized?: {
          __typename?: 'ResizedImages'
          original?: string | null
          w480?: string | null
          w800?: string | null
          w1200?: string | null
          w1600?: string | null
          w2400?: string | null
        } | null
        resizedWebp?: {
          __typename?: 'ResizedWebPImages'
          original?: string | null
          w480?: string | null
          w800?: string | null
          w1200?: string | null
          w1600?: string | null
          w2400?: string | null
        } | null
      } | null
    }> | null
  } | null
}

export type GetTopicListQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
}>

export type GetTopicListQuery = {
  __typename?: 'Query'
  topics?: Array<{
    __typename?: 'Topic'
    id: string
    name?: string | null
    slug?: string | null
    apiDataBrief?: any | null
    heroImage?: {
      __typename?: 'Photo'
      id: string
      resized?: {
        __typename?: 'ResizedImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
      resizedWebp?: {
        __typename?: 'ResizedWebPImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
    } | null
  }> | null
}

export type GetLatestShortsQueryVariables = Exact<{
  amount: Scalars['Int']['input']
  start: Scalars['Int']['input']
}>

export type GetLatestShortsQuery = {
  __typename?: 'Query'
  news?: Array<{
    __typename?: 'Video'
    id: string
    name?: string | null
    uploader?: string | null
    videoSrc?: string | null
    youtubeUrl?: string | null
    heroImage?: {
      __typename?: 'Photo'
      id: string
      resized?: {
        __typename?: 'ResizedImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
      resizedWebp?: {
        __typename?: 'ResizedWebPImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
    } | null
  }> | null
  creativity?: Array<{
    __typename?: 'Video'
    id: string
    name?: string | null
    uploader?: string | null
    videoSrc?: string | null
    youtubeUrl?: string | null
    heroImage?: {
      __typename?: 'Photo'
      id: string
      resized?: {
        __typename?: 'ResizedImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
      resizedWebp?: {
        __typename?: 'ResizedWebPImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
    } | null
  }> | null
}

export type GetShortsDataQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type GetShortsDataQuery = {
  __typename?: 'Query'
  video?: {
    __typename?: 'Video'
    id: string
    name?: string | null
    state?: string | null
    isShorts?: boolean | null
    uploader?: string | null
    videoSection?: string | null
    tags?: Array<{ __typename?: 'Tag'; id: string }> | null
  } | null
}

export type GetShortsByTagAndVideoSectionQueryVariables = Exact<{
  tagId: Scalars['ID']['input']
  section: Scalars['String']['input']
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
}>

export type GetShortsByTagAndVideoSectionQuery = {
  __typename?: 'Query'
  videos?: Array<{
    __typename?: 'Video'
    id: string
    name?: string | null
    uploader?: string | null
    videoSrc?: string | null
    youtubeUrl?: string | null
    heroImage?: {
      __typename?: 'Photo'
      id: string
      resized?: {
        __typename?: 'ResizedImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
      resizedWebp?: {
        __typename?: 'ResizedWebPImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
    } | null
  }> | null
}

export type GetShortsByVideoSectionQueryVariables = Exact<{
  section: Scalars['String']['input']
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
}>

export type GetShortsByVideoSectionQuery = {
  __typename?: 'Query'
  videos?: Array<{
    __typename?: 'Video'
    id: string
    name?: string | null
    uploader?: string | null
    videoSrc?: string | null
    youtubeUrl?: string | null
    heroImage?: {
      __typename?: 'Photo'
      id: string
      resized?: {
        __typename?: 'ResizedImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
      resizedWebp?: {
        __typename?: 'ResizedWebPImages'
        original?: string | null
        w480?: string | null
        w800?: string | null
        w1200?: string | null
        w1600?: string | null
        w2400?: string | null
      } | null
    } | null
  }> | null
}

export const ImageDataFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Photo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resized' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resizedWebp' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ImageDataFragment, unknown>
export const PostItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PostItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Post' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heroImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Photo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resized' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resizedWebp' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PostItemFragment, unknown>
export const EditorChoiceDataFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EditorChoiceData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'EditorChoice' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'outlink' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heroImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'choices' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PostItem' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Photo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resized' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resizedWebp' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PostItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Post' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heroImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EditorChoiceDataFragment, unknown>
export const PostOverviewFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PostOverview' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Post' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'apiDataBrief' } },
          { kind: 'Field', name: { kind: 'Name', value: 'apiData' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heroImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'og_image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Photo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resized' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resizedWebp' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PostOverviewFragment, unknown>
export const TopicPostFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TopicPost' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Post' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'apiDataBrief' } },
          { kind: 'Field', name: { kind: 'Name', value: 'apiData' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heroImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Photo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resized' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resizedWebp' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TopicPostFragment, unknown>
export const RelatedPostFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RelatedPost' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Post' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heroImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'og_image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sections' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'color' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Photo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resized' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resizedWebp' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RelatedPostFragment, unknown>
export const LatestShortsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'LatestShorts' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Video' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uploader' } },
          { kind: 'Field', name: { kind: 'Name', value: 'videoSrc' } },
          { kind: 'Field', name: { kind: 'Name', value: 'youtubeUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heroImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Photo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resized' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resizedWebp' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LatestShortsFragment, unknown>
export const ShortsDataFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ShortsData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Video' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'state' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isShorts' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uploader' } },
          { kind: 'Field', name: { kind: 'Name', value: 'videoSection' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tags' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: { kind: 'IntValue', value: '1' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ShortsDataFragment, unknown>
export const CreateShortsPreviewDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateShortsPreview' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'file' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Upload' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'photo' },
            name: { kind: 'Name', value: 'createPhoto' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'name' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'name' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'imageFile' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'upload' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'file' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateShortsPreviewMutation,
  CreateShortsPreviewMutationVariables
>
export const CreateCreativityShortsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateCreativityShorts' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'title' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'photoId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'file' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Upload' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'author' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'authorEmail' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'description' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'shorts' },
            name: { kind: 'Name', value: 'createVideo' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'videoSection' },
                      value: {
                        kind: 'StringValue',
                        value: 'creativity',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'state' },
                      value: {
                        kind: 'StringValue',
                        value: 'draft',
                        block: false,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'isShorts' },
                      value: { kind: 'BooleanValue', value: true },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'name' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'title' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'file' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'upload' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'file' },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'uploader' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'author' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'uploaderEmail' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'authorEmail' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'content' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'description' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'heroImage' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'connect' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'id' },
                                  value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'photoId' },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateCreativityShortsMutation,
  CreateCreativityShortsMutationVariables
>
export const GetCategoryInformationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetCategoryInformation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'category' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'slug' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sections' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'color' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCategoryInformationQuery,
  GetCategoryInformationQueryVariables
>
export const GetAuthorInformationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAuthorInformation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'contact' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAuthorInformationQuery,
  GetAuthorInformationQueryVariables
>
export const GetEditorChoicesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetEditorChoices' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'editorChoices' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'order' },
                          value: { kind: 'EnumValue', value: 'asc' },
                        },
                      ],
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: { kind: 'IntValue', value: '10' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'state' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: {
                              kind: 'StringValue',
                              value: 'published',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EditorChoiceData' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Photo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resized' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resizedWebp' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PostItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Post' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heroImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EditorChoiceData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'EditorChoice' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'outlink' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heroImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'choices' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PostItem' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetEditorChoicesQuery,
  GetEditorChoicesQueryVariables
>
export const GetLiveEventForHomepageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetLiveEventForHomepage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'startDate' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'events' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'publishedDate' },
                          value: { kind: 'EnumValue', value: 'desc' },
                        },
                      ],
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: { kind: 'IntValue', value: '1' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'eventType' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: {
                              kind: 'StringValue',
                              value: 'livestreaming',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'state' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: {
                              kind: 'StringValue',
                              value: 'published',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'startDate' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'lte' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'startDate' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'link' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'heroImage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageData' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Photo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resized' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resizedWebp' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetLiveEventForHomepageQuery,
  GetLiveEventForHomepageQueryVariables
>
export const GetExternalByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetExternalById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'external' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'thumb' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'extend_byline' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'publishedDate' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'brief' } },
                { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tags' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetExternalByIdQuery,
  GetExternalByIdQueryVariables
>
export const GetRelatedPostsByExternalIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetRelatedPostsByExternalId' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'external' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'relateds' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'RelatedPost' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Photo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resized' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resizedWebp' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RelatedPost' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Post' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heroImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'og_image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sections' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'color' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetRelatedPostsByExternalIdQuery,
  GetRelatedPostsByExternalIdQueryVariables
>
export const GetExternalsByPartnerSlugDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetExternalsByPartnerSlug' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'externals' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'partner' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'slug' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'equals' },
                                  value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'slug' },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'publishedDate' },
                      value: { kind: 'EnumValue', value: 'desc' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'brief' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'publishedDate' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'thumb' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetExternalsByPartnerSlugQuery,
  GetExternalsByPartnerSlugQueryVariables
>
export const GetPartnerInformationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetPartnerInformation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'partner' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'slug' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetPartnerInformationQuery,
  GetPartnerInformationQueryVariables
>
export const GetPostsBySectionSlugDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetPostsBySectionSlug' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'posts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'state' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: {
                              kind: 'StringValue',
                              value: 'published',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'sections' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'some' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'slug' },
                                  value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                      {
                                        kind: 'ObjectField',
                                        name: { kind: 'Name', value: 'equals' },
                                        value: {
                                          kind: 'Variable',
                                          name: { kind: 'Name', value: 'slug' },
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'publishedDate' },
                          value: { kind: 'EnumValue', value: 'desc' },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PostOverview' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Photo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resized' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resizedWebp' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PostOverview' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Post' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'apiDataBrief' } },
          { kind: 'Field', name: { kind: 'Name', value: 'apiData' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heroImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'og_image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetPostsBySectionSlugQuery,
  GetPostsBySectionSlugQueryVariables
>
export const GetFlashNewsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetFlashNews' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'posts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: { kind: 'IntValue', value: '8' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'publishedDate' },
                          value: { kind: 'EnumValue', value: 'desc' },
                        },
                      ],
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'state' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: {
                              kind: 'StringValue',
                              value: 'published',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetFlashNewsQuery, GetFlashNewsQueryVariables>
export const GetPostsByCategorySlugDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetPostsByCategorySlug' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'posts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'state' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: {
                              kind: 'StringValue',
                              value: 'published',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'categories' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'some' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'slug' },
                                  value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                      {
                                        kind: 'ObjectField',
                                        name: { kind: 'Name', value: 'equals' },
                                        value: {
                                          kind: 'Variable',
                                          name: { kind: 'Name', value: 'slug' },
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'publishedDate' },
                          value: { kind: 'EnumValue', value: 'desc' },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PostOverview' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Photo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resized' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resizedWebp' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PostOverview' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Post' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'apiDataBrief' } },
          { kind: 'Field', name: { kind: 'Name', value: 'apiData' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heroImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'og_image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetPostsByCategorySlugQuery,
  GetPostsByCategorySlugQueryVariables
>
export const GetPostsByAuthorIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetPostsByAuthorId' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'posts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'state' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: {
                              kind: 'StringValue',
                              value: 'published',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'OR' },
                      value: {
                        kind: 'ListValue',
                        values: [
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'writers' },
                                value: {
                                  kind: 'ObjectValue',
                                  fields: [
                                    {
                                      kind: 'ObjectField',
                                      name: { kind: 'Name', value: 'some' },
                                      value: {
                                        kind: 'ObjectValue',
                                        fields: [
                                          {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'id' },
                                            value: {
                                              kind: 'ObjectValue',
                                              fields: [
                                                {
                                                  kind: 'ObjectField',
                                                  name: {
                                                    kind: 'Name',
                                                    value: 'equals',
                                                  },
                                                  value: {
                                                    kind: 'Variable',
                                                    name: {
                                                      kind: 'Name',
                                                      value: 'id',
                                                    },
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'photographers' },
                                value: {
                                  kind: 'ObjectValue',
                                  fields: [
                                    {
                                      kind: 'ObjectField',
                                      name: { kind: 'Name', value: 'some' },
                                      value: {
                                        kind: 'ObjectValue',
                                        fields: [
                                          {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'id' },
                                            value: {
                                              kind: 'ObjectValue',
                                              fields: [
                                                {
                                                  kind: 'ObjectField',
                                                  name: {
                                                    kind: 'Name',
                                                    value: 'equals',
                                                  },
                                                  value: {
                                                    kind: 'Variable',
                                                    name: {
                                                      kind: 'Name',
                                                      value: 'id',
                                                    },
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'publishedDate' },
                          value: { kind: 'EnumValue', value: 'desc' },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sections' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'color' } },
                    ],
                  },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PostOverview' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Photo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resized' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resizedWebp' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PostOverview' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Post' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'apiDataBrief' } },
          { kind: 'Field', name: { kind: 'Name', value: 'apiData' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heroImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'og_image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetPostsByAuthorIdQuery,
  GetPostsByAuthorIdQueryVariables
>
export const GetPostsByTagSlugDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetPostsByTagSlug' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'posts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'state' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: {
                              kind: 'StringValue',
                              value: 'published',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'OR' },
                      value: {
                        kind: 'ListValue',
                        values: [
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'tags' },
                                value: {
                                  kind: 'ObjectValue',
                                  fields: [
                                    {
                                      kind: 'ObjectField',
                                      name: { kind: 'Name', value: 'some' },
                                      value: {
                                        kind: 'ObjectValue',
                                        fields: [
                                          {
                                            kind: 'ObjectField',
                                            name: {
                                              kind: 'Name',
                                              value: 'slug',
                                            },
                                            value: {
                                              kind: 'ObjectValue',
                                              fields: [
                                                {
                                                  kind: 'ObjectField',
                                                  name: {
                                                    kind: 'Name',
                                                    value: 'equals',
                                                  },
                                                  value: {
                                                    kind: 'Variable',
                                                    name: {
                                                      kind: 'Name',
                                                      value: 'slug',
                                                    },
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'tags_algo' },
                                value: {
                                  kind: 'ObjectValue',
                                  fields: [
                                    {
                                      kind: 'ObjectField',
                                      name: { kind: 'Name', value: 'some' },
                                      value: {
                                        kind: 'ObjectValue',
                                        fields: [
                                          {
                                            kind: 'ObjectField',
                                            name: {
                                              kind: 'Name',
                                              value: 'slug',
                                            },
                                            value: {
                                              kind: 'ObjectValue',
                                              fields: [
                                                {
                                                  kind: 'ObjectField',
                                                  name: {
                                                    kind: 'Name',
                                                    value: 'equals',
                                                  },
                                                  value: {
                                                    kind: 'Variable',
                                                    name: {
                                                      kind: 'Name',
                                                      value: 'slug',
                                                    },
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'publishedDate' },
                          value: { kind: 'EnumValue', value: 'desc' },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sections' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'color' } },
                    ],
                  },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PostOverview' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Photo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resized' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resizedWebp' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PostOverview' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Post' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'apiDataBrief' } },
          { kind: 'Field', name: { kind: 'Name', value: 'apiData' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heroImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'og_image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetPostsByTagSlugQuery,
  GetPostsByTagSlugQueryVariables
>
export const GetPostByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetPostById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'post' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
                { kind: 'Field', name: { kind: 'Name', value: 'heroCaption' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'publishedDate' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'heroImage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageData' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'og_image' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageData' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tags' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tags_algo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sections' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'color' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'writers' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'photographers' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'designers' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'apiData' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'apiDataBrief' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'Warning' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'content' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'isAdult' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Photo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resized' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resizedWebp' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPostByIdQuery, GetPostByIdQueryVariables>
export const GetRelatedPostsByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetRelatedPostsById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'post' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'relateds' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'RelatedPost' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Photo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resized' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resizedWebp' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RelatedPost' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Post' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heroImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'og_image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'sections' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'color' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetRelatedPostsByIdQuery,
  GetRelatedPostsByIdQueryVariables
>
export const GetSectionInformationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetSectionInformation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'section' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'slug' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'color' } },
                { kind: 'Field', name: { kind: 'Name', value: 'state' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetSectionInformationQuery,
  GetSectionInformationQueryVariables
>
export const GetTagInformationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetTagInformation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tag' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'slug' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetTagInformationQuery,
  GetTagInformationQueryVariables
>
export const GetTopicsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetTopics' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'topics' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'sortOrder' },
                          value: { kind: 'EnumValue', value: 'asc' },
                        },
                      ],
                    },
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'id' },
                          value: { kind: 'EnumValue', value: 'desc' },
                        },
                      ],
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'state' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: {
                              kind: 'StringValue',
                              value: 'published',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'posts' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'take' },
                      value: { kind: 'IntValue', value: '4' },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'orderBy' },
                      value: {
                        kind: 'ListValue',
                        values: [
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'publishedDate' },
                                value: { kind: 'EnumValue', value: 'desc' },
                              },
                            ],
                          },
                        ],
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'where' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'state' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'equals' },
                                  value: {
                                    kind: 'StringValue',
                                    value: 'published',
                                    block: false,
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PostItem' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Photo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resized' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resizedWebp' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PostItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Post' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heroImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTopicsQuery, GetTopicsQueryVariables>
export const GetTopicBasicInfoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetTopicBasicInfo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'topic' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'slug' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'og_title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'apiDataBrief' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'og_description' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                { kind: 'Field', name: { kind: 'Name', value: 'leading' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                { kind: 'Field', name: { kind: 'Name', value: 'style' } },
                { kind: 'Field', name: { kind: 'Name', value: 'heroUrl' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'heroVideo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'videoSrc' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'heroImage' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ImageData' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'og_image' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageData' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'heroImage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageData' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slideshow_images' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'topicKeywords' },
                      },
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageData' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'manualOrderOfSlideshowImages' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tags' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Photo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resized' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resizedWebp' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetTopicBasicInfoQuery,
  GetTopicBasicInfoQueryVariables
>
export const GetListTypeTopcPostsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetListTypeTopcPosts' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '0' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'withAmount' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean' },
            },
          },
          defaultValue: { kind: 'BooleanValue', value: false },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'topic' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'slug' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'posts' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'where' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'state' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'equals' },
                                  value: {
                                    kind: 'StringValue',
                                    value: 'published',
                                    block: false,
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'orderBy' },
                      value: {
                        kind: 'ListValue',
                        values: [
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'isFeatured' },
                                value: { kind: 'EnumValue', value: 'desc' },
                              },
                            ],
                          },
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'publishedDate' },
                                value: { kind: 'EnumValue', value: 'desc' },
                              },
                            ],
                          },
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'id' },
                                value: { kind: 'EnumValue', value: 'desc' },
                              },
                            ],
                          },
                        ],
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'take' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'take' },
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'skip' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'skip' },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'TopicPost' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'postsCount' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'where' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'state' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'equals' },
                                  value: {
                                    kind: 'StringValue',
                                    value: 'published',
                                    block: false,
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  directives: [
                    {
                      kind: 'Directive',
                      name: { kind: 'Name', value: 'include' },
                      arguments: [
                        {
                          kind: 'Argument',
                          name: { kind: 'Name', value: 'if' },
                          value: {
                            kind: 'Variable',
                            name: { kind: 'Name', value: 'withAmount' },
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Photo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resized' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resizedWebp' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TopicPost' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Post' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'apiDataBrief' } },
          { kind: 'Field', name: { kind: 'Name', value: 'apiData' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heroImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetListTypeTopcPostsQuery,
  GetListTypeTopcPostsQueryVariables
>
export const GetGroupTypeTopicPostsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetGroupTypeTopicPosts' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'topic' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'slug' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'posts' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'where' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'state' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'equals' },
                                  value: {
                                    kind: 'StringValue',
                                    value: 'published',
                                    block: false,
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'orderBy' },
                      value: {
                        kind: 'ListValue',
                        values: [
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'isFeatured' },
                                value: { kind: 'EnumValue', value: 'desc' },
                              },
                            ],
                          },
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'publishedDate' },
                                value: { kind: 'EnumValue', value: 'desc' },
                              },
                            ],
                          },
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'id' },
                                value: { kind: 'EnumValue', value: 'desc' },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'TopicPost' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tags' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Photo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resized' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resizedWebp' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TopicPost' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Post' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'apiDataBrief' } },
          { kind: 'Field', name: { kind: 'Name', value: 'apiData' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heroImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetGroupTypeTopicPostsQuery,
  GetGroupTypeTopicPostsQueryVariables
>
export const GetTopicListDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetTopicList' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'topics' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'state' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: {
                              kind: 'StringValue',
                              value: 'published',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'sortOrder' },
                          value: { kind: 'EnumValue', value: 'asc' },
                        },
                      ],
                    },
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'createdAt' },
                          value: { kind: 'EnumValue', value: 'desc' },
                        },
                      ],
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'apiDataBrief' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'heroImage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ImageData' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Photo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resized' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resizedWebp' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTopicListQuery, GetTopicListQueryVariables>
export const GetLatestShortsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetLatestShorts' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'amount' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'start' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'news' },
            name: { kind: 'Name', value: 'videos' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'start' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'amount' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'publishedDate' },
                          value: { kind: 'EnumValue', value: 'desc' },
                        },
                      ],
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'state' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: {
                              kind: 'StringValue',
                              value: 'published',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'isShorts' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: { kind: 'BooleanValue', value: true },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'videoSection' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: {
                              kind: 'StringValue',
                              value: 'news',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'LatestShorts' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'creativity' },
            name: { kind: 'Name', value: 'videos' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'start' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'amount' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'publishedDate' },
                          value: { kind: 'EnumValue', value: 'desc' },
                        },
                      ],
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'state' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: {
                              kind: 'StringValue',
                              value: 'published',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'isShorts' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: { kind: 'BooleanValue', value: true },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'videoSection' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: {
                              kind: 'StringValue',
                              value: 'creativity',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'LatestShorts' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Photo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resized' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resizedWebp' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'LatestShorts' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Video' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uploader' } },
          { kind: 'Field', name: { kind: 'Name', value: 'videoSrc' } },
          { kind: 'Field', name: { kind: 'Name', value: 'youtubeUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heroImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetLatestShortsQuery,
  GetLatestShortsQueryVariables
>
export const GetShortsDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetShortsData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'video' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ShortsData' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ShortsData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Video' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'state' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isShorts' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uploader' } },
          { kind: 'Field', name: { kind: 'Name', value: 'videoSection' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'tags' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: { kind: 'IntValue', value: '1' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetShortsDataQuery, GetShortsDataQueryVariables>
export const GetShortsByTagAndVideoSectionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetShortsByTagAndVideoSection' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'tagId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'section' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '0' },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '0' },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'videos' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'publishedDate' },
                          value: { kind: 'EnumValue', value: 'desc' },
                        },
                      ],
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'state' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: {
                              kind: 'StringValue',
                              value: 'published',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'videoSection' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'section' },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'tags' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'some' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'id' },
                                  value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                      {
                                        kind: 'ObjectField',
                                        name: { kind: 'Name', value: 'equals' },
                                        value: {
                                          kind: 'Variable',
                                          name: {
                                            kind: 'Name',
                                            value: 'tagId',
                                          },
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'LatestShorts' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Photo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resized' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resizedWebp' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'LatestShorts' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Video' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uploader' } },
          { kind: 'Field', name: { kind: 'Name', value: 'videoSrc' } },
          { kind: 'Field', name: { kind: 'Name', value: 'youtubeUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heroImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetShortsByTagAndVideoSectionQuery,
  GetShortsByTagAndVideoSectionQueryVariables
>
export const GetShortsByVideoSectionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetShortsByVideoSection' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'section' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '0' },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '0' },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'videos' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'publishedDate' },
                          value: { kind: 'EnumValue', value: 'desc' },
                        },
                      ],
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'state' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: {
                              kind: 'StringValue',
                              value: 'published',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'videoSection' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'section' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'LatestShorts' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ImageData' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Photo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resized' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resizedWebp' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'original' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w480' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w800' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1200' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w1600' } },
                { kind: 'Field', name: { kind: 'Name', value: 'w2400' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'LatestShorts' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Video' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uploader' } },
          { kind: 'Field', name: { kind: 'Name', value: 'videoSrc' } },
          { kind: 'Field', name: { kind: 'Name', value: 'youtubeUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'heroImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ImageData' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetShortsByVideoSectionQuery,
  GetShortsByVideoSectionQueryVariables
>
