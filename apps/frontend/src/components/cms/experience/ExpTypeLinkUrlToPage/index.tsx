import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeLinkUrlToPageDataFragmentDoc, type ExpTypeLinkUrlToPageDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType LinkUrlToPage
 * ExpType LinkUrlToPage
 */
export const ExpTypeLinkUrlToPageExperience : CmsComponent<ExpTypeLinkUrlToPageDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeLinkUrlToPageExperience.displayName = "ExpType LinkUrlToPage (Experience/ExpTypeLinkUrlToPage)"
ExpTypeLinkUrlToPageExperience.getDataFragment = () => ['ExpTypeLinkUrlToPageData', ExpTypeLinkUrlToPageDataFragmentDoc]
ExpTypeLinkUrlToPageExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeLinkUrlToPageExperience