import Link from 'next/link'
import { getLatestArticles } from '@/lib/mockData'
import ArticleCard from './ArticleCard'

const Sidebar = () => {
  // FIXED: Changed from @/lib/articles to @/lib/mockData to prevent 404 errors in Latest News section
  // This ensures all article slugs match the existing routes generated from mockData
  const latestArticles = getLatestArticles(4)
  const popularSections = [
    { name: 'World', href: '/world', count: 15 },
    { name: 'Technology', href: '/technology', count: 12 },
    { name: 'UK', href: '/uk', count: 8 },
    { name: 'Business', href: '/business', count: 6 },
  ]

  return (
    <aside className="space-y-6">
      <div className="bg-bbc-light-grey p-4 rounded-lg">
        <h3 className="font-bold text-bbc-dark mb-4 border-b-2 border-bbc-red pb-2">
          Latest News
        </h3>
        <div className="space-y-4">
          {latestArticles.map((article) => (
            <ArticleCard key={article.id} article={article} variant="horizontal" />
          ))}
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg border">
        <h3 className="font-bold text-bbc-dark mb-4 border-b-2 border-bbc-red pb-2">
          Popular Sections
        </h3>
        <ul className="space-y-2">
          {popularSections.map((section) => (
            <li key={section.name}>
              <Link
                href={section.href}
                className="flex items-center justify-between text-bbc-grey hover:text-bbc-red transition-colors duration-200 py-2"
              >
                <span className="font-medium">{section.name}</span>
                <span className="text-sm bg-bbc-light-grey px-2 py-1 rounded">
                  {section.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-bbc-red text-white p-4 rounded-lg">
        <h3 className="font-bold mb-3">Breaking News Alert</h3>
        <p className="text-sm mb-3">
          Stay updated with the latest breaking news and important developments around the world.
        </p>
        <button className="bg-white text-bbc-red px-4 py-2 rounded font-semibold text-sm hover:bg-gray-100 transition-colors duration-200">
          Subscribe
        </button>
      </div>

      <div className="bg-white p-4 rounded-lg border">
        <h3 className="font-bold text-bbc-dark mb-4 border-b-2 border-bbc-red pb-2">
          Quick Links
        </h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="#" className="text-bbc-grey hover:text-bbc-red transition-colors duration-200">
              Weather Forecast
            </Link>
          </li>
          <li>
            <Link href="#" className="text-bbc-grey hover:text-bbc-red transition-colors duration-200">
              Live Radio
            </Link>
          </li>
          <li>
            <Link href="#" className="text-bbc-grey hover:text-bbc-red transition-colors duration-200">
              TV Guide
            </Link>
          </li>
          <li>
            <Link href="#" className="text-bbc-grey hover:text-bbc-red transition-colors duration-200">
              Sport Scores
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar