import { getArticlesBySection } from '@/lib/mockData'
import ArticleCard from '@/components/ArticleCard'

export default function VideoPage() {
  const videoArticles = getArticlesBySection('Video')

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-bbc-dark mb-4">Video</h1>
          <p className="text-lg text-bbc-grey">
            Watch documentaries, news analysis, educational content, and exclusive video reports from BBC correspondents.
          </p>
        </div>

        {/* Featured Video */}
        {videoArticles.length > 0 && (
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="lg:col-span-1">
                <ArticleCard article={videoArticles[0]} variant="bbc-large" />
              </div>
              <div className="lg:col-span-1 space-y-6">
                {videoArticles.slice(1, 3).map((article) => (
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

        {/* Video Grid */}
        {videoArticles.length > 3 && (
          <div>
            <h2 className="text-2xl font-bold text-bbc-dark mb-6">More Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoArticles.slice(3).map((article) => (
                <ArticleCard 
                  key={article.id} 
                  article={article} 
                  variant="bbc-medium" 
                />
              ))}
            </div>
          </div>
        )}

        {/* No Videos Message */}
        {videoArticles.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-bbc-grey mb-4">No videos available</h2>
            <p className="text-bbc-grey">Check back later for the latest video content.</p>
          </div>
        )}
      </div>
    </div>
  )
}