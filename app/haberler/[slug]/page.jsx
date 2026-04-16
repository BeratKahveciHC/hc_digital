import NewsDetailPageClient from '../../../components/pages/NewsDetailPage'
import { news } from '../../../data/news'

export async function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const item = news.find((n) => n.slug === slug)

  if (!item) {
    return { title: 'Haber | HC Dijital' }
  }

  return {
    title: `${item.title.tr} | HC Dijital`,
    description: item.summary.tr,
    alternates: {
      canonical: `https://www.hcdijital.com.tr/haberler/${slug}`,
    },
    openGraph: {
      title: `${item.title.tr} | HC Dijital`,
      description: item.summary.tr,
      url: `https://www.hcdijital.com.tr/haberler/${slug}`,
      type: 'article',
      images: item.image ? [{ url: `https://www.hcdijital.com.tr${item.image}`, width: 1200, height: 630 }] : [],
    },
  }
}

export default function HaberDetayPage() {
  return <NewsDetailPageClient />
}
