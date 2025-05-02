import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeLinkLinkCollectionDataFragmentDoc, type ExpTypeLinkLinkCollectionDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType LinkLinkCollection
 * ExpType LinkLinkCollection
 */
export const ExpTypeLinkLinkCollectionExperience : CmsComponent<ExpTypeLinkLinkCollectionDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeLinkLinkCollectionExperience.displayName = "ExpType LinkLinkCollection (Experience/ExpTypeLinkLinkCollection)"
ExpTypeLinkLinkCollectionExperience.getDataFragment = () => ['ExpTypeLinkLinkCollectionData', ExpTypeLinkLinkCollectionDataFragmentDoc]
ExpTypeLinkLinkCollectionExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeLinkLinkCollectionExperience