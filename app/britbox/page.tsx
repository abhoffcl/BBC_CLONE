import ImageWithFallback from '@/components/ImageWithFallback'

// Mock BritBox show data to simulate realistic content
const featuredShows = [
  { id: 1, title: 'Doctor Who', genre: 'Sci-Fi', description: 'Time-traveling adventures across the universe', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb' },
  { id: 2, title: 'Sherlock', genre: 'Drama', description: 'Modern adaptation of Arthur Conan Doyle\'s detective stories', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb' },
  { id: 3, title: 'Line of Duty', genre: 'Crime', description: 'Anti-corruption police procedural drama', image: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb' },
  { id: 4, title: 'Downton Abbey', genre: 'Period Drama', description: 'Lives of the aristocratic Crawley family and their servants', image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb' },
  { id: 5, title: 'Top Gear', genre: 'Entertainment', description: 'Motoring entertainment and car reviews', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb' },
  { id: 6, title: 'Planet Earth', genre: 'Documentary', description: 'Stunning wildlife documentary series', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb' }
]

const categories = [
  'Drama', 'Comedy', 'Crime', 'Documentary', 'Period Drama', 'Sci-Fi', 'Reality TV', 'Children\'s'
]

export default function BritBoxPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <h1 className="text-4xl font-bold text-bbc-dark mr-4">BritBox</h1>
            <span className="bg-bbc-red text-white px-3 py-1 rounded text-sm font-semibold">STREAM NOW</span>
          </div>
          <p className="text-lg text-bbc-grey">
            Stream British Classics - The biggest collection of British TV ever assembled
          </p>
        </div>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-bbc-red to-red-700 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 items-center">
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-4">Start Your Free Trial</h2>
                <p className="text-lg mb-6 opacity-90">
                  Watch thousands of hours of British television, from classic series to the latest dramas.
                </p>
                <div className="space-y-4">
                  <button className="bg-white text-bbc-red px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
                    Start Free Trial
                  </button>
                  <p className="text-sm opacity-75">Cancel anytime • £5.99/month after trial</p>
                </div>
              </div>
              <div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb"
                  alt="BritBox streaming interface showing British TV shows"
                  className="w-full h-64 object-cover rounded-lg"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Featured Shows */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-bbc-dark mb-6">Featured Shows</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredShows.map((show) => (
              <div key={show.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <ImageWithFallback
                  src={show.image}
                  alt={`${show.title} - ${show.genre} series thumbnail`}
                  className="w-full h-48 object-cover"
                  width={400}
                  height={300}
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-bbc-dark">{show.title}</h3>
                    <span className="bg-gray-100 text-bbc-grey px-2 py-1 rounded text-xs">{show.genre}</span>
                  </div>
                  <p className="text-bbc-grey text-sm">{show.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Browse by Category */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-bbc-dark mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div key={category} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                <h3 className="font-semibold text-bbc-dark">{category}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-bbc-dark mb-6">Coming Soon</h2>
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-bbc-dark mb-4">New Arrivals Every Week</h3>
            <p className="text-bbc-grey mb-4">
              Stay tuned for the latest additions to our ever-growing collection of British television classics.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-bbc-dark mb-2">Classic Comedies</h4>
                <p className="text-sm text-bbc-grey">Monty Python, Fawlty Towers, and more</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-bbc-dark mb-2">Period Dramas</h4>
                <p className="text-sm text-bbc-grey">Pride and Prejudice, Poldark collection</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-bbc-dark mb-2">Modern Thrillers</h4>
                <p className="text-sm text-bbc-grey">Happy Valley, Bodyguard series</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-bbc-red text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Watching?</h2>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of viewers enjoying the best of British television
            </p>
            <button className="bg-white text-bbc-red px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}