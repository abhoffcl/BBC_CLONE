import { getArticlesBySection } from '@/lib/mockData'
import ArticleCard from '@/components/ArticleCard'

export default function LivePage() {
  const liveArticles = getArticlesBySection('Live')

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-red-600 rounded-full mr-3 animate-pulse"></div>
            <h1 className="text-4xl font-bold text-bbc-dark">Live</h1>
          </div>
          <p className="text-lg text-bbc-grey">
            Watch breaking news, live events, parliamentary sessions, and real-time coverage as stories unfold.
          </p>
        </div>

        {/* Live Events */}
        {liveArticles.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-bbc-dark mb-6 flex items-center">
              <div className="w-2 h-2 bg-red-600 rounded-full mr-2 animate-pulse"></div>
              Live Now
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="lg:col-span-1">
                <ArticleCard article={liveArticles[0]} variant="bbc-large" />
              </div>
              <div className="lg:col-span-1 space-y-6">
                {liveArticles.slice(1, 3).map((article) => (
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

        {/* More Live Content */}
        {liveArticles.length > 3 && (
          <div>
            <h2 className="text-2xl font-bold text-bbc-dark mb-6">More Live Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveArticles.slice(3).map((article) => (
                <ArticleCard 
                  key={article.id} 
                  article={article} 
                  variant="bbc-medium" 
                />
              ))}
            </div>
          </div>
        )}

        {/* No Live Content Message */}
        {liveArticles.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-bbc-grey mb-4">No live content available</h2>
            <p className="text-bbc-grey">Check back later for live coverage of breaking news and events.</p>
          </div>
        )}

        {/* Live Stream Notice */}
        <div className="mt-12 bg-gray-50 p-6 rounded-lg border-l-4 border-red-600">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-600 rounded-full mr-3 animate-pulse"></div>
            <h3 className="text-lg font-semibold text-bbc-dark">Live Streaming Information</h3>
          </div>
          <p className="mt-2 text-bbc-grey">
            Live content is available 24/7. Breaking news coverage begins immediately when major stories develop.
            Check this page regularly for live updates on developing stories.
          </p>
        </div>
      </div>
    </div>
  )
}