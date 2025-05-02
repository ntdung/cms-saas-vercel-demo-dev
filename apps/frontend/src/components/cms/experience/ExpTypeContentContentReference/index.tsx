import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeContentContentReferenceDataFragmentDoc, type ExpTypeContentContentReferenceDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType ContentContentReference
 * ExpType ContentContentReference
 */
export const ExpTypeContentContentReferenceExperience : CmsComponent<ExpTypeContentContentReferenceDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeContentContentReferenceExperience.displayName = "ExpType ContentContentReference (Experience/ExpTypeContentContentReference)"
ExpTypeContentContentReferenceExperience.getDataFragment = () => ['ExpTypeContentContentReferenceData', ExpTypeContentContentReferenceDataFragmentDoc]
ExpTypeContentContentReferenceExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeContentContentReferenceExperience