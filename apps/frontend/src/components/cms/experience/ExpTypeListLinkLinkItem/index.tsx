import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeListLinkLinkItemDataFragmentDoc, type ExpTypeListLinkLinkItemDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType ListLinkLinkItem
 * ExpType ListLinkLinkItem
 */
export const ExpTypeListLinkLinkItemExperience : CmsComponent<ExpTypeListLinkLinkItemDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeListLinkLinkItemExperience.displayName = "ExpType ListLinkLinkItem (Experience/ExpTypeListLinkLinkItem)"
ExpTypeListLinkLinkItemExperience.getDataFragment = () => ['ExpTypeListLinkLinkItemData', ExpTypeListLinkLinkItemDataFragmentDoc]
ExpTypeListLinkLinkItemExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeListLinkLinkItemExperience