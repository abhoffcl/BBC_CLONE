import Link from 'next/link'
import { Article } from '@/lib/mockData'
import ImageWithFallback from './ImageWithFallback'

interface HeroSectionProps {
  article: Article
}

const HeroSection = ({ article }: HeroSectionProps) => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* NEWS title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-red-600 tracking-widest">NEWS</h1>
        </div>

        {/* Main story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            {article.isLive && (
              <div className="inline-flex items-center mb-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
                  <span className="text-red-600 text-sm font-bold uppercase tracking-wide">
                    LIVE
                  </span>
                </div>
              </div>
            )}
            
            <Link href={`/article/${article.slug}`}>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight mb-4 hover:underline">
                {article.title}
              </h2>
            </Link>
            
            <p className="text-gray-700 text-base leading-relaxed mb-4 font-sans">
              {article.description}
            </p>
            
            <div className="flex items-center text-sm text-gray-500 space-x-2">
              <span>{article.timestamp}</span>
              <span>•</span>
              <span className="text-black">{article.section}</span>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2">
            <Link href={`/article/${article.slug}`}>
              <div className="relative">
                <ImageWithFallback
                  src={article.imageUrl}
                  alt={`${article.title} - BBC News feature story`}
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                  width={800}
                  height={600}
                />
                {article.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-60 rounded-full p-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection