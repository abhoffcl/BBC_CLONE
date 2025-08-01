import { getArticleBySlug, getArticlesBySection, getLatestArticles } from '@/lib/mockData'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import Sidebar from '@/components/Sidebar'
import ImageWithFallback from '@/components/ImageWithFallback'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const articles = getLatestArticles(100) // Get all articles
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  
  if (!article) {
    return {
      title: 'Article Not Found - BBC Clone',
    }
  }

  return {
    title: `${article.title} - BBC Clone`,
    description: article.description,
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = getArticlesBySection(article.section)
    .filter((a) => a.id !== article.id)
    .slice(0, 3)

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <article className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="p-6">
              <nav className="mb-4">
                <Link
                  href={`/${article.section}`}
                  className="text-bbc-red hover:underline uppercase font-semibold text-sm"
                >
                  {article.section}
                </Link>
              </nav>

              <header className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-bbc-dark mb-4 leading-tight">
                  {article.title}
                </h1>
                <p className="text-xl text-bbc-grey mb-4 leading-relaxed">
                  {article.description}
                </p>
                <div className="flex items-center text-sm text-bbc-grey border-t pt-4">
                  <time className="mr-4">{article.timestamp}</time>
                  {article.author && <span className="mr-4">By {article.author}</span>}
                  <span>BBC News</span>
                </div>
              </header>

              <div className="relative mb-6">
                <ImageWithFallback
                  src={article.imageUrl}
                  alt={`${article.title} - ${article.section} article image`}
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                  width={800}
                  height={600}
                />
              </div>

              <div className="prose prose-lg max-w-none">
                {article.content ? (
                  <div className="text-bbc-dark leading-relaxed space-y-4">
                    {article.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : (
                  <div className="text-bbc-dark leading-relaxed space-y-4">
                    <p className="text-lg">
                      This is the main content of the article. In a real implementation, 
                      this would contain the full article text with proper formatting, 
                      images, and multimedia content.
                    </p>
                    <p className="text-lg">
                      The article content would be dynamically loaded from a content 
                      management system or database, providing rich text formatting 
                      and embedded media elements.
                    </p>
                    <p className="text-lg">
                      This BBC News clone demonstrates the structure and layout of 
                      a modern news website built with Next.js 14+ and the App Router.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 text-bbc-grey hover:text-bbc-red transition-colors duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                      <span>Share</span>
                    </button>
                    <button className="flex items-center space-x-2 text-bbc-grey hover:text-bbc-red transition-colors duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                      <span>Save</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {relatedArticles.length > 0 && (
            <section className="mt-8">
              <h2 className="text-2xl font-bold text-bbc-dark mb-4 border-b-2 border-bbc-red pb-2">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedArticles.map((relatedArticle) => (
                  <ArticleCard key={relatedArticle.id} article={relatedArticle} variant="small" />
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="lg:col-span-1">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}