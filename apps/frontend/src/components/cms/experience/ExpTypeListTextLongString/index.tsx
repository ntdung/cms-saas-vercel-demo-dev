import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeListTextLongStringDataFragmentDoc, type ExpTypeListTextLongStringDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType ListTextLongString
 * ExpType ListTextLongString
 */
export const ExpTypeListTextLongStringExperience : CmsComponent<ExpTypeListTextLongStringDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeListTextLongStringExperience.displayName = "ExpType ListTextLongString (Experience/ExpTypeListTextLongString)"
ExpTypeListTextLongStringExperience.getDataFragment = () => ['ExpTypeListTextLongStringData', ExpTypeListTextLongStringDataFragmentDoc]
ExpTypeListTextLongStringExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeListTextLongStringExperience