import Link from 'next/link'
import { Article } from '@/lib/mockData'
import ImageWithFallback from './ImageWithFallback'

interface ArticleCardProps {
  article: Article
  variant?: 'default' | 'small' | 'horizontal' | 'top-story' | 'horizontal-large' | 'text-only' | 'small-card' | 'bbc-small' | 'bbc-large' | 'bbc-medium' | 'bbc-horizontal'
}

const ArticleCard = ({ article, variant = 'default' }: ArticleCardProps) => {
  // BBC Small variant (5-column grid)
  if (variant === 'bbc-small') {
    return (
      <article className="bg-white">
        <Link href={`/article/${article.slug}`}>
          <div className="relative mb-3 h-32 overflow-hidden">
            <ImageWithFallback
              src={article.imageUrl}
              alt={`${article.title} - ${article.section} news article`}
              className="w-full h-full"
              fill={true}
            />
          </div>
        </Link>
        <div>
          <Link href={`/article/${article.slug}`}>
            <h3 className="font-serif text-sm font-bold text-black hover:underline leading-tight mb-2">
              {article.title}
            </h3>
          </Link>
          <div className="flex items-center text-xs text-gray-500 space-x-2">
            <span>{article.timestamp}</span>
            <span>•</span>
            <span className="text-black">{article.section}</span>
          </div>
        </div>
      </article>
    )
  }

  // BBC Large variant (main story in more top stories)
  if (variant === 'bbc-large') {
    return (
      <article className="bg-white">
        <Link href={`/article/${article.slug}`}>
          <div className="relative mb-4 h-64 overflow-hidden">
            <ImageWithFallback
              src={article.imageUrl}
              alt={`${article.title} - ${article.section} news article`}
              className="w-full h-full"
              fill={true}
            />
          </div>
        </Link>
        <div>
          <Link href={`/article/${article.slug}`}>
            <h3 className="font-serif text-xl font-bold text-black hover:underline leading-tight mb-3">
              {article.title}
            </h3>
          </Link>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            {article.description}
          </p>
          <div className="flex items-center text-xs text-gray-500 space-x-2">
            <span>{article.timestamp}</span>
            <span>•</span>
            <span className="text-black">{article.section}</span>
          </div>
        </div>
      </article>
    )
  }

  // BBC Medium variant (side stories)
  if (variant === 'bbc-medium') {
    return (
      <article className="bg-white">
        <Link href={`/article/${article.slug}`}>
          <div className="relative mb-3 h-40 overflow-hidden">
            <ImageWithFallback
              src={article.imageUrl}
              alt={`${article.title} - ${article.section} news article`}
              className="w-full h-full"
              fill={true}
            />
          </div>
        </Link>
        <div>
          <Link href={`/article/${article.slug}`}>
            <h3 className="font-serif text-base font-bold text-black hover:underline leading-tight mb-2">
              {article.title}
            </h3>
          </Link>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            {article.description}
          </p>
          <div className="flex items-center text-xs text-gray-500 space-x-2">
            <span>{article.timestamp}</span>
            <span>•</span>
            <span className="text-black">{article.section}</span>
          </div>
        </div>
      </article>
    )
  }

  // BBC Horizontal variant (also in news)
  if (variant === 'bbc-horizontal') {
    return (
      <article className="bg-white">
        <div className="flex gap-4">
          <div className="flex-1">
            <Link href={`/article/${article.slug}`}>
              <h3 className="font-serif text-lg font-bold text-black hover:underline leading-tight mb-3">
                {article.title}
              </h3>
            </Link>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              {article.description}
            </p>
            <div className="flex items-center text-xs text-gray-500 space-x-2">
              <span>{article.timestamp}</span>
              <span>•</span>
              <span className="text-black">{article.section}</span>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Link href={`/article/${article.slug}`}>
              <div className="relative">
                <ImageWithFallback
                  src={article.imageUrl}
                  alt={`${article.title} - ${article.section} news article`}
                  className="w-32 h-24 object-cover"
                />
              </div>
            </Link>
          </div>
        </div>
      </article>
    )
  }

  // Text-only variant (for most read list)
  if (variant === 'text-only') {
    return (
      <article>
        <Link href={`/article/${article.slug}`}>
          <h3 className="font-serif text-sm font-medium text-black hover:underline leading-tight">
            {article.title}
          </h3>
        </Link>
      </article>
    )
  }

  // Top story card (4-column grid)
  if (variant === 'top-story') {
    return (
      <article className="bg-white">
        <Link href={`/article/${article.slug}`}>
          <div className="relative mb-3">
            <ImageWithFallback
              src={article.imageUrl}
              alt={`${article.title} - ${article.section} news article`}
              className="w-full h-40 object-cover"
            />
            {article.isVideo && (
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-2 py-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            {article.isLive && (
              <div className="absolute top-2 left-2">
                <span className="bg-bbc-live text-white px-2 py-1 text-xs font-bold uppercase">
                  LIVE
                </span>
              </div>
            )}
            {article.isBBCVerify && (
              <div className="absolute top-2 left-2">
                <span className="bg-orange-600 text-white px-2 py-1 text-xs font-bold uppercase">
                  BBC VERIFY
                </span>
              </div>
            )}
          </div>
        </Link>
        <div>
          <Link href={`/article/${article.slug}`}>
            <h3 className="font-serif text-lg font-bold text-black hover:underline leading-tight mb-2">
              {article.title}
            </h3>
          </Link>
          <div className="flex items-center text-xs text-gray-500 space-x-2">
            <span className="font-medium text-black">{article.section}</span>
            <span>•</span>
            <span>{article.timestamp}</span>
          </div>
        </div>
      </article>
    )
  }

  // Horizontal large variant (for more top stories)
  if (variant === 'horizontal-large') {
    return (
      <article className="bg-white border-b border-gray-200 pb-6">
        <div className="flex gap-6">
          <div className="flex-1">
            <Link href={`/article/${article.slug}`}>
              <h3 className="font-serif text-xl font-bold text-black hover:underline leading-tight mb-3">
                {article.title}
              </h3>
            </Link>
            <p className="text-gray-700 text-base leading-relaxed mb-3">
              {article.description}
            </p>
            <div className="flex items-center text-sm text-gray-500 space-x-2">
              <span className="font-medium text-black">{article.section}</span>
              <span>•</span>
              <span>{article.timestamp}</span>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Link href={`/article/${article.slug}`}>
              <div className="relative">
                <ImageWithFallback
                  src={article.imageUrl}
                  alt={`${article.title} - ${article.section} news article`}
                  className="w-32 h-24 object-cover"
                />
                {article.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-60 rounded-full p-2">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </Link>
          </div>
        </div>
      </article>
    )
  }

  // Small card variant (for editor's picks)
  if (variant === 'small-card') {
    return (
      <article className="bg-white">
        <Link href={`/article/${article.slug}`}>
          <div className="relative mb-2">
            <ImageWithFallback
              src={article.imageUrl}
              alt={`${article.title} - ${article.section} news article`}
              className="w-full h-24 object-cover"
            />
          </div>
        </Link>
        <div>
          <Link href={`/article/${article.slug}`}>
            <h3 className="font-serif text-sm font-bold text-black hover:underline leading-tight mb-1">
              {article.title}
            </h3>
          </Link>
          <div className="flex items-center text-xs text-gray-500 space-x-2">
            <span className="font-medium text-black">{article.section}</span>
            <span>•</span>
            <span>{article.timestamp}</span>
          </div>
        </div>
      </article>
    )
  }

  // Default and other variants (legacy support)
  const cardClasses = {
    default: 'bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-shadow duration-200',
    small: 'bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-shadow duration-200',
    horizontal: 'bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-shadow duration-200 flex'
  }

  const imageClasses = {
    default: 'w-full h-48 object-cover',
    small: 'w-full h-32 object-cover',
    horizontal: 'w-32 h-24 object-cover flex-shrink-0'
  }

  const contentClasses = {
    default: 'p-4',
    small: 'p-3',
    horizontal: 'p-4 flex-1'
  }

  if (variant === 'horizontal') {
    return (
      <article className={cardClasses[variant]}>
        <ImageWithFallback
          src={article.imageUrl}
          alt={`${article.title} - ${article.section} news article`}
          className={imageClasses[variant]}
        />
        <div className={contentClasses[variant]}>
          <Link href={`/article/${article.slug}`}>
            <h3 className="font-semibold text-bbc-dark mb-2 hover:text-bbc-red transition-colors duration-200 line-clamp-2">
              {article.title}
            </h3>
          </Link>
          <p className="text-bbc-grey text-sm mb-3 line-clamp-2">
            {article.description}
          </p>
          <div className="flex items-center justify-between text-xs text-bbc-grey">
            <span className="uppercase font-semibold text-bbc-red">
              {article.section}
            </span>
            <time>{article.timestamp}</time>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className={cardClasses[variant] || cardClasses.default}>
      <Link href={`/article/${article.slug}`}>
        <ImageWithFallback
          src={article.imageUrl}
          alt={`${article.title} - ${article.section} news article`}
          className={imageClasses[variant] || imageClasses.default}
        />
      </Link>
      <div className={contentClasses[variant] || contentClasses.default}>
        <Link href={`/article/${article.slug}`}>
          <h3 className={`font-semibold text-bbc-dark mb-2 hover:text-bbc-red transition-colors duration-200 line-clamp-3 ${
            variant === 'small' ? 'text-sm' : 'text-base'
          }`}>
            {article.title}
          </h3>
        </Link>
        <p className={`text-bbc-grey mb-3 line-clamp-2 ${
          variant === 'small' ? 'text-xs' : 'text-sm'
        }`}>
          {article.description}
        </p>
        <div className="flex items-center justify-between text-xs text-bbc-grey">
          <span className="uppercase font-semibold text-bbc-red">
            {article.section}
          </span>
          <time>{article.timestamp}</time>
        </div>
      </div>
    </article>
  )
}

export default ArticleCard