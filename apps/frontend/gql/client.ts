import type * as Schema from "./graphql";
import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export const LinkDataFragmentDoc = gql`
    fragment LinkData on ContentUrl {
  base
  default
}
    `;
export const ReferenceDataFragmentDoc = gql`
    fragment ReferenceData on ContentReference {
  key
  url {
    ...LinkData
  }
}
    `;
export const PageSeoSettingsPropertyDataFragmentDoc = gql`
    fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {
  MetaTitle
  MetaDescription
  MetaKeywords
  SharingImage {
    ...ReferenceData
  }
  GraphType
}
    `;
export const CompositionNodeDataFragmentDoc = gql`
    fragment CompositionNodeData on ICompositionNode {
  name: displayName
  layoutType: nodeType
  type
  key
  template: displayTemplateKey
  settings: displaySettings {
    key
    value
  }
}
    `;
export const IContentInfoFragmentDoc = gql`
    fragment IContentInfo on IContentMetadata {
  key
  locale
  types
  displayName
  version
  url {
    ...LinkData
  }
}
    `;
export const IContentDataFragmentDoc = gql`
    fragment IContentData on _IContent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const BlockDataFragmentDoc = gql`
    fragment BlockData on _IComponent {
  ...IContentData
}
    `;
export const IElementDataFragmentDoc = gql`
    fragment IElementData on _IComponent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const ElementDataFragmentDoc = gql`
    fragment ElementData on _IComponent {
  ...IElementData
}
    `;
export const ArticleListElementDataFragmentDoc = gql`
    fragment ArticleListElementData on ArticleListElement {
  articleListCount
  topics
}
    `;
export const SimpleBlockPropertyDataFragmentDoc = gql`
    fragment SimpleBlockPropertyData on SimpleBlockProperty {
  StringProp
}
    `;
export const BlockTypeBlockSimpleBlockDataFragmentDoc = gql`
    fragment BlockTypeBlockSimpleBlockData on BlockTypeBlockSimpleBlock {
  BlockSimpleBlock {
    ...SimpleBlockPropertyData
  }
}
    `;
export const BlockTypeChoiceDropDownListDataFragmentDoc = gql`
    fragment BlockTypeChoiceDropDownListData on BlockTypeChoiceDropDownList {
  ChoiceDropDownList
}
    `;
export const BlockTypeChoiceSelectListDataFragmentDoc = gql`
    fragment BlockTypeChoiceSelectListData on BlockTypeChoiceSelectList {
  ChoiceSelectList
}
    `;
export const BlockTypeChoiceSelectedNotSelectedDataFragmentDoc = gql`
    fragment BlockTypeChoiceSelectedNotSelectedData on BlockTypeChoiceSelectedNotSelected {
  ChoiceSelectedNotSelected
}
    `;
export const IContentListItemFragmentDoc = gql`
    fragment IContentListItem on _IContent {
  ...IContentData
}
    `;
export const ImageMediaComponentDataFragmentDoc = gql`
    fragment ImageMediaComponentData on ImageMedia {
  alt: AltText
  meta: _metadata {
    url {
      default
    }
    name: displayName
  }
}
    `;
export const VideoMediaComponentDataFragmentDoc = gql`
    fragment VideoMediaComponentData on VideoMedia {
  meta: _metadata {
    url {
      default
    }
    name: displayName
  }
}
    `;
export const BlockTypeContentContentReferenceDataFragmentDoc = gql`
    fragment BlockTypeContentContentReferenceData on BlockTypeContentContentReference {
  ContentContentReference {
    ...ReferenceData
  }
}
    `;
export const BlockTypeDateTimeDataFragmentDoc = gql`
    fragment BlockTypeDateTimeData on BlockTypeDateTime {
  DateTime
}
    `;
export const BlockTypeGuidDataFragmentDoc = gql`
    fragment BlockTypeGuidData on BlockTypeGuid {
  Guid
}
    `;
export const LinkItemDataFragmentDoc = gql`
    fragment LinkItemData on Link {
  title
  text
  target
  url {
    ...LinkData
  }
}
    `;
export const BlockTypeLinkLinkCollectionDataFragmentDoc = gql`
    fragment BlockTypeLinkLinkCollectionData on BlockTypeLinkLinkCollection {
  LinkLinkCollection {
    ...LinkItemData
  }
}
    `;
export const BlockTypeLinkLinkItemDataFragmentDoc = gql`
    fragment BlockTypeLinkLinkItemData on BlockTypeLinkLinkItem {
  LinkLinkItem {
    ...LinkItemData
  }
}
    `;
export const BlockTypeLinkUrlToDocumentDataFragmentDoc = gql`
    fragment BlockTypeLinkUrlToDocumentData on BlockTypeLinkUrlToDocument {
  LinkUrlToDocument {
    ...LinkData
  }
}
    `;
export const BlockTypeLinkUrlToImageDataFragmentDoc = gql`
    fragment BlockTypeLinkUrlToImageData on BlockTypeLinkUrlToImage {
  LinkUrlToImage {
    ...LinkData
  }
}
    `;
export const BlockTypeLinkUrlToPageDataFragmentDoc = gql`
    fragment BlockTypeLinkUrlToPageData on BlockTypeLinkUrlToPage {
  LinkUrlToPage {
    ...LinkData
  }
}
    `;
export const BlockTypeListBlockSimpleBlockDataFragmentDoc = gql`
    fragment BlockTypeListBlockSimpleBlockData on BlockTypeListBlockSimpleBlock {
  ListBlockSimpleBlock {
    ...SimpleBlockPropertyData
  }
}
    `;
export const BlockTypeListChoiceSelectedNotSelectedDataFragmentDoc = gql`
    fragment BlockTypeListChoiceSelectedNotSelectedData on BlockTypeListChoiceSelectedNotSelected {
  ListChoiceSelectedNotSelected
}
    `;
export const BlockTypeListContentContentReferenceDataFragmentDoc = gql`
    fragment BlockTypeListContentContentReferenceData on BlockTypeListContentContentReference {
  ListContentContentReference {
    ...ReferenceData
  }
}
    `;
export const BlockTypeListDateTimeDataFragmentDoc = gql`
    fragment BlockTypeListDateTimeData on BlockTypeListDateTime {
  ListDateTime
}
    `;
export const BlockTypeListGuidDataFragmentDoc = gql`
    fragment BlockTypeListGuidData on BlockTypeListGuid {
  ListGuid
}
    `;
export const BlockTypeListLinkLinkItemDataFragmentDoc = gql`
    fragment BlockTypeListLinkLinkItemData on BlockTypeListLinkLinkItem {
  ListLinkLinkItem {
    ...LinkItemData
  }
}
    `;
export const BlockTypeListLinkUrlToDocumentDataFragmentDoc = gql`
    fragment BlockTypeListLinkUrlToDocumentData on BlockTypeListLinkUrlToDocument {
  ListLinkUrlToDocument {
    __typename
  }
}
    `;
export const BlockTypeListLinkUrlToImageDataFragmentDoc = gql`
    fragment BlockTypeListLinkUrlToImageData on BlockTypeListLinkUrlToImage {
  ListLinkUrlToImage {
    __typename
  }
}
    `;
export const BlockTypeListLinkUrlToPageDataFragmentDoc = gql`
    fragment BlockTypeListLinkUrlToPageData on BlockTypeListLinkUrlToPage {
  ListLinkUrlToPage {
    __typename
  }
}
    `;
export const BlockTypeListNumberFloatingPointDataFragmentDoc = gql`
    fragment BlockTypeListNumberFloatingPointData on BlockTypeListNumberFloatingPoint {
  ListNumberFloatingPoint
}
    `;
export const BlockTypeListNumberIntegerDataFragmentDoc = gql`
    fragment BlockTypeListNumberIntegerData on BlockTypeListNumberInteger {
  ListNumberInteger
}
    `;
export const BlockTypeListTextLongStringDataFragmentDoc = gql`
    fragment BlockTypeListTextLongStringData on BlockTypeListTextLongString {
  ListTextLongString
}
    `;
export const BlockTypeListTextStringDataFragmentDoc = gql`
    fragment BlockTypeListTextStringData on BlockTypeListTextString {
  ListTextString
}
    `;
export const BlockTypeListTextXHtmlStringDataFragmentDoc = gql`
    fragment BlockTypeListTextXHtmlStringData on BlockTypeListTextXHtmlString {
  ListTextXHtmlString {
    json
    html
  }
}
    `;
export const BlockTypeNumberFloatingPointDataFragmentDoc = gql`
    fragment BlockTypeNumberFloatingPointData on BlockTypeNumberFloatingPoint {
  NumberFloatingPoint
}
    `;
export const BlockTypeNumberIntegerDataFragmentDoc = gql`
    fragment BlockTypeNumberIntegerData on BlockTypeNumberInteger {
  NumberInteger
}
    `;
export const BlockTypeTextLongStringDataFragmentDoc = gql`
    fragment BlockTypeTextLongStringData on BlockTypeTextLongString {
  TextLongString
}
    `;
export const BlockTypeTextStringDataFragmentDoc = gql`
    fragment BlockTypeTextStringData on BlockTypeTextString {
  TextString
}
    `;
export const BlockTypeTextXHtmlStringDataFragmentDoc = gql`
    fragment BlockTypeTextXHtmlStringData on BlockTypeTextXHtmlString {
  TextXHtmlString {
    json
    html
  }
}
    `;
export const ButtonBlockDataFragmentDoc = gql`
    fragment ButtonBlockData on ButtonBlock {
  children: ButtonText
  url: ButtonUrl {
    ...LinkData
  }
  className: ButtonClass
  buttonType: ButtonType
  buttonVariant: ButtonVariant
}
    `;
export const CTAElementDataFragmentDoc = gql`
    fragment CTAElementData on CTAElement {
  cta_text: Text
  cta_link: Link {
    ...LinkData
  }
}
    `;
export const ContentRecsElementDataFragmentDoc = gql`
    fragment ContentRecsElementData on ContentRecsElement {
  ElementDeliveryApiKey
  ElementRecommendationCount
}
    `;
export const HeadingElementDataFragmentDoc = gql`
    fragment HeadingElementData on HeadingElement {
  headingText
}
    `;
export const ButtonBlockPropertyDataFragmentDoc = gql`
    fragment ButtonBlockPropertyData on ButtonBlockProperty {
  children: ButtonText
  url: ButtonUrl {
    ...LinkData
  }
  className: ButtonClass
  buttonType: ButtonType
  buttonVariant: ButtonVariant
}
    `;
export const HeroBlockDataFragmentDoc = gql`
    fragment HeroBlockData on HeroBlock {
  heroImage: HeroImage {
    ...ReferenceData
  }
  eyebrow: Eyebrow
  heroHeading: Heading
  heroSubheading: SubHeading
  heroDescription: Description {
    json
    html
  }
  heroColor: HeroColor
  heroButton: HeroButton {
    ...ButtonBlockPropertyData
  }
}
    `;
export const ImageElementDataFragmentDoc = gql`
    fragment ImageElementData on ImageElement {
  altText
  imageLink {
    ...ReferenceData
  }
}
    `;
export const LayoutSettingsBlockDataFragmentDoc = gql`
    fragment LayoutSettingsBlockData on LayoutSettingsBlock {
  mainMenu {
    ...IContentListItem
    ...ImageMediaComponentData
    ...VideoMediaComponentData
  }
  contactInfoHeading
  serviceButtons {
    ...IContentListItem
    ...ImageMediaComponentData
    ...VideoMediaComponentData
  }
  contactInfo {
    json
    html
  }
  footerMenus {
    ...IContentListItem
    ...ImageMediaComponentData
    ...VideoMediaComponentData
  }
  copyright
  legalLinks {
    ...LinkItemData
  }
  appIdentifiers
}
    `;
export const MenuNavigationBlockDataFragmentDoc = gql`
    fragment MenuNavigationBlockData on MenuNavigationBlock {
  _metadata {
    displayName
  }
  MenuNavigationHeading
  NavigationLinks {
    ...LinkItemData
  }
}
    `;
export const BlogPostPageMenuBlockFragmentDoc = gql`
    fragment BlogPostPageMenuBlock on BlogPostPage {
  meta: _metadata {
    published
    url {
      ...LinkData
    }
  }
  topics: Topic
  heading: Heading
  author: ArticleAuthor
  image: BlogPostPromoImage {
    ...ReferenceData
  }
  sharing: SeoSettings {
    description: MetaDescription
    image: SharingImage {
      ...ReferenceData
    }
  }
}
    `;
export const MegaMenuGroupBlockDataFragmentDoc = gql`
    fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {
  _metadata {
    displayName
  }
  MenuMenuHeading
  MegaMenuUrl {
    ...LinkData
  }
  MegaMenuContentArea {
    ...IContentData
    ...MenuNavigationBlockData
    ...BlogPostPageMenuBlock
  }
}
    `;
export const OdpEmbedBlockDataFragmentDoc = gql`
    fragment OdpEmbedBlockData on OdpEmbedBlock {
  ContentId
}
    `;
export const PageSeoSettingsDataFragmentDoc = gql`
    fragment PageSeoSettingsData on PageSeoSettings {
  MetaTitle
  MetaDescription
  MetaKeywords
  SharingImage {
    ...ReferenceData
  }
  GraphType
}
    `;
export const ParagraphElementDataFragmentDoc = gql`
    fragment ParagraphElementData on ParagraphElement {
  text {
    json
  }
}
    `;
export const QuoteBlockDataFragmentDoc = gql`
    fragment QuoteBlockData on QuoteBlock {
  quote: QuoteText
  color: QuoteColor
  active: QuoteActive
  name: QuoteProfileName
  profilePicture: QuoteProfilePicture {
    ...ReferenceData
  }
  location: QuoteProfileLocation
}
    `;
export const RichTextElementDataFragmentDoc = gql`
    fragment RichTextElementData on RichTextElement {
  text {
    json
    html
  }
}
    `;
export const SimpleBlockDataFragmentDoc = gql`
    fragment SimpleBlockData on SimpleBlock {
  StringProp
}
    `;
export const TestimonialElementDataFragmentDoc = gql`
    fragment TestimonialElementData on TestimonialElement {
  customerName
  customerLocation
  customerImage {
    ...ReferenceData
  }
  referenceTitle
  referenceText {
    json
  }
}
    `;
export const TextBlockDataFragmentDoc = gql`
    fragment TextBlockData on TextBlock {
  overline: TextBlockOverline
  headingSize: TextBlockHeadingSize
  heading: TextBlockHeading
  description: TextBlockDescription {
    json
    html
  }
  center: TextCenter
  width: TextBlockWidth
  className: TextClassName
}
    `;
export const VideoElementDataFragmentDoc = gql`
    fragment VideoElementData on VideoElement {
  title
  video {
    ...ReferenceData
  }
  placeholder {
    ...ReferenceData
  }
}
    `;
export const BlankSectionDataFragmentDoc = gql`
    fragment BlankSectionData on BlankSection {
  _metadata {
    key
  }
}
    `;
export const ContinueReadingComponentDataFragmentDoc = gql`
    fragment ContinueReadingComponentData on ContinueReadingComponent {
  topline
  shared
  heading
  content {
    ...IContentData
    ...BlockData
    ...ArticleListElementData
    ...BlockTypeBlockSimpleBlockData
    ...BlockTypeChoiceDropDownListData
    ...BlockTypeChoiceSelectListData
    ...BlockTypeChoiceSelectedNotSelectedData
    ...BlockTypeContentContentAreaData
    ...BlockTypeContentContentAreaItemData
    ...BlockTypeContentContentReferenceData
    ...BlockTypeDateTimeData
    ...BlockTypeGuidData
    ...BlockTypeLinkLinkCollectionData
    ...BlockTypeLinkLinkItemData
    ...BlockTypeLinkUrlToDocumentData
    ...BlockTypeLinkUrlToImageData
    ...BlockTypeLinkUrlToPageData
    ...BlockTypeListBlockSimpleBlockData
    ...BlockTypeListChoiceSelectedNotSelectedData
    ...BlockTypeListContentContentReferenceData
    ...BlockTypeListDateTimeData
    ...BlockTypeListGuidData
    ...BlockTypeListLinkLinkItemData
    ...BlockTypeListLinkUrlToDocumentData
    ...BlockTypeListLinkUrlToImageData
    ...BlockTypeListLinkUrlToPageData
    ...BlockTypeListNumberFloatingPointData
    ...BlockTypeListNumberIntegerData
    ...BlockTypeListTextLongStringData
    ...BlockTypeListTextStringData
    ...BlockTypeListTextXHtmlStringData
    ...BlockTypeNumberFloatingPointData
    ...BlockTypeNumberIntegerData
    ...BlockTypeTextLongStringData
    ...BlockTypeTextStringData
    ...BlockTypeTextXHtmlStringData
    ...ButtonBlockData
    ...CTAElementData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SimpleBlockData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...BlankSectionData
  }
}
    `;
export const CarouselBlockDataFragmentDoc = gql`
    fragment CarouselBlockData on CarouselBlock {
  CarouselItemsContentArea {
    ...IContentListItem
    ...BlockData
    ...ImageMediaComponentData
    ...VideoMediaComponentData
    ...ArticleListElementData
    ...BlockTypeBlockSimpleBlockData
    ...BlockTypeChoiceDropDownListData
    ...BlockTypeChoiceSelectListData
    ...BlockTypeChoiceSelectedNotSelectedData
    ...BlockTypeContentContentAreaData
    ...BlockTypeContentContentAreaItemData
    ...BlockTypeContentContentReferenceData
    ...BlockTypeDateTimeData
    ...BlockTypeGuidData
    ...BlockTypeLinkLinkCollectionData
    ...BlockTypeLinkLinkItemData
    ...BlockTypeLinkUrlToDocumentData
    ...BlockTypeLinkUrlToImageData
    ...BlockTypeLinkUrlToPageData
    ...BlockTypeListBlockSimpleBlockData
    ...BlockTypeListChoiceSelectedNotSelectedData
    ...BlockTypeListContentContentReferenceData
    ...BlockTypeListDateTimeData
    ...BlockTypeListGuidData
    ...BlockTypeListLinkLinkItemData
    ...BlockTypeListLinkUrlToDocumentData
    ...BlockTypeListLinkUrlToImageData
    ...BlockTypeListLinkUrlToPageData
    ...BlockTypeListNumberFloatingPointData
    ...BlockTypeListNumberIntegerData
    ...BlockTypeListTextLongStringData
    ...BlockTypeListTextStringData
    ...BlockTypeListTextXHtmlStringData
    ...BlockTypeNumberFloatingPointData
    ...BlockTypeNumberIntegerData
    ...BlockTypeTextLongStringData
    ...BlockTypeTextStringData
    ...BlockTypeTextXHtmlStringData
    ...ButtonBlockData
    ...CTAElementData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SimpleBlockData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...BlankSectionData
  }
}
    `;
export const BlockTypeContentContentAreaItemDataFragmentDoc = gql`
    fragment BlockTypeContentContentAreaItemData on BlockTypeContentContentAreaItem {
  ContentContentAreaItem {
    ...BlockData
    ...ArticleListElementData
    ...BlockTypeBlockSimpleBlockData
    ...BlockTypeChoiceDropDownListData
    ...BlockTypeChoiceSelectListData
    ...BlockTypeChoiceSelectedNotSelectedData
    ...BlockTypeContentContentAreaData
    ...BlockTypeContentContentAreaItemData
    ...BlockTypeContentContentReferenceData
    ...BlockTypeDateTimeData
    ...BlockTypeGuidData
    ...BlockTypeLinkLinkCollectionData
    ...BlockTypeLinkLinkItemData
    ...BlockTypeLinkUrlToDocumentData
    ...BlockTypeLinkUrlToImageData
    ...BlockTypeLinkUrlToPageData
    ...BlockTypeListBlockSimpleBlockData
    ...BlockTypeListChoiceSelectedNotSelectedData
    ...BlockTypeListContentContentReferenceData
    ...BlockTypeListDateTimeData
    ...BlockTypeListGuidData
    ...BlockTypeListLinkLinkItemData
    ...BlockTypeListLinkUrlToDocumentData
    ...BlockTypeListLinkUrlToImageData
    ...BlockTypeListLinkUrlToPageData
    ...BlockTypeListNumberFloatingPointData
    ...BlockTypeListNumberIntegerData
    ...BlockTypeListTextLongStringData
    ...BlockTypeListTextStringData
    ...BlockTypeListTextXHtmlStringData
    ...BlockTypeNumberFloatingPointData
    ...BlockTypeNumberIntegerData
    ...BlockTypeTextLongStringData
    ...BlockTypeTextStringData
    ...BlockTypeTextXHtmlStringData
    ...ButtonBlockData
    ...CTAElementData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SimpleBlockData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...BlankSectionData
  }
}
    `;
export const BlockTypeContentContentAreaDataFragmentDoc = gql`
    fragment BlockTypeContentContentAreaData on BlockTypeContentContentArea {
  ContentContentArea {
    ...IContentListItem
    ...BlockData
    ...ImageMediaComponentData
    ...VideoMediaComponentData
    ...ArticleListElementData
    ...BlockTypeBlockSimpleBlockData
    ...BlockTypeChoiceDropDownListData
    ...BlockTypeChoiceSelectListData
    ...BlockTypeChoiceSelectedNotSelectedData
    ...BlockTypeContentContentAreaData
    ...BlockTypeContentContentAreaItemData
    ...BlockTypeContentContentReferenceData
    ...BlockTypeDateTimeData
    ...BlockTypeGuidData
    ...BlockTypeLinkLinkCollectionData
    ...BlockTypeLinkLinkItemData
    ...BlockTypeLinkUrlToDocumentData
    ...BlockTypeLinkUrlToImageData
    ...BlockTypeLinkUrlToPageData
    ...BlockTypeListBlockSimpleBlockData
    ...BlockTypeListChoiceSelectedNotSelectedData
    ...BlockTypeListContentContentReferenceData
    ...BlockTypeListDateTimeData
    ...BlockTypeListGuidData
    ...BlockTypeListLinkLinkItemData
    ...BlockTypeListLinkUrlToDocumentData
    ...BlockTypeListLinkUrlToImageData
    ...BlockTypeListLinkUrlToPageData
    ...BlockTypeListNumberFloatingPointData
    ...BlockTypeListNumberIntegerData
    ...BlockTypeListTextLongStringData
    ...BlockTypeListTextStringData
    ...BlockTypeListTextXHtmlStringData
    ...BlockTypeNumberFloatingPointData
    ...BlockTypeNumberIntegerData
    ...BlockTypeTextLongStringData
    ...BlockTypeTextStringData
    ...BlockTypeTextXHtmlStringData
    ...ButtonBlockData
    ...CTAElementData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SimpleBlockData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...BlankSectionData
  }
}
    `;
export const CompositionComponentNodeDataFragmentDoc = gql`
    fragment CompositionComponentNodeData on ICompositionComponentNode {
  component {
    ...BlockData
    ...ElementData
    ...ArticleListElementData
    ...BlockTypeBlockSimpleBlockData
    ...BlockTypeChoiceDropDownListData
    ...BlockTypeChoiceSelectListData
    ...BlockTypeChoiceSelectedNotSelectedData
    ...BlockTypeContentContentAreaData
    ...BlockTypeContentContentAreaItemData
    ...BlockTypeContentContentReferenceData
    ...BlockTypeDateTimeData
    ...BlockTypeGuidData
    ...BlockTypeLinkLinkCollectionData
    ...BlockTypeLinkLinkItemData
    ...BlockTypeLinkUrlToDocumentData
    ...BlockTypeLinkUrlToImageData
    ...BlockTypeLinkUrlToPageData
    ...BlockTypeListBlockSimpleBlockData
    ...BlockTypeListChoiceSelectedNotSelectedData
    ...BlockTypeListContentContentReferenceData
    ...BlockTypeListDateTimeData
    ...BlockTypeListGuidData
    ...BlockTypeListLinkLinkItemData
    ...BlockTypeListLinkUrlToDocumentData
    ...BlockTypeListLinkUrlToImageData
    ...BlockTypeListLinkUrlToPageData
    ...BlockTypeListNumberFloatingPointData
    ...BlockTypeListNumberIntegerData
    ...BlockTypeListTextLongStringData
    ...BlockTypeListTextStringData
    ...BlockTypeListTextXHtmlStringData
    ...BlockTypeNumberFloatingPointData
    ...BlockTypeNumberIntegerData
    ...BlockTypeTextLongStringData
    ...BlockTypeTextStringData
    ...BlockTypeTextXHtmlStringData
    ...ButtonBlockData
    ...CTAElementData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SimpleBlockData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...BlankSectionData
  }
}
    `;
export const ExperienceDataFragmentDoc = gql`
    fragment ExperienceData on _IExperience {
  composition {
    ...CompositionNodeData
    nodes {
      ...CompositionNodeData
      ... on ICompositionStructureNode {
        nodes {
          ...CompositionNodeData
          ... on ICompositionStructureNode {
            nodes {
              ...CompositionNodeData
              ... on ICompositionStructureNode {
                nodes {
                  ...CompositionNodeData
                  ...CompositionComponentNodeData
                }
              }
            }
          }
        }
      }
      ...CompositionComponentNodeData
    }
  }
}
    `;
export const BlankExperienceDataFragmentDoc = gql`
    fragment BlankExperienceData on BlankExperience {
  BlankExperienceSeoSettings {
    ...PageSeoSettingsPropertyData
  }
  ...ExperienceData
}
    `;
export const BlogSectionExperienceDataFragmentDoc = gql`
    fragment BlogSectionExperienceData on BlogSectionExperience {
  ...ExperienceData
}
    `;
export const ExpTypeBlockSimpleBlockDataFragmentDoc = gql`
    fragment ExpTypeBlockSimpleBlockData on ExpTypeBlockSimpleBlock {
  BlockSimpleBlock {
    ...SimpleBlockPropertyData
  }
  ...ExperienceData
}
    `;
export const ExpTypeChoiceDropDownListDataFragmentDoc = gql`
    fragment ExpTypeChoiceDropDownListData on ExpTypeChoiceDropDownList {
  ChoiceDropDownList
  ...ExperienceData
}
    `;
export const ExpTypeChoiceSelectListDataFragmentDoc = gql`
    fragment ExpTypeChoiceSelectListData on ExpTypeChoiceSelectList {
  ChoiceSelectList
  ...ExperienceData
}
    `;
export const ExpTypeChoiceSelectedNotSelectedDataFragmentDoc = gql`
    fragment ExpTypeChoiceSelectedNotSelectedData on ExpTypeChoiceSelectedNotSelected {
  ChoiceSelectedNotSelected
  ...ExperienceData
}
    `;
export const ExpTypeContentContentAreaDataFragmentDoc = gql`
    fragment ExpTypeContentContentAreaData on ExpTypeContentContentArea {
  ContentContentArea {
    ...BlockData
    ...ArticleListElementData
    ...BlockTypeBlockSimpleBlockData
    ...BlockTypeChoiceDropDownListData
    ...BlockTypeChoiceSelectListData
    ...BlockTypeChoiceSelectedNotSelectedData
    ...BlockTypeContentContentAreaData
    ...BlockTypeContentContentAreaItemData
    ...BlockTypeContentContentReferenceData
    ...BlockTypeDateTimeData
    ...BlockTypeGuidData
    ...BlockTypeLinkLinkCollectionData
    ...BlockTypeLinkLinkItemData
    ...BlockTypeLinkUrlToDocumentData
    ...BlockTypeLinkUrlToImageData
    ...BlockTypeLinkUrlToPageData
    ...BlockTypeListBlockSimpleBlockData
    ...BlockTypeListChoiceSelectedNotSelectedData
    ...BlockTypeListContentContentReferenceData
    ...BlockTypeListDateTimeData
    ...BlockTypeListGuidData
    ...BlockTypeListLinkLinkItemData
    ...BlockTypeListLinkUrlToDocumentData
    ...BlockTypeListLinkUrlToImageData
    ...BlockTypeListLinkUrlToPageData
    ...BlockTypeListNumberFloatingPointData
    ...BlockTypeListNumberIntegerData
    ...BlockTypeListTextLongStringData
    ...BlockTypeListTextStringData
    ...BlockTypeListTextXHtmlStringData
    ...BlockTypeNumberFloatingPointData
    ...BlockTypeNumberIntegerData
    ...BlockTypeTextLongStringData
    ...BlockTypeTextStringData
    ...BlockTypeTextXHtmlStringData
    ...ButtonBlockData
    ...CTAElementData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SimpleBlockData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...BlankSectionData
  }
  ...ExperienceData
}
    `;
export const ExpTypeContentContentAreaItemDataFragmentDoc = gql`
    fragment ExpTypeContentContentAreaItemData on ExpTypeContentContentAreaItem {
  ContentContentAreaItem {
    ...BlockData
    ...ArticleListElementData
    ...BlockTypeBlockSimpleBlockData
    ...BlockTypeChoiceDropDownListData
    ...BlockTypeChoiceSelectListData
    ...BlockTypeChoiceSelectedNotSelectedData
    ...BlockTypeContentContentAreaData
    ...BlockTypeContentContentAreaItemData
    ...BlockTypeContentContentReferenceData
    ...BlockTypeDateTimeData
    ...BlockTypeGuidData
    ...BlockTypeLinkLinkCollectionData
    ...BlockTypeLinkLinkItemData
    ...BlockTypeLinkUrlToDocumentData
    ...BlockTypeLinkUrlToImageData
    ...BlockTypeLinkUrlToPageData
    ...BlockTypeListBlockSimpleBlockData
    ...BlockTypeListChoiceSelectedNotSelectedData
    ...BlockTypeListContentContentReferenceData
    ...BlockTypeListDateTimeData
    ...BlockTypeListGuidData
    ...BlockTypeListLinkLinkItemData
    ...BlockTypeListLinkUrlToDocumentData
    ...BlockTypeListLinkUrlToImageData
    ...BlockTypeListLinkUrlToPageData
    ...BlockTypeListNumberFloatingPointData
    ...BlockTypeListNumberIntegerData
    ...BlockTypeListTextLongStringData
    ...BlockTypeListTextStringData
    ...BlockTypeListTextXHtmlStringData
    ...BlockTypeNumberFloatingPointData
    ...BlockTypeNumberIntegerData
    ...BlockTypeTextLongStringData
    ...BlockTypeTextStringData
    ...BlockTypeTextXHtmlStringData
    ...ButtonBlockData
    ...CTAElementData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SimpleBlockData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...BlankSectionData
  }
  ...ExperienceData
}
    `;
export const ExpTypeContentContentReferenceDataFragmentDoc = gql`
    fragment ExpTypeContentContentReferenceData on ExpTypeContentContentReference {
  ContentContentReference {
    ...ReferenceData
  }
  ...ExperienceData
}
    `;
export const ExpTypeDateTimeDataFragmentDoc = gql`
    fragment ExpTypeDateTimeData on ExpTypeDateTime {
  DateTime
  ...ExperienceData
}
    `;
export const ExpTypeGuidDataFragmentDoc = gql`
    fragment ExpTypeGuidData on ExpTypeGuid {
  ...ExperienceData
}
    `;
export const ExpTypeLinkLinkCollectionDataFragmentDoc = gql`
    fragment ExpTypeLinkLinkCollectionData on ExpTypeLinkLinkCollection {
  LinkLinkCollection {
    ...LinkItemData
  }
  ...ExperienceData
}
    `;
export const ExpTypeLinkLinkItemDataFragmentDoc = gql`
    fragment ExpTypeLinkLinkItemData on ExpTypeLinkLinkItem {
  LinkLinkItem {
    ...LinkItemData
  }
  ...ExperienceData
}
    `;
export const ExpTypeLinkUrlToDocumentDataFragmentDoc = gql`
    fragment ExpTypeLinkUrlToDocumentData on ExpTypeLinkUrlToDocument {
  LinkUrlToDocument {
    ...LinkData
  }
  ...ExperienceData
}
    `;
export const ExpTypeLinkUrlToImageDataFragmentDoc = gql`
    fragment ExpTypeLinkUrlToImageData on ExpTypeLinkUrlToImage {
  LinkUrlToImage {
    ...LinkData
  }
  ...ExperienceData
}
    `;
export const ExpTypeLinkUrlToPageDataFragmentDoc = gql`
    fragment ExpTypeLinkUrlToPageData on ExpTypeLinkUrlToPage {
  LinkUrlToPage {
    ...LinkData
  }
  ...ExperienceData
}
    `;
export const ExpTypeListBlockSimpleBlockDataFragmentDoc = gql`
    fragment ExpTypeListBlockSimpleBlockData on ExpTypeListBlockSimpleBlock {
  ListBlockSimpleBlock {
    ...SimpleBlockPropertyData
  }
  ...ExperienceData
}
    `;
export const ExpTypeListChoiceSelectedNotSelectedDataFragmentDoc = gql`
    fragment ExpTypeListChoiceSelectedNotSelectedData on ExpTypeListChoiceSelectedNotSelected {
  ListChoiceSelectedNotSelected
  ...ExperienceData
}
    `;
export const ExpTypeListContentContentReferenceDataFragmentDoc = gql`
    fragment ExpTypeListContentContentReferenceData on ExpTypeListContentContentReference {
  ListContentContentReference {
    ...ReferenceData
  }
  ...ExperienceData
}
    `;
export const ExpTypeListDateTimeDataFragmentDoc = gql`
    fragment ExpTypeListDateTimeData on ExpTypeListDateTime {
  ListDateTime
  ...ExperienceData
}
    `;
export const ExpTypeListGuidDataFragmentDoc = gql`
    fragment ExpTypeListGuidData on ExpTypeListGuid {
  ListGuid
  ...ExperienceData
}
    `;
export const ExpTypeListLinkLinkItemDataFragmentDoc = gql`
    fragment ExpTypeListLinkLinkItemData on ExpTypeListLinkLinkItem {
  ListLinkLinkItem {
    ...LinkItemData
  }
  ...ExperienceData
}
    `;
export const ExpTypeListLinkUrlToDocumentDataFragmentDoc = gql`
    fragment ExpTypeListLinkUrlToDocumentData on ExpTypeListLinkUrlToDocument {
  ListLinkUrlToDocument {
    __typename
  }
  ...ExperienceData
}
    `;
export const ExpTypeListLinkUrlToImageDataFragmentDoc = gql`
    fragment ExpTypeListLinkUrlToImageData on ExpTypeListLinkUrlToImage {
  ListLinkUrlToImage {
    __typename
  }
  ...ExperienceData
}
    `;
export const ExpTypeListLinkUrlToPageDataFragmentDoc = gql`
    fragment ExpTypeListLinkUrlToPageData on ExpTypeListLinkUrlToPage {
  ListLinkUrlToPage {
    __typename
  }
  ...ExperienceData
}
    `;
export const ExpTypeListNumberFloatingPointDataFragmentDoc = gql`
    fragment ExpTypeListNumberFloatingPointData on ExpTypeListNumberFloatingPoint {
  ListNumberFloatingPoint
  ...ExperienceData
}
    `;
export const ExpTypeListNumberIntegerDataFragmentDoc = gql`
    fragment ExpTypeListNumberIntegerData on ExpTypeListNumberInteger {
  ListNumberInteger
  ...ExperienceData
}
    `;
export const ExpTypeListTextLongStringDataFragmentDoc = gql`
    fragment ExpTypeListTextLongStringData on ExpTypeListTextLongString {
  ListTextLongString
  ...ExperienceData
}
    `;
export const ExpTypeListTextStringDataFragmentDoc = gql`
    fragment ExpTypeListTextStringData on ExpTypeListTextString {
  ListTextString
  ...ExperienceData
}
    `;
export const ExpTypeListTextXHtmlStringDataFragmentDoc = gql`
    fragment ExpTypeListTextXHtmlStringData on ExpTypeListTextXHtmlString {
  ListTextXHtmlString {
    json
    html
  }
  ...ExperienceData
}
    `;
export const ExpTypeNumberFloatingPointDataFragmentDoc = gql`
    fragment ExpTypeNumberFloatingPointData on ExpTypeNumberFloatingPoint {
  NumberFloatingPoint
  ...ExperienceData
}
    `;
export const ExpTypeNumberIntegerDataFragmentDoc = gql`
    fragment ExpTypeNumberIntegerData on ExpTypeNumberInteger {
  NumberInteger
  ...ExperienceData
}
    `;
export const ExpTypeTextLongStringDataFragmentDoc = gql`
    fragment ExpTypeTextLongStringData on ExpTypeTextLongString {
  TextLongString
  ...ExperienceData
}
    `;
export const ExpTypeTextStringDataFragmentDoc = gql`
    fragment ExpTypeTextStringData on ExpTypeTextString {
  TextString
  ...ExperienceData
}
    `;
export const ExpTypeTextXHtmlStringDataFragmentDoc = gql`
    fragment ExpTypeTextXHtmlStringData on ExpTypeTextXHtmlString {
  TextXHtmlString {
    json
    html
  }
  ...ExperienceData
}
    `;
export const SimpleExpDataFragmentDoc = gql`
    fragment SimpleExpData on SimpleExp {
  StringProp
  ...ExperienceData
}
    `;
export const BlogPostPageDataFragmentDoc = gql`
    fragment BlogPostPageData on BlogPostPage {
  blogTitle: Heading
  blogSubtitle: ArticleSubHeading
  blogImage: BlogPostPromoImage {
    ...ReferenceData
  }
  blogBody: BlogPostBody {
    json
  }
  blogAuthor: ArticleAuthor
  blogTopics: Topic
  continueReading {
    ...IContentListItem
    ...BlockData
    ...ImageMediaComponentData
    ...VideoMediaComponentData
    ...ArticleListElementData
    ...BlockTypeBlockSimpleBlockData
    ...BlockTypeChoiceDropDownListData
    ...BlockTypeChoiceSelectListData
    ...BlockTypeChoiceSelectedNotSelectedData
    ...BlockTypeContentContentAreaData
    ...BlockTypeContentContentAreaItemData
    ...BlockTypeContentContentReferenceData
    ...BlockTypeDateTimeData
    ...BlockTypeGuidData
    ...BlockTypeLinkLinkCollectionData
    ...BlockTypeLinkLinkItemData
    ...BlockTypeLinkUrlToDocumentData
    ...BlockTypeLinkUrlToImageData
    ...BlockTypeLinkUrlToPageData
    ...BlockTypeListBlockSimpleBlockData
    ...BlockTypeListChoiceSelectedNotSelectedData
    ...BlockTypeListContentContentReferenceData
    ...BlockTypeListDateTimeData
    ...BlockTypeListGuidData
    ...BlockTypeListLinkLinkItemData
    ...BlockTypeListLinkUrlToDocumentData
    ...BlockTypeListLinkUrlToImageData
    ...BlockTypeListLinkUrlToPageData
    ...BlockTypeListNumberFloatingPointData
    ...BlockTypeListNumberIntegerData
    ...BlockTypeListTextLongStringData
    ...BlockTypeListTextStringData
    ...BlockTypeListTextXHtmlStringData
    ...BlockTypeNumberFloatingPointData
    ...BlockTypeNumberIntegerData
    ...BlockTypeTextLongStringData
    ...BlockTypeTextStringData
    ...BlockTypeTextXHtmlStringData
    ...ButtonBlockData
    ...CTAElementData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SimpleBlockData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...BlankSectionData
  }
}
    `;
export const BlogPostPageSearchResultFragmentDoc = gql`
    fragment BlogPostPageSearchResult on BlogPostPage {
  title: Heading
  image: BlogPostPromoImage {
    ...ReferenceData
  }
  author: ArticleAuthor
  seodata: SeoSettings {
    MetaTitle
    MetaDescription
  }
  _metadata {
    published
  }
}
    `;
export const LandingPageDataFragmentDoc = gql`
    fragment LandingPageData on LandingPage {
  TopContentArea {
    ...BlockData
    ...ArticleListElementData
    ...BlockTypeBlockSimpleBlockData
    ...BlockTypeChoiceDropDownListData
    ...BlockTypeChoiceSelectListData
    ...BlockTypeChoiceSelectedNotSelectedData
    ...BlockTypeContentContentAreaData
    ...BlockTypeContentContentAreaItemData
    ...BlockTypeContentContentReferenceData
    ...BlockTypeDateTimeData
    ...BlockTypeGuidData
    ...BlockTypeLinkLinkCollectionData
    ...BlockTypeLinkLinkItemData
    ...BlockTypeLinkUrlToDocumentData
    ...BlockTypeLinkUrlToImageData
    ...BlockTypeLinkUrlToPageData
    ...BlockTypeListBlockSimpleBlockData
    ...BlockTypeListChoiceSelectedNotSelectedData
    ...BlockTypeListContentContentReferenceData
    ...BlockTypeListDateTimeData
    ...BlockTypeListGuidData
    ...BlockTypeListLinkLinkItemData
    ...BlockTypeListLinkUrlToDocumentData
    ...BlockTypeListLinkUrlToImageData
    ...BlockTypeListLinkUrlToPageData
    ...BlockTypeListNumberFloatingPointData
    ...BlockTypeListNumberIntegerData
    ...BlockTypeListTextLongStringData
    ...BlockTypeListTextStringData
    ...BlockTypeListTextXHtmlStringData
    ...BlockTypeNumberFloatingPointData
    ...BlockTypeNumberIntegerData
    ...BlockTypeTextLongStringData
    ...BlockTypeTextStringData
    ...BlockTypeTextXHtmlStringData
    ...ButtonBlockData
    ...CTAElementData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SimpleBlockData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...BlankSectionData
  }
  MainContentArea {
    ...BlockData
    ...ArticleListElementData
    ...BlockTypeBlockSimpleBlockData
    ...BlockTypeChoiceDropDownListData
    ...BlockTypeChoiceSelectListData
    ...BlockTypeChoiceSelectedNotSelectedData
    ...BlockTypeContentContentAreaData
    ...BlockTypeContentContentAreaItemData
    ...BlockTypeContentContentReferenceData
    ...BlockTypeDateTimeData
    ...BlockTypeGuidData
    ...BlockTypeLinkLinkCollectionData
    ...BlockTypeLinkLinkItemData
    ...BlockTypeLinkUrlToDocumentData
    ...BlockTypeLinkUrlToImageData
    ...BlockTypeLinkUrlToPageData
    ...BlockTypeListBlockSimpleBlockData
    ...BlockTypeListChoiceSelectedNotSelectedData
    ...BlockTypeListContentContentReferenceData
    ...BlockTypeListDateTimeData
    ...BlockTypeListGuidData
    ...BlockTypeListLinkLinkItemData
    ...BlockTypeListLinkUrlToDocumentData
    ...BlockTypeListLinkUrlToImageData
    ...BlockTypeListLinkUrlToPageData
    ...BlockTypeListNumberFloatingPointData
    ...BlockTypeListNumberIntegerData
    ...BlockTypeListTextLongStringData
    ...BlockTypeListTextStringData
    ...BlockTypeListTextXHtmlStringData
    ...BlockTypeNumberFloatingPointData
    ...BlockTypeNumberIntegerData
    ...BlockTypeTextLongStringData
    ...BlockTypeTextStringData
    ...BlockTypeTextXHtmlStringData
    ...ButtonBlockData
    ...CTAElementData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SimpleBlockData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...BlankSectionData
  }
}
    `;
export const PageTypeBlockSimpleBlockDataFragmentDoc = gql`
    fragment PageTypeBlockSimpleBlockData on PageTypeBlockSimpleBlock {
  BlockSimpleBlock {
    ...SimpleBlockPropertyData
  }
}
    `;
export const PageTypeChoiceDropDownListDataFragmentDoc = gql`
    fragment PageTypeChoiceDropDownListData on PageTypeChoiceDropDownList {
  ChoiceDropDownList
}
    `;
export const PageTypeChoiceSelectListDataFragmentDoc = gql`
    fragment PageTypeChoiceSelectListData on PageTypeChoiceSelectList {
  ChoiceSelectList
}
    `;
export const PageTypeChoiceSelectedNotSelectedDataFragmentDoc = gql`
    fragment PageTypeChoiceSelectedNotSelectedData on PageTypeChoiceSelectedNotSelected {
  ChoiceSelectedNotSelected
}
    `;
export const PageTypeContentContentAreaDataFragmentDoc = gql`
    fragment PageTypeContentContentAreaData on PageTypeContentContentArea {
  ContentContentArea {
    ...BlockData
    ...ArticleListElementData
    ...BlockTypeBlockSimpleBlockData
    ...BlockTypeChoiceDropDownListData
    ...BlockTypeChoiceSelectListData
    ...BlockTypeChoiceSelectedNotSelectedData
    ...BlockTypeContentContentAreaData
    ...BlockTypeContentContentAreaItemData
    ...BlockTypeContentContentReferenceData
    ...BlockTypeDateTimeData
    ...BlockTypeGuidData
    ...BlockTypeLinkLinkCollectionData
    ...BlockTypeLinkLinkItemData
    ...BlockTypeLinkUrlToDocumentData
    ...BlockTypeLinkUrlToImageData
    ...BlockTypeLinkUrlToPageData
    ...BlockTypeListBlockSimpleBlockData
    ...BlockTypeListChoiceSelectedNotSelectedData
    ...BlockTypeListContentContentReferenceData
    ...BlockTypeListDateTimeData
    ...BlockTypeListGuidData
    ...BlockTypeListLinkLinkItemData
    ...BlockTypeListLinkUrlToDocumentData
    ...BlockTypeListLinkUrlToImageData
    ...BlockTypeListLinkUrlToPageData
    ...BlockTypeListNumberFloatingPointData
    ...BlockTypeListNumberIntegerData
    ...BlockTypeListTextLongStringData
    ...BlockTypeListTextStringData
    ...BlockTypeListTextXHtmlStringData
    ...BlockTypeNumberFloatingPointData
    ...BlockTypeNumberIntegerData
    ...BlockTypeTextLongStringData
    ...BlockTypeTextStringData
    ...BlockTypeTextXHtmlStringData
    ...ButtonBlockData
    ...CTAElementData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SimpleBlockData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...BlankSectionData
  }
}
    `;
export const PageTypeContentContentAreaItemDataFragmentDoc = gql`
    fragment PageTypeContentContentAreaItemData on PageTypeContentContentAreaItem {
  ContentContentAreaItem {
    ...BlockData
    ...ArticleListElementData
    ...BlockTypeBlockSimpleBlockData
    ...BlockTypeChoiceDropDownListData
    ...BlockTypeChoiceSelectListData
    ...BlockTypeChoiceSelectedNotSelectedData
    ...BlockTypeContentContentAreaData
    ...BlockTypeContentContentAreaItemData
    ...BlockTypeContentContentReferenceData
    ...BlockTypeDateTimeData
    ...BlockTypeGuidData
    ...BlockTypeLinkLinkCollectionData
    ...BlockTypeLinkLinkItemData
    ...BlockTypeLinkUrlToDocumentData
    ...BlockTypeLinkUrlToImageData
    ...BlockTypeLinkUrlToPageData
    ...BlockTypeListBlockSimpleBlockData
    ...BlockTypeListChoiceSelectedNotSelectedData
    ...BlockTypeListContentContentReferenceData
    ...BlockTypeListDateTimeData
    ...BlockTypeListGuidData
    ...BlockTypeListLinkLinkItemData
    ...BlockTypeListLinkUrlToDocumentData
    ...BlockTypeListLinkUrlToImageData
    ...BlockTypeListLinkUrlToPageData
    ...BlockTypeListNumberFloatingPointData
    ...BlockTypeListNumberIntegerData
    ...BlockTypeListTextLongStringData
    ...BlockTypeListTextStringData
    ...BlockTypeListTextXHtmlStringData
    ...BlockTypeNumberFloatingPointData
    ...BlockTypeNumberIntegerData
    ...BlockTypeTextLongStringData
    ...BlockTypeTextStringData
    ...BlockTypeTextXHtmlStringData
    ...ButtonBlockData
    ...CTAElementData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SimpleBlockData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...BlankSectionData
  }
}
    `;
export const PageTypeContentContentReferenceDataFragmentDoc = gql`
    fragment PageTypeContentContentReferenceData on PageTypeContentContentReference {
  ContentContentReference {
    ...ReferenceData
  }
}
    `;
export const PageTypeDateTimeDataFragmentDoc = gql`
    fragment PageTypeDateTimeData on PageTypeDateTime {
  DateTime
}
    `;
export const PageTypeGuidDataFragmentDoc = gql`
    fragment PageTypeGuidData on PageTypeGuid {
  Guid
}
    `;
export const PageTypeLinkLinkCollectionDataFragmentDoc = gql`
    fragment PageTypeLinkLinkCollectionData on PageTypeLinkLinkCollection {
  LinkLinkCollection {
    ...LinkItemData
  }
}
    `;
export const PageTypeLinkLinkItemDataFragmentDoc = gql`
    fragment PageTypeLinkLinkItemData on PageTypeLinkLinkItem {
  LinkLinkItem {
    ...LinkItemData
  }
}
    `;
export const PageTypeLinkUrlToDocumentDataFragmentDoc = gql`
    fragment PageTypeLinkUrlToDocumentData on PageTypeLinkUrlToDocument {
  LinkUrlToDocument {
    ...LinkData
  }
}
    `;
export const PageTypeLinkUrlToImageDataFragmentDoc = gql`
    fragment PageTypeLinkUrlToImageData on PageTypeLinkUrlToImage {
  LinkUrlToImage {
    ...LinkData
  }
}
    `;
export const PageTypeLinkUrlToPageDataFragmentDoc = gql`
    fragment PageTypeLinkUrlToPageData on PageTypeLinkUrlToPage {
  LinkUrlToPage {
    ...LinkData
  }
}
    `;
export const PageTypeListBlockSimpleBlockDataFragmentDoc = gql`
    fragment PageTypeListBlockSimpleBlockData on PageTypeListBlockSimpleBlock {
  ListBlockSimpleBlock {
    ...SimpleBlockPropertyData
  }
}
    `;
export const PageTypeListChoiceSelectedNotSelectedDataFragmentDoc = gql`
    fragment PageTypeListChoiceSelectedNotSelectedData on PageTypeListChoiceSelectedNotSelected {
  ListChoiceSelectedNotSelected
}
    `;
export const PageTypeListContentContentReferenceDataFragmentDoc = gql`
    fragment PageTypeListContentContentReferenceData on PageTypeListContentContentReference {
  ListContentContentReference {
    ...ReferenceData
  }
}
    `;
export const PageTypeListDateTimeDataFragmentDoc = gql`
    fragment PageTypeListDateTimeData on PageTypeListDateTime {
  ListDateTime
}
    `;
export const PageTypeListGuidDataFragmentDoc = gql`
    fragment PageTypeListGuidData on PageTypeListGuid {
  ListGuid
}
    `;
export const PageTypeListLinkLinkItemDataFragmentDoc = gql`
    fragment PageTypeListLinkLinkItemData on PageTypeListLinkLinkItem {
  ListLinkLinkItem {
    ...LinkItemData
  }
}
    `;
export const PageTypeListLinkUrlToDocumentDataFragmentDoc = gql`
    fragment PageTypeListLinkUrlToDocumentData on PageTypeListLinkUrlToDocument {
  ListLinkUrlToDocument {
    __typename
  }
}
    `;
export const PageTypeListLinkUrlToImageDataFragmentDoc = gql`
    fragment PageTypeListLinkUrlToImageData on PageTypeListLinkUrlToImage {
  ListLinkUrlToImage {
    __typename
  }
}
    `;
export const PageTypeListLinkUrlToPageDataFragmentDoc = gql`
    fragment PageTypeListLinkUrlToPageData on PageTypeListLinkUrlToPage {
  ListLinkUrlToPage {
    __typename
  }
}
    `;
export const PageTypeListNumberFloatingPointDataFragmentDoc = gql`
    fragment PageTypeListNumberFloatingPointData on PageTypeListNumberFloatingPoint {
  ListNumberFloatingPoint
}
    `;
export const PageTypeListNumberIntegerDataFragmentDoc = gql`
    fragment PageTypeListNumberIntegerData on PageTypeListNumberInteger {
  ListNumberInteger
}
    `;
export const PageTypeListTextLongStringDataFragmentDoc = gql`
    fragment PageTypeListTextLongStringData on PageTypeListTextLongString {
  ListTextLongString
}
    `;
export const PageTypeListTextStringDataFragmentDoc = gql`
    fragment PageTypeListTextStringData on PageTypeListTextString {
  ListTextString
}
    `;
export const PageTypeListTextXHtmlStringDataFragmentDoc = gql`
    fragment PageTypeListTextXHtmlStringData on PageTypeListTextXHtmlString {
  ListTextXHtmlString {
    json
    html
  }
}
    `;
export const PageTypeNumberFloatingPointDataFragmentDoc = gql`
    fragment PageTypeNumberFloatingPointData on PageTypeNumberFloatingPoint {
  NumberFloatingPoint
}
    `;
export const PageTypeNumberIntegerDataFragmentDoc = gql`
    fragment PageTypeNumberIntegerData on PageTypeNumberInteger {
  NumberInteger
}
    `;
export const PageTypeTextLongStringDataFragmentDoc = gql`
    fragment PageTypeTextLongStringData on PageTypeTextLongString {
  TextLongString
}
    `;
export const PageTypeTextStringDataFragmentDoc = gql`
    fragment PageTypeTextStringData on PageTypeTextString {
  TextString
}
    `;
export const PageTypeTextXHtmlStringDataFragmentDoc = gql`
    fragment PageTypeTextXHtmlStringData on PageTypeTextXHtmlString {
  TextXHtmlString {
    json
    html
  }
}
    `;
export const SimplePageDataFragmentDoc = gql`
    fragment SimplePageData on SimplePage {
  StringProp
}
    `;
export const SearchDataFragmentDoc = gql`
    fragment SearchData on _IContent {
  ...IContentData
}
    `;
export const PageDataFragmentDoc = gql`
    fragment PageData on _IContent {
  ...IContentData
}
    `;
export const getArticleListElementItemsDocument = gql`
    query getArticleListElementItems($count: Int!, $locale: [Locales], $topics: [String], $excludeKeys: [String]) {
  BlogPostPage(
    orderBy: {_metadata: {published: DESC}}
    limit: $count
    locale: $locale
    where: {_metadata: {status: {eq: "Published"}, key: {notIn: $excludeKeys}}, Topic: {in: $topics}}
  ) {
    items {
      ...IContentData
      articleMeta: _metadata {
        key
        published
        lastModified
      }
      blogTitle: Heading
      blogSubtitle: ArticleSubHeading
      blogImage: BlogPostPromoImage {
        ...ReferenceData
      }
      blogBody: BlogPostBody {
        json
      }
      blogAuthor: ArticleAuthor
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${ReferenceDataFragmentDoc}`;
export const getDefaultArticleListDocument = gql`
    query getDefaultArticleList($locale: [Locales!]) {
  ArticleListElement(
    where: {_metadata: {displayName: {startsWith: "[DEFAULT]"}, status: {eq: "Published"}}}
    locale: $locale
    orderBy: {_metadata: {published: DESC}}
    limit: 1
  ) {
    items {
      ...IContentData
      ...ArticleListElementData
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${ArticleListElementDataFragmentDoc}`;
export const getSharedContinueReadingDocument = gql`
    query getSharedContinueReading($locale: [Locales]) {
  ContinueReadingComponent(where: {shared: {eq: true}}, locale: $locale) {
    total
    item {
      ...IContentData
      ...ContinueReadingComponentData
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${ContinueReadingComponentDataFragmentDoc}
${BlockDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${BlockTypeBlockSimpleBlockDataFragmentDoc}
${SimpleBlockPropertyDataFragmentDoc}
${BlockTypeChoiceDropDownListDataFragmentDoc}
${BlockTypeChoiceSelectListDataFragmentDoc}
${BlockTypeChoiceSelectedNotSelectedDataFragmentDoc}
${BlockTypeContentContentAreaDataFragmentDoc}
${IContentListItemFragmentDoc}
${ImageMediaComponentDataFragmentDoc}
${VideoMediaComponentDataFragmentDoc}
${BlockTypeContentContentAreaItemDataFragmentDoc}
${BlockTypeContentContentReferenceDataFragmentDoc}
${ReferenceDataFragmentDoc}
${BlockTypeDateTimeDataFragmentDoc}
${BlockTypeGuidDataFragmentDoc}
${BlockTypeLinkLinkCollectionDataFragmentDoc}
${LinkItemDataFragmentDoc}
${BlockTypeLinkLinkItemDataFragmentDoc}
${BlockTypeLinkUrlToDocumentDataFragmentDoc}
${BlockTypeLinkUrlToImageDataFragmentDoc}
${BlockTypeLinkUrlToPageDataFragmentDoc}
${BlockTypeListBlockSimpleBlockDataFragmentDoc}
${BlockTypeListChoiceSelectedNotSelectedDataFragmentDoc}
${BlockTypeListContentContentReferenceDataFragmentDoc}
${BlockTypeListDateTimeDataFragmentDoc}
${BlockTypeListGuidDataFragmentDoc}
${BlockTypeListLinkLinkItemDataFragmentDoc}
${BlockTypeListLinkUrlToDocumentDataFragmentDoc}
${BlockTypeListLinkUrlToImageDataFragmentDoc}
${BlockTypeListLinkUrlToPageDataFragmentDoc}
${BlockTypeListNumberFloatingPointDataFragmentDoc}
${BlockTypeListNumberIntegerDataFragmentDoc}
${BlockTypeListTextLongStringDataFragmentDoc}
${BlockTypeListTextStringDataFragmentDoc}
${BlockTypeListTextXHtmlStringDataFragmentDoc}
${BlockTypeNumberFloatingPointDataFragmentDoc}
${BlockTypeNumberIntegerDataFragmentDoc}
${BlockTypeTextLongStringDataFragmentDoc}
${BlockTypeTextStringDataFragmentDoc}
${BlockTypeTextXHtmlStringDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${ButtonBlockPropertyDataFragmentDoc}
${ImageElementDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${BlogPostPageMenuBlockFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SimpleBlockDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${VideoElementDataFragmentDoc}
${BlankSectionDataFragmentDoc}`;
export const getBlankExperienceMetaDataDocument = gql`
    query getBlankExperienceMetaData($key: String!, $locale: [Locales]) {
  page: BlankExperience(where: {_metadata: {key: {eq: $key}}}, locale: $locale) {
    items {
      meta: _metadata {
        url {
          base
        }
        displayName
      }
      seo: BlankExperienceSeoSettings {
        title: MetaTitle
        description: MetaDescription
        image: SharingImage {
          ...ReferenceData
        }
        type: GraphType
      }
    }
  }
}
    ${ReferenceDataFragmentDoc}
${LinkDataFragmentDoc}`;
export const getChildBlogPostsDocument = gql`
    query getChildBlogPosts($parentKey: String!, $locale: [Locales!]! = ALL, $author: [String!], $topic: [String!], $limit: Int! = 9, $skip: Int! = 0) {
  result: BlogSectionExperience(
    where: {_metadata: {key: {eq: $parentKey}}}
    locale: $locale
  ) {
    items {
      container: _metadata {
        key
        displayName
      }
      items: _link(type: ITEMS) {
        BlogPostPage(skip: $skip, limit: $limit, locale: $locale) {
          total
          items {
            ...IContentData
            metadata: _metadata {
              key
              url {
                base
                default
              }
              published
            }
            heading: Heading
            subheading: ArticleSubHeading
            author: ArticleAuthor
            topic: Topic
            image: BlogPostPromoImage {
              src: url {
                base
                default
              }
            }
          }
          facets {
            author: ArticleAuthor(filters: $author) {
              name
              count
            }
            topic: Topic(orderBy: ASC, filters: $topic) {
              name
              count
            }
            metadata: _metadata {
              published(unit: DAY) {
                name
                count
              }
            }
          }
        }
      }
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}`;
export const getBlogSectionExperienceMetaDataDocument = gql`
    query getBlogSectionExperienceMetaData($key: String!, $version: String, $locale: [Locales!]) {
  page: BlogSectionExperience(
    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}
    locale: $locale
  ) {
    items {
      _metadata {
        displayName
        published
        url {
          base
          default
        }
      }
      seo_data {
        ...PageSeoSettingsPropertyData
      }
    }
  }
}
    ${PageSeoSettingsPropertyDataFragmentDoc}
${ReferenceDataFragmentDoc}
${LinkDataFragmentDoc}`;
export const getBlogPostPageMetaDataDocument = gql`
    query getBlogPostPageMetaData($key: String!, $version: String, $locale: [Locales!]) {
  BlogPostPage(
    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}
    locale: $locale
  ) {
    pages: items {
      cms: _metadata {
        title: displayName
        published
        url {
          base
          default
        }
      }
      title: Heading
      author: ArticleAuthor
      image: BlogPostPromoImage {
        ...ReferenceData
      }
      topics: Topic
      seo: SeoSettings {
        title: MetaTitle
        description: MetaDescription
        keywords: MetaKeywords
        image: SharingImage {
          ...ReferenceData
        }
        type: GraphType
      }
    }
  }
}
    ${ReferenceDataFragmentDoc}
${LinkDataFragmentDoc}`;
export const getLandingPageMetaDataDocument = gql`
    query getLandingPageMetaData($key: String!, $version: String, $locale: [Locales]) {
  LandingPage(
    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}
    locale: $locale
  ) {
    pages: items {
      _metadata {
        displayName
        key
        version
        locale
        url {
          base
        }
      }
      SeoSettings {
        MetaTitle
        MetaDescription
        SharingImage {
          ...ReferenceData
        }
        GraphType
      }
    }
  }
}
    ${ReferenceDataFragmentDoc}
${LinkDataFragmentDoc}`;
export const getFooterDataDocument = gql`
    query getFooterData($domain: String, $locale: [Locales!]) {
  appLayout: LayoutSettingsBlock(
    where: {_or: [{appIdentifiers: {exist: false}}, {_and: [{appIdentifiers: {exist: true}}, {appIdentifiers: {eq: $domain}}]}]}
    locale: $locale
  ) {
    items {
      _metadata {
        key
        displayName
      }
      copyright
      footerMenus {
        ...IContentData
        ...MenuNavigationBlockData
      }
      legalLinks {
        ...LinkItemData
      }
      contactInfoHeading
      contactInfo {
        json
      }
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${LinkItemDataFragmentDoc}`;
export const getHeaderDataDocument = gql`
    query getHeaderData($domain: String, $locale: [Locales!]) {
  appLayout: LayoutSettingsBlock(
    where: {_or: [{appIdentifiers: {exist: false}}, {_and: [{appIdentifiers: {exist: true}}, {appIdentifiers: {eq: $domain}}]}]}
    locale: $locale
  ) {
    items {
      _metadata {
        key
        displayName
      }
      appIdentifiers
      mainMenu {
        ...IContentData
        ...MegaMenuGroupBlockData
      }
      serviceButtons {
        ...IContentData
        ...ButtonBlockData
      }
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${LinkItemDataFragmentDoc}
${BlogPostPageMenuBlockFragmentDoc}
${ReferenceDataFragmentDoc}
${ButtonBlockDataFragmentDoc}`;
export const getLocalesDocument = gql`
    query getLocales {
  schema: __schema {
    types {
      kind
      name
      enumValues {
        name
      }
    }
  }
}
    `;
export const getArticlesDocument = gql`
    query getArticles($pageSize: Int! = 10, $start: Int! = 0, $locale: [Locales], $author: [String!], $published: Date, $publishedEnd: Date) {
  getArticles: BlogPostPage(
    where: {_and: [{_metadata: {published: {gte: $published}}}, {_metadata: {published: {lte: $publishedEnd}}}], _metadata: {status: {eq: "Published"}}}
    locale: $locale
    limit: $pageSize
    skip: $start
    orderBy: {_metadata: {published: DESC}}
  ) {
    total
    items {
      ...IContentData
      _metadata {
        status
        published
      }
      title: Heading
      description: SeoSettings {
        text: MetaDescription
      }
      author: ArticleAuthor
      image: BlogPostPromoImage {
        ...ReferenceData
      }
    }
    facets {
      author: ArticleAuthor(orderType: VALUE, orderBy: ASC, filters: $author) {
        count
        name
      }
      _metadata {
        published(unit: DAY) {
          count
          name
        }
      }
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${ReferenceDataFragmentDoc}`;
export const searchContentDocument = gql`
    query searchContent($term: String!, $locale: [String!], $withinLocale: [Locales], $types: [String!], $pageSize: Int! = 25, $start: Int! = 0) {
  Content: _Page(
    where: {_fulltext: {match: $term}, _metadata: {url: {base: {exist: true}}}}
    orderBy: {_ranking: SEMANTIC}
    limit: $pageSize
    skip: $start
    locale: $withinLocale
  ) {
    total
    items {
      _score
      ...SearchData
      _metadata {
        published
      }
      preview: _fulltext(
        highlight: {enabled: true, startToken: "<span>", endToken: "</span>"}
      )
      ...BlogPostPageSearchResult
    }
    facets {
      _metadata {
        types(filters: $types) {
          name
          count
        }
        locale(filters: $locale) {
          name
          count
        }
      }
    }
  }
}
    ${SearchDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${BlogPostPageSearchResultFragmentDoc}
${ReferenceDataFragmentDoc}`;
export const personalizedSearchContentDocument = gql`
    query personalizedSearchContent($term: String!, $topInterest: String, $locale: [String!], $withinLocale: [Locales], $types: [String!], $pageSize: Int! = 25, $start: Int! = 0, $boost: Int! = 100) {
  Content: _Page(
    where: {_or: [{_fulltext: {match: $term}}, {_fulltext: {match: $topInterest, boost: $boost}}], _metadata: {url: {base: {exist: true}}}}
    orderBy: {_ranking: SEMANTIC}
    limit: $pageSize
    skip: $start
    locale: $withinLocale
  ) {
    total
    items {
      _score
      ...SearchData
      _metadata {
        published
      }
      preview: _fulltext(
        highlight: {enabled: true, startToken: "<span>", endToken: "</span>"}
      )
      ...BlogPostPageSearchResult
    }
    facets {
      _metadata {
        types(filters: $types) {
          name
          count
        }
        locale(filters: $locale) {
          name
          count
        }
      }
    }
  }
}
    ${SearchDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${BlogPostPageSearchResultFragmentDoc}
${ReferenceDataFragmentDoc}`;
export const getContentByIdDocument = gql`
    query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {
  content: _Content(
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items: item {
      ...BlockData
      ...PageData
      ...ArticleListElementData
      ...BlockTypeBlockSimpleBlockData
      ...BlockTypeChoiceDropDownListData
      ...BlockTypeChoiceSelectListData
      ...BlockTypeChoiceSelectedNotSelectedData
      ...BlockTypeContentContentAreaData
      ...BlockTypeContentContentAreaItemData
      ...BlockTypeContentContentReferenceData
      ...BlockTypeDateTimeData
      ...BlockTypeGuidData
      ...BlockTypeLinkLinkCollectionData
      ...BlockTypeLinkLinkItemData
      ...BlockTypeLinkUrlToDocumentData
      ...BlockTypeLinkUrlToImageData
      ...BlockTypeLinkUrlToPageData
      ...BlockTypeListBlockSimpleBlockData
      ...BlockTypeListChoiceSelectedNotSelectedData
      ...BlockTypeListContentContentReferenceData
      ...BlockTypeListDateTimeData
      ...BlockTypeListGuidData
      ...BlockTypeListLinkLinkItemData
      ...BlockTypeListLinkUrlToDocumentData
      ...BlockTypeListLinkUrlToImageData
      ...BlockTypeListLinkUrlToPageData
      ...BlockTypeListNumberFloatingPointData
      ...BlockTypeListNumberIntegerData
      ...BlockTypeListTextLongStringData
      ...BlockTypeListTextStringData
      ...BlockTypeListTextXHtmlStringData
      ...BlockTypeNumberFloatingPointData
      ...BlockTypeNumberIntegerData
      ...BlockTypeTextLongStringData
      ...BlockTypeTextStringData
      ...BlockTypeTextXHtmlStringData
      ...ButtonBlockData
      ...CTAElementData
      ...CarouselBlockData
      ...ContentRecsElementData
      ...ContinueReadingComponentData
      ...HeadingElementData
      ...HeroBlockData
      ...ImageElementData
      ...LayoutSettingsBlockData
      ...MegaMenuGroupBlockData
      ...MenuNavigationBlockData
      ...OdpEmbedBlockData
      ...PageSeoSettingsData
      ...ParagraphElementData
      ...QuoteBlockData
      ...RichTextElementData
      ...SimpleBlockData
      ...TestimonialElementData
      ...TextBlockData
      ...VideoElementData
      ...BlankSectionData
      ...BlankExperienceData
      ...BlogSectionExperienceData
      ...ExpTypeBlockSimpleBlockData
      ...ExpTypeChoiceDropDownListData
      ...ExpTypeChoiceSelectListData
      ...ExpTypeChoiceSelectedNotSelectedData
      ...ExpTypeContentContentAreaData
      ...ExpTypeContentContentAreaItemData
      ...ExpTypeContentContentReferenceData
      ...ExpTypeDateTimeData
      ...ExpTypeGuidData
      ...ExpTypeLinkLinkCollectionData
      ...ExpTypeLinkLinkItemData
      ...ExpTypeLinkUrlToDocumentData
      ...ExpTypeLinkUrlToImageData
      ...ExpTypeLinkUrlToPageData
      ...ExpTypeListBlockSimpleBlockData
      ...ExpTypeListChoiceSelectedNotSelectedData
      ...ExpTypeListContentContentReferenceData
      ...ExpTypeListDateTimeData
      ...ExpTypeListGuidData
      ...ExpTypeListLinkLinkItemData
      ...ExpTypeListLinkUrlToDocumentData
      ...ExpTypeListLinkUrlToImageData
      ...ExpTypeListLinkUrlToPageData
      ...ExpTypeListNumberFloatingPointData
      ...ExpTypeListNumberIntegerData
      ...ExpTypeListTextLongStringData
      ...ExpTypeListTextStringData
      ...ExpTypeListTextXHtmlStringData
      ...ExpTypeNumberFloatingPointData
      ...ExpTypeNumberIntegerData
      ...ExpTypeTextLongStringData
      ...ExpTypeTextStringData
      ...ExpTypeTextXHtmlStringData
      ...SimpleExpData
      ...BlogPostPageData
      ...LandingPageData
      ...PageTypeBlockSimpleBlockData
      ...PageTypeChoiceDropDownListData
      ...PageTypeChoiceSelectListData
      ...PageTypeChoiceSelectedNotSelectedData
      ...PageTypeContentContentAreaData
      ...PageTypeContentContentAreaItemData
      ...PageTypeContentContentReferenceData
      ...PageTypeDateTimeData
      ...PageTypeGuidData
      ...PageTypeLinkLinkCollectionData
      ...PageTypeLinkLinkItemData
      ...PageTypeLinkUrlToDocumentData
      ...PageTypeLinkUrlToImageData
      ...PageTypeLinkUrlToPageData
      ...PageTypeListBlockSimpleBlockData
      ...PageTypeListChoiceSelectedNotSelectedData
      ...PageTypeListContentContentReferenceData
      ...PageTypeListDateTimeData
      ...PageTypeListGuidData
      ...PageTypeListLinkLinkItemData
      ...PageTypeListLinkUrlToDocumentData
      ...PageTypeListLinkUrlToImageData
      ...PageTypeListLinkUrlToPageData
      ...PageTypeListNumberFloatingPointData
      ...PageTypeListNumberIntegerData
      ...PageTypeListTextLongStringData
      ...PageTypeListTextStringData
      ...PageTypeListTextXHtmlStringData
      ...PageTypeNumberFloatingPointData
      ...PageTypeNumberIntegerData
      ...PageTypeTextLongStringData
      ...PageTypeTextStringData
      ...PageTypeTextXHtmlStringData
      ...SimplePageData
    }
  }
}
    ${BlockDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${PageDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${BlockTypeBlockSimpleBlockDataFragmentDoc}
${SimpleBlockPropertyDataFragmentDoc}
${BlockTypeChoiceDropDownListDataFragmentDoc}
${BlockTypeChoiceSelectListDataFragmentDoc}
${BlockTypeChoiceSelectedNotSelectedDataFragmentDoc}
${BlockTypeContentContentAreaDataFragmentDoc}
${IContentListItemFragmentDoc}
${ImageMediaComponentDataFragmentDoc}
${VideoMediaComponentDataFragmentDoc}
${BlockTypeContentContentAreaItemDataFragmentDoc}
${BlockTypeContentContentReferenceDataFragmentDoc}
${ReferenceDataFragmentDoc}
${BlockTypeDateTimeDataFragmentDoc}
${BlockTypeGuidDataFragmentDoc}
${BlockTypeLinkLinkCollectionDataFragmentDoc}
${LinkItemDataFragmentDoc}
${BlockTypeLinkLinkItemDataFragmentDoc}
${BlockTypeLinkUrlToDocumentDataFragmentDoc}
${BlockTypeLinkUrlToImageDataFragmentDoc}
${BlockTypeLinkUrlToPageDataFragmentDoc}
${BlockTypeListBlockSimpleBlockDataFragmentDoc}
${BlockTypeListChoiceSelectedNotSelectedDataFragmentDoc}
${BlockTypeListContentContentReferenceDataFragmentDoc}
${BlockTypeListDateTimeDataFragmentDoc}
${BlockTypeListGuidDataFragmentDoc}
${BlockTypeListLinkLinkItemDataFragmentDoc}
${BlockTypeListLinkUrlToDocumentDataFragmentDoc}
${BlockTypeListLinkUrlToImageDataFragmentDoc}
${BlockTypeListLinkUrlToPageDataFragmentDoc}
${BlockTypeListNumberFloatingPointDataFragmentDoc}
${BlockTypeListNumberIntegerDataFragmentDoc}
${BlockTypeListTextLongStringDataFragmentDoc}
${BlockTypeListTextStringDataFragmentDoc}
${BlockTypeListTextXHtmlStringDataFragmentDoc}
${BlockTypeNumberFloatingPointDataFragmentDoc}
${BlockTypeNumberIntegerDataFragmentDoc}
${BlockTypeTextLongStringDataFragmentDoc}
${BlockTypeTextStringDataFragmentDoc}
${BlockTypeTextXHtmlStringDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${ContinueReadingComponentDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${ButtonBlockPropertyDataFragmentDoc}
${ImageElementDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${BlogPostPageMenuBlockFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SimpleBlockDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${VideoElementDataFragmentDoc}
${BlankSectionDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionNodeDataFragmentDoc}
${CompositionComponentNodeDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${BlogSectionExperienceDataFragmentDoc}
${ExpTypeBlockSimpleBlockDataFragmentDoc}
${ExpTypeChoiceDropDownListDataFragmentDoc}
${ExpTypeChoiceSelectListDataFragmentDoc}
${ExpTypeChoiceSelectedNotSelectedDataFragmentDoc}
${ExpTypeContentContentAreaDataFragmentDoc}
${ExpTypeContentContentAreaItemDataFragmentDoc}
${ExpTypeContentContentReferenceDataFragmentDoc}
${ExpTypeDateTimeDataFragmentDoc}
${ExpTypeGuidDataFragmentDoc}
${ExpTypeLinkLinkCollectionDataFragmentDoc}
${ExpTypeLinkLinkItemDataFragmentDoc}
${ExpTypeLinkUrlToDocumentDataFragmentDoc}
${ExpTypeLinkUrlToImageDataFragmentDoc}
${ExpTypeLinkUrlToPageDataFragmentDoc}
${ExpTypeListBlockSimpleBlockDataFragmentDoc}
${ExpTypeListChoiceSelectedNotSelectedDataFragmentDoc}
${ExpTypeListContentContentReferenceDataFragmentDoc}
${ExpTypeListDateTimeDataFragmentDoc}
${ExpTypeListGuidDataFragmentDoc}
${ExpTypeListLinkLinkItemDataFragmentDoc}
${ExpTypeListLinkUrlToDocumentDataFragmentDoc}
${ExpTypeListLinkUrlToImageDataFragmentDoc}
${ExpTypeListLinkUrlToPageDataFragmentDoc}
${ExpTypeListNumberFloatingPointDataFragmentDoc}
${ExpTypeListNumberIntegerDataFragmentDoc}
${ExpTypeListTextLongStringDataFragmentDoc}
${ExpTypeListTextStringDataFragmentDoc}
${ExpTypeListTextXHtmlStringDataFragmentDoc}
${ExpTypeNumberFloatingPointDataFragmentDoc}
${ExpTypeNumberIntegerDataFragmentDoc}
${ExpTypeTextLongStringDataFragmentDoc}
${ExpTypeTextStringDataFragmentDoc}
${ExpTypeTextXHtmlStringDataFragmentDoc}
${SimpleExpDataFragmentDoc}
${BlogPostPageDataFragmentDoc}
${LandingPageDataFragmentDoc}
${PageTypeBlockSimpleBlockDataFragmentDoc}
${PageTypeChoiceDropDownListDataFragmentDoc}
${PageTypeChoiceSelectListDataFragmentDoc}
${PageTypeChoiceSelectedNotSelectedDataFragmentDoc}
${PageTypeContentContentAreaDataFragmentDoc}
${PageTypeContentContentAreaItemDataFragmentDoc}
${PageTypeContentContentReferenceDataFragmentDoc}
${PageTypeDateTimeDataFragmentDoc}
${PageTypeGuidDataFragmentDoc}
${PageTypeLinkLinkCollectionDataFragmentDoc}
${PageTypeLinkLinkItemDataFragmentDoc}
${PageTypeLinkUrlToDocumentDataFragmentDoc}
${PageTypeLinkUrlToImageDataFragmentDoc}
${PageTypeLinkUrlToPageDataFragmentDoc}
${PageTypeListBlockSimpleBlockDataFragmentDoc}
${PageTypeListChoiceSelectedNotSelectedDataFragmentDoc}
${PageTypeListContentContentReferenceDataFragmentDoc}
${PageTypeListDateTimeDataFragmentDoc}
${PageTypeListGuidDataFragmentDoc}
${PageTypeListLinkLinkItemDataFragmentDoc}
${PageTypeListLinkUrlToDocumentDataFragmentDoc}
${PageTypeListLinkUrlToImageDataFragmentDoc}
${PageTypeListLinkUrlToPageDataFragmentDoc}
${PageTypeListNumberFloatingPointDataFragmentDoc}
${PageTypeListNumberIntegerDataFragmentDoc}
${PageTypeListTextLongStringDataFragmentDoc}
${PageTypeListTextStringDataFragmentDoc}
${PageTypeListTextXHtmlStringDataFragmentDoc}
${PageTypeNumberFloatingPointDataFragmentDoc}
${PageTypeNumberIntegerDataFragmentDoc}
${PageTypeTextLongStringDataFragmentDoc}
${PageTypeTextStringDataFragmentDoc}
${PageTypeTextXHtmlStringDataFragmentDoc}
${SimplePageDataFragmentDoc}`;
export const getContentByPathDocument = gql`
    query getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String) {
  content: _Content(
    where: {_metadata: {url: {default: {in: $path}, base: {eq: $siteId}}}}
    locale: $locale
  ) {
    total
    items: item {
      ...IContentData
      ...PageData
      ...BlankExperienceData
      ...BlogSectionExperienceData
      ...ExpTypeBlockSimpleBlockData
      ...ExpTypeChoiceDropDownListData
      ...ExpTypeChoiceSelectListData
      ...ExpTypeChoiceSelectedNotSelectedData
      ...ExpTypeContentContentAreaData
      ...ExpTypeContentContentAreaItemData
      ...ExpTypeContentContentReferenceData
      ...ExpTypeDateTimeData
      ...ExpTypeGuidData
      ...ExpTypeLinkLinkCollectionData
      ...ExpTypeLinkLinkItemData
      ...ExpTypeLinkUrlToDocumentData
      ...ExpTypeLinkUrlToImageData
      ...ExpTypeLinkUrlToPageData
      ...ExpTypeListBlockSimpleBlockData
      ...ExpTypeListChoiceSelectedNotSelectedData
      ...ExpTypeListContentContentReferenceData
      ...ExpTypeListDateTimeData
      ...ExpTypeListGuidData
      ...ExpTypeListLinkLinkItemData
      ...ExpTypeListLinkUrlToDocumentData
      ...ExpTypeListLinkUrlToImageData
      ...ExpTypeListLinkUrlToPageData
      ...ExpTypeListNumberFloatingPointData
      ...ExpTypeListNumberIntegerData
      ...ExpTypeListTextLongStringData
      ...ExpTypeListTextStringData
      ...ExpTypeListTextXHtmlStringData
      ...ExpTypeNumberFloatingPointData
      ...ExpTypeNumberIntegerData
      ...ExpTypeTextLongStringData
      ...ExpTypeTextStringData
      ...ExpTypeTextXHtmlStringData
      ...SimpleExpData
      ...BlogPostPageData
      ...LandingPageData
      ...PageTypeBlockSimpleBlockData
      ...PageTypeChoiceDropDownListData
      ...PageTypeChoiceSelectListData
      ...PageTypeChoiceSelectedNotSelectedData
      ...PageTypeContentContentAreaData
      ...PageTypeContentContentAreaItemData
      ...PageTypeContentContentReferenceData
      ...PageTypeDateTimeData
      ...PageTypeGuidData
      ...PageTypeLinkLinkCollectionData
      ...PageTypeLinkLinkItemData
      ...PageTypeLinkUrlToDocumentData
      ...PageTypeLinkUrlToImageData
      ...PageTypeLinkUrlToPageData
      ...PageTypeListBlockSimpleBlockData
      ...PageTypeListChoiceSelectedNotSelectedData
      ...PageTypeListContentContentReferenceData
      ...PageTypeListDateTimeData
      ...PageTypeListGuidData
      ...PageTypeListLinkLinkItemData
      ...PageTypeListLinkUrlToDocumentData
      ...PageTypeListLinkUrlToImageData
      ...PageTypeListLinkUrlToPageData
      ...PageTypeListNumberFloatingPointData
      ...PageTypeListNumberIntegerData
      ...PageTypeListTextLongStringData
      ...PageTypeListTextStringData
      ...PageTypeListTextXHtmlStringData
      ...PageTypeNumberFloatingPointData
      ...PageTypeNumberIntegerData
      ...PageTypeTextLongStringData
      ...PageTypeTextStringData
      ...PageTypeTextXHtmlStringData
      ...SimplePageData
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${PageDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}
${ReferenceDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionNodeDataFragmentDoc}
${CompositionComponentNodeDataFragmentDoc}
${BlockDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${BlockTypeBlockSimpleBlockDataFragmentDoc}
${SimpleBlockPropertyDataFragmentDoc}
${BlockTypeChoiceDropDownListDataFragmentDoc}
${BlockTypeChoiceSelectListDataFragmentDoc}
${BlockTypeChoiceSelectedNotSelectedDataFragmentDoc}
${BlockTypeContentContentAreaDataFragmentDoc}
${IContentListItemFragmentDoc}
${ImageMediaComponentDataFragmentDoc}
${VideoMediaComponentDataFragmentDoc}
${BlockTypeContentContentAreaItemDataFragmentDoc}
${BlockTypeContentContentReferenceDataFragmentDoc}
${BlockTypeDateTimeDataFragmentDoc}
${BlockTypeGuidDataFragmentDoc}
${BlockTypeLinkLinkCollectionDataFragmentDoc}
${LinkItemDataFragmentDoc}
${BlockTypeLinkLinkItemDataFragmentDoc}
${BlockTypeLinkUrlToDocumentDataFragmentDoc}
${BlockTypeLinkUrlToImageDataFragmentDoc}
${BlockTypeLinkUrlToPageDataFragmentDoc}
${BlockTypeListBlockSimpleBlockDataFragmentDoc}
${BlockTypeListChoiceSelectedNotSelectedDataFragmentDoc}
${BlockTypeListContentContentReferenceDataFragmentDoc}
${BlockTypeListDateTimeDataFragmentDoc}
${BlockTypeListGuidDataFragmentDoc}
${BlockTypeListLinkLinkItemDataFragmentDoc}
${BlockTypeListLinkUrlToDocumentDataFragmentDoc}
${BlockTypeListLinkUrlToImageDataFragmentDoc}
${BlockTypeListLinkUrlToPageDataFragmentDoc}
${BlockTypeListNumberFloatingPointDataFragmentDoc}
${BlockTypeListNumberIntegerDataFragmentDoc}
${BlockTypeListTextLongStringDataFragmentDoc}
${BlockTypeListTextStringDataFragmentDoc}
${BlockTypeListTextXHtmlStringDataFragmentDoc}
${BlockTypeNumberFloatingPointDataFragmentDoc}
${BlockTypeNumberIntegerDataFragmentDoc}
${BlockTypeTextLongStringDataFragmentDoc}
${BlockTypeTextStringDataFragmentDoc}
${BlockTypeTextXHtmlStringDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${ContinueReadingComponentDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${ButtonBlockPropertyDataFragmentDoc}
${ImageElementDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${BlogPostPageMenuBlockFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SimpleBlockDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${VideoElementDataFragmentDoc}
${BlankSectionDataFragmentDoc}
${BlogSectionExperienceDataFragmentDoc}
${ExpTypeBlockSimpleBlockDataFragmentDoc}
${ExpTypeChoiceDropDownListDataFragmentDoc}
${ExpTypeChoiceSelectListDataFragmentDoc}
${ExpTypeChoiceSelectedNotSelectedDataFragmentDoc}
${ExpTypeContentContentAreaDataFragmentDoc}
${ExpTypeContentContentAreaItemDataFragmentDoc}
${ExpTypeContentContentReferenceDataFragmentDoc}
${ExpTypeDateTimeDataFragmentDoc}
${ExpTypeGuidDataFragmentDoc}
${ExpTypeLinkLinkCollectionDataFragmentDoc}
${ExpTypeLinkLinkItemDataFragmentDoc}
${ExpTypeLinkUrlToDocumentDataFragmentDoc}
${ExpTypeLinkUrlToImageDataFragmentDoc}
${ExpTypeLinkUrlToPageDataFragmentDoc}
${ExpTypeListBlockSimpleBlockDataFragmentDoc}
${ExpTypeListChoiceSelectedNotSelectedDataFragmentDoc}
${ExpTypeListContentContentReferenceDataFragmentDoc}
${ExpTypeListDateTimeDataFragmentDoc}
${ExpTypeListGuidDataFragmentDoc}
${ExpTypeListLinkLinkItemDataFragmentDoc}
${ExpTypeListLinkUrlToDocumentDataFragmentDoc}
${ExpTypeListLinkUrlToImageDataFragmentDoc}
${ExpTypeListLinkUrlToPageDataFragmentDoc}
${ExpTypeListNumberFloatingPointDataFragmentDoc}
${ExpTypeListNumberIntegerDataFragmentDoc}
${ExpTypeListTextLongStringDataFragmentDoc}
${ExpTypeListTextStringDataFragmentDoc}
${ExpTypeListTextXHtmlStringDataFragmentDoc}
${ExpTypeNumberFloatingPointDataFragmentDoc}
${ExpTypeNumberIntegerDataFragmentDoc}
${ExpTypeTextLongStringDataFragmentDoc}
${ExpTypeTextStringDataFragmentDoc}
${ExpTypeTextXHtmlStringDataFragmentDoc}
${SimpleExpDataFragmentDoc}
${BlogPostPageDataFragmentDoc}
${LandingPageDataFragmentDoc}
${PageTypeBlockSimpleBlockDataFragmentDoc}
${PageTypeChoiceDropDownListDataFragmentDoc}
${PageTypeChoiceSelectListDataFragmentDoc}
${PageTypeChoiceSelectedNotSelectedDataFragmentDoc}
${PageTypeContentContentAreaDataFragmentDoc}
${PageTypeContentContentAreaItemDataFragmentDoc}
${PageTypeContentContentReferenceDataFragmentDoc}
${PageTypeDateTimeDataFragmentDoc}
${PageTypeGuidDataFragmentDoc}
${PageTypeLinkLinkCollectionDataFragmentDoc}
${PageTypeLinkLinkItemDataFragmentDoc}
${PageTypeLinkUrlToDocumentDataFragmentDoc}
${PageTypeLinkUrlToImageDataFragmentDoc}
${PageTypeLinkUrlToPageDataFragmentDoc}
${PageTypeListBlockSimpleBlockDataFragmentDoc}
${PageTypeListChoiceSelectedNotSelectedDataFragmentDoc}
${PageTypeListContentContentReferenceDataFragmentDoc}
${PageTypeListDateTimeDataFragmentDoc}
${PageTypeListGuidDataFragmentDoc}
${PageTypeListLinkLinkItemDataFragmentDoc}
${PageTypeListLinkUrlToDocumentDataFragmentDoc}
${PageTypeListLinkUrlToImageDataFragmentDoc}
${PageTypeListLinkUrlToPageDataFragmentDoc}
${PageTypeListNumberFloatingPointDataFragmentDoc}
${PageTypeListNumberIntegerDataFragmentDoc}
${PageTypeListTextLongStringDataFragmentDoc}
${PageTypeListTextStringDataFragmentDoc}
${PageTypeListTextXHtmlStringDataFragmentDoc}
${PageTypeNumberFloatingPointDataFragmentDoc}
${PageTypeNumberIntegerDataFragmentDoc}
${PageTypeTextLongStringDataFragmentDoc}
${PageTypeTextStringDataFragmentDoc}
${PageTypeTextXHtmlStringDataFragmentDoc}
${SimplePageDataFragmentDoc}`;
export const getContentTypeDocument = gql`
    query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {
  content: _Content(
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items: item {
      _metadata {
        types
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getArticleListElementItems(variables: Schema.getArticleListElementItemsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getArticleListElementItemsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getArticleListElementItemsQuery>(getArticleListElementItemsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getArticleListElementItems', 'query', variables);
    },
    getDefaultArticleList(variables?: Schema.getDefaultArticleListQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getDefaultArticleListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getDefaultArticleListQuery>(getDefaultArticleListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDefaultArticleList', 'query', variables);
    },
    getSharedContinueReading(variables?: Schema.getSharedContinueReadingQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getSharedContinueReadingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getSharedContinueReadingQuery>(getSharedContinueReadingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSharedContinueReading', 'query', variables);
    },
    getBlankExperienceMetaData(variables: Schema.getBlankExperienceMetaDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getBlankExperienceMetaDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlankExperienceMetaDataQuery>(getBlankExperienceMetaDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getBlankExperienceMetaData', 'query', variables);
    },
    getChildBlogPosts(variables: Schema.getChildBlogPostsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getChildBlogPostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getChildBlogPostsQuery>(getChildBlogPostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getChildBlogPosts', 'query', variables);
    },
    getBlogSectionExperienceMetaData(variables: Schema.getBlogSectionExperienceMetaDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getBlogSectionExperienceMetaDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlogSectionExperienceMetaDataQuery>(getBlogSectionExperienceMetaDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getBlogSectionExperienceMetaData', 'query', variables);
    },
    getBlogPostPageMetaData(variables: Schema.getBlogPostPageMetaDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getBlogPostPageMetaDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlogPostPageMetaDataQuery>(getBlogPostPageMetaDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getBlogPostPageMetaData', 'query', variables);
    },
    getLandingPageMetaData(variables: Schema.getLandingPageMetaDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getLandingPageMetaDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getLandingPageMetaDataQuery>(getLandingPageMetaDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getLandingPageMetaData', 'query', variables);
    },
    getFooterData(variables?: Schema.getFooterDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getFooterDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getFooterDataQuery>(getFooterDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getFooterData', 'query', variables);
    },
    getHeaderData(variables?: Schema.getHeaderDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getHeaderDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getHeaderDataQuery>(getHeaderDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getHeaderData', 'query', variables);
    },
    getLocales(variables?: Schema.getLocalesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getLocalesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getLocalesQuery>(getLocalesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getLocales', 'query', variables);
    },
    getArticles(variables?: Schema.getArticlesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getArticlesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getArticlesQuery>(getArticlesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getArticles', 'query', variables);
    },
    searchContent(variables: Schema.searchContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.searchContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.searchContentQuery>(searchContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'searchContent', 'query', variables);
    },
    personalizedSearchContent(variables: Schema.personalizedSearchContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.personalizedSearchContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.personalizedSearchContentQuery>(personalizedSearchContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'personalizedSearchContent', 'query', variables);
    },
    getContentById(variables: Schema.getContentByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByIdQuery>(getContentByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentById', 'query', variables);
    },
    getContentByPath(variables: Schema.getContentByPathQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentByPathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByPathQuery>(getContentByPathDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentByPath', 'query', variables);
    },
    getContentType(variables: Schema.getContentTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentTypeQuery>(getContentTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentType', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;