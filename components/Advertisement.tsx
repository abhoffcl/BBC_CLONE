import Link from 'next/link'

const Advertisement = () => {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Advertisement label */}
        <div className="text-right mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-wide">Advertisement</span>
        </div>
        
        {/* Advertisement content */}
        <div className="relative bg-gradient-to-r from-green-800 to-green-600 rounded-sm overflow-hidden">
          {/* Background image overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=400&fit=crop')"
            }}
          ></div>
          
          {/* Content */}
          <div className="relative z-10 p-8 text-white">
            <div className="max-w-md">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                CAN BUSINESS BE A<br />
                FORCE FOR GOOD?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                DISCOVER THE COMMON<br />
                GOOD SERIES NOW.
              </p>
              <Link
                href="#"
                className="inline-block border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-yellow-400 hover:text-black transition-colors duration-300"
              >
                CLICK TO EXPLORE
              </Link>
            </div>
          </div>
          
          {/* Brand logo in top right */}
          <div className="absolute top-4 right-4">
            <div className="bg-green-700 bg-opacity-70 px-3 py-1 rounded text-xs">
              <span className="text-white font-medium">Advertisement</span>
              <div className="text-white text-xs opacity-75">feature presented by</div>
              <div className="bg-white text-black px-2 py-1 rounded text-xs font-bold mt-1">
                Lab
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advertisement