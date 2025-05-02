import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeListBlockSimpleBlockDataFragmentDoc, type ExpTypeListBlockSimpleBlockDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType ListBlockSimpleBlock
 * ExpType ListBlockSimpleBlock
 */
export const ExpTypeListBlockSimpleBlockExperience : CmsComponent<ExpTypeListBlockSimpleBlockDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeListBlockSimpleBlockExperience.displayName = "ExpType ListBlockSimpleBlock (Experience/ExpTypeListBlockSimpleBlock)"
ExpTypeListBlockSimpleBlockExperience.getDataFragment = () => ['ExpTypeListBlockSimpleBlockData', ExpTypeListBlockSimpleBlockDataFragmentDoc]
ExpTypeListBlockSimpleBlockExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeListBlockSimpleBlockExperience