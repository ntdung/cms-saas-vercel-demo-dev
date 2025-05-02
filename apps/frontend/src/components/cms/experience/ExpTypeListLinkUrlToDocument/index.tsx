import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, ExpTypeListLinkUrlToDocumentDataFragmentDoc, type ExpTypeListLinkUrlToDocumentDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * ExpType ListLinkUrlToDocument
 * ExpType ListLinkUrlToDocument
 */
export const ExpTypeListLinkUrlToDocumentExperience : CmsComponent<ExpTypeListLinkUrlToDocumentDataFragment> = ({ data }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
ExpTypeListLinkUrlToDocumentExperience.displayName = "ExpType ListLinkUrlToDocument (Experience/ExpTypeListLinkUrlToDocument)"
ExpTypeListLinkUrlToDocumentExperience.getDataFragment = () => ['ExpTypeListLinkUrlToDocumentData', ExpTypeListLinkUrlToDocumentDataFragmentDoc]
ExpTypeListLinkUrlToDocumentExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ExpTypeListLinkUrlToDocumentExperience