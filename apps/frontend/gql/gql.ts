/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "fragment ArticleListElementData on ArticleListElement {\n  articleListCount\n  topics\n}": typeof types.ArticleListElementDataFragmentDoc,
    "query getArticleListElementItems($count: Int!, $locale: [Locales], $topics: [String], $excludeKeys: [String]) {\n  BlogPostPage(\n    orderBy: {_metadata: {published: DESC}}\n    limit: $count\n    locale: $locale\n    where: {_metadata: {status: {eq: \"Published\"}, key: {notIn: $excludeKeys}}, Topic: {in: $topics}}\n  ) {\n    items {\n      ...IContentData\n      articleMeta: _metadata {\n        key\n        published\n        lastModified\n      }\n      blogTitle: Heading\n      blogSubtitle: ArticleSubHeading\n      blogImage: BlogPostPromoImage {\n        ...ReferenceData\n      }\n      blogBody: BlogPostBody {\n        json\n      }\n      blogAuthor: ArticleAuthor\n    }\n  }\n}": typeof types.getArticleListElementItemsDocument,
    "query getDefaultArticleList($locale: [Locales!]) {\n  ArticleListElement(\n    where: {_metadata: {displayName: {startsWith: \"[DEFAULT]\"}, status: {eq: \"Published\"}}}\n    locale: $locale\n    orderBy: {_metadata: {published: DESC}}\n    limit: 1\n  ) {\n    items {\n      ...IContentData\n      ...ArticleListElementData\n    }\n  }\n}": typeof types.getDefaultArticleListDocument,
    "fragment BlockTypeBlockSimpleBlockData on BlockTypeBlockSimpleBlock {\n  BlockSimpleBlock {\n    ...SimpleBlockPropertyData\n  }\n}": typeof types.BlockTypeBlockSimpleBlockDataFragmentDoc,
    "fragment BlockTypeChoiceDropDownListData on BlockTypeChoiceDropDownList {\n  ChoiceDropDownList\n}": typeof types.BlockTypeChoiceDropDownListDataFragmentDoc,
    "fragment BlockTypeChoiceSelectListData on BlockTypeChoiceSelectList {\n  ChoiceSelectList\n}": typeof types.BlockTypeChoiceSelectListDataFragmentDoc,
    "fragment BlockTypeChoiceSelectedNotSelectedData on BlockTypeChoiceSelectedNotSelected {\n  ChoiceSelectedNotSelected\n}": typeof types.BlockTypeChoiceSelectedNotSelectedDataFragmentDoc,
    "fragment BlockTypeContentContentAreaData on BlockTypeContentContentArea {\n  ContentContentArea {\n    ...IContentListItem\n    ...BlockData\n  }\n}": typeof types.BlockTypeContentContentAreaDataFragmentDoc,
    "fragment BlockTypeContentContentAreaItemData on BlockTypeContentContentAreaItem {\n  ContentContentAreaItem {\n    ...BlockData\n  }\n}": typeof types.BlockTypeContentContentAreaItemDataFragmentDoc,
    "fragment BlockTypeContentContentReferenceData on BlockTypeContentContentReference {\n  ContentContentReference {\n    ...ReferenceData\n  }\n}": typeof types.BlockTypeContentContentReferenceDataFragmentDoc,
    "fragment BlockTypeDateTimeData on BlockTypeDateTime {\n  DateTime\n}": typeof types.BlockTypeDateTimeDataFragmentDoc,
    "fragment BlockTypeGuidData on BlockTypeGuid {\n  empty: _metadata {\n    key\n  }\n}": typeof types.BlockTypeGuidDataFragmentDoc,
    "fragment BlockTypeLinkLinkCollectionData on BlockTypeLinkLinkCollection {\n  LinkLinkCollection {\n    ...LinkItemData\n  }\n}": typeof types.BlockTypeLinkLinkCollectionDataFragmentDoc,
    "fragment BlockTypeLinkLinkItemData on BlockTypeLinkLinkItem {\n  LinkLinkItem {\n    ...LinkItemData\n  }\n}": typeof types.BlockTypeLinkLinkItemDataFragmentDoc,
    "fragment BlockTypeLinkUrlToDocumentData on BlockTypeLinkUrlToDocument {\n  LinkUrlToDocument {\n    ...LinkData\n  }\n}": typeof types.BlockTypeLinkUrlToDocumentDataFragmentDoc,
    "fragment BlockTypeLinkUrlToImageData on BlockTypeLinkUrlToImage {\n  LinkUrlToImage {\n    ...LinkData\n  }\n}": typeof types.BlockTypeLinkUrlToImageDataFragmentDoc,
    "fragment BlockTypeLinkUrlToPageData on BlockTypeLinkUrlToPage {\n  LinkUrlToPage {\n    ...LinkData\n  }\n}": typeof types.BlockTypeLinkUrlToPageDataFragmentDoc,
    "fragment BlockTypeListBlockSimpleBlockData on BlockTypeListBlockSimpleBlock {\n  ListBlockSimpleBlock {\n    ...SimpleBlockPropertyData\n  }\n}": typeof types.BlockTypeListBlockSimpleBlockDataFragmentDoc,
    "fragment BlockTypeListChoiceSelectedNotSelectedData on BlockTypeListChoiceSelectedNotSelected {\n  ListChoiceSelectedNotSelected\n}": typeof types.BlockTypeListChoiceSelectedNotSelectedDataFragmentDoc,
    "fragment BlockTypeListContentContentReferenceData on BlockTypeListContentContentReference {\n  ListContentContentReference {\n    ...ReferenceData\n  }\n}": typeof types.BlockTypeListContentContentReferenceDataFragmentDoc,
    "fragment BlockTypeListDateTimeData on BlockTypeListDateTime {\n  ListDateTime\n}": typeof types.BlockTypeListDateTimeDataFragmentDoc,
    "fragment BlockTypeListGuidData on BlockTypeListGuid {\n  ListGuid\n}": typeof types.BlockTypeListGuidDataFragmentDoc,
    "fragment BlockTypeListLinkLinkItemData on BlockTypeListLinkLinkItem {\n  ListLinkLinkItem {\n    ...LinkItemData\n  }\n}": typeof types.BlockTypeListLinkLinkItemDataFragmentDoc,
    "fragment BlockTypeListLinkUrlToDocumentData on BlockTypeListLinkUrlToDocument {\n  ListLinkUrlToDocument {\n    __typename\n  }\n}": typeof types.BlockTypeListLinkUrlToDocumentDataFragmentDoc,
    "fragment BlockTypeListLinkUrlToImageData on BlockTypeListLinkUrlToImage {\n  ListLinkUrlToImage {\n    __typename\n  }\n}": typeof types.BlockTypeListLinkUrlToImageDataFragmentDoc,
    "fragment BlockTypeListLinkUrlToPageData on BlockTypeListLinkUrlToPage {\n  ListLinkUrlToPage {\n    __typename\n  }\n}": typeof types.BlockTypeListLinkUrlToPageDataFragmentDoc,
    "fragment BlockTypeListNumberFloatingPointData on BlockTypeListNumberFloatingPoint {\n  ListNumberFloatingPoint\n}": typeof types.BlockTypeListNumberFloatingPointDataFragmentDoc,
    "fragment BlockTypeListNumberIntegerData on BlockTypeListNumberInteger {\n  ListNumberInteger\n}": typeof types.BlockTypeListNumberIntegerDataFragmentDoc,
    "fragment BlockTypeListTextLongStringData on BlockTypeListTextLongString {\n  ListTextLongString\n}": typeof types.BlockTypeListTextLongStringDataFragmentDoc,
    "fragment BlockTypeListTextStringData on BlockTypeListTextString {\n  ListTextString\n}": typeof types.BlockTypeListTextStringDataFragmentDoc,
    "fragment BlockTypeListTextXHtmlStringData on BlockTypeListTextXHtmlString {\n  ListTextXHtmlString {\n    json\n    html\n  }\n}": typeof types.BlockTypeListTextXHtmlStringDataFragmentDoc,
    "fragment BlockTypeNumberFloatingPointData on BlockTypeNumberFloatingPoint {\n  NumberFloatingPoint\n}": typeof types.BlockTypeNumberFloatingPointDataFragmentDoc,
    "fragment BlockTypeNumberIntegerData on BlockTypeNumberInteger {\n  NumberInteger\n}": typeof types.BlockTypeNumberIntegerDataFragmentDoc,
    "fragment BlockTypeTextLongStringData on BlockTypeTextLongString {\n  TextLongString\n}": typeof types.BlockTypeTextLongStringDataFragmentDoc,
    "fragment BlockTypeTextStringData on BlockTypeTextString {\n  TextString\n}": typeof types.BlockTypeTextStringDataFragmentDoc,
    "fragment BlockTypeTextXHtmlStringData on BlockTypeTextXHtmlString {\n  TextXHtmlString {\n    json\n    html\n  }\n}": typeof types.BlockTypeTextXHtmlStringDataFragmentDoc,
    "fragment ButtonBlockData on ButtonBlock {\n  children: ButtonText\n  url: ButtonUrl {\n    ...LinkData\n  }\n  className: ButtonClass\n  buttonType: ButtonType\n  buttonVariant: ButtonVariant\n}": typeof types.ButtonBlockDataFragmentDoc,
    "fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  children: ButtonText\n  url: ButtonUrl {\n    ...LinkData\n  }\n  className: ButtonClass\n  buttonType: ButtonType\n  buttonVariant: ButtonVariant\n}": typeof types.ButtonBlockPropertyDataFragmentDoc,
    "fragment CTAElementData on CTAElement {\n  cta_text: Text\n  cta_link: Link {\n    ...LinkData\n  }\n}": typeof types.CTAElementDataFragmentDoc,
    "fragment CarouselBlockData on CarouselBlock {\n  CarouselItemsContentArea {\n    ...IContentListItem\n    ...BlockData\n  }\n}": typeof types.CarouselBlockDataFragmentDoc,
    "fragment ContentRecsElementData on ContentRecsElement {\n  ElementDeliveryApiKey\n  ElementRecommendationCount\n}": typeof types.ContentRecsElementDataFragmentDoc,
    "fragment ContinueReadingComponentData on ContinueReadingComponent {\n  topline\n  shared\n  heading\n  content {\n    ...IContentData\n    ...BlockData\n  }\n}": typeof types.ContinueReadingComponentDataFragmentDoc,
    "query getSharedContinueReading($locale: [Locales]) {\n  ContinueReadingComponent(where: {shared: {eq: true}}, locale: $locale) {\n    total\n    item {\n      ...IContentData\n      ...ContinueReadingComponentData\n    }\n  }\n}": typeof types.getSharedContinueReadingDocument,
    "fragment HeadingElementData on HeadingElement {\n  headingText\n}": typeof types.HeadingElementDataFragmentDoc,
    "fragment HeroBlockData on HeroBlock {\n  heroImage: HeroImage {\n    ...ReferenceData\n  }\n  eyebrow: Eyebrow\n  heroHeading: Heading\n  heroSubheading: SubHeading\n  heroDescription: Description {\n    json\n    html\n  }\n  heroColor: HeroColor\n  heroButton: HeroButton {\n    ...ButtonBlockPropertyData\n  }\n}": typeof types.HeroBlockDataFragmentDoc,
    "fragment ImageElementData on ImageElement {\n  altText\n  imageLink {\n    ...ReferenceData\n  }\n}": typeof types.ImageElementDataFragmentDoc,
    "fragment LayoutSettingsBlockData on LayoutSettingsBlock {\n  mainMenu {\n    ...IContentListItem\n  }\n  contactInfoHeading\n  serviceButtons {\n    ...IContentListItem\n  }\n  contactInfo {\n    json\n    html\n  }\n  footerMenus {\n    ...IContentListItem\n  }\n  copyright\n  legalLinks {\n    ...LinkItemData\n  }\n  appIdentifiers\n}": typeof types.LayoutSettingsBlockDataFragmentDoc,
    "fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  _metadata {\n    displayName\n  }\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...LinkData\n  }\n  MegaMenuContentArea {\n    ...IContentData\n    ...MenuNavigationBlockData\n    ...BlogPostPageMenuBlock\n  }\n}": typeof types.MegaMenuGroupBlockDataFragmentDoc,
    "fragment MenuNavigationBlockData on MenuNavigationBlock {\n  _metadata {\n    displayName\n  }\n  MenuNavigationHeading\n  NavigationLinks {\n    ...LinkItemData\n  }\n}": typeof types.MenuNavigationBlockDataFragmentDoc,
    "fragment OdpEmbedBlockData on OdpEmbedBlock {\n  ContentId\n}": typeof types.OdpEmbedBlockDataFragmentDoc,
    "fragment BlogPostPageMenuBlock on BlogPostPage {\n  meta: _metadata {\n    published\n    url {\n      ...LinkData\n    }\n  }\n  topics: Topic\n  heading: Heading\n  author: ArticleAuthor\n  image: BlogPostPromoImage {\n    ...ReferenceData\n  }\n  sharing: SeoSettings {\n    description: MetaDescription\n    image: SharingImage {\n      ...ReferenceData\n    }\n  }\n}": typeof types.BlogPostPageMenuBlockFragmentDoc,
    "fragment PageSeoSettingsData on PageSeoSettings {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}": typeof types.PageSeoSettingsDataFragmentDoc,
    "fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}": typeof types.PageSeoSettingsPropertyDataFragmentDoc,
    "fragment ParagraphElementData on ParagraphElement {\n  text {\n    json\n  }\n}": typeof types.ParagraphElementDataFragmentDoc,
    "fragment QuoteBlockData on QuoteBlock {\n  quote: QuoteText\n  color: QuoteColor\n  active: QuoteActive\n  name: QuoteProfileName\n  profilePicture: QuoteProfilePicture {\n    ...ReferenceData\n  }\n  location: QuoteProfileLocation\n}": typeof types.QuoteBlockDataFragmentDoc,
    "fragment RichTextElementData on RichTextElement {\n  text {\n    json\n    html\n  }\n}": typeof types.RichTextElementDataFragmentDoc,
    "fragment SimpleBlockData on SimpleBlock {\n  StringProp\n}": typeof types.SimpleBlockDataFragmentDoc,
    "fragment SimpleBlockPropertyData on SimpleBlockProperty {\n  StringProp\n}": typeof types.SimpleBlockPropertyDataFragmentDoc,
    "fragment TestimonialElementData on TestimonialElement {\n  customerName\n  customerLocation\n  customerImage {\n    ...ReferenceData\n  }\n  referenceTitle\n  referenceText {\n    json\n  }\n}": typeof types.TestimonialElementDataFragmentDoc,
    "fragment TextBlockData on TextBlock {\n  overline: TextBlockOverline\n  headingSize: TextBlockHeadingSize\n  heading: TextBlockHeading\n  description: TextBlockDescription {\n    json\n    html\n  }\n  center: TextCenter\n  width: TextBlockWidth\n  className: TextClassName\n}": typeof types.TextBlockDataFragmentDoc,
    "fragment VideoElementData on VideoElement {\n  title\n  video {\n    ...ReferenceData\n  }\n  placeholder {\n    ...ReferenceData\n  }\n}": typeof types.VideoElementDataFragmentDoc,
    "fragment BlankExperienceData on BlankExperience {\n  BlankExperienceSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n  ...ExperienceData\n}": typeof types.BlankExperienceDataFragmentDoc,
    "query getBlankExperienceMetaData($key: String!, $locale: [Locales]) {\n  page: BlankExperience(where: {_metadata: {key: {eq: $key}}}, locale: $locale) {\n    items {\n      meta: _metadata {\n        url {\n          base\n        }\n        displayName\n      }\n      seo: BlankExperienceSeoSettings {\n        title: MetaTitle\n        description: MetaDescription\n        image: SharingImage {\n          ...ReferenceData\n        }\n        type: GraphType\n      }\n    }\n  }\n}": typeof types.getBlankExperienceMetaDataDocument,
    "fragment BlogSectionExperienceData on BlogSectionExperience {\n  ...ExperienceData\n}": typeof types.BlogSectionExperienceDataFragmentDoc,
    "query getChildBlogPosts($parentKey: String!, $locale: [Locales!]! = ALL, $author: [String!], $topic: [String!], $limit: Int! = 9, $skip: Int! = 0) {\n  result: BlogSectionExperience(\n    where: {_metadata: {key: {eq: $parentKey}}}\n    locale: $locale\n  ) {\n    items {\n      container: _metadata {\n        key\n        displayName\n      }\n      items: _link(type: ITEMS) {\n        BlogPostPage(skip: $skip, limit: $limit, locale: $locale) {\n          total\n          items {\n            ...IContentData\n            metadata: _metadata {\n              key\n              url {\n                base\n                default\n              }\n              published\n            }\n            heading: Heading\n            subheading: ArticleSubHeading\n            author: ArticleAuthor\n            topic: Topic\n            image: BlogPostPromoImage {\n              src: url {\n                base\n                default\n              }\n            }\n          }\n          facets {\n            author: ArticleAuthor(filters: $author) {\n              name\n              count\n            }\n            topic: Topic(orderBy: ASC, filters: $topic) {\n              name\n              count\n            }\n            metadata: _metadata {\n              published(unit: DAY) {\n                name\n                count\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}": typeof types.getChildBlogPostsDocument,
    "query getBlogSectionExperienceMetaData($key: String!, $version: String, $locale: [Locales!]) {\n  page: BlogSectionExperience(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        displayName\n        published\n        url {\n          base\n          default\n        }\n      }\n      seo_data {\n        ...PageSeoSettingsPropertyData\n      }\n    }\n  }\n}": typeof types.getBlogSectionExperienceMetaDataDocument,
    "fragment ExpTypeBlockSimpleBlockData on ExpTypeBlockSimpleBlock {\n  BlockSimpleBlock {\n    ...SimpleBlockPropertyData\n  }\n  ...ExperienceData\n}": typeof types.ExpTypeBlockSimpleBlockDataFragmentDoc,
    "fragment ExpTypeChoiceDropDownListData on ExpTypeChoiceDropDownList {\n  ChoiceDropDownList\n  ...ExperienceData\n}": typeof types.ExpTypeChoiceDropDownListDataFragmentDoc,
    "fragment ExpTypeChoiceSelectListData on ExpTypeChoiceSelectList {\n  ChoiceSelectList\n  ...ExperienceData\n}": typeof types.ExpTypeChoiceSelectListDataFragmentDoc,
    "fragment ExpTypeChoiceSelectedNotSelectedData on ExpTypeChoiceSelectedNotSelected {\n  ChoiceSelectedNotSelected\n  ...ExperienceData\n}": typeof types.ExpTypeChoiceSelectedNotSelectedDataFragmentDoc,
    "fragment ExpTypeContentContentAreaData on ExpTypeContentContentArea {\n  ContentContentArea {\n    ...BlockData\n  }\n  ...ExperienceData\n}": typeof types.ExpTypeContentContentAreaDataFragmentDoc,
    "fragment ExpTypeContentContentAreaItemData on ExpTypeContentContentAreaItem {\n  ContentContentAreaItem {\n    ...BlockData\n  }\n  ...ExperienceData\n}": typeof types.ExpTypeContentContentAreaItemDataFragmentDoc,
    "fragment ExpTypeContentContentReferenceData on ExpTypeContentContentReference {\n  ContentContentReference {\n    ...ReferenceData\n  }\n  ...ExperienceData\n}": typeof types.ExpTypeContentContentReferenceDataFragmentDoc,
    "fragment ExpTypeDateTimeData on ExpTypeDateTime {\n  DateTime\n  ...ExperienceData\n}": typeof types.ExpTypeDateTimeDataFragmentDoc,
    "fragment ExpTypeGuidData on ExpTypeGuid {\n  ...ExperienceData\n}": typeof types.ExpTypeGuidDataFragmentDoc,
    "fragment ExpTypeLinkLinkCollectionData on ExpTypeLinkLinkCollection {\n  LinkLinkCollection {\n    ...LinkItemData\n  }\n  ...ExperienceData\n}": typeof types.ExpTypeLinkLinkCollectionDataFragmentDoc,
    "fragment ExpTypeLinkLinkItemData on ExpTypeLinkLinkItem {\n  LinkLinkItem {\n    ...LinkItemData\n  }\n  ...ExperienceData\n}": typeof types.ExpTypeLinkLinkItemDataFragmentDoc,
    "fragment ExpTypeLinkUrlToDocumentData on ExpTypeLinkUrlToDocument {\n  LinkUrlToDocument {\n    ...LinkData\n  }\n  ...ExperienceData\n}": typeof types.ExpTypeLinkUrlToDocumentDataFragmentDoc,
    "fragment ExpTypeLinkUrlToImageData on ExpTypeLinkUrlToImage {\n  LinkUrlToImage {\n    ...LinkData\n  }\n  ...ExperienceData\n}": typeof types.ExpTypeLinkUrlToImageDataFragmentDoc,
    "fragment ExpTypeLinkUrlToPageData on ExpTypeLinkUrlToPage {\n  LinkUrlToPage {\n    ...LinkData\n  }\n  ...ExperienceData\n}": typeof types.ExpTypeLinkUrlToPageDataFragmentDoc,
    "fragment ExpTypeListBlockSimpleBlockData on ExpTypeListBlockSimpleBlock {\n  ListBlockSimpleBlock {\n    ...SimpleBlockPropertyData\n  }\n  ...ExperienceData\n}": typeof types.ExpTypeListBlockSimpleBlockDataFragmentDoc,
    "fragment ExpTypeListChoiceSelectedNotSelectedData on ExpTypeListChoiceSelectedNotSelected {\n  ListChoiceSelectedNotSelected\n  ...ExperienceData\n}": typeof types.ExpTypeListChoiceSelectedNotSelectedDataFragmentDoc,
    "fragment ExpTypeListContentContentReferenceData on ExpTypeListContentContentReference {\n  ListContentContentReference {\n    ...ReferenceData\n  }\n  ...ExperienceData\n}": typeof types.ExpTypeListContentContentReferenceDataFragmentDoc,
    "fragment ExpTypeListDateTimeData on ExpTypeListDateTime {\n  ListDateTime\n  ...ExperienceData\n}": typeof types.ExpTypeListDateTimeDataFragmentDoc,
    "fragment ExpTypeListGuidData on ExpTypeListGuid {\n  ListGuid\n  ...ExperienceData\n}": typeof types.ExpTypeListGuidDataFragmentDoc,
    "fragment ExpTypeListLinkLinkItemData on ExpTypeListLinkLinkItem {\n  ListLinkLinkItem {\n    ...LinkItemData\n  }\n  ...ExperienceData\n}": typeof types.ExpTypeListLinkLinkItemDataFragmentDoc,
    "fragment ExpTypeListLinkUrlToDocumentData on ExpTypeListLinkUrlToDocument {\n  ListLinkUrlToDocument {\n    __typename\n  }\n  ...ExperienceData\n}": typeof types.ExpTypeListLinkUrlToDocumentDataFragmentDoc,
    "fragment ExpTypeListLinkUrlToImageData on ExpTypeListLinkUrlToImage {\n  ListLinkUrlToImage {\n    __typename\n  }\n  ...ExperienceData\n}": typeof types.ExpTypeListLinkUrlToImageDataFragmentDoc,
    "fragment ExpTypeListLinkUrlToPageData on ExpTypeListLinkUrlToPage {\n  ListLinkUrlToPage {\n    __typename\n  }\n  ...ExperienceData\n}": typeof types.ExpTypeListLinkUrlToPageDataFragmentDoc,
    "fragment ExpTypeListNumberFloatingPointData on ExpTypeListNumberFloatingPoint {\n  ListNumberFloatingPoint\n  ...ExperienceData\n}": typeof types.ExpTypeListNumberFloatingPointDataFragmentDoc,
    "fragment ExpTypeListNumberIntegerData on ExpTypeListNumberInteger {\n  ListNumberInteger\n  ...ExperienceData\n}": typeof types.ExpTypeListNumberIntegerDataFragmentDoc,
    "fragment ExpTypeListTextLongStringData on ExpTypeListTextLongString {\n  ListTextLongString\n  ...ExperienceData\n}": typeof types.ExpTypeListTextLongStringDataFragmentDoc,
    "fragment ExpTypeListTextStringData on ExpTypeListTextString {\n  ListTextString\n  ...ExperienceData\n}": typeof types.ExpTypeListTextStringDataFragmentDoc,
    "fragment ExpTypeListTextXHtmlStringData on ExpTypeListTextXHtmlString {\n  ListTextXHtmlString {\n    json\n    html\n  }\n  ...ExperienceData\n}": typeof types.ExpTypeListTextXHtmlStringDataFragmentDoc,
    "fragment ExpTypeNumberFloatingPointData on ExpTypeNumberFloatingPoint {\n  NumberFloatingPoint\n  ...ExperienceData\n}": typeof types.ExpTypeNumberFloatingPointDataFragmentDoc,
    "fragment ExpTypeNumberIntegerData on ExpTypeNumberInteger {\n  NumberInteger\n  ...ExperienceData\n}": typeof types.ExpTypeNumberIntegerDataFragmentDoc,
    "fragment ExpTypeTextLongStringData on ExpTypeTextLongString {\n  TextLongString\n  ...ExperienceData\n}": typeof types.ExpTypeTextLongStringDataFragmentDoc,
    "fragment ExpTypeTextStringData on ExpTypeTextString {\n  TextString\n  ...ExperienceData\n}": typeof types.ExpTypeTextStringDataFragmentDoc,
    "fragment ExpTypeTextXHtmlStringData on ExpTypeTextXHtmlString {\n  TextXHtmlString {\n    json\n    html\n  }\n  ...ExperienceData\n}": typeof types.ExpTypeTextXHtmlStringDataFragmentDoc,
    "fragment SimpleExpData on SimpleExp {\n  StringProp\n  ...ExperienceData\n}": typeof types.SimpleExpDataFragmentDoc,
    "fragment ImageMediaComponentData on ImageMedia {\n  alt: AltText\n  meta: _metadata {\n    url {\n      default\n    }\n    name: displayName\n  }\n}": typeof types.ImageMediaComponentDataFragmentDoc,
    "fragment VideoMediaComponentData on VideoMedia {\n  meta: _metadata {\n    url {\n      default\n    }\n    name: displayName\n  }\n}": typeof types.VideoMediaComponentDataFragmentDoc,
    "query getBlogPostPageMetaData($key: String!, $version: String, $locale: [Locales!]) {\n  BlogPostPage(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    pages: items {\n      cms: _metadata {\n        title: displayName\n        published\n        url {\n          base\n          default\n        }\n      }\n      title: Heading\n      author: ArticleAuthor\n      image: BlogPostPromoImage {\n        ...ReferenceData\n      }\n      topics: Topic\n      seo: SeoSettings {\n        title: MetaTitle\n        description: MetaDescription\n        keywords: MetaKeywords\n        image: SharingImage {\n          ...ReferenceData\n        }\n        type: GraphType\n      }\n    }\n  }\n}": typeof types.getBlogPostPageMetaDataDocument,
    "fragment BlogPostPageData on BlogPostPage {\n  blogTitle: Heading\n  blogSubtitle: ArticleSubHeading\n  blogImage: BlogPostPromoImage {\n    ...ReferenceData\n  }\n  blogBody: BlogPostBody {\n    json\n  }\n  blogAuthor: ArticleAuthor\n  blogTopics: Topic\n  continueReading {\n    ...IContentListItem\n    ...BlockData\n  }\n}": typeof types.BlogPostPageDataFragmentDoc,
    "fragment BlogPostPageSearchResult on BlogPostPage {\n  title: Heading\n  image: BlogPostPromoImage {\n    ...ReferenceData\n  }\n  author: ArticleAuthor\n  seodata: SeoSettings {\n    MetaTitle\n    MetaDescription\n  }\n  _metadata {\n    published\n  }\n}": typeof types.BlogPostPageSearchResultFragmentDoc,
    "query getLandingPageMetaData($key: String!, $version: String, $locale: [Locales]) {\n  LandingPage(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    pages: items {\n      _metadata {\n        displayName\n        key\n        version\n        locale\n        url {\n          base\n        }\n      }\n      SeoSettings {\n        MetaTitle\n        MetaDescription\n        SharingImage {\n          ...ReferenceData\n        }\n        GraphType\n      }\n    }\n  }\n}": typeof types.getLandingPageMetaDataDocument,
    "fragment LandingPageData on LandingPage {\n  TopContentArea {\n    ...BlockData\n  }\n  MainContentArea {\n    ...BlockData\n  }\n}": typeof types.LandingPageDataFragmentDoc,
    "fragment PageTypeBlockSimpleBlockData on PageTypeBlockSimpleBlock {\n  BlockSimpleBlock {\n    ...SimpleBlockPropertyData\n  }\n}": typeof types.PageTypeBlockSimpleBlockDataFragmentDoc,
    "fragment PageTypeChoiceDropDownListData on PageTypeChoiceDropDownList {\n  ChoiceDropDownList\n}": typeof types.PageTypeChoiceDropDownListDataFragmentDoc,
    "fragment PageTypeChoiceSelectListData on PageTypeChoiceSelectList {\n  ChoiceSelectList\n}": typeof types.PageTypeChoiceSelectListDataFragmentDoc,
    "fragment PageTypeChoiceSelectedNotSelectedData on PageTypeChoiceSelectedNotSelected {\n  ChoiceSelectedNotSelected\n}": typeof types.PageTypeChoiceSelectedNotSelectedDataFragmentDoc,
    "fragment PageTypeContentContentAreaData on PageTypeContentContentArea {\n  ContentContentArea {\n    ...BlockData\n  }\n}": typeof types.PageTypeContentContentAreaDataFragmentDoc,
    "fragment PageTypeContentContentAreaItemData on PageTypeContentContentAreaItem {\n  ContentContentAreaItem {\n    ...BlockData\n  }\n}": typeof types.PageTypeContentContentAreaItemDataFragmentDoc,
    "fragment PageTypeContentContentReferenceData on PageTypeContentContentReference {\n  ContentContentReference {\n    ...ReferenceData\n  }\n}": typeof types.PageTypeContentContentReferenceDataFragmentDoc,
    "fragment PageTypeDateTimeData on PageTypeDateTime {\n  DateTime\n}": typeof types.PageTypeDateTimeDataFragmentDoc,
    "fragment PageTypeGuidData on PageTypeGuid {\n  empty: _metadata {\n    key\n  }\n}": typeof types.PageTypeGuidDataFragmentDoc,
    "fragment PageTypeLinkLinkCollectionData on PageTypeLinkLinkCollection {\n  LinkLinkCollection {\n    ...LinkItemData\n  }\n}": typeof types.PageTypeLinkLinkCollectionDataFragmentDoc,
    "fragment PageTypeLinkLinkItemData on PageTypeLinkLinkItem {\n  LinkLinkItem {\n    ...LinkItemData\n  }\n}": typeof types.PageTypeLinkLinkItemDataFragmentDoc,
    "fragment PageTypeLinkUrlToDocumentData on PageTypeLinkUrlToDocument {\n  LinkUrlToDocument {\n    ...LinkData\n  }\n}": typeof types.PageTypeLinkUrlToDocumentDataFragmentDoc,
    "fragment PageTypeLinkUrlToImageData on PageTypeLinkUrlToImage {\n  LinkUrlToImage {\n    ...LinkData\n  }\n}": typeof types.PageTypeLinkUrlToImageDataFragmentDoc,
    "fragment PageTypeLinkUrlToPageData on PageTypeLinkUrlToPage {\n  LinkUrlToPage {\n    ...LinkData\n  }\n}": typeof types.PageTypeLinkUrlToPageDataFragmentDoc,
    "fragment PageTypeListBlockSimpleBlockData on PageTypeListBlockSimpleBlock {\n  ListBlockSimpleBlock {\n    ...SimpleBlockPropertyData\n  }\n}": typeof types.PageTypeListBlockSimpleBlockDataFragmentDoc,
    "fragment PageTypeListChoiceSelectedNotSelectedData on PageTypeListChoiceSelectedNotSelected {\n  ListChoiceSelectedNotSelected\n}": typeof types.PageTypeListChoiceSelectedNotSelectedDataFragmentDoc,
    "fragment PageTypeListContentContentReferenceData on PageTypeListContentContentReference {\n  ListContentContentReference {\n    ...ReferenceData\n  }\n}": typeof types.PageTypeListContentContentReferenceDataFragmentDoc,
    "fragment PageTypeListDateTimeData on PageTypeListDateTime {\n  ListDateTime\n}": typeof types.PageTypeListDateTimeDataFragmentDoc,
    "fragment PageTypeListGuidData on PageTypeListGuid {\n  ListGuid\n}": typeof types.PageTypeListGuidDataFragmentDoc,
    "fragment PageTypeListLinkLinkItemData on PageTypeListLinkLinkItem {\n  ListLinkLinkItem {\n    ...LinkItemData\n  }\n}": typeof types.PageTypeListLinkLinkItemDataFragmentDoc,
    "fragment PageTypeListLinkUrlToDocumentData on PageTypeListLinkUrlToDocument {\n  ListLinkUrlToDocument {\n    __typename\n  }\n}": typeof types.PageTypeListLinkUrlToDocumentDataFragmentDoc,
    "fragment PageTypeListLinkUrlToImageData on PageTypeListLinkUrlToImage {\n  ListLinkUrlToImage {\n    __typename\n  }\n}": typeof types.PageTypeListLinkUrlToImageDataFragmentDoc,
    "fragment PageTypeListLinkUrlToPageData on PageTypeListLinkUrlToPage {\n  ListLinkUrlToPage {\n    __typename\n  }\n}": typeof types.PageTypeListLinkUrlToPageDataFragmentDoc,
    "fragment PageTypeListNumberFloatingPointData on PageTypeListNumberFloatingPoint {\n  ListNumberFloatingPoint\n}": typeof types.PageTypeListNumberFloatingPointDataFragmentDoc,
    "fragment PageTypeListNumberIntegerData on PageTypeListNumberInteger {\n  ListNumberInteger\n}": typeof types.PageTypeListNumberIntegerDataFragmentDoc,
    "fragment PageTypeListTextLongStringData on PageTypeListTextLongString {\n  ListTextLongString\n}": typeof types.PageTypeListTextLongStringDataFragmentDoc,
    "fragment PageTypeListTextStringData on PageTypeListTextString {\n  ListTextString\n}": typeof types.PageTypeListTextStringDataFragmentDoc,
    "fragment PageTypeListTextXHtmlStringData on PageTypeListTextXHtmlString {\n  ListTextXHtmlString {\n    json\n    html\n  }\n}": typeof types.PageTypeListTextXHtmlStringDataFragmentDoc,
    "fragment PageTypeNumberFloatingPointData on PageTypeNumberFloatingPoint {\n  NumberFloatingPoint\n}": typeof types.PageTypeNumberFloatingPointDataFragmentDoc,
    "fragment PageTypeNumberIntegerData on PageTypeNumberInteger {\n  NumberInteger\n}": typeof types.PageTypeNumberIntegerDataFragmentDoc,
    "fragment PageTypeTextLongStringData on PageTypeTextLongString {\n  TextLongString\n}": typeof types.PageTypeTextLongStringDataFragmentDoc,
    "fragment PageTypeTextStringData on PageTypeTextString {\n  TextString\n}": typeof types.PageTypeTextStringDataFragmentDoc,
    "fragment PageTypeTextXHtmlStringData on PageTypeTextXHtmlString {\n  TextXHtmlString {\n    json\n    html\n  }\n}": typeof types.PageTypeTextXHtmlStringDataFragmentDoc,
    "fragment SimplePageData on SimplePage {\n  StringProp\n}": typeof types.SimplePageDataFragmentDoc,
    "fragment BlankSectionData on BlankSection {\n  _metadata {\n    key\n  }\n}": typeof types.BlankSectionDataFragmentDoc,
    "query getFooterData($domain: String, $locale: [Locales!]) {\n  appLayout: LayoutSettingsBlock(\n    where: {_or: [{appIdentifiers: {exist: false}}, {_and: [{appIdentifiers: {exist: true}}, {appIdentifiers: {eq: $domain}}]}]}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        key\n        displayName\n      }\n      copyright\n      footerMenus {\n        ...IContentData\n        ...MenuNavigationBlockData\n      }\n      legalLinks {\n        ...LinkItemData\n      }\n      contactInfoHeading\n      contactInfo {\n        json\n      }\n    }\n  }\n}": typeof types.getFooterDataDocument,
    "query getHeaderData($domain: String, $locale: [Locales!]) {\n  appLayout: LayoutSettingsBlock(\n    where: {_or: [{appIdentifiers: {exist: false}}, {_and: [{appIdentifiers: {exist: true}}, {appIdentifiers: {eq: $domain}}]}]}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        key\n        displayName\n      }\n      appIdentifiers\n      mainMenu {\n        ...IContentData\n        ...MegaMenuGroupBlockData\n      }\n      serviceButtons {\n        ...IContentData\n        ...ButtonBlockData\n      }\n    }\n  }\n}": typeof types.getHeaderDataDocument,
    "query getLocales {\n  schema: __schema {\n    types {\n      kind\n      name\n      enumValues {\n        name\n      }\n    }\n  }\n}": typeof types.getLocalesDocument,
    "query getArticles($pageSize: Int! = 10, $start: Int! = 0, $locale: [Locales], $author: [String!], $published: Date, $publishedEnd: Date) {\n  getArticles: BlogPostPage(\n    where: {_and: [{_metadata: {published: {gte: $published}}}, {_metadata: {published: {lte: $publishedEnd}}}], _metadata: {status: {eq: \"Published\"}}}\n    locale: $locale\n    limit: $pageSize\n    skip: $start\n    orderBy: {_metadata: {published: DESC}}\n  ) {\n    total\n    items {\n      ...IContentData\n      _metadata {\n        status\n        published\n      }\n      title: Heading\n      description: SeoSettings {\n        text: MetaDescription\n      }\n      author: ArticleAuthor\n      image: BlogPostPromoImage {\n        ...ReferenceData\n      }\n    }\n    facets {\n      author: ArticleAuthor(orderType: VALUE, orderBy: ASC, filters: $author) {\n        count\n        name\n      }\n      _metadata {\n        published(unit: DAY) {\n          count\n          name\n        }\n      }\n    }\n  }\n}": typeof types.getArticlesDocument,
    "query searchContent($term: String!, $locale: [String!], $withinLocale: [Locales], $types: [String!], $pageSize: Int! = 25, $start: Int! = 0) {\n  Content: _Page(\n    where: {_fulltext: {match: $term}, _metadata: {url: {base: {exist: true}}}}\n    orderBy: {_ranking: SEMANTIC}\n    limit: $pageSize\n    skip: $start\n    locale: $withinLocale\n  ) {\n    total\n    items {\n      _score\n      ...SearchData\n      _metadata {\n        published\n      }\n      preview: _fulltext(\n        highlight: {enabled: true, startToken: \"<span>\", endToken: \"</span>\"}\n      )\n    }\n    facets {\n      _metadata {\n        types(filters: $types) {\n          name\n          count\n        }\n        locale(filters: $locale) {\n          name\n          count\n        }\n      }\n    }\n  }\n}\n\nfragment SearchData on _IContent {\n  ...IContentData\n}": typeof types.searchContentDocument,
    "query personalizedSearchContent($term: String!, $topInterest: String, $locale: [String!], $withinLocale: [Locales], $types: [String!], $pageSize: Int! = 25, $start: Int! = 0, $boost: Int! = 100) {\n  Content: _Page(\n    where: {_or: [{_fulltext: {match: $term}}, {_fulltext: {match: $topInterest, boost: $boost}}], _metadata: {url: {base: {exist: true}}}}\n    orderBy: {_ranking: SEMANTIC}\n    limit: $pageSize\n    skip: $start\n    locale: $withinLocale\n  ) {\n    total\n    items {\n      _score\n      ...SearchData\n      _metadata {\n        published\n      }\n      preview: _fulltext(\n        highlight: {enabled: true, startToken: \"<span>\", endToken: \"</span>\"}\n      )\n    }\n    facets {\n      _metadata {\n        types(filters: $types) {\n          name\n          count\n        }\n        locale(filters: $locale) {\n          name\n          count\n        }\n      }\n    }\n  }\n}\n\nfragment SearchData on _IContent {\n  ...IContentData\n}": typeof types.personalizedSearchContentDocument,
    "fragment IContentData on _IContent\n{\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment IElementData on _IComponent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment ElementData on _IComponent  {\n  ...IElementData\n}\n\nfragment BlockData on _IComponent  {\n  ...IContentData\n}\n\nfragment PageData on _IContent {\n  ...IContentData\n}\n\nfragment LinkData on ContentUrl {\n  base\n  default\n}\n\nfragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentListItem on _IContent {\n  ...IContentData\n}\n\nfragment ExperienceData on _IExperience {\n  composition {\n    # Experience level\n    ...CompositionNodeData\n    nodes {\n      # Section level\n      ...CompositionNodeData\n      ... on ICompositionStructureNode {\n        nodes {\n          # Row level\n          ...CompositionNodeData\n          ... on ICompositionStructureNode {\n            nodes {\n              # Column level\n              ...CompositionNodeData\n              ... on ICompositionStructureNode {\n                nodes {\n                  # Element level\n                  ...CompositionNodeData\n                  ...CompositionComponentNodeData\n                }\n              }\n            }\n          }\n        }\n      }\n      ...CompositionComponentNodeData\n    }\n  }\n}\n\nfragment CompositionNodeData on ICompositionNode {\n  name: displayName\n  layoutType: nodeType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n}\n\nfragment CompositionComponentNodeData on ICompositionComponentNode {\n  component {\n    ...BlockData\n    ...ElementData\n  }\n}\n\nfragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}": typeof types.IContentDataFragmentDoc,
    "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items: item {\n                ...BlockData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String) {\n        content: _Content(\n            where: {\n                _metadata: { url: { default: { in: $path }, base: { eq: $siteId } }}\n            }\n            locale: $locale\n        ) {\n            total\n            items: item {\n                ...IContentData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items: item {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }": typeof types.getContentByIdDocument,
};
const documents: Documents = {
    "fragment ArticleListElementData on ArticleListElement {\n  articleListCount\n  topics\n}": types.ArticleListElementDataFragmentDoc,
    "query getArticleListElementItems($count: Int!, $locale: [Locales], $topics: [String], $excludeKeys: [String]) {\n  BlogPostPage(\n    orderBy: {_metadata: {published: DESC}}\n    limit: $count\n    locale: $locale\n    where: {_metadata: {status: {eq: \"Published\"}, key: {notIn: $excludeKeys}}, Topic: {in: $topics}}\n  ) {\n    items {\n      ...IContentData\n      articleMeta: _metadata {\n        key\n        published\n        lastModified\n      }\n      blogTitle: Heading\n      blogSubtitle: ArticleSubHeading\n      blogImage: BlogPostPromoImage {\n        ...ReferenceData\n      }\n      blogBody: BlogPostBody {\n        json\n      }\n      blogAuthor: ArticleAuthor\n    }\n  }\n}": types.getArticleListElementItemsDocument,
    "query getDefaultArticleList($locale: [Locales!]) {\n  ArticleListElement(\n    where: {_metadata: {displayName: {startsWith: \"[DEFAULT]\"}, status: {eq: \"Published\"}}}\n    locale: $locale\n    orderBy: {_metadata: {published: DESC}}\n    limit: 1\n  ) {\n    items {\n      ...IContentData\n      ...ArticleListElementData\n    }\n  }\n}": types.getDefaultArticleListDocument,
    "fragment BlockTypeBlockSimpleBlockData on BlockTypeBlockSimpleBlock {\n  BlockSimpleBlock {\n    ...SimpleBlockPropertyData\n  }\n}": types.BlockTypeBlockSimpleBlockDataFragmentDoc,
    "fragment BlockTypeChoiceDropDownListData on BlockTypeChoiceDropDownList {\n  ChoiceDropDownList\n}": types.BlockTypeChoiceDropDownListDataFragmentDoc,
    "fragment BlockTypeChoiceSelectListData on BlockTypeChoiceSelectList {\n  ChoiceSelectList\n}": types.BlockTypeChoiceSelectListDataFragmentDoc,
    "fragment BlockTypeChoiceSelectedNotSelectedData on BlockTypeChoiceSelectedNotSelected {\n  ChoiceSelectedNotSelected\n}": types.BlockTypeChoiceSelectedNotSelectedDataFragmentDoc,
    "fragment BlockTypeContentContentAreaData on BlockTypeContentContentArea {\n  ContentContentArea {\n    ...IContentListItem\n    ...BlockData\n  }\n}": types.BlockTypeContentContentAreaDataFragmentDoc,
    "fragment BlockTypeContentContentAreaItemData on BlockTypeContentContentAreaItem {\n  ContentContentAreaItem {\n    ...BlockData\n  }\n}": types.BlockTypeContentContentAreaItemDataFragmentDoc,
    "fragment BlockTypeContentContentReferenceData on BlockTypeContentContentReference {\n  ContentContentReference {\n    ...ReferenceData\n  }\n}": types.BlockTypeContentContentReferenceDataFragmentDoc,
    "fragment BlockTypeDateTimeData on BlockTypeDateTime {\n  DateTime\n}": types.BlockTypeDateTimeDataFragmentDoc,
    "fragment BlockTypeGuidData on BlockTypeGuid {\n  empty: _metadata {\n    key\n  }\n}": types.BlockTypeGuidDataFragmentDoc,
    "fragment BlockTypeLinkLinkCollectionData on BlockTypeLinkLinkCollection {\n  LinkLinkCollection {\n    ...LinkItemData\n  }\n}": types.BlockTypeLinkLinkCollectionDataFragmentDoc,
    "fragment BlockTypeLinkLinkItemData on BlockTypeLinkLinkItem {\n  LinkLinkItem {\n    ...LinkItemData\n  }\n}": types.BlockTypeLinkLinkItemDataFragmentDoc,
    "fragment BlockTypeLinkUrlToDocumentData on BlockTypeLinkUrlToDocument {\n  LinkUrlToDocument {\n    ...LinkData\n  }\n}": types.BlockTypeLinkUrlToDocumentDataFragmentDoc,
    "fragment BlockTypeLinkUrlToImageData on BlockTypeLinkUrlToImage {\n  LinkUrlToImage {\n    ...LinkData\n  }\n}": types.BlockTypeLinkUrlToImageDataFragmentDoc,
    "fragment BlockTypeLinkUrlToPageData on BlockTypeLinkUrlToPage {\n  LinkUrlToPage {\n    ...LinkData\n  }\n}": types.BlockTypeLinkUrlToPageDataFragmentDoc,
    "fragment BlockTypeListBlockSimpleBlockData on BlockTypeListBlockSimpleBlock {\n  ListBlockSimpleBlock {\n    ...SimpleBlockPropertyData\n  }\n}": types.BlockTypeListBlockSimpleBlockDataFragmentDoc,
    "fragment BlockTypeListChoiceSelectedNotSelectedData on BlockTypeListChoiceSelectedNotSelected {\n  ListChoiceSelectedNotSelected\n}": types.BlockTypeListChoiceSelectedNotSelectedDataFragmentDoc,
    "fragment BlockTypeListContentContentReferenceData on BlockTypeListContentContentReference {\n  ListContentContentReference {\n    ...ReferenceData\n  }\n}": types.BlockTypeListContentContentReferenceDataFragmentDoc,
    "fragment BlockTypeListDateTimeData on BlockTypeListDateTime {\n  ListDateTime\n}": types.BlockTypeListDateTimeDataFragmentDoc,
    "fragment BlockTypeListGuidData on BlockTypeListGuid {\n  ListGuid\n}": types.BlockTypeListGuidDataFragmentDoc,
    "fragment BlockTypeListLinkLinkItemData on BlockTypeListLinkLinkItem {\n  ListLinkLinkItem {\n    ...LinkItemData\n  }\n}": types.BlockTypeListLinkLinkItemDataFragmentDoc,
    "fragment BlockTypeListLinkUrlToDocumentData on BlockTypeListLinkUrlToDocument {\n  ListLinkUrlToDocument {\n    __typename\n  }\n}": types.BlockTypeListLinkUrlToDocumentDataFragmentDoc,
    "fragment BlockTypeListLinkUrlToImageData on BlockTypeListLinkUrlToImage {\n  ListLinkUrlToImage {\n    __typename\n  }\n}": types.BlockTypeListLinkUrlToImageDataFragmentDoc,
    "fragment BlockTypeListLinkUrlToPageData on BlockTypeListLinkUrlToPage {\n  ListLinkUrlToPage {\n    __typename\n  }\n}": types.BlockTypeListLinkUrlToPageDataFragmentDoc,
    "fragment BlockTypeListNumberFloatingPointData on BlockTypeListNumberFloatingPoint {\n  ListNumberFloatingPoint\n}": types.BlockTypeListNumberFloatingPointDataFragmentDoc,
    "fragment BlockTypeListNumberIntegerData on BlockTypeListNumberInteger {\n  ListNumberInteger\n}": types.BlockTypeListNumberIntegerDataFragmentDoc,
    "fragment BlockTypeListTextLongStringData on BlockTypeListTextLongString {\n  ListTextLongString\n}": types.BlockTypeListTextLongStringDataFragmentDoc,
    "fragment BlockTypeListTextStringData on BlockTypeListTextString {\n  ListTextString\n}": types.BlockTypeListTextStringDataFragmentDoc,
    "fragment BlockTypeListTextXHtmlStringData on BlockTypeListTextXHtmlString {\n  ListTextXHtmlString {\n    json\n    html\n  }\n}": types.BlockTypeListTextXHtmlStringDataFragmentDoc,
    "fragment BlockTypeNumberFloatingPointData on BlockTypeNumberFloatingPoint {\n  NumberFloatingPoint\n}": types.BlockTypeNumberFloatingPointDataFragmentDoc,
    "fragment BlockTypeNumberIntegerData on BlockTypeNumberInteger {\n  NumberInteger\n}": types.BlockTypeNumberIntegerDataFragmentDoc,
    "fragment BlockTypeTextLongStringData on BlockTypeTextLongString {\n  TextLongString\n}": types.BlockTypeTextLongStringDataFragmentDoc,
    "fragment BlockTypeTextStringData on BlockTypeTextString {\n  TextString\n}": types.BlockTypeTextStringDataFragmentDoc,
    "fragment BlockTypeTextXHtmlStringData on BlockTypeTextXHtmlString {\n  TextXHtmlString {\n    json\n    html\n  }\n}": types.BlockTypeTextXHtmlStringDataFragmentDoc,
    "fragment ButtonBlockData on ButtonBlock {\n  children: ButtonText\n  url: ButtonUrl {\n    ...LinkData\n  }\n  className: ButtonClass\n  buttonType: ButtonType\n  buttonVariant: ButtonVariant\n}": types.ButtonBlockDataFragmentDoc,
    "fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  children: ButtonText\n  url: ButtonUrl {\n    ...LinkData\n  }\n  className: ButtonClass\n  buttonType: ButtonType\n  buttonVariant: ButtonVariant\n}": types.ButtonBlockPropertyDataFragmentDoc,
    "fragment CTAElementData on CTAElement {\n  cta_text: Text\n  cta_link: Link {\n    ...LinkData\n  }\n}": types.CTAElementDataFragmentDoc,
    "fragment CarouselBlockData on CarouselBlock {\n  CarouselItemsContentArea {\n    ...IContentListItem\n    ...BlockData\n  }\n}": types.CarouselBlockDataFragmentDoc,
    "fragment ContentRecsElementData on ContentRecsElement {\n  ElementDeliveryApiKey\n  ElementRecommendationCount\n}": types.ContentRecsElementDataFragmentDoc,
    "fragment ContinueReadingComponentData on ContinueReadingComponent {\n  topline\n  shared\n  heading\n  content {\n    ...IContentData\n    ...BlockData\n  }\n}": types.ContinueReadingComponentDataFragmentDoc,
    "query getSharedContinueReading($locale: [Locales]) {\n  ContinueReadingComponent(where: {shared: {eq: true}}, locale: $locale) {\n    total\n    item {\n      ...IContentData\n      ...ContinueReadingComponentData\n    }\n  }\n}": types.getSharedContinueReadingDocument,
    "fragment HeadingElementData on HeadingElement {\n  headingText\n}": types.HeadingElementDataFragmentDoc,
    "fragment HeroBlockData on HeroBlock {\n  heroImage: HeroImage {\n    ...ReferenceData\n  }\n  eyebrow: Eyebrow\n  heroHeading: Heading\n  heroSubheading: SubHeading\n  heroDescription: Description {\n    json\n    html\n  }\n  heroColor: HeroColor\n  heroButton: HeroButton {\n    ...ButtonBlockPropertyData\n  }\n}": types.HeroBlockDataFragmentDoc,
    "fragment ImageElementData on ImageElement {\n  altText\n  imageLink {\n    ...ReferenceData\n  }\n}": types.ImageElementDataFragmentDoc,
    "fragment LayoutSettingsBlockData on LayoutSettingsBlock {\n  mainMenu {\n    ...IContentListItem\n  }\n  contactInfoHeading\n  serviceButtons {\n    ...IContentListItem\n  }\n  contactInfo {\n    json\n    html\n  }\n  footerMenus {\n    ...IContentListItem\n  }\n  copyright\n  legalLinks {\n    ...LinkItemData\n  }\n  appIdentifiers\n}": types.LayoutSettingsBlockDataFragmentDoc,
    "fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  _metadata {\n    displayName\n  }\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...LinkData\n  }\n  MegaMenuContentArea {\n    ...IContentData\n    ...MenuNavigationBlockData\n    ...BlogPostPageMenuBlock\n  }\n}": types.MegaMenuGroupBlockDataFragmentDoc,
    "fragment MenuNavigationBlockData on MenuNavigationBlock {\n  _metadata {\n    displayName\n  }\n  MenuNavigationHeading\n  NavigationLinks {\n    ...LinkItemData\n  }\n}": types.MenuNavigationBlockDataFragmentDoc,
    "fragment OdpEmbedBlockData on OdpEmbedBlock {\n  ContentId\n}": types.OdpEmbedBlockDataFragmentDoc,
    "fragment BlogPostPageMenuBlock on BlogPostPage {\n  meta: _metadata {\n    published\n    url {\n      ...LinkData\n    }\n  }\n  topics: Topic\n  heading: Heading\n  author: ArticleAuthor\n  image: BlogPostPromoImage {\n    ...ReferenceData\n  }\n  sharing: SeoSettings {\n    description: MetaDescription\n    image: SharingImage {\n      ...ReferenceData\n    }\n  }\n}": types.BlogPostPageMenuBlockFragmentDoc,
    "fragment PageSeoSettingsData on PageSeoSettings {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}": types.PageSeoSettingsDataFragmentDoc,
    "fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}": types.PageSeoSettingsPropertyDataFragmentDoc,
    "fragment ParagraphElementData on ParagraphElement {\n  text {\n    json\n  }\n}": types.ParagraphElementDataFragmentDoc,
    "fragment QuoteBlockData on QuoteBlock {\n  quote: QuoteText\n  color: QuoteColor\n  active: QuoteActive\n  name: QuoteProfileName\n  profilePicture: QuoteProfilePicture {\n    ...ReferenceData\n  }\n  location: QuoteProfileLocation\n}": types.QuoteBlockDataFragmentDoc,
    "fragment RichTextElementData on RichTextElement {\n  text {\n    json\n    html\n  }\n}": types.RichTextElementDataFragmentDoc,
    "fragment SimpleBlockData on SimpleBlock {\n  StringProp\n}": types.SimpleBlockDataFragmentDoc,
    "fragment SimpleBlockPropertyData on SimpleBlockProperty {\n  StringProp\n}": types.SimpleBlockPropertyDataFragmentDoc,
    "fragment TestimonialElementData on TestimonialElement {\n  customerName\n  customerLocation\n  customerImage {\n    ...ReferenceData\n  }\n  referenceTitle\n  referenceText {\n    json\n  }\n}": types.TestimonialElementDataFragmentDoc,
    "fragment TextBlockData on TextBlock {\n  overline: TextBlockOverline\n  headingSize: TextBlockHeadingSize\n  heading: TextBlockHeading\n  description: TextBlockDescription {\n    json\n    html\n  }\n  center: TextCenter\n  width: TextBlockWidth\n  className: TextClassName\n}": types.TextBlockDataFragmentDoc,
    "fragment VideoElementData on VideoElement {\n  title\n  video {\n    ...ReferenceData\n  }\n  placeholder {\n    ...ReferenceData\n  }\n}": types.VideoElementDataFragmentDoc,
    "fragment BlankExperienceData on BlankExperience {\n  BlankExperienceSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n  ...ExperienceData\n}": types.BlankExperienceDataFragmentDoc,
    "query getBlankExperienceMetaData($key: String!, $locale: [Locales]) {\n  page: BlankExperience(where: {_metadata: {key: {eq: $key}}}, locale: $locale) {\n    items {\n      meta: _metadata {\n        url {\n          base\n        }\n        displayName\n      }\n      seo: BlankExperienceSeoSettings {\n        title: MetaTitle\n        description: MetaDescription\n        image: SharingImage {\n          ...ReferenceData\n        }\n        type: GraphType\n      }\n    }\n  }\n}": types.getBlankExperienceMetaDataDocument,
    "fragment BlogSectionExperienceData on BlogSectionExperience {\n  ...ExperienceData\n}": types.BlogSectionExperienceDataFragmentDoc,
    "query getChildBlogPosts($parentKey: String!, $locale: [Locales!]! = ALL, $author: [String!], $topic: [String!], $limit: Int! = 9, $skip: Int! = 0) {\n  result: BlogSectionExperience(\n    where: {_metadata: {key: {eq: $parentKey}}}\n    locale: $locale\n  ) {\n    items {\n      container: _metadata {\n        key\n        displayName\n      }\n      items: _link(type: ITEMS) {\n        BlogPostPage(skip: $skip, limit: $limit, locale: $locale) {\n          total\n          items {\n            ...IContentData\n            metadata: _metadata {\n              key\n              url {\n                base\n                default\n              }\n              published\n            }\n            heading: Heading\n            subheading: ArticleSubHeading\n            author: ArticleAuthor\n            topic: Topic\n            image: BlogPostPromoImage {\n              src: url {\n                base\n                default\n              }\n            }\n          }\n          facets {\n            author: ArticleAuthor(filters: $author) {\n              name\n              count\n            }\n            topic: Topic(orderBy: ASC, filters: $topic) {\n              name\n              count\n            }\n            metadata: _metadata {\n              published(unit: DAY) {\n                name\n                count\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.getChildBlogPostsDocument,
    "query getBlogSectionExperienceMetaData($key: String!, $version: String, $locale: [Locales!]) {\n  page: BlogSectionExperience(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        displayName\n        published\n        url {\n          base\n          default\n        }\n      }\n      seo_data {\n        ...PageSeoSettingsPropertyData\n      }\n    }\n  }\n}": types.getBlogSectionExperienceMetaDataDocument,
    "fragment ExpTypeBlockSimpleBlockData on ExpTypeBlockSimpleBlock {\n  BlockSimpleBlock {\n    ...SimpleBlockPropertyData\n  }\n  ...ExperienceData\n}": types.ExpTypeBlockSimpleBlockDataFragmentDoc,
    "fragment ExpTypeChoiceDropDownListData on ExpTypeChoiceDropDownList {\n  ChoiceDropDownList\n  ...ExperienceData\n}": types.ExpTypeChoiceDropDownListDataFragmentDoc,
    "fragment ExpTypeChoiceSelectListData on ExpTypeChoiceSelectList {\n  ChoiceSelectList\n  ...ExperienceData\n}": types.ExpTypeChoiceSelectListDataFragmentDoc,
    "fragment ExpTypeChoiceSelectedNotSelectedData on ExpTypeChoiceSelectedNotSelected {\n  ChoiceSelectedNotSelected\n  ...ExperienceData\n}": types.ExpTypeChoiceSelectedNotSelectedDataFragmentDoc,
    "fragment ExpTypeContentContentAreaData on ExpTypeContentContentArea {\n  ContentContentArea {\n    ...BlockData\n  }\n  ...ExperienceData\n}": types.ExpTypeContentContentAreaDataFragmentDoc,
    "fragment ExpTypeContentContentAreaItemData on ExpTypeContentContentAreaItem {\n  ContentContentAreaItem {\n    ...BlockData\n  }\n  ...ExperienceData\n}": types.ExpTypeContentContentAreaItemDataFragmentDoc,
    "fragment ExpTypeContentContentReferenceData on ExpTypeContentContentReference {\n  ContentContentReference {\n    ...ReferenceData\n  }\n  ...ExperienceData\n}": types.ExpTypeContentContentReferenceDataFragmentDoc,
    "fragment ExpTypeDateTimeData on ExpTypeDateTime {\n  DateTime\n  ...ExperienceData\n}": types.ExpTypeDateTimeDataFragmentDoc,
    "fragment ExpTypeGuidData on ExpTypeGuid {\n  ...ExperienceData\n}": types.ExpTypeGuidDataFragmentDoc,
    "fragment ExpTypeLinkLinkCollectionData on ExpTypeLinkLinkCollection {\n  LinkLinkCollection {\n    ...LinkItemData\n  }\n  ...ExperienceData\n}": types.ExpTypeLinkLinkCollectionDataFragmentDoc,
    "fragment ExpTypeLinkLinkItemData on ExpTypeLinkLinkItem {\n  LinkLinkItem {\n    ...LinkItemData\n  }\n  ...ExperienceData\n}": types.ExpTypeLinkLinkItemDataFragmentDoc,
    "fragment ExpTypeLinkUrlToDocumentData on ExpTypeLinkUrlToDocument {\n  LinkUrlToDocument {\n    ...LinkData\n  }\n  ...ExperienceData\n}": types.ExpTypeLinkUrlToDocumentDataFragmentDoc,
    "fragment ExpTypeLinkUrlToImageData on ExpTypeLinkUrlToImage {\n  LinkUrlToImage {\n    ...LinkData\n  }\n  ...ExperienceData\n}": types.ExpTypeLinkUrlToImageDataFragmentDoc,
    "fragment ExpTypeLinkUrlToPageData on ExpTypeLinkUrlToPage {\n  LinkUrlToPage {\n    ...LinkData\n  }\n  ...ExperienceData\n}": types.ExpTypeLinkUrlToPageDataFragmentDoc,
    "fragment ExpTypeListBlockSimpleBlockData on ExpTypeListBlockSimpleBlock {\n  ListBlockSimpleBlock {\n    ...SimpleBlockPropertyData\n  }\n  ...ExperienceData\n}": types.ExpTypeListBlockSimpleBlockDataFragmentDoc,
    "fragment ExpTypeListChoiceSelectedNotSelectedData on ExpTypeListChoiceSelectedNotSelected {\n  ListChoiceSelectedNotSelected\n  ...ExperienceData\n}": types.ExpTypeListChoiceSelectedNotSelectedDataFragmentDoc,
    "fragment ExpTypeListContentContentReferenceData on ExpTypeListContentContentReference {\n  ListContentContentReference {\n    ...ReferenceData\n  }\n  ...ExperienceData\n}": types.ExpTypeListContentContentReferenceDataFragmentDoc,
    "fragment ExpTypeListDateTimeData on ExpTypeListDateTime {\n  ListDateTime\n  ...ExperienceData\n}": types.ExpTypeListDateTimeDataFragmentDoc,
    "fragment ExpTypeListGuidData on ExpTypeListGuid {\n  ListGuid\n  ...ExperienceData\n}": types.ExpTypeListGuidDataFragmentDoc,
    "fragment ExpTypeListLinkLinkItemData on ExpTypeListLinkLinkItem {\n  ListLinkLinkItem {\n    ...LinkItemData\n  }\n  ...ExperienceData\n}": types.ExpTypeListLinkLinkItemDataFragmentDoc,
    "fragment ExpTypeListLinkUrlToDocumentData on ExpTypeListLinkUrlToDocument {\n  ListLinkUrlToDocument {\n    __typename\n  }\n  ...ExperienceData\n}": types.ExpTypeListLinkUrlToDocumentDataFragmentDoc,
    "fragment ExpTypeListLinkUrlToImageData on ExpTypeListLinkUrlToImage {\n  ListLinkUrlToImage {\n    __typename\n  }\n  ...ExperienceData\n}": types.ExpTypeListLinkUrlToImageDataFragmentDoc,
    "fragment ExpTypeListLinkUrlToPageData on ExpTypeListLinkUrlToPage {\n  ListLinkUrlToPage {\n    __typename\n  }\n  ...ExperienceData\n}": types.ExpTypeListLinkUrlToPageDataFragmentDoc,
    "fragment ExpTypeListNumberFloatingPointData on ExpTypeListNumberFloatingPoint {\n  ListNumberFloatingPoint\n  ...ExperienceData\n}": types.ExpTypeListNumberFloatingPointDataFragmentDoc,
    "fragment ExpTypeListNumberIntegerData on ExpTypeListNumberInteger {\n  ListNumberInteger\n  ...ExperienceData\n}": types.ExpTypeListNumberIntegerDataFragmentDoc,
    "fragment ExpTypeListTextLongStringData on ExpTypeListTextLongString {\n  ListTextLongString\n  ...ExperienceData\n}": types.ExpTypeListTextLongStringDataFragmentDoc,
    "fragment ExpTypeListTextStringData on ExpTypeListTextString {\n  ListTextString\n  ...ExperienceData\n}": types.ExpTypeListTextStringDataFragmentDoc,
    "fragment ExpTypeListTextXHtmlStringData on ExpTypeListTextXHtmlString {\n  ListTextXHtmlString {\n    json\n    html\n  }\n  ...ExperienceData\n}": types.ExpTypeListTextXHtmlStringDataFragmentDoc,
    "fragment ExpTypeNumberFloatingPointData on ExpTypeNumberFloatingPoint {\n  NumberFloatingPoint\n  ...ExperienceData\n}": types.ExpTypeNumberFloatingPointDataFragmentDoc,
    "fragment ExpTypeNumberIntegerData on ExpTypeNumberInteger {\n  NumberInteger\n  ...ExperienceData\n}": types.ExpTypeNumberIntegerDataFragmentDoc,
    "fragment ExpTypeTextLongStringData on ExpTypeTextLongString {\n  TextLongString\n  ...ExperienceData\n}": types.ExpTypeTextLongStringDataFragmentDoc,
    "fragment ExpTypeTextStringData on ExpTypeTextString {\n  TextString\n  ...ExperienceData\n}": types.ExpTypeTextStringDataFragmentDoc,
    "fragment ExpTypeTextXHtmlStringData on ExpTypeTextXHtmlString {\n  TextXHtmlString {\n    json\n    html\n  }\n  ...ExperienceData\n}": types.ExpTypeTextXHtmlStringDataFragmentDoc,
    "fragment SimpleExpData on SimpleExp {\n  StringProp\n  ...ExperienceData\n}": types.SimpleExpDataFragmentDoc,
    "fragment ImageMediaComponentData on ImageMedia {\n  alt: AltText\n  meta: _metadata {\n    url {\n      default\n    }\n    name: displayName\n  }\n}": types.ImageMediaComponentDataFragmentDoc,
    "fragment VideoMediaComponentData on VideoMedia {\n  meta: _metadata {\n    url {\n      default\n    }\n    name: displayName\n  }\n}": types.VideoMediaComponentDataFragmentDoc,
    "query getBlogPostPageMetaData($key: String!, $version: String, $locale: [Locales!]) {\n  BlogPostPage(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    pages: items {\n      cms: _metadata {\n        title: displayName\n        published\n        url {\n          base\n          default\n        }\n      }\n      title: Heading\n      author: ArticleAuthor\n      image: BlogPostPromoImage {\n        ...ReferenceData\n      }\n      topics: Topic\n      seo: SeoSettings {\n        title: MetaTitle\n        description: MetaDescription\n        keywords: MetaKeywords\n        image: SharingImage {\n          ...ReferenceData\n        }\n        type: GraphType\n      }\n    }\n  }\n}": types.getBlogPostPageMetaDataDocument,
    "fragment BlogPostPageData on BlogPostPage {\n  blogTitle: Heading\n  blogSubtitle: ArticleSubHeading\n  blogImage: BlogPostPromoImage {\n    ...ReferenceData\n  }\n  blogBody: BlogPostBody {\n    json\n  }\n  blogAuthor: ArticleAuthor\n  blogTopics: Topic\n  continueReading {\n    ...IContentListItem\n    ...BlockData\n  }\n}": types.BlogPostPageDataFragmentDoc,
    "fragment BlogPostPageSearchResult on BlogPostPage {\n  title: Heading\n  image: BlogPostPromoImage {\n    ...ReferenceData\n  }\n  author: ArticleAuthor\n  seodata: SeoSettings {\n    MetaTitle\n    MetaDescription\n  }\n  _metadata {\n    published\n  }\n}": types.BlogPostPageSearchResultFragmentDoc,
    "query getLandingPageMetaData($key: String!, $version: String, $locale: [Locales]) {\n  LandingPage(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    pages: items {\n      _metadata {\n        displayName\n        key\n        version\n        locale\n        url {\n          base\n        }\n      }\n      SeoSettings {\n        MetaTitle\n        MetaDescription\n        SharingImage {\n          ...ReferenceData\n        }\n        GraphType\n      }\n    }\n  }\n}": types.getLandingPageMetaDataDocument,
    "fragment LandingPageData on LandingPage {\n  TopContentArea {\n    ...BlockData\n  }\n  MainContentArea {\n    ...BlockData\n  }\n}": types.LandingPageDataFragmentDoc,
    "fragment PageTypeBlockSimpleBlockData on PageTypeBlockSimpleBlock {\n  BlockSimpleBlock {\n    ...SimpleBlockPropertyData\n  }\n}": types.PageTypeBlockSimpleBlockDataFragmentDoc,
    "fragment PageTypeChoiceDropDownListData on PageTypeChoiceDropDownList {\n  ChoiceDropDownList\n}": types.PageTypeChoiceDropDownListDataFragmentDoc,
    "fragment PageTypeChoiceSelectListData on PageTypeChoiceSelectList {\n  ChoiceSelectList\n}": types.PageTypeChoiceSelectListDataFragmentDoc,
    "fragment PageTypeChoiceSelectedNotSelectedData on PageTypeChoiceSelectedNotSelected {\n  ChoiceSelectedNotSelected\n}": types.PageTypeChoiceSelectedNotSelectedDataFragmentDoc,
    "fragment PageTypeContentContentAreaData on PageTypeContentContentArea {\n  ContentContentArea {\n    ...BlockData\n  }\n}": types.PageTypeContentContentAreaDataFragmentDoc,
    "fragment PageTypeContentContentAreaItemData on PageTypeContentContentAreaItem {\n  ContentContentAreaItem {\n    ...BlockData\n  }\n}": types.PageTypeContentContentAreaItemDataFragmentDoc,
    "fragment PageTypeContentContentReferenceData on PageTypeContentContentReference {\n  ContentContentReference {\n    ...ReferenceData\n  }\n}": types.PageTypeContentContentReferenceDataFragmentDoc,
    "fragment PageTypeDateTimeData on PageTypeDateTime {\n  DateTime\n}": types.PageTypeDateTimeDataFragmentDoc,
    "fragment PageTypeGuidData on PageTypeGuid {\n  empty: _metadata {\n    key\n  }\n}": types.PageTypeGuidDataFragmentDoc,
    "fragment PageTypeLinkLinkCollectionData on PageTypeLinkLinkCollection {\n  LinkLinkCollection {\n    ...LinkItemData\n  }\n}": types.PageTypeLinkLinkCollectionDataFragmentDoc,
    "fragment PageTypeLinkLinkItemData on PageTypeLinkLinkItem {\n  LinkLinkItem {\n    ...LinkItemData\n  }\n}": types.PageTypeLinkLinkItemDataFragmentDoc,
    "fragment PageTypeLinkUrlToDocumentData on PageTypeLinkUrlToDocument {\n  LinkUrlToDocument {\n    ...LinkData\n  }\n}": types.PageTypeLinkUrlToDocumentDataFragmentDoc,
    "fragment PageTypeLinkUrlToImageData on PageTypeLinkUrlToImage {\n  LinkUrlToImage {\n    ...LinkData\n  }\n}": types.PageTypeLinkUrlToImageDataFragmentDoc,
    "fragment PageTypeLinkUrlToPageData on PageTypeLinkUrlToPage {\n  LinkUrlToPage {\n    ...LinkData\n  }\n}": types.PageTypeLinkUrlToPageDataFragmentDoc,
    "fragment PageTypeListBlockSimpleBlockData on PageTypeListBlockSimpleBlock {\n  ListBlockSimpleBlock {\n    ...SimpleBlockPropertyData\n  }\n}": types.PageTypeListBlockSimpleBlockDataFragmentDoc,
    "fragment PageTypeListChoiceSelectedNotSelectedData on PageTypeListChoiceSelectedNotSelected {\n  ListChoiceSelectedNotSelected\n}": types.PageTypeListChoiceSelectedNotSelectedDataFragmentDoc,
    "fragment PageTypeListContentContentReferenceData on PageTypeListContentContentReference {\n  ListContentContentReference {\n    ...ReferenceData\n  }\n}": types.PageTypeListContentContentReferenceDataFragmentDoc,
    "fragment PageTypeListDateTimeData on PageTypeListDateTime {\n  ListDateTime\n}": types.PageTypeListDateTimeDataFragmentDoc,
    "fragment PageTypeListGuidData on PageTypeListGuid {\n  ListGuid\n}": types.PageTypeListGuidDataFragmentDoc,
    "fragment PageTypeListLinkLinkItemData on PageTypeListLinkLinkItem {\n  ListLinkLinkItem {\n    ...LinkItemData\n  }\n}": types.PageTypeListLinkLinkItemDataFragmentDoc,
    "fragment PageTypeListLinkUrlToDocumentData on PageTypeListLinkUrlToDocument {\n  ListLinkUrlToDocument {\n    __typename\n  }\n}": types.PageTypeListLinkUrlToDocumentDataFragmentDoc,
    "fragment PageTypeListLinkUrlToImageData on PageTypeListLinkUrlToImage {\n  ListLinkUrlToImage {\n    __typename\n  }\n}": types.PageTypeListLinkUrlToImageDataFragmentDoc,
    "fragment PageTypeListLinkUrlToPageData on PageTypeListLinkUrlToPage {\n  ListLinkUrlToPage {\n    __typename\n  }\n}": types.PageTypeListLinkUrlToPageDataFragmentDoc,
    "fragment PageTypeListNumberFloatingPointData on PageTypeListNumberFloatingPoint {\n  ListNumberFloatingPoint\n}": types.PageTypeListNumberFloatingPointDataFragmentDoc,
    "fragment PageTypeListNumberIntegerData on PageTypeListNumberInteger {\n  ListNumberInteger\n}": types.PageTypeListNumberIntegerDataFragmentDoc,
    "fragment PageTypeListTextLongStringData on PageTypeListTextLongString {\n  ListTextLongString\n}": types.PageTypeListTextLongStringDataFragmentDoc,
    "fragment PageTypeListTextStringData on PageTypeListTextString {\n  ListTextString\n}": types.PageTypeListTextStringDataFragmentDoc,
    "fragment PageTypeListTextXHtmlStringData on PageTypeListTextXHtmlString {\n  ListTextXHtmlString {\n    json\n    html\n  }\n}": types.PageTypeListTextXHtmlStringDataFragmentDoc,
    "fragment PageTypeNumberFloatingPointData on PageTypeNumberFloatingPoint {\n  NumberFloatingPoint\n}": types.PageTypeNumberFloatingPointDataFragmentDoc,
    "fragment PageTypeNumberIntegerData on PageTypeNumberInteger {\n  NumberInteger\n}": types.PageTypeNumberIntegerDataFragmentDoc,
    "fragment PageTypeTextLongStringData on PageTypeTextLongString {\n  TextLongString\n}": types.PageTypeTextLongStringDataFragmentDoc,
    "fragment PageTypeTextStringData on PageTypeTextString {\n  TextString\n}": types.PageTypeTextStringDataFragmentDoc,
    "fragment PageTypeTextXHtmlStringData on PageTypeTextXHtmlString {\n  TextXHtmlString {\n    json\n    html\n  }\n}": types.PageTypeTextXHtmlStringDataFragmentDoc,
    "fragment SimplePageData on SimplePage {\n  StringProp\n}": types.SimplePageDataFragmentDoc,
    "fragment BlankSectionData on BlankSection {\n  _metadata {\n    key\n  }\n}": types.BlankSectionDataFragmentDoc,
    "query getFooterData($domain: String, $locale: [Locales!]) {\n  appLayout: LayoutSettingsBlock(\n    where: {_or: [{appIdentifiers: {exist: false}}, {_and: [{appIdentifiers: {exist: true}}, {appIdentifiers: {eq: $domain}}]}]}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        key\n        displayName\n      }\n      copyright\n      footerMenus {\n        ...IContentData\n        ...MenuNavigationBlockData\n      }\n      legalLinks {\n        ...LinkItemData\n      }\n      contactInfoHeading\n      contactInfo {\n        json\n      }\n    }\n  }\n}": types.getFooterDataDocument,
    "query getHeaderData($domain: String, $locale: [Locales!]) {\n  appLayout: LayoutSettingsBlock(\n    where: {_or: [{appIdentifiers: {exist: false}}, {_and: [{appIdentifiers: {exist: true}}, {appIdentifiers: {eq: $domain}}]}]}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        key\n        displayName\n      }\n      appIdentifiers\n      mainMenu {\n        ...IContentData\n        ...MegaMenuGroupBlockData\n      }\n      serviceButtons {\n        ...IContentData\n        ...ButtonBlockData\n      }\n    }\n  }\n}": types.getHeaderDataDocument,
    "query getLocales {\n  schema: __schema {\n    types {\n      kind\n      name\n      enumValues {\n        name\n      }\n    }\n  }\n}": types.getLocalesDocument,
    "query getArticles($pageSize: Int! = 10, $start: Int! = 0, $locale: [Locales], $author: [String!], $published: Date, $publishedEnd: Date) {\n  getArticles: BlogPostPage(\n    where: {_and: [{_metadata: {published: {gte: $published}}}, {_metadata: {published: {lte: $publishedEnd}}}], _metadata: {status: {eq: \"Published\"}}}\n    locale: $locale\n    limit: $pageSize\n    skip: $start\n    orderBy: {_metadata: {published: DESC}}\n  ) {\n    total\n    items {\n      ...IContentData\n      _metadata {\n        status\n        published\n      }\n      title: Heading\n      description: SeoSettings {\n        text: MetaDescription\n      }\n      author: ArticleAuthor\n      image: BlogPostPromoImage {\n        ...ReferenceData\n      }\n    }\n    facets {\n      author: ArticleAuthor(orderType: VALUE, orderBy: ASC, filters: $author) {\n        count\n        name\n      }\n      _metadata {\n        published(unit: DAY) {\n          count\n          name\n        }\n      }\n    }\n  }\n}": types.getArticlesDocument,
    "query searchContent($term: String!, $locale: [String!], $withinLocale: [Locales], $types: [String!], $pageSize: Int! = 25, $start: Int! = 0) {\n  Content: _Page(\n    where: {_fulltext: {match: $term}, _metadata: {url: {base: {exist: true}}}}\n    orderBy: {_ranking: SEMANTIC}\n    limit: $pageSize\n    skip: $start\n    locale: $withinLocale\n  ) {\n    total\n    items {\n      _score\n      ...SearchData\n      _metadata {\n        published\n      }\n      preview: _fulltext(\n        highlight: {enabled: true, startToken: \"<span>\", endToken: \"</span>\"}\n      )\n    }\n    facets {\n      _metadata {\n        types(filters: $types) {\n          name\n          count\n        }\n        locale(filters: $locale) {\n          name\n          count\n        }\n      }\n    }\n  }\n}\n\nfragment SearchData on _IContent {\n  ...IContentData\n}": types.searchContentDocument,
    "query personalizedSearchContent($term: String!, $topInterest: String, $locale: [String!], $withinLocale: [Locales], $types: [String!], $pageSize: Int! = 25, $start: Int! = 0, $boost: Int! = 100) {\n  Content: _Page(\n    where: {_or: [{_fulltext: {match: $term}}, {_fulltext: {match: $topInterest, boost: $boost}}], _metadata: {url: {base: {exist: true}}}}\n    orderBy: {_ranking: SEMANTIC}\n    limit: $pageSize\n    skip: $start\n    locale: $withinLocale\n  ) {\n    total\n    items {\n      _score\n      ...SearchData\n      _metadata {\n        published\n      }\n      preview: _fulltext(\n        highlight: {enabled: true, startToken: \"<span>\", endToken: \"</span>\"}\n      )\n    }\n    facets {\n      _metadata {\n        types(filters: $types) {\n          name\n          count\n        }\n        locale(filters: $locale) {\n          name\n          count\n        }\n      }\n    }\n  }\n}\n\nfragment SearchData on _IContent {\n  ...IContentData\n}": types.personalizedSearchContentDocument,
    "fragment IContentData on _IContent\n{\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment IElementData on _IComponent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment ElementData on _IComponent  {\n  ...IElementData\n}\n\nfragment BlockData on _IComponent  {\n  ...IContentData\n}\n\nfragment PageData on _IContent {\n  ...IContentData\n}\n\nfragment LinkData on ContentUrl {\n  base\n  default\n}\n\nfragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentListItem on _IContent {\n  ...IContentData\n}\n\nfragment ExperienceData on _IExperience {\n  composition {\n    # Experience level\n    ...CompositionNodeData\n    nodes {\n      # Section level\n      ...CompositionNodeData\n      ... on ICompositionStructureNode {\n        nodes {\n          # Row level\n          ...CompositionNodeData\n          ... on ICompositionStructureNode {\n            nodes {\n              # Column level\n              ...CompositionNodeData\n              ... on ICompositionStructureNode {\n                nodes {\n                  # Element level\n                  ...CompositionNodeData\n                  ...CompositionComponentNodeData\n                }\n              }\n            }\n          }\n        }\n      }\n      ...CompositionComponentNodeData\n    }\n  }\n}\n\nfragment CompositionNodeData on ICompositionNode {\n  name: displayName\n  layoutType: nodeType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n}\n\nfragment CompositionComponentNodeData on ICompositionComponentNode {\n  component {\n    ...BlockData\n    ...ElementData\n  }\n}\n\nfragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}": types.IContentDataFragmentDoc,
    "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items: item {\n                ...BlockData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String) {\n        content: _Content(\n            where: {\n                _metadata: { url: { default: { in: $path }, base: { eq: $siteId } }}\n            }\n            locale: $locale\n        ) {\n            total\n            items: item {\n                ...IContentData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items: item {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }": types.getContentByIdDocument,
};

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
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ArticleListElementData on ArticleListElement {\n  articleListCount\n  topics\n}"): (typeof documents)["fragment ArticleListElementData on ArticleListElement {\n  articleListCount\n  topics\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getArticleListElementItems($count: Int!, $locale: [Locales], $topics: [String], $excludeKeys: [String]) {\n  BlogPostPage(\n    orderBy: {_metadata: {published: DESC}}\n    limit: $count\n    locale: $locale\n    where: {_metadata: {status: {eq: \"Published\"}, key: {notIn: $excludeKeys}}, Topic: {in: $topics}}\n  ) {\n    items {\n      ...IContentData\n      articleMeta: _metadata {\n        key\n        published\n        lastModified\n      }\n      blogTitle: Heading\n      blogSubtitle: ArticleSubHeading\n      blogImage: BlogPostPromoImage {\n        ...ReferenceData\n      }\n      blogBody: BlogPostBody {\n        json\n      }\n      blogAuthor: ArticleAuthor\n    }\n  }\n}"): (typeof documents)["query getArticleListElementItems($count: Int!, $locale: [Locales], $topics: [String], $excludeKeys: [String]) {\n  BlogPostPage(\n    orderBy: {_metadata: {published: DESC}}\n    limit: $count\n    locale: $locale\n    where: {_metadata: {status: {eq: \"Published\"}, key: {notIn: $excludeKeys}}, Topic: {in: $topics}}\n  ) {\n    items {\n      ...IContentData\n      articleMeta: _metadata {\n        key\n        published\n        lastModified\n      }\n      blogTitle: Heading\n      blogSubtitle: ArticleSubHeading\n      blogImage: BlogPostPromoImage {\n        ...ReferenceData\n      }\n      blogBody: BlogPostBody {\n        json\n      }\n      blogAuthor: ArticleAuthor\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getDefaultArticleList($locale: [Locales!]) {\n  ArticleListElement(\n    where: {_metadata: {displayName: {startsWith: \"[DEFAULT]\"}, status: {eq: \"Published\"}}}\n    locale: $locale\n    orderBy: {_metadata: {published: DESC}}\n    limit: 1\n  ) {\n    items {\n      ...IContentData\n      ...ArticleListElementData\n    }\n  }\n}"): (typeof documents)["query getDefaultArticleList($locale: [Locales!]) {\n  ArticleListElement(\n    where: {_metadata: {displayName: {startsWith: \"[DEFAULT]\"}, status: {eq: \"Published\"}}}\n    locale: $locale\n    orderBy: {_metadata: {published: DESC}}\n    limit: 1\n  ) {\n    items {\n      ...IContentData\n      ...ArticleListElementData\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeBlockSimpleBlockData on BlockTypeBlockSimpleBlock {\n  BlockSimpleBlock {\n    ...SimpleBlockPropertyData\n  }\n}"): (typeof documents)["fragment BlockTypeBlockSimpleBlockData on BlockTypeBlockSimpleBlock {\n  BlockSimpleBlock {\n    ...SimpleBlockPropertyData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeChoiceDropDownListData on BlockTypeChoiceDropDownList {\n  ChoiceDropDownList\n}"): (typeof documents)["fragment BlockTypeChoiceDropDownListData on BlockTypeChoiceDropDownList {\n  ChoiceDropDownList\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeChoiceSelectListData on BlockTypeChoiceSelectList {\n  ChoiceSelectList\n}"): (typeof documents)["fragment BlockTypeChoiceSelectListData on BlockTypeChoiceSelectList {\n  ChoiceSelectList\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeChoiceSelectedNotSelectedData on BlockTypeChoiceSelectedNotSelected {\n  ChoiceSelectedNotSelected\n}"): (typeof documents)["fragment BlockTypeChoiceSelectedNotSelectedData on BlockTypeChoiceSelectedNotSelected {\n  ChoiceSelectedNotSelected\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeContentContentAreaData on BlockTypeContentContentArea {\n  ContentContentArea {\n    ...IContentListItem\n    ...BlockData\n  }\n}"): (typeof documents)["fragment BlockTypeContentContentAreaData on BlockTypeContentContentArea {\n  ContentContentArea {\n    ...IContentListItem\n    ...BlockData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeContentContentAreaItemData on BlockTypeContentContentAreaItem {\n  ContentContentAreaItem {\n    ...BlockData\n  }\n}"): (typeof documents)["fragment BlockTypeContentContentAreaItemData on BlockTypeContentContentAreaItem {\n  ContentContentAreaItem {\n    ...BlockData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeContentContentReferenceData on BlockTypeContentContentReference {\n  ContentContentReference {\n    ...ReferenceData\n  }\n}"): (typeof documents)["fragment BlockTypeContentContentReferenceData on BlockTypeContentContentReference {\n  ContentContentReference {\n    ...ReferenceData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeDateTimeData on BlockTypeDateTime {\n  DateTime\n}"): (typeof documents)["fragment BlockTypeDateTimeData on BlockTypeDateTime {\n  DateTime\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeGuidData on BlockTypeGuid {\n  empty: _metadata {\n    key\n  }\n}"): (typeof documents)["fragment BlockTypeGuidData on BlockTypeGuid {\n  empty: _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeLinkLinkCollectionData on BlockTypeLinkLinkCollection {\n  LinkLinkCollection {\n    ...LinkItemData\n  }\n}"): (typeof documents)["fragment BlockTypeLinkLinkCollectionData on BlockTypeLinkLinkCollection {\n  LinkLinkCollection {\n    ...LinkItemData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeLinkLinkItemData on BlockTypeLinkLinkItem {\n  LinkLinkItem {\n    ...LinkItemData\n  }\n}"): (typeof documents)["fragment BlockTypeLinkLinkItemData on BlockTypeLinkLinkItem {\n  LinkLinkItem {\n    ...LinkItemData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeLinkUrlToDocumentData on BlockTypeLinkUrlToDocument {\n  LinkUrlToDocument {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment BlockTypeLinkUrlToDocumentData on BlockTypeLinkUrlToDocument {\n  LinkUrlToDocument {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeLinkUrlToImageData on BlockTypeLinkUrlToImage {\n  LinkUrlToImage {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment BlockTypeLinkUrlToImageData on BlockTypeLinkUrlToImage {\n  LinkUrlToImage {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeLinkUrlToPageData on BlockTypeLinkUrlToPage {\n  LinkUrlToPage {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment BlockTypeLinkUrlToPageData on BlockTypeLinkUrlToPage {\n  LinkUrlToPage {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeListBlockSimpleBlockData on BlockTypeListBlockSimpleBlock {\n  ListBlockSimpleBlock {\n    ...SimpleBlockPropertyData\n  }\n}"): (typeof documents)["fragment BlockTypeListBlockSimpleBlockData on BlockTypeListBlockSimpleBlock {\n  ListBlockSimpleBlock {\n    ...SimpleBlockPropertyData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeListChoiceSelectedNotSelectedData on BlockTypeListChoiceSelectedNotSelected {\n  ListChoiceSelectedNotSelected\n}"): (typeof documents)["fragment BlockTypeListChoiceSelectedNotSelectedData on BlockTypeListChoiceSelectedNotSelected {\n  ListChoiceSelectedNotSelected\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeListContentContentReferenceData on BlockTypeListContentContentReference {\n  ListContentContentReference {\n    ...ReferenceData\n  }\n}"): (typeof documents)["fragment BlockTypeListContentContentReferenceData on BlockTypeListContentContentReference {\n  ListContentContentReference {\n    ...ReferenceData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeListDateTimeData on BlockTypeListDateTime {\n  ListDateTime\n}"): (typeof documents)["fragment BlockTypeListDateTimeData on BlockTypeListDateTime {\n  ListDateTime\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeListGuidData on BlockTypeListGuid {\n  ListGuid\n}"): (typeof documents)["fragment BlockTypeListGuidData on BlockTypeListGuid {\n  ListGuid\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeListLinkLinkItemData on BlockTypeListLinkLinkItem {\n  ListLinkLinkItem {\n    ...LinkItemData\n  }\n}"): (typeof documents)["fragment BlockTypeListLinkLinkItemData on BlockTypeListLinkLinkItem {\n  ListLinkLinkItem {\n    ...LinkItemData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeListLinkUrlToDocumentData on BlockTypeListLinkUrlToDocument {\n  ListLinkUrlToDocument {\n    __typename\n  }\n}"): (typeof documents)["fragment BlockTypeListLinkUrlToDocumentData on BlockTypeListLinkUrlToDocument {\n  ListLinkUrlToDocument {\n    __typename\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeListLinkUrlToImageData on BlockTypeListLinkUrlToImage {\n  ListLinkUrlToImage {\n    __typename\n  }\n}"): (typeof documents)["fragment BlockTypeListLinkUrlToImageData on BlockTypeListLinkUrlToImage {\n  ListLinkUrlToImage {\n    __typename\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeListLinkUrlToPageData on BlockTypeListLinkUrlToPage {\n  ListLinkUrlToPage {\n    __typename\n  }\n}"): (typeof documents)["fragment BlockTypeListLinkUrlToPageData on BlockTypeListLinkUrlToPage {\n  ListLinkUrlToPage {\n    __typename\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeListNumberFloatingPointData on BlockTypeListNumberFloatingPoint {\n  ListNumberFloatingPoint\n}"): (typeof documents)["fragment BlockTypeListNumberFloatingPointData on BlockTypeListNumberFloatingPoint {\n  ListNumberFloatingPoint\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeListNumberIntegerData on BlockTypeListNumberInteger {\n  ListNumberInteger\n}"): (typeof documents)["fragment BlockTypeListNumberIntegerData on BlockTypeListNumberInteger {\n  ListNumberInteger\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeListTextLongStringData on BlockTypeListTextLongString {\n  ListTextLongString\n}"): (typeof documents)["fragment BlockTypeListTextLongStringData on BlockTypeListTextLongString {\n  ListTextLongString\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeListTextStringData on BlockTypeListTextString {\n  ListTextString\n}"): (typeof documents)["fragment BlockTypeListTextStringData on BlockTypeListTextString {\n  ListTextString\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeListTextXHtmlStringData on BlockTypeListTextXHtmlString {\n  ListTextXHtmlString {\n    json\n    html\n  }\n}"): (typeof documents)["fragment BlockTypeListTextXHtmlStringData on BlockTypeListTextXHtmlString {\n  ListTextXHtmlString {\n    json\n    html\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeNumberFloatingPointData on BlockTypeNumberFloatingPoint {\n  NumberFloatingPoint\n}"): (typeof documents)["fragment BlockTypeNumberFloatingPointData on BlockTypeNumberFloatingPoint {\n  NumberFloatingPoint\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeNumberIntegerData on BlockTypeNumberInteger {\n  NumberInteger\n}"): (typeof documents)["fragment BlockTypeNumberIntegerData on BlockTypeNumberInteger {\n  NumberInteger\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeTextLongStringData on BlockTypeTextLongString {\n  TextLongString\n}"): (typeof documents)["fragment BlockTypeTextLongStringData on BlockTypeTextLongString {\n  TextLongString\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeTextStringData on BlockTypeTextString {\n  TextString\n}"): (typeof documents)["fragment BlockTypeTextStringData on BlockTypeTextString {\n  TextString\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockTypeTextXHtmlStringData on BlockTypeTextXHtmlString {\n  TextXHtmlString {\n    json\n    html\n  }\n}"): (typeof documents)["fragment BlockTypeTextXHtmlStringData on BlockTypeTextXHtmlString {\n  TextXHtmlString {\n    json\n    html\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ButtonBlockData on ButtonBlock {\n  children: ButtonText\n  url: ButtonUrl {\n    ...LinkData\n  }\n  className: ButtonClass\n  buttonType: ButtonType\n  buttonVariant: ButtonVariant\n}"): (typeof documents)["fragment ButtonBlockData on ButtonBlock {\n  children: ButtonText\n  url: ButtonUrl {\n    ...LinkData\n  }\n  className: ButtonClass\n  buttonType: ButtonType\n  buttonVariant: ButtonVariant\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  children: ButtonText\n  url: ButtonUrl {\n    ...LinkData\n  }\n  className: ButtonClass\n  buttonType: ButtonType\n  buttonVariant: ButtonVariant\n}"): (typeof documents)["fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  children: ButtonText\n  url: ButtonUrl {\n    ...LinkData\n  }\n  className: ButtonClass\n  buttonType: ButtonType\n  buttonVariant: ButtonVariant\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment CTAElementData on CTAElement {\n  cta_text: Text\n  cta_link: Link {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment CTAElementData on CTAElement {\n  cta_text: Text\n  cta_link: Link {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment CarouselBlockData on CarouselBlock {\n  CarouselItemsContentArea {\n    ...IContentListItem\n    ...BlockData\n  }\n}"): (typeof documents)["fragment CarouselBlockData on CarouselBlock {\n  CarouselItemsContentArea {\n    ...IContentListItem\n    ...BlockData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ContentRecsElementData on ContentRecsElement {\n  ElementDeliveryApiKey\n  ElementRecommendationCount\n}"): (typeof documents)["fragment ContentRecsElementData on ContentRecsElement {\n  ElementDeliveryApiKey\n  ElementRecommendationCount\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ContinueReadingComponentData on ContinueReadingComponent {\n  topline\n  shared\n  heading\n  content {\n    ...IContentData\n    ...BlockData\n  }\n}"): (typeof documents)["fragment ContinueReadingComponentData on ContinueReadingComponent {\n  topline\n  shared\n  heading\n  content {\n    ...IContentData\n    ...BlockData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getSharedContinueReading($locale: [Locales]) {\n  ContinueReadingComponent(where: {shared: {eq: true}}, locale: $locale) {\n    total\n    item {\n      ...IContentData\n      ...ContinueReadingComponentData\n    }\n  }\n}"): (typeof documents)["query getSharedContinueReading($locale: [Locales]) {\n  ContinueReadingComponent(where: {shared: {eq: true}}, locale: $locale) {\n    total\n    item {\n      ...IContentData\n      ...ContinueReadingComponentData\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HeadingElementData on HeadingElement {\n  headingText\n}"): (typeof documents)["fragment HeadingElementData on HeadingElement {\n  headingText\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HeroBlockData on HeroBlock {\n  heroImage: HeroImage {\n    ...ReferenceData\n  }\n  eyebrow: Eyebrow\n  heroHeading: Heading\n  heroSubheading: SubHeading\n  heroDescription: Description {\n    json\n    html\n  }\n  heroColor: HeroColor\n  heroButton: HeroButton {\n    ...ButtonBlockPropertyData\n  }\n}"): (typeof documents)["fragment HeroBlockData on HeroBlock {\n  heroImage: HeroImage {\n    ...ReferenceData\n  }\n  eyebrow: Eyebrow\n  heroHeading: Heading\n  heroSubheading: SubHeading\n  heroDescription: Description {\n    json\n    html\n  }\n  heroColor: HeroColor\n  heroButton: HeroButton {\n    ...ButtonBlockPropertyData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ImageElementData on ImageElement {\n  altText\n  imageLink {\n    ...ReferenceData\n  }\n}"): (typeof documents)["fragment ImageElementData on ImageElement {\n  altText\n  imageLink {\n    ...ReferenceData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment LayoutSettingsBlockData on LayoutSettingsBlock {\n  mainMenu {\n    ...IContentListItem\n  }\n  contactInfoHeading\n  serviceButtons {\n    ...IContentListItem\n  }\n  contactInfo {\n    json\n    html\n  }\n  footerMenus {\n    ...IContentListItem\n  }\n  copyright\n  legalLinks {\n    ...LinkItemData\n  }\n  appIdentifiers\n}"): (typeof documents)["fragment LayoutSettingsBlockData on LayoutSettingsBlock {\n  mainMenu {\n    ...IContentListItem\n  }\n  contactInfoHeading\n  serviceButtons {\n    ...IContentListItem\n  }\n  contactInfo {\n    json\n    html\n  }\n  footerMenus {\n    ...IContentListItem\n  }\n  copyright\n  legalLinks {\n    ...LinkItemData\n  }\n  appIdentifiers\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  _metadata {\n    displayName\n  }\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...LinkData\n  }\n  MegaMenuContentArea {\n    ...IContentData\n    ...MenuNavigationBlockData\n    ...BlogPostPageMenuBlock\n  }\n}"): (typeof documents)["fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  _metadata {\n    displayName\n  }\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...LinkData\n  }\n  MegaMenuContentArea {\n    ...IContentData\n    ...MenuNavigationBlockData\n    ...BlogPostPageMenuBlock\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment MenuNavigationBlockData on MenuNavigationBlock {\n  _metadata {\n    displayName\n  }\n  MenuNavigationHeading\n  NavigationLinks {\n    ...LinkItemData\n  }\n}"): (typeof documents)["fragment MenuNavigationBlockData on MenuNavigationBlock {\n  _metadata {\n    displayName\n  }\n  MenuNavigationHeading\n  NavigationLinks {\n    ...LinkItemData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment OdpEmbedBlockData on OdpEmbedBlock {\n  ContentId\n}"): (typeof documents)["fragment OdpEmbedBlockData on OdpEmbedBlock {\n  ContentId\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlogPostPageMenuBlock on BlogPostPage {\n  meta: _metadata {\n    published\n    url {\n      ...LinkData\n    }\n  }\n  topics: Topic\n  heading: Heading\n  author: ArticleAuthor\n  image: BlogPostPromoImage {\n    ...ReferenceData\n  }\n  sharing: SeoSettings {\n    description: MetaDescription\n    image: SharingImage {\n      ...ReferenceData\n    }\n  }\n}"): (typeof documents)["fragment BlogPostPageMenuBlock on BlogPostPage {\n  meta: _metadata {\n    published\n    url {\n      ...LinkData\n    }\n  }\n  topics: Topic\n  heading: Heading\n  author: ArticleAuthor\n  image: BlogPostPromoImage {\n    ...ReferenceData\n  }\n  sharing: SeoSettings {\n    description: MetaDescription\n    image: SharingImage {\n      ...ReferenceData\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageSeoSettingsData on PageSeoSettings {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}"): (typeof documents)["fragment PageSeoSettingsData on PageSeoSettings {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}"): (typeof documents)["fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ParagraphElementData on ParagraphElement {\n  text {\n    json\n  }\n}"): (typeof documents)["fragment ParagraphElementData on ParagraphElement {\n  text {\n    json\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment QuoteBlockData on QuoteBlock {\n  quote: QuoteText\n  color: QuoteColor\n  active: QuoteActive\n  name: QuoteProfileName\n  profilePicture: QuoteProfilePicture {\n    ...ReferenceData\n  }\n  location: QuoteProfileLocation\n}"): (typeof documents)["fragment QuoteBlockData on QuoteBlock {\n  quote: QuoteText\n  color: QuoteColor\n  active: QuoteActive\n  name: QuoteProfileName\n  profilePicture: QuoteProfilePicture {\n    ...ReferenceData\n  }\n  location: QuoteProfileLocation\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment RichTextElementData on RichTextElement {\n  text {\n    json\n    html\n  }\n}"): (typeof documents)["fragment RichTextElementData on RichTextElement {\n  text {\n    json\n    html\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment SimpleBlockData on SimpleBlock {\n  StringProp\n}"): (typeof documents)["fragment SimpleBlockData on SimpleBlock {\n  StringProp\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment SimpleBlockPropertyData on SimpleBlockProperty {\n  StringProp\n}"): (typeof documents)["fragment SimpleBlockPropertyData on SimpleBlockProperty {\n  StringProp\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment TestimonialElementData on TestimonialElement {\n  customerName\n  customerLocation\n  customerImage {\n    ...ReferenceData\n  }\n  referenceTitle\n  referenceText {\n    json\n  }\n}"): (typeof documents)["fragment TestimonialElementData on TestimonialElement {\n  customerName\n  customerLocation\n  customerImage {\n    ...ReferenceData\n  }\n  referenceTitle\n  referenceText {\n    json\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment TextBlockData on TextBlock {\n  overline: TextBlockOverline\n  headingSize: TextBlockHeadingSize\n  heading: TextBlockHeading\n  description: TextBlockDescription {\n    json\n    html\n  }\n  center: TextCenter\n  width: TextBlockWidth\n  className: TextClassName\n}"): (typeof documents)["fragment TextBlockData on TextBlock {\n  overline: TextBlockOverline\n  headingSize: TextBlockHeadingSize\n  heading: TextBlockHeading\n  description: TextBlockDescription {\n    json\n    html\n  }\n  center: TextCenter\n  width: TextBlockWidth\n  className: TextClassName\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment VideoElementData on VideoElement {\n  title\n  video {\n    ...ReferenceData\n  }\n  placeholder {\n    ...ReferenceData\n  }\n}"): (typeof documents)["fragment VideoElementData on VideoElement {\n  title\n  video {\n    ...ReferenceData\n  }\n  placeholder {\n    ...ReferenceData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlankExperienceData on BlankExperience {\n  BlankExperienceSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n  ...ExperienceData\n}"): (typeof documents)["fragment BlankExperienceData on BlankExperience {\n  BlankExperienceSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getBlankExperienceMetaData($key: String!, $locale: [Locales]) {\n  page: BlankExperience(where: {_metadata: {key: {eq: $key}}}, locale: $locale) {\n    items {\n      meta: _metadata {\n        url {\n          base\n        }\n        displayName\n      }\n      seo: BlankExperienceSeoSettings {\n        title: MetaTitle\n        description: MetaDescription\n        image: SharingImage {\n          ...ReferenceData\n        }\n        type: GraphType\n      }\n    }\n  }\n}"): (typeof documents)["query getBlankExperienceMetaData($key: String!, $locale: [Locales]) {\n  page: BlankExperience(where: {_metadata: {key: {eq: $key}}}, locale: $locale) {\n    items {\n      meta: _metadata {\n        url {\n          base\n        }\n        displayName\n      }\n      seo: BlankExperienceSeoSettings {\n        title: MetaTitle\n        description: MetaDescription\n        image: SharingImage {\n          ...ReferenceData\n        }\n        type: GraphType\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlogSectionExperienceData on BlogSectionExperience {\n  ...ExperienceData\n}"): (typeof documents)["fragment BlogSectionExperienceData on BlogSectionExperience {\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getChildBlogPosts($parentKey: String!, $locale: [Locales!]! = ALL, $author: [String!], $topic: [String!], $limit: Int! = 9, $skip: Int! = 0) {\n  result: BlogSectionExperience(\n    where: {_metadata: {key: {eq: $parentKey}}}\n    locale: $locale\n  ) {\n    items {\n      container: _metadata {\n        key\n        displayName\n      }\n      items: _link(type: ITEMS) {\n        BlogPostPage(skip: $skip, limit: $limit, locale: $locale) {\n          total\n          items {\n            ...IContentData\n            metadata: _metadata {\n              key\n              url {\n                base\n                default\n              }\n              published\n            }\n            heading: Heading\n            subheading: ArticleSubHeading\n            author: ArticleAuthor\n            topic: Topic\n            image: BlogPostPromoImage {\n              src: url {\n                base\n                default\n              }\n            }\n          }\n          facets {\n            author: ArticleAuthor(filters: $author) {\n              name\n              count\n            }\n            topic: Topic(orderBy: ASC, filters: $topic) {\n              name\n              count\n            }\n            metadata: _metadata {\n              published(unit: DAY) {\n                name\n                count\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query getChildBlogPosts($parentKey: String!, $locale: [Locales!]! = ALL, $author: [String!], $topic: [String!], $limit: Int! = 9, $skip: Int! = 0) {\n  result: BlogSectionExperience(\n    where: {_metadata: {key: {eq: $parentKey}}}\n    locale: $locale\n  ) {\n    items {\n      container: _metadata {\n        key\n        displayName\n      }\n      items: _link(type: ITEMS) {\n        BlogPostPage(skip: $skip, limit: $limit, locale: $locale) {\n          total\n          items {\n            ...IContentData\n            metadata: _metadata {\n              key\n              url {\n                base\n                default\n              }\n              published\n            }\n            heading: Heading\n            subheading: ArticleSubHeading\n            author: ArticleAuthor\n            topic: Topic\n            image: BlogPostPromoImage {\n              src: url {\n                base\n                default\n              }\n            }\n          }\n          facets {\n            author: ArticleAuthor(filters: $author) {\n              name\n              count\n            }\n            topic: Topic(orderBy: ASC, filters: $topic) {\n              name\n              count\n            }\n            metadata: _metadata {\n              published(unit: DAY) {\n                name\n                count\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getBlogSectionExperienceMetaData($key: String!, $version: String, $locale: [Locales!]) {\n  page: BlogSectionExperience(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        displayName\n        published\n        url {\n          base\n          default\n        }\n      }\n      seo_data {\n        ...PageSeoSettingsPropertyData\n      }\n    }\n  }\n}"): (typeof documents)["query getBlogSectionExperienceMetaData($key: String!, $version: String, $locale: [Locales!]) {\n  page: BlogSectionExperience(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        displayName\n        published\n        url {\n          base\n          default\n        }\n      }\n      seo_data {\n        ...PageSeoSettingsPropertyData\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeBlockSimpleBlockData on ExpTypeBlockSimpleBlock {\n  BlockSimpleBlock {\n    ...SimpleBlockPropertyData\n  }\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeBlockSimpleBlockData on ExpTypeBlockSimpleBlock {\n  BlockSimpleBlock {\n    ...SimpleBlockPropertyData\n  }\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeChoiceDropDownListData on ExpTypeChoiceDropDownList {\n  ChoiceDropDownList\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeChoiceDropDownListData on ExpTypeChoiceDropDownList {\n  ChoiceDropDownList\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeChoiceSelectListData on ExpTypeChoiceSelectList {\n  ChoiceSelectList\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeChoiceSelectListData on ExpTypeChoiceSelectList {\n  ChoiceSelectList\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeChoiceSelectedNotSelectedData on ExpTypeChoiceSelectedNotSelected {\n  ChoiceSelectedNotSelected\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeChoiceSelectedNotSelectedData on ExpTypeChoiceSelectedNotSelected {\n  ChoiceSelectedNotSelected\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeContentContentAreaData on ExpTypeContentContentArea {\n  ContentContentArea {\n    ...BlockData\n  }\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeContentContentAreaData on ExpTypeContentContentArea {\n  ContentContentArea {\n    ...BlockData\n  }\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeContentContentAreaItemData on ExpTypeContentContentAreaItem {\n  ContentContentAreaItem {\n    ...BlockData\n  }\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeContentContentAreaItemData on ExpTypeContentContentAreaItem {\n  ContentContentAreaItem {\n    ...BlockData\n  }\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeContentContentReferenceData on ExpTypeContentContentReference {\n  ContentContentReference {\n    ...ReferenceData\n  }\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeContentContentReferenceData on ExpTypeContentContentReference {\n  ContentContentReference {\n    ...ReferenceData\n  }\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeDateTimeData on ExpTypeDateTime {\n  DateTime\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeDateTimeData on ExpTypeDateTime {\n  DateTime\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeGuidData on ExpTypeGuid {\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeGuidData on ExpTypeGuid {\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeLinkLinkCollectionData on ExpTypeLinkLinkCollection {\n  LinkLinkCollection {\n    ...LinkItemData\n  }\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeLinkLinkCollectionData on ExpTypeLinkLinkCollection {\n  LinkLinkCollection {\n    ...LinkItemData\n  }\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeLinkLinkItemData on ExpTypeLinkLinkItem {\n  LinkLinkItem {\n    ...LinkItemData\n  }\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeLinkLinkItemData on ExpTypeLinkLinkItem {\n  LinkLinkItem {\n    ...LinkItemData\n  }\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeLinkUrlToDocumentData on ExpTypeLinkUrlToDocument {\n  LinkUrlToDocument {\n    ...LinkData\n  }\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeLinkUrlToDocumentData on ExpTypeLinkUrlToDocument {\n  LinkUrlToDocument {\n    ...LinkData\n  }\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeLinkUrlToImageData on ExpTypeLinkUrlToImage {\n  LinkUrlToImage {\n    ...LinkData\n  }\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeLinkUrlToImageData on ExpTypeLinkUrlToImage {\n  LinkUrlToImage {\n    ...LinkData\n  }\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeLinkUrlToPageData on ExpTypeLinkUrlToPage {\n  LinkUrlToPage {\n    ...LinkData\n  }\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeLinkUrlToPageData on ExpTypeLinkUrlToPage {\n  LinkUrlToPage {\n    ...LinkData\n  }\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeListBlockSimpleBlockData on ExpTypeListBlockSimpleBlock {\n  ListBlockSimpleBlock {\n    ...SimpleBlockPropertyData\n  }\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeListBlockSimpleBlockData on ExpTypeListBlockSimpleBlock {\n  ListBlockSimpleBlock {\n    ...SimpleBlockPropertyData\n  }\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeListChoiceSelectedNotSelectedData on ExpTypeListChoiceSelectedNotSelected {\n  ListChoiceSelectedNotSelected\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeListChoiceSelectedNotSelectedData on ExpTypeListChoiceSelectedNotSelected {\n  ListChoiceSelectedNotSelected\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeListContentContentReferenceData on ExpTypeListContentContentReference {\n  ListContentContentReference {\n    ...ReferenceData\n  }\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeListContentContentReferenceData on ExpTypeListContentContentReference {\n  ListContentContentReference {\n    ...ReferenceData\n  }\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeListDateTimeData on ExpTypeListDateTime {\n  ListDateTime\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeListDateTimeData on ExpTypeListDateTime {\n  ListDateTime\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeListGuidData on ExpTypeListGuid {\n  ListGuid\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeListGuidData on ExpTypeListGuid {\n  ListGuid\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeListLinkLinkItemData on ExpTypeListLinkLinkItem {\n  ListLinkLinkItem {\n    ...LinkItemData\n  }\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeListLinkLinkItemData on ExpTypeListLinkLinkItem {\n  ListLinkLinkItem {\n    ...LinkItemData\n  }\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeListLinkUrlToDocumentData on ExpTypeListLinkUrlToDocument {\n  ListLinkUrlToDocument {\n    __typename\n  }\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeListLinkUrlToDocumentData on ExpTypeListLinkUrlToDocument {\n  ListLinkUrlToDocument {\n    __typename\n  }\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeListLinkUrlToImageData on ExpTypeListLinkUrlToImage {\n  ListLinkUrlToImage {\n    __typename\n  }\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeListLinkUrlToImageData on ExpTypeListLinkUrlToImage {\n  ListLinkUrlToImage {\n    __typename\n  }\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeListLinkUrlToPageData on ExpTypeListLinkUrlToPage {\n  ListLinkUrlToPage {\n    __typename\n  }\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeListLinkUrlToPageData on ExpTypeListLinkUrlToPage {\n  ListLinkUrlToPage {\n    __typename\n  }\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeListNumberFloatingPointData on ExpTypeListNumberFloatingPoint {\n  ListNumberFloatingPoint\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeListNumberFloatingPointData on ExpTypeListNumberFloatingPoint {\n  ListNumberFloatingPoint\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeListNumberIntegerData on ExpTypeListNumberInteger {\n  ListNumberInteger\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeListNumberIntegerData on ExpTypeListNumberInteger {\n  ListNumberInteger\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeListTextLongStringData on ExpTypeListTextLongString {\n  ListTextLongString\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeListTextLongStringData on ExpTypeListTextLongString {\n  ListTextLongString\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeListTextStringData on ExpTypeListTextString {\n  ListTextString\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeListTextStringData on ExpTypeListTextString {\n  ListTextString\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeListTextXHtmlStringData on ExpTypeListTextXHtmlString {\n  ListTextXHtmlString {\n    json\n    html\n  }\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeListTextXHtmlStringData on ExpTypeListTextXHtmlString {\n  ListTextXHtmlString {\n    json\n    html\n  }\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeNumberFloatingPointData on ExpTypeNumberFloatingPoint {\n  NumberFloatingPoint\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeNumberFloatingPointData on ExpTypeNumberFloatingPoint {\n  NumberFloatingPoint\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeNumberIntegerData on ExpTypeNumberInteger {\n  NumberInteger\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeNumberIntegerData on ExpTypeNumberInteger {\n  NumberInteger\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeTextLongStringData on ExpTypeTextLongString {\n  TextLongString\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeTextLongStringData on ExpTypeTextLongString {\n  TextLongString\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeTextStringData on ExpTypeTextString {\n  TextString\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeTextStringData on ExpTypeTextString {\n  TextString\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExpTypeTextXHtmlStringData on ExpTypeTextXHtmlString {\n  TextXHtmlString {\n    json\n    html\n  }\n  ...ExperienceData\n}"): (typeof documents)["fragment ExpTypeTextXHtmlStringData on ExpTypeTextXHtmlString {\n  TextXHtmlString {\n    json\n    html\n  }\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment SimpleExpData on SimpleExp {\n  StringProp\n  ...ExperienceData\n}"): (typeof documents)["fragment SimpleExpData on SimpleExp {\n  StringProp\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ImageMediaComponentData on ImageMedia {\n  alt: AltText\n  meta: _metadata {\n    url {\n      default\n    }\n    name: displayName\n  }\n}"): (typeof documents)["fragment ImageMediaComponentData on ImageMedia {\n  alt: AltText\n  meta: _metadata {\n    url {\n      default\n    }\n    name: displayName\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment VideoMediaComponentData on VideoMedia {\n  meta: _metadata {\n    url {\n      default\n    }\n    name: displayName\n  }\n}"): (typeof documents)["fragment VideoMediaComponentData on VideoMedia {\n  meta: _metadata {\n    url {\n      default\n    }\n    name: displayName\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getBlogPostPageMetaData($key: String!, $version: String, $locale: [Locales!]) {\n  BlogPostPage(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    pages: items {\n      cms: _metadata {\n        title: displayName\n        published\n        url {\n          base\n          default\n        }\n      }\n      title: Heading\n      author: ArticleAuthor\n      image: BlogPostPromoImage {\n        ...ReferenceData\n      }\n      topics: Topic\n      seo: SeoSettings {\n        title: MetaTitle\n        description: MetaDescription\n        keywords: MetaKeywords\n        image: SharingImage {\n          ...ReferenceData\n        }\n        type: GraphType\n      }\n    }\n  }\n}"): (typeof documents)["query getBlogPostPageMetaData($key: String!, $version: String, $locale: [Locales!]) {\n  BlogPostPage(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    pages: items {\n      cms: _metadata {\n        title: displayName\n        published\n        url {\n          base\n          default\n        }\n      }\n      title: Heading\n      author: ArticleAuthor\n      image: BlogPostPromoImage {\n        ...ReferenceData\n      }\n      topics: Topic\n      seo: SeoSettings {\n        title: MetaTitle\n        description: MetaDescription\n        keywords: MetaKeywords\n        image: SharingImage {\n          ...ReferenceData\n        }\n        type: GraphType\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlogPostPageData on BlogPostPage {\n  blogTitle: Heading\n  blogSubtitle: ArticleSubHeading\n  blogImage: BlogPostPromoImage {\n    ...ReferenceData\n  }\n  blogBody: BlogPostBody {\n    json\n  }\n  blogAuthor: ArticleAuthor\n  blogTopics: Topic\n  continueReading {\n    ...IContentListItem\n    ...BlockData\n  }\n}"): (typeof documents)["fragment BlogPostPageData on BlogPostPage {\n  blogTitle: Heading\n  blogSubtitle: ArticleSubHeading\n  blogImage: BlogPostPromoImage {\n    ...ReferenceData\n  }\n  blogBody: BlogPostBody {\n    json\n  }\n  blogAuthor: ArticleAuthor\n  blogTopics: Topic\n  continueReading {\n    ...IContentListItem\n    ...BlockData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlogPostPageSearchResult on BlogPostPage {\n  title: Heading\n  image: BlogPostPromoImage {\n    ...ReferenceData\n  }\n  author: ArticleAuthor\n  seodata: SeoSettings {\n    MetaTitle\n    MetaDescription\n  }\n  _metadata {\n    published\n  }\n}"): (typeof documents)["fragment BlogPostPageSearchResult on BlogPostPage {\n  title: Heading\n  image: BlogPostPromoImage {\n    ...ReferenceData\n  }\n  author: ArticleAuthor\n  seodata: SeoSettings {\n    MetaTitle\n    MetaDescription\n  }\n  _metadata {\n    published\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getLandingPageMetaData($key: String!, $version: String, $locale: [Locales]) {\n  LandingPage(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    pages: items {\n      _metadata {\n        displayName\n        key\n        version\n        locale\n        url {\n          base\n        }\n      }\n      SeoSettings {\n        MetaTitle\n        MetaDescription\n        SharingImage {\n          ...ReferenceData\n        }\n        GraphType\n      }\n    }\n  }\n}"): (typeof documents)["query getLandingPageMetaData($key: String!, $version: String, $locale: [Locales]) {\n  LandingPage(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    pages: items {\n      _metadata {\n        displayName\n        key\n        version\n        locale\n        url {\n          base\n        }\n      }\n      SeoSettings {\n        MetaTitle\n        MetaDescription\n        SharingImage {\n          ...ReferenceData\n        }\n        GraphType\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment LandingPageData on LandingPage {\n  TopContentArea {\n    ...BlockData\n  }\n  MainContentArea {\n    ...BlockData\n  }\n}"): (typeof documents)["fragment LandingPageData on LandingPage {\n  TopContentArea {\n    ...BlockData\n  }\n  MainContentArea {\n    ...BlockData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeBlockSimpleBlockData on PageTypeBlockSimpleBlock {\n  BlockSimpleBlock {\n    ...SimpleBlockPropertyData\n  }\n}"): (typeof documents)["fragment PageTypeBlockSimpleBlockData on PageTypeBlockSimpleBlock {\n  BlockSimpleBlock {\n    ...SimpleBlockPropertyData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeChoiceDropDownListData on PageTypeChoiceDropDownList {\n  ChoiceDropDownList\n}"): (typeof documents)["fragment PageTypeChoiceDropDownListData on PageTypeChoiceDropDownList {\n  ChoiceDropDownList\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeChoiceSelectListData on PageTypeChoiceSelectList {\n  ChoiceSelectList\n}"): (typeof documents)["fragment PageTypeChoiceSelectListData on PageTypeChoiceSelectList {\n  ChoiceSelectList\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeChoiceSelectedNotSelectedData on PageTypeChoiceSelectedNotSelected {\n  ChoiceSelectedNotSelected\n}"): (typeof documents)["fragment PageTypeChoiceSelectedNotSelectedData on PageTypeChoiceSelectedNotSelected {\n  ChoiceSelectedNotSelected\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeContentContentAreaData on PageTypeContentContentArea {\n  ContentContentArea {\n    ...BlockData\n  }\n}"): (typeof documents)["fragment PageTypeContentContentAreaData on PageTypeContentContentArea {\n  ContentContentArea {\n    ...BlockData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeContentContentAreaItemData on PageTypeContentContentAreaItem {\n  ContentContentAreaItem {\n    ...BlockData\n  }\n}"): (typeof documents)["fragment PageTypeContentContentAreaItemData on PageTypeContentContentAreaItem {\n  ContentContentAreaItem {\n    ...BlockData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeContentContentReferenceData on PageTypeContentContentReference {\n  ContentContentReference {\n    ...ReferenceData\n  }\n}"): (typeof documents)["fragment PageTypeContentContentReferenceData on PageTypeContentContentReference {\n  ContentContentReference {\n    ...ReferenceData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeDateTimeData on PageTypeDateTime {\n  DateTime\n}"): (typeof documents)["fragment PageTypeDateTimeData on PageTypeDateTime {\n  DateTime\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeGuidData on PageTypeGuid {\n  empty: _metadata {\n    key\n  }\n}"): (typeof documents)["fragment PageTypeGuidData on PageTypeGuid {\n  empty: _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeLinkLinkCollectionData on PageTypeLinkLinkCollection {\n  LinkLinkCollection {\n    ...LinkItemData\n  }\n}"): (typeof documents)["fragment PageTypeLinkLinkCollectionData on PageTypeLinkLinkCollection {\n  LinkLinkCollection {\n    ...LinkItemData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeLinkLinkItemData on PageTypeLinkLinkItem {\n  LinkLinkItem {\n    ...LinkItemData\n  }\n}"): (typeof documents)["fragment PageTypeLinkLinkItemData on PageTypeLinkLinkItem {\n  LinkLinkItem {\n    ...LinkItemData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeLinkUrlToDocumentData on PageTypeLinkUrlToDocument {\n  LinkUrlToDocument {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment PageTypeLinkUrlToDocumentData on PageTypeLinkUrlToDocument {\n  LinkUrlToDocument {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeLinkUrlToImageData on PageTypeLinkUrlToImage {\n  LinkUrlToImage {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment PageTypeLinkUrlToImageData on PageTypeLinkUrlToImage {\n  LinkUrlToImage {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeLinkUrlToPageData on PageTypeLinkUrlToPage {\n  LinkUrlToPage {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment PageTypeLinkUrlToPageData on PageTypeLinkUrlToPage {\n  LinkUrlToPage {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeListBlockSimpleBlockData on PageTypeListBlockSimpleBlock {\n  ListBlockSimpleBlock {\n    ...SimpleBlockPropertyData\n  }\n}"): (typeof documents)["fragment PageTypeListBlockSimpleBlockData on PageTypeListBlockSimpleBlock {\n  ListBlockSimpleBlock {\n    ...SimpleBlockPropertyData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeListChoiceSelectedNotSelectedData on PageTypeListChoiceSelectedNotSelected {\n  ListChoiceSelectedNotSelected\n}"): (typeof documents)["fragment PageTypeListChoiceSelectedNotSelectedData on PageTypeListChoiceSelectedNotSelected {\n  ListChoiceSelectedNotSelected\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeListContentContentReferenceData on PageTypeListContentContentReference {\n  ListContentContentReference {\n    ...ReferenceData\n  }\n}"): (typeof documents)["fragment PageTypeListContentContentReferenceData on PageTypeListContentContentReference {\n  ListContentContentReference {\n    ...ReferenceData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeListDateTimeData on PageTypeListDateTime {\n  ListDateTime\n}"): (typeof documents)["fragment PageTypeListDateTimeData on PageTypeListDateTime {\n  ListDateTime\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeListGuidData on PageTypeListGuid {\n  ListGuid\n}"): (typeof documents)["fragment PageTypeListGuidData on PageTypeListGuid {\n  ListGuid\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeListLinkLinkItemData on PageTypeListLinkLinkItem {\n  ListLinkLinkItem {\n    ...LinkItemData\n  }\n}"): (typeof documents)["fragment PageTypeListLinkLinkItemData on PageTypeListLinkLinkItem {\n  ListLinkLinkItem {\n    ...LinkItemData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeListLinkUrlToDocumentData on PageTypeListLinkUrlToDocument {\n  ListLinkUrlToDocument {\n    __typename\n  }\n}"): (typeof documents)["fragment PageTypeListLinkUrlToDocumentData on PageTypeListLinkUrlToDocument {\n  ListLinkUrlToDocument {\n    __typename\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeListLinkUrlToImageData on PageTypeListLinkUrlToImage {\n  ListLinkUrlToImage {\n    __typename\n  }\n}"): (typeof documents)["fragment PageTypeListLinkUrlToImageData on PageTypeListLinkUrlToImage {\n  ListLinkUrlToImage {\n    __typename\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeListLinkUrlToPageData on PageTypeListLinkUrlToPage {\n  ListLinkUrlToPage {\n    __typename\n  }\n}"): (typeof documents)["fragment PageTypeListLinkUrlToPageData on PageTypeListLinkUrlToPage {\n  ListLinkUrlToPage {\n    __typename\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeListNumberFloatingPointData on PageTypeListNumberFloatingPoint {\n  ListNumberFloatingPoint\n}"): (typeof documents)["fragment PageTypeListNumberFloatingPointData on PageTypeListNumberFloatingPoint {\n  ListNumberFloatingPoint\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeListNumberIntegerData on PageTypeListNumberInteger {\n  ListNumberInteger\n}"): (typeof documents)["fragment PageTypeListNumberIntegerData on PageTypeListNumberInteger {\n  ListNumberInteger\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeListTextLongStringData on PageTypeListTextLongString {\n  ListTextLongString\n}"): (typeof documents)["fragment PageTypeListTextLongStringData on PageTypeListTextLongString {\n  ListTextLongString\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeListTextStringData on PageTypeListTextString {\n  ListTextString\n}"): (typeof documents)["fragment PageTypeListTextStringData on PageTypeListTextString {\n  ListTextString\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeListTextXHtmlStringData on PageTypeListTextXHtmlString {\n  ListTextXHtmlString {\n    json\n    html\n  }\n}"): (typeof documents)["fragment PageTypeListTextXHtmlStringData on PageTypeListTextXHtmlString {\n  ListTextXHtmlString {\n    json\n    html\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeNumberFloatingPointData on PageTypeNumberFloatingPoint {\n  NumberFloatingPoint\n}"): (typeof documents)["fragment PageTypeNumberFloatingPointData on PageTypeNumberFloatingPoint {\n  NumberFloatingPoint\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeNumberIntegerData on PageTypeNumberInteger {\n  NumberInteger\n}"): (typeof documents)["fragment PageTypeNumberIntegerData on PageTypeNumberInteger {\n  NumberInteger\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeTextLongStringData on PageTypeTextLongString {\n  TextLongString\n}"): (typeof documents)["fragment PageTypeTextLongStringData on PageTypeTextLongString {\n  TextLongString\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeTextStringData on PageTypeTextString {\n  TextString\n}"): (typeof documents)["fragment PageTypeTextStringData on PageTypeTextString {\n  TextString\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageTypeTextXHtmlStringData on PageTypeTextXHtmlString {\n  TextXHtmlString {\n    json\n    html\n  }\n}"): (typeof documents)["fragment PageTypeTextXHtmlStringData on PageTypeTextXHtmlString {\n  TextXHtmlString {\n    json\n    html\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment SimplePageData on SimplePage {\n  StringProp\n}"): (typeof documents)["fragment SimplePageData on SimplePage {\n  StringProp\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlankSectionData on BlankSection {\n  _metadata {\n    key\n  }\n}"): (typeof documents)["fragment BlankSectionData on BlankSection {\n  _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getFooterData($domain: String, $locale: [Locales!]) {\n  appLayout: LayoutSettingsBlock(\n    where: {_or: [{appIdentifiers: {exist: false}}, {_and: [{appIdentifiers: {exist: true}}, {appIdentifiers: {eq: $domain}}]}]}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        key\n        displayName\n      }\n      copyright\n      footerMenus {\n        ...IContentData\n        ...MenuNavigationBlockData\n      }\n      legalLinks {\n        ...LinkItemData\n      }\n      contactInfoHeading\n      contactInfo {\n        json\n      }\n    }\n  }\n}"): (typeof documents)["query getFooterData($domain: String, $locale: [Locales!]) {\n  appLayout: LayoutSettingsBlock(\n    where: {_or: [{appIdentifiers: {exist: false}}, {_and: [{appIdentifiers: {exist: true}}, {appIdentifiers: {eq: $domain}}]}]}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        key\n        displayName\n      }\n      copyright\n      footerMenus {\n        ...IContentData\n        ...MenuNavigationBlockData\n      }\n      legalLinks {\n        ...LinkItemData\n      }\n      contactInfoHeading\n      contactInfo {\n        json\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getHeaderData($domain: String, $locale: [Locales!]) {\n  appLayout: LayoutSettingsBlock(\n    where: {_or: [{appIdentifiers: {exist: false}}, {_and: [{appIdentifiers: {exist: true}}, {appIdentifiers: {eq: $domain}}]}]}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        key\n        displayName\n      }\n      appIdentifiers\n      mainMenu {\n        ...IContentData\n        ...MegaMenuGroupBlockData\n      }\n      serviceButtons {\n        ...IContentData\n        ...ButtonBlockData\n      }\n    }\n  }\n}"): (typeof documents)["query getHeaderData($domain: String, $locale: [Locales!]) {\n  appLayout: LayoutSettingsBlock(\n    where: {_or: [{appIdentifiers: {exist: false}}, {_and: [{appIdentifiers: {exist: true}}, {appIdentifiers: {eq: $domain}}]}]}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        key\n        displayName\n      }\n      appIdentifiers\n      mainMenu {\n        ...IContentData\n        ...MegaMenuGroupBlockData\n      }\n      serviceButtons {\n        ...IContentData\n        ...ButtonBlockData\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getLocales {\n  schema: __schema {\n    types {\n      kind\n      name\n      enumValues {\n        name\n      }\n    }\n  }\n}"): (typeof documents)["query getLocales {\n  schema: __schema {\n    types {\n      kind\n      name\n      enumValues {\n        name\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getArticles($pageSize: Int! = 10, $start: Int! = 0, $locale: [Locales], $author: [String!], $published: Date, $publishedEnd: Date) {\n  getArticles: BlogPostPage(\n    where: {_and: [{_metadata: {published: {gte: $published}}}, {_metadata: {published: {lte: $publishedEnd}}}], _metadata: {status: {eq: \"Published\"}}}\n    locale: $locale\n    limit: $pageSize\n    skip: $start\n    orderBy: {_metadata: {published: DESC}}\n  ) {\n    total\n    items {\n      ...IContentData\n      _metadata {\n        status\n        published\n      }\n      title: Heading\n      description: SeoSettings {\n        text: MetaDescription\n      }\n      author: ArticleAuthor\n      image: BlogPostPromoImage {\n        ...ReferenceData\n      }\n    }\n    facets {\n      author: ArticleAuthor(orderType: VALUE, orderBy: ASC, filters: $author) {\n        count\n        name\n      }\n      _metadata {\n        published(unit: DAY) {\n          count\n          name\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query getArticles($pageSize: Int! = 10, $start: Int! = 0, $locale: [Locales], $author: [String!], $published: Date, $publishedEnd: Date) {\n  getArticles: BlogPostPage(\n    where: {_and: [{_metadata: {published: {gte: $published}}}, {_metadata: {published: {lte: $publishedEnd}}}], _metadata: {status: {eq: \"Published\"}}}\n    locale: $locale\n    limit: $pageSize\n    skip: $start\n    orderBy: {_metadata: {published: DESC}}\n  ) {\n    total\n    items {\n      ...IContentData\n      _metadata {\n        status\n        published\n      }\n      title: Heading\n      description: SeoSettings {\n        text: MetaDescription\n      }\n      author: ArticleAuthor\n      image: BlogPostPromoImage {\n        ...ReferenceData\n      }\n    }\n    facets {\n      author: ArticleAuthor(orderType: VALUE, orderBy: ASC, filters: $author) {\n        count\n        name\n      }\n      _metadata {\n        published(unit: DAY) {\n          count\n          name\n        }\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query searchContent($term: String!, $locale: [String!], $withinLocale: [Locales], $types: [String!], $pageSize: Int! = 25, $start: Int! = 0) {\n  Content: _Page(\n    where: {_fulltext: {match: $term}, _metadata: {url: {base: {exist: true}}}}\n    orderBy: {_ranking: SEMANTIC}\n    limit: $pageSize\n    skip: $start\n    locale: $withinLocale\n  ) {\n    total\n    items {\n      _score\n      ...SearchData\n      _metadata {\n        published\n      }\n      preview: _fulltext(\n        highlight: {enabled: true, startToken: \"<span>\", endToken: \"</span>\"}\n      )\n    }\n    facets {\n      _metadata {\n        types(filters: $types) {\n          name\n          count\n        }\n        locale(filters: $locale) {\n          name\n          count\n        }\n      }\n    }\n  }\n}\n\nfragment SearchData on _IContent {\n  ...IContentData\n}"): (typeof documents)["query searchContent($term: String!, $locale: [String!], $withinLocale: [Locales], $types: [String!], $pageSize: Int! = 25, $start: Int! = 0) {\n  Content: _Page(\n    where: {_fulltext: {match: $term}, _metadata: {url: {base: {exist: true}}}}\n    orderBy: {_ranking: SEMANTIC}\n    limit: $pageSize\n    skip: $start\n    locale: $withinLocale\n  ) {\n    total\n    items {\n      _score\n      ...SearchData\n      _metadata {\n        published\n      }\n      preview: _fulltext(\n        highlight: {enabled: true, startToken: \"<span>\", endToken: \"</span>\"}\n      )\n    }\n    facets {\n      _metadata {\n        types(filters: $types) {\n          name\n          count\n        }\n        locale(filters: $locale) {\n          name\n          count\n        }\n      }\n    }\n  }\n}\n\nfragment SearchData on _IContent {\n  ...IContentData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query personalizedSearchContent($term: String!, $topInterest: String, $locale: [String!], $withinLocale: [Locales], $types: [String!], $pageSize: Int! = 25, $start: Int! = 0, $boost: Int! = 100) {\n  Content: _Page(\n    where: {_or: [{_fulltext: {match: $term}}, {_fulltext: {match: $topInterest, boost: $boost}}], _metadata: {url: {base: {exist: true}}}}\n    orderBy: {_ranking: SEMANTIC}\n    limit: $pageSize\n    skip: $start\n    locale: $withinLocale\n  ) {\n    total\n    items {\n      _score\n      ...SearchData\n      _metadata {\n        published\n      }\n      preview: _fulltext(\n        highlight: {enabled: true, startToken: \"<span>\", endToken: \"</span>\"}\n      )\n    }\n    facets {\n      _metadata {\n        types(filters: $types) {\n          name\n          count\n        }\n        locale(filters: $locale) {\n          name\n          count\n        }\n      }\n    }\n  }\n}\n\nfragment SearchData on _IContent {\n  ...IContentData\n}"): (typeof documents)["query personalizedSearchContent($term: String!, $topInterest: String, $locale: [String!], $withinLocale: [Locales], $types: [String!], $pageSize: Int! = 25, $start: Int! = 0, $boost: Int! = 100) {\n  Content: _Page(\n    where: {_or: [{_fulltext: {match: $term}}, {_fulltext: {match: $topInterest, boost: $boost}}], _metadata: {url: {base: {exist: true}}}}\n    orderBy: {_ranking: SEMANTIC}\n    limit: $pageSize\n    skip: $start\n    locale: $withinLocale\n  ) {\n    total\n    items {\n      _score\n      ...SearchData\n      _metadata {\n        published\n      }\n      preview: _fulltext(\n        highlight: {enabled: true, startToken: \"<span>\", endToken: \"</span>\"}\n      )\n    }\n    facets {\n      _metadata {\n        types(filters: $types) {\n          name\n          count\n        }\n        locale(filters: $locale) {\n          name\n          count\n        }\n      }\n    }\n  }\n}\n\nfragment SearchData on _IContent {\n  ...IContentData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment IContentData on _IContent\n{\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment IElementData on _IComponent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment ElementData on _IComponent  {\n  ...IElementData\n}\n\nfragment BlockData on _IComponent  {\n  ...IContentData\n}\n\nfragment PageData on _IContent {\n  ...IContentData\n}\n\nfragment LinkData on ContentUrl {\n  base\n  default\n}\n\nfragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentListItem on _IContent {\n  ...IContentData\n}\n\nfragment ExperienceData on _IExperience {\n  composition {\n    # Experience level\n    ...CompositionNodeData\n    nodes {\n      # Section level\n      ...CompositionNodeData\n      ... on ICompositionStructureNode {\n        nodes {\n          # Row level\n          ...CompositionNodeData\n          ... on ICompositionStructureNode {\n            nodes {\n              # Column level\n              ...CompositionNodeData\n              ... on ICompositionStructureNode {\n                nodes {\n                  # Element level\n                  ...CompositionNodeData\n                  ...CompositionComponentNodeData\n                }\n              }\n            }\n          }\n        }\n      }\n      ...CompositionComponentNodeData\n    }\n  }\n}\n\nfragment CompositionNodeData on ICompositionNode {\n  name: displayName\n  layoutType: nodeType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n}\n\nfragment CompositionComponentNodeData on ICompositionComponentNode {\n  component {\n    ...BlockData\n    ...ElementData\n  }\n}\n\nfragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment IContentData on _IContent\n{\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment IElementData on _IComponent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment ElementData on _IComponent  {\n  ...IElementData\n}\n\nfragment BlockData on _IComponent  {\n  ...IContentData\n}\n\nfragment PageData on _IContent {\n  ...IContentData\n}\n\nfragment LinkData on ContentUrl {\n  base\n  default\n}\n\nfragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentListItem on _IContent {\n  ...IContentData\n}\n\nfragment ExperienceData on _IExperience {\n  composition {\n    # Experience level\n    ...CompositionNodeData\n    nodes {\n      # Section level\n      ...CompositionNodeData\n      ... on ICompositionStructureNode {\n        nodes {\n          # Row level\n          ...CompositionNodeData\n          ... on ICompositionStructureNode {\n            nodes {\n              # Column level\n              ...CompositionNodeData\n              ... on ICompositionStructureNode {\n                nodes {\n                  # Element level\n                  ...CompositionNodeData\n                  ...CompositionComponentNodeData\n                }\n              }\n            }\n          }\n        }\n      }\n      ...CompositionComponentNodeData\n    }\n  }\n}\n\nfragment CompositionNodeData on ICompositionNode {\n  name: displayName\n  layoutType: nodeType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n}\n\nfragment CompositionComponentNodeData on ICompositionComponentNode {\n  component {\n    ...BlockData\n    ...ElementData\n  }\n}\n\nfragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items: item {\n                ...BlockData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String) {\n        content: _Content(\n            where: {\n                _metadata: { url: { default: { in: $path }, base: { eq: $siteId } }}\n            }\n            locale: $locale\n        ) {\n            total\n            items: item {\n                ...IContentData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items: item {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }"): (typeof documents)["query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items: item {\n                ...BlockData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String) {\n        content: _Content(\n            where: {\n                _metadata: { url: { default: { in: $path }, base: { eq: $siteId } }}\n            }\n            locale: $locale\n        ) {\n            total\n            items: item {\n                ...IContentData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items: item {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;