import { getArticlesBySection } from '@/lib/mockData'
import ArticleCard from '@/components/ArticleCard'

export default function PoliticsPage() {
  const politicsArticles = getArticlesBySection('Politics')

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-bbc-dark mb-4">Politics</h1>
          <p className="text-lg text-bbc-grey">
            Latest political news and government updates
          </p>
        </div>

        {/* Featured Article */}
        {politicsArticles.length > 0 && (
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="lg:col-span-1">
                <ArticleCard article={politicsArticles[0]} variant="bbc-large" />
              </div>
              <div className="lg:col-span-1 space-y-6">
                {politicsArticles.slice(1, 3).map((article) => (
                  <ArticleCard 
                    key={article.id} 
                    article={article} 
                    variant="bbc-horizontal" 
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Article Grid */}
        {politicsArticles.length > 3 && (
          <div>
            <h2 className="text-2xl font-bold text-bbc-dark mb-6">More Politics Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {politicsArticles.slice(3).map((article) => (
                <ArticleCard 
                  key={article.id} 
                  article={article} 
                  variant="bbc-medium" 
                />
              ))}
            </div>
          </div>
        )}

        {/* No Articles Message */}
        {politicsArticles.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-bbc-grey mb-4">No Politics stories available</h2>
            <p className="text-bbc-grey">Check back later for the latest political news and updates.</p>
          </div>
        )}
      </div>
    </div>
  )
}