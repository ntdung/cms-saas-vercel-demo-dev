import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeDateTimeDataFragmentDoc, type ExpTypeDateTimeDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType DateTime
 * ExpType DateTime
 */
export const ExpTypeDateTimeExperience : CmsComponent<ExpTypeDateTimeDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeDateTimeExperience.displayName = "ExpType DateTime (Experience/ExpTypeDateTime)"
ExpTypeDateTimeExperience.getDataFragment = () => ['ExpTypeDateTimeData', ExpTypeDateTimeDataFragmentDoc]
ExpTypeDateTimeExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeDateTimeExperience