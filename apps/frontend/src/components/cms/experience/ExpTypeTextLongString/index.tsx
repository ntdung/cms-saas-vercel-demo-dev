import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeTextLongStringDataFragmentDoc, type ExpTypeTextLongStringDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType TextLongString
 * ExpType TextLongString
 */
export const ExpTypeTextLongStringExperience : CmsComponent<ExpTypeTextLongStringDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeTextLongStringExperience.displayName = "ExpType TextLongString (Experience/ExpTypeTextLongString)"
ExpTypeTextLongStringExperience.getDataFragment = () => ['ExpTypeTextLongStringData', ExpTypeTextLongStringDataFragmentDoc]
ExpTypeTextLongStringExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeTextLongStringExperience