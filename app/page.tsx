import { getLatestArticles, getFeaturedArticles } from '@/lib/mockData'
import ArticleCard from '@/components/ArticleCard'
import HeroSection from '@/components/HeroSection'
import Advertisement from '@/components/Advertisement'
import Link from 'next/link'

export default function HomePage() {
  const featuredArticles = getFeaturedArticles()
  const latestArticles = getLatestArticles(30)
  const featuredArticle = featuredArticles[0]
  const topStories = latestArticles.slice(1, 6) // 5 top stories
  const moreTopStories = latestArticles.slice(6, 9) // 3 more stories
  const mostWatched = latestArticles.slice(9, 14) // 5 most watched
  const alsoInNews = latestArticles.slice(14, 16) // 2 also in news
  const mostRead = latestArticles.slice(16, 26) // 10 most read
  
  return (
    <div className="bg-white min-h-screen">
      {/* Advertisement Section */}
      <Advertisement />
      
      {/* Hero Section */}
      {featuredArticle && <HeroSection article={featuredArticle} />}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Stories - 5 column grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {topStories.map((article) => (
              <ArticleCard key={article.id} article={article} variant="bbc-small" />
            ))}
          </div>
        </section>

        {/* More Top Stories */}
        <section className="mb-12 border-t border-gray-300 pt-8">
          <h2 className="text-2xl font-bold text-black mb-6 font-sans uppercase tracking-wide">
            More Top Stories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main large story */}
            <div className="lg:col-span-2">
              <ArticleCard article={moreTopStories[0]} variant="bbc-large" />
            </div>
            
            {/* Right column - 2 smaller stories */}
            <div className="space-y-6">
              {moreTopStories.slice(1, 3).map((article) => (
                <ArticleCard key={article.id} article={article} variant="bbc-medium" />
              ))}
            </div>
          </div>
        </section>

        {/* Most Watched */}
        <section className="mb-12 bg-gray-50 p-6">
          <h2 className="text-2xl font-bold text-black mb-6 font-sans uppercase tracking-wide">
            Most Watched
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {mostWatched.map((article, index) => (
              <div key={article.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <span className="text-4xl font-bold text-gray-300">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <svg className="w-4 h-4 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <Link href={`/article/${article.slug}`}>
                    <h3 className="font-serif text-sm font-bold text-black hover:underline leading-tight">
                      {article.title}
                    </h3>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Also in News */}
        <section className="mb-12 border-t border-gray-300 pt-8">
          <h2 className="text-2xl font-bold text-black mb-6 font-sans uppercase tracking-wide">
            Also in News
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {alsoInNews.map((article) => (
              <ArticleCard key={article.id} article={article} variant="bbc-horizontal" />
            ))}
          </div>
        </section>

        {/* Most Read */}
        <section className="mb-12 border-t border-gray-300 pt-8">
          <h2 className="text-2xl font-bold text-black mb-6 font-sans uppercase tracking-wide">
            Most Read
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {mostRead.map((article, index) => (
              <div key={article.id} className="flex items-start space-x-3 border-b border-gray-200 pb-3 mb-3 last:border-b-0">
                <div className="flex-shrink-0">
                  <span className="text-2xl font-bold text-gray-300">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <Link href={`/article/${article.slug}`}>
                    <h3 className="font-serif text-sm font-bold text-black hover:underline leading-tight">
                      {article.title}
                    </h3>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}