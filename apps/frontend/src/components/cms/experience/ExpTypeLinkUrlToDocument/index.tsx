import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeLinkUrlToDocumentDataFragmentDoc, type ExpTypeLinkUrlToDocumentDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType LinkUrlToDocument
 * ExpType LinkUrlToDocument
 */
export const ExpTypeLinkUrlToDocumentExperience : CmsComponent<ExpTypeLinkUrlToDocumentDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeLinkUrlToDocumentExperience.displayName = "ExpType LinkUrlToDocument (Experience/ExpTypeLinkUrlToDocument)"
ExpTypeLinkUrlToDocumentExperience.getDataFragment = () => ['ExpTypeLinkUrlToDocumentData', ExpTypeLinkUrlToDocumentDataFragmentDoc]
ExpTypeLinkUrlToDocumentExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeLinkUrlToDocumentExperience