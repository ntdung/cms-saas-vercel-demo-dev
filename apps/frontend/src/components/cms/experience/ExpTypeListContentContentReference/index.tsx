import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeListContentContentReferenceDataFragmentDoc, type ExpTypeListContentContentReferenceDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType ListContentContentReference
 * ExpType ListContentContentReference
 */
export const ExpTypeListContentContentReferenceExperience : CmsComponent<ExpTypeListContentContentReferenceDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeListContentContentReferenceExperience.displayName = "ExpType ListContentContentReference (Experience/ExpTypeListContentContentReference)"
ExpTypeListContentContentReferenceExperience.getDataFragment = () => ['ExpTypeListContentContentReferenceData', ExpTypeListContentContentReferenceDataFragmentDoc]
ExpTypeListContentContentReferenceExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeListContentContentReferenceExperience