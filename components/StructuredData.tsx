import { 
  generateOrganizationJSONLD, 
  generateLocalBusinessJSONLD, 
  generateFAQJSONLD,
  generateBreadcrumbJSONLD,
  generateWebSiteJSONLD 
} from '@/lib/structuredData'
import { faqData } from '@/data/faq'

// Server component – generuje JSON-LD bez potřeby klientského bundlu
export default function StructuredData() {
  const organizationData = generateOrganizationJSONLD()
  const localBusinessData = generateLocalBusinessJSONLD()
  const faqJSONLD = generateFAQJSONLD(faqData)
  const breadcrumbData = generateBreadcrumbJSONLD()
  const webSiteData = generateWebSiteJSONLD()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJSONLD),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteData),
        }}
      />
    </>
  )
}
