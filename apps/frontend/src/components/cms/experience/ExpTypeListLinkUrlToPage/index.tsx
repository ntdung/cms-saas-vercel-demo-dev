import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeListLinkUrlToPageDataFragmentDoc, type ExpTypeListLinkUrlToPageDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType ListLinkUrlToPage
 * ExpType ListLinkUrlToPage
 */
export const ExpTypeListLinkUrlToPageExperience : CmsComponent<ExpTypeListLinkUrlToPageDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeListLinkUrlToPageExperience.displayName = "ExpType ListLinkUrlToPage (Experience/ExpTypeListLinkUrlToPage)"
ExpTypeListLinkUrlToPageExperience.getDataFragment = () => ['ExpTypeListLinkUrlToPageData', ExpTypeListLinkUrlToPageDataFragmentDoc]
ExpTypeListLinkUrlToPageExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeListLinkUrlToPageExperience