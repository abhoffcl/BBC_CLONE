import ImageWithFallback from '@/components/ImageWithFallback'

// Mock product data to simulate realistic content
const featuredProducts = [
  { id: 1, name: 'Doctor Who TARDIS Mug', price: '£12.99', category: 'Drinkware', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb' },
  { id: 2, name: 'BBC News Branded Hoodie', price: '£34.99', category: 'Clothing', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb' },
  { id: 3, name: 'Planet Earth Box Set', price: '£24.99', category: 'DVDs', image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb' },
  { id: 4, name: 'Sherlock Deerstalker Hat', price: '£19.99', category: 'Accessories', image: 'https://images.unsplash.com/photo-1544441892-7ba4b1b9f6e8?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb' },
  { id: 5, name: 'BBC Radio Vintage Poster', price: '£16.99', category: 'Home', image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb' },
  { id: 6, name: 'Top Gear Track Experience', price: '£89.99', category: 'Experiences', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb' }
]

const categories = [
  'Clothing & Accessories', 'Home & Garden', 'Books & DVDs', 'Toys & Games', 'Experiences', 'Gifts & Collectibles'
]

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-bbc-dark mb-4">BBC Shop</h1>
          <p className="text-lg text-bbc-grey">
            Explore BBC Merchandise - Official products from your favourite BBC programmes
          </p>
        </div>

        {/* Hero Banner */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 items-center">
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-4">Free UK Delivery</h2>
                <p className="text-lg mb-6 opacity-90">
                  On all orders over £25. Shop official BBC merchandise with confidence.
                </p>
                <div className="flex space-x-4">
                  <span className="bg-white text-blue-600 px-4 py-2 rounded text-sm font-semibold">✓ Authentic Products</span>
                  <span className="bg-white text-blue-600 px-4 py-2 rounded text-sm font-semibold">✓ Secure Checkout</span>
                </div>
              </div>
              <div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb"
                  alt="BBC Shop merchandise display"
                  className="w-full h-64 object-cover rounded-lg"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-bbc-dark mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <ImageWithFallback
                  src={product.image}
                  alt={`${product.name} - BBC Shop merchandise`}
                  className="w-full h-48 object-cover"
                  width={400}
                  height={300}
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-gray-100 text-bbc-grey px-2 py-1 rounded text-xs">{product.category}</span>
                    <span className="font-bold text-bbc-red">{product.price}</span>
                  </div>
                  <h3 className="font-semibold text-bbc-dark mb-2">{product.name}</h3>
                  <button className="w-full bg-bbc-red text-white py-2 rounded hover:bg-red-700 transition-colors text-sm font-semibold">
                    Add to Basket
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shop by Category */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-bbc-dark mb-6">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <div key={category} className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                <h3 className="font-semibold text-bbc-dark mb-2">{category}</h3>
                <p className="text-sm text-bbc-grey">Browse our collection</p>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Programmes */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-bbc-dark mb-6">Shop by Programme</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Doctor Who', 'Sherlock', 'Top Gear', 'EastEnders', 'Strictly', 'Planet Earth'].map((programme) => (
              <div key={programme} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-bbc-red rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold">
                  {programme.charAt(0)}
                </div>
                <h3 className="font-medium text-bbc-dark text-sm">{programme}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-bbc-dark mb-6">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-bbc-dark mb-2">Student Discount</h3>
              <p className="text-bbc-grey mb-4">Get 15% off all items with valid student ID</p>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors text-sm font-semibold">
                Verify Student Status
              </button>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-bbc-dark mb-2">Bundle Deals</h3>
              <p className="text-bbc-grey mb-4">Save when you buy multiple items from the same programme</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors text-sm font-semibold">
                View Bundles
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-bbc-dark mb-4">Stay Updated</h2>
          <p className="text-bbc-grey mb-6">
            Be the first to know about new products, exclusive offers, and BBC programme merchandise
          </p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-bbc-red"
            />
            <button className="bg-bbc-red text-white px-6 py-2 rounded-r hover:bg-red-700 transition-colors font-semibold">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-bbc-grey mt-3">
            By subscribing, you agree to our privacy policy and terms of service.
          </p>
        </div>
      </div>
    </div>
  )
}