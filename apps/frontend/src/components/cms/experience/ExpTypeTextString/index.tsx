import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeTextStringDataFragmentDoc, type ExpTypeTextStringDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType TextString
 * ExpType TextString
 */
export const ExpTypeTextStringExperience : CmsComponent<ExpTypeTextStringDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeTextStringExperience.displayName = "ExpType TextString (Experience/ExpTypeTextString)"
ExpTypeTextStringExperience.getDataFragment = () => ['ExpTypeTextStringData', ExpTypeTextStringDataFragmentDoc]
ExpTypeTextStringExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeTextStringExperience