import ImageWithFallback from '@/components/ImageWithFallback'

// Mock weather data to simulate realistic content
const weatherData = [
  { city: 'London', temp: '18°C', condition: 'Partly Cloudy', icon: '⛅' },
  { city: 'Manchester', temp: '16°C', condition: 'Light Rain', icon: '🌦️' },
  { city: 'Birmingham', temp: '17°C', condition: 'Overcast', icon: '☁️' },
  { city: 'Edinburgh', temp: '14°C', condition: 'Sunny', icon: '☀️' },
  { city: 'Cardiff', temp: '19°C', condition: 'Clear', icon: '🌤️' },
  { city: 'Belfast', temp: '15°C', condition: 'Cloudy', icon: '☁️' }
]

export default function WeatherPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-bbc-dark mb-4">BBC Weather</h1>
          <p className="text-lg text-bbc-grey">
            Current weather conditions and forecasts across the UK
          </p>
        </div>

        {/* Current Weather Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-bbc-dark mb-6">Current Weather in Major Cities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weatherData.map((weather) => (
              <div key={weather.city} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-bbc-dark mb-2">{weather.city}</h3>
                    <p className="text-3xl font-bold text-bbc-red mb-1">{weather.temp}</p>
                    <p className="text-sm text-bbc-grey">{weather.condition}</p>
                  </div>
                  <div className="text-4xl">{weather.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weather Map Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-bbc-dark mb-6">UK Weather Map</h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop&crop=entropy&cs=tinysrgb"
              alt="UK Weather Map showing current conditions"
              className="w-full h-64 object-cover rounded-lg mb-4"
              width={800}
              height={500}
            />
            <p className="text-bbc-grey">Interactive weather map showing current conditions across the UK</p>
          </div>
        </div>

        {/* 7-Day Forecast */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-bbc-dark mb-6">7-Day Forecast</h2>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid grid-cols-7 gap-0">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                <div key={day} className="p-4 text-center border-r border-gray-100 last:border-r-0">
                  <div className="font-semibold text-bbc-dark mb-2">{day}</div>
                  <div className="text-2xl mb-2">
                    {index % 3 === 0 ? '☀️' : index % 3 === 1 ? '⛅' : '🌧️'}
                  </div>
                  <div className="text-sm text-bbc-grey">
                    <div className="font-medium">{18 - index}°C</div>
                    <div>{12 - index}°C</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weather News */}
        <div>
          <h2 className="text-2xl font-bold text-bbc-dark mb-6">Weather News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1419833479618-c595710276c6?w=600&h=300&fit=crop&crop=entropy&cs=tinysrgb"
                alt="Storm clouds gathering over countryside"
                className="w-full h-48 object-cover"
                width={600}
                height={300}
              />
              <div className="p-4">
                <h3 className="font-bold text-bbc-dark mb-2">Weather Warnings Issued for Heavy Rain</h3>
                <p className="text-bbc-grey text-sm">
                  The Met Office has issued amber weather warnings for parts of northern England and Scotland...
                </p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=600&h=300&fit=crop&crop=entropy&cs=tinysrgb"
                alt="Sunny countryside landscape"
                className="w-full h-48 object-cover"
                width={600}
                height={300}
              />
              <div className="p-4">
                <h3 className="font-bold text-bbc-dark mb-2">Weekend Sunshine Expected</h3>
                <p className="text-bbc-grey text-sm">
                  High pressure systems are bringing clear skies and warm temperatures this weekend...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}