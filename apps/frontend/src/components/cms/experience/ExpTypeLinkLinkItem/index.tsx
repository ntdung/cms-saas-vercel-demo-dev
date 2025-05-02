import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeLinkLinkItemDataFragmentDoc, type ExpTypeLinkLinkItemDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType LinkLinkItem
 * ExpType LinkLinkItem
 */
export const ExpTypeLinkLinkItemExperience : CmsComponent<ExpTypeLinkLinkItemDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeLinkLinkItemExperience.displayName = "ExpType LinkLinkItem (Experience/ExpTypeLinkLinkItem)"
ExpTypeLinkLinkItemExperience.getDataFragment = () => ['ExpTypeLinkLinkItemData', ExpTypeLinkLinkItemDataFragmentDoc]
ExpTypeLinkLinkItemExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeLinkLinkItemExperience