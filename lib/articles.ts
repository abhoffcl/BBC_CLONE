export interface Article {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
  section: string;
  timestamp: string;
  content?: string;
  featured?: boolean;
  isLive?: boolean;
  isVideo?: boolean;
  isBBCVerify?: boolean;
}

const articles: Article[] = [
  {
    id: '1',
    title: 'Israel-Gaza war: Hostage families stage protest as Netanyahu addresses Congress',
    description: 'Families of hostages held in Gaza staged a protest outside the US Capitol as Benjamin Netanyahu prepared to address Congress.',
    imageUrl: 'https://images.unsplash.com/photo-1611003228941-98852ba54822?w=800&h=600&fit=crop',
    slug: 'israel-gaza-war-hostage-families-protest-netanyahu-congress',
    section: 'World',
    timestamp: '3 hours ago',
    content: 'Families of hostages held in Gaza staged a protest outside the US Capitol as Benjamin Netanyahu prepared to address Congress...',
    featured: true,
    isLive: true,
  },
  {
    id: '2',
    title: 'Ukraine war: Kyiv claims capture of Russian soldiers in Kursk region',
    description: 'Ukraine says its forces have taken several Russian soldiers prisoner during cross-border operations.',
    imageUrl: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=600&fit=crop',
    slug: 'ukraine-war-kyiv-claims-russian-prisoners-kursk',
    section: 'World',
    timestamp: '1 hour ago',
    content: 'Ukraine says its forces have taken several Russian soldiers prisoner during cross-border operations...',
    isVideo: true,
  },
  {
    id: '3',
    title: 'Donald Trump accepts Republican nomination at party convention',
    description: 'The former president formally accepted the Republican nomination for the 2024 election.',
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
    slug: 'trump-accepts-republican-nomination-2024',
    section: 'US & Canada',
    timestamp: '4 hours ago',
    content: 'The former president formally accepted the Republican nomination for the 2024 election...',
  },
  {
    id: '4',
    title: 'Paris Olympics: Team GB swimmers secure first medals of Games',
    description: 'British swimmers claim bronze in relay as Olympic competition gets underway in Paris.',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
    slug: 'paris-olympics-team-gb-swimmers-medals',
    section: 'Sport',
    timestamp: '2 hours ago',
    content: 'British swimmers claim bronze in relay as Olympic competition gets underway in Paris...',
  },
  {
    id: '5',
    title: 'Crowdstrike IT outage: What we know about the global cyber incident',
    description: 'A faulty security update causes widespread disruption to flights, banks and healthcare systems worldwide.',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
    slug: 'crowdstrike-it-outage-global-cyber-incident',
    section: 'Technology',
    timestamp: '5 hours ago',
    content: 'A faulty security update causes widespread disruption to flights, banks and healthcare systems worldwide...',
    isBBCVerify: true,
  },
  {
    id: '6',
    title: 'Huw Edwards pleads guilty to making indecent images of children',
    description: 'The former BBC newsreader admits three charges at Westminster Magistrates Court.',
    imageUrl: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=800&h=600&fit=crop',
    slug: 'huw-edwards-pleads-guilty-indecent-images',
    section: 'UK',
    timestamp: '6 hours ago',
    content: 'The former BBC newsreader admits three charges at Westminster Magistrates Court...',
  },
  {
    id: '7',
    title: 'Climate change: July breaks global temperature records for 13th consecutive month',
    description: 'Scientists warn of increasingly severe weather as global temperatures continue to rise.',
    imageUrl: 'https://images.unsplash.com/photo-1569163139394-de44cb542a5b?w=800&h=600&fit=crop',
    slug: 'climate-change-july-temperature-records',
    section: 'Science',
    timestamp: '8 hours ago',
    content: 'Scientists warn of increasingly severe weather as global temperatures continue to rise...',
  },
  {
    id: '8',
    title: 'Wimbledon 2024: Novak Djokovic pulls out of tournament with knee injury',
    description: 'Seven-time champion withdraws from Wimbledon ahead of quarter-final match.',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
    slug: 'wimbledon-djokovic-withdraws-knee-injury',
    section: 'Sport',
    timestamp: '7 hours ago',
    content: 'Seven-time champion withdraws from Wimbledon ahead of quarter-final match...',
  },
  {
    id: '9',
    title: 'US election 2024: Biden campaign raised $27m in hours after debate',
    description: 'Campaign reports surge in donations despite concerns over debate performance.',
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
    slug: 'biden-campaign-fundraising-debate',
    section: 'US & Canada',
    timestamp: '9 hours ago',
    content: 'Campaign reports surge in donations despite concerns over debate performance...',
  },
  {
    id: '10',
    title: 'Climate change: Antarctic ice sheet melting faster than expected',
    description: 'New research shows accelerated ice loss could raise sea levels more rapidly.',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    slug: 'antarctic-ice-sheet-melting-climate',
    section: 'Science',
    timestamp: '11 hours ago',
    content: 'New research shows accelerated ice loss could raise sea levels more rapidly...',
  },
  {
    id: '11',
    title: 'General election 2024: Labour wins landslide victory',
    description: 'Keir Starmer becomes Prime Minister as Labour secures majority in Parliament.',
    imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a08b?w=800&h=600&fit=crop',
    slug: 'general-election-labour-landslide-victory',
    section: 'UK',
    timestamp: '1 day ago',
    content: 'Keir Starmer becomes Prime Minister as Labour secures majority in Parliament...',
  },
  {
    id: '12',
    title: 'Boeing Starliner returns to Earth without crew after technical issues',
    description: 'NASA spacecraft lands safely in New Mexico desert following unmanned return.',
    imageUrl: 'https://images.unsplash.com/photo-1446776653964-20c1d3c81b06?w=800&h=600&fit=crop',
    slug: 'boeing-starliner-returns-earth-unmanned',
    section: 'Science',
    timestamp: '13 hours ago',
    content: 'NASA spacecraft lands safely in New Mexico desert following unmanned return...',
  },
  {
    id: '13',
    title: 'Mpox declared global health emergency by WHO',
    description: 'World Health Organization responds to outbreak spreading across multiple countries.',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
    slug: 'mpox-global-health-emergency-who',
    section: 'Health',
    timestamp: '15 hours ago',
    content: 'World Health Organization responds to outbreak spreading across multiple countries...',
  },
  {
    id: '14',
    title: 'Bank of England holds interest rates at 5.25%',
    description: 'Central bank maintains current rate amid economic uncertainty and inflation concerns.',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
    slug: 'bank-england-interest-rates-hold',
    section: 'Business',
    timestamp: '17 hours ago',
    content: 'Central bank maintains current rate amid economic uncertainty and inflation concerns...',
  },
  {
    id: '15',
    title: 'Netflix password sharing crackdown sees subscriber surge',
    description: 'Streaming giant reports millions of new sign-ups following policy changes.',
    imageUrl: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&h=600&fit=crop',
    slug: 'netflix-password-sharing-subscriber-surge',
    section: 'Technology',
    timestamp: '19 hours ago',
    content: 'Streaming giant reports millions of new sign-ups following policy changes...',
  },
  {
    id: '16',
    title: 'Venice Biennale 2024: Contemporary art takes center stage',
    description: 'International exhibition showcases works addressing climate change and social justice.',
    imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop',
    slug: 'venice-biennale-2024-contemporary-art',
    section: 'Culture',
    timestamp: '21 hours ago',
    content: 'International exhibition showcases works addressing climate change and social justice...',
  },
  {
    id: '17',
    title: 'Cost of living: Food prices continue to rise across UK',
    description: 'Grocery bills increase by average of 12% compared to last year, data shows.',
    imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
    slug: 'cost-living-food-prices-rise-uk',
    section: 'UK',
    timestamp: '1 day ago',
    content: 'Grocery bills increase by average of 12% compared to last year, data shows...',
    isVideo: true,
  },
  {
    id: '18',
    title: 'Champions League final: Real Madrid beat Borussia Dortmund 2-0',
    description: 'Spanish giants claim their 15th European Cup with victory at Wembley Stadium.',
    imageUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&h=600&fit=crop',
    slug: 'champions-league-final-real-madrid-dortmund',
    section: 'Sport',
    timestamp: '2 days ago',
    content: 'Spanish giants claim their 15th European Cup with victory at Wembley Stadium...',
  },
  // Additional Business articles
  {
    id: '19',
    title: 'Stock markets rally as inflation fears ease',
    description: 'Global markets see significant gains as investors respond to positive economic data.',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
    slug: 'stock-markets-rally-inflation-fears-ease',
    section: 'Business',
    timestamp: '3 hours ago',
    content: 'Global markets see significant gains as investors respond to positive economic data...',
  },
  {
    id: '20',
    title: 'Major tech companies announce job cuts amid economic uncertainty',
    description: 'Several Silicon Valley giants reduce workforce as market conditions tighten.',
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
    slug: 'tech-companies-job-cuts-economic-uncertainty',
    section: 'Business',
    timestamp: '5 hours ago',
    content: 'Several Silicon Valley giants reduce workforce as market conditions tighten...',
  },
  {
    id: '21',
    title: 'Oil prices surge following Middle East tensions',
    description: 'Energy markets react to geopolitical instability with significant price increases.',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    slug: 'oil-prices-surge-middle-east-tensions',
    section: 'Business',
    timestamp: '1 day ago',
    content: 'Energy markets react to geopolitical instability with significant price increases...',
  },
  {
    id: '22',
    title: 'Cryptocurrency regulation debate intensifies globally',
    description: 'Governments worldwide grapple with digital currency oversight frameworks.',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
    slug: 'cryptocurrency-regulation-debate-intensifies',
    section: 'Business',
    timestamp: '2 days ago',
    content: 'Governments worldwide grapple with digital currency oversight frameworks...',
  },
  {
    id: '23',
    title: 'Housing market shows signs of cooling in major cities',
    description: 'Property prices begin to stabilize after years of rapid growth.',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    slug: 'housing-market-cooling-major-cities',
    section: 'Business',
    timestamp: '3 days ago',
    content: 'Property prices begin to stabilize after years of rapid growth...',
  },
  // Additional World articles
  {
    id: '24',
    title: 'UN climate summit reaches breakthrough on fossil fuel transition',
    description: 'Historic agreement reached on phasing out fossil fuels over next decade.',
    imageUrl: 'https://images.unsplash.com/photo-1569163139394-de44cb542a5b?w=800&h=600&fit=crop',
    slug: 'un-climate-summit-fossil-fuel-transition',
    section: 'World',
    timestamp: '4 hours ago',
    content: 'Historic agreement reached on phasing out fossil fuels over next decade...',
  },
  {
    id: '25',
    title: 'European elections show shift toward center-right parties',
    description: 'Voters across Europe signal support for more conservative policies.',
    imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a08b?w=800&h=600&fit=crop',
    slug: 'european-elections-center-right-shift',
    section: 'World',
    timestamp: '6 hours ago',
    content: 'Voters across Europe signal support for more conservative policies...',
  },
  {
    id: '26',
    title: 'Natural disaster relief efforts continue in Southeast Asia',
    description: 'International aid organizations coordinate massive humanitarian response.',
    imageUrl: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop',
    slug: 'natural-disaster-relief-southeast-asia',
    section: 'World',
    timestamp: '8 hours ago',
    content: 'International aid organizations coordinate massive humanitarian response...',
  },
  // Additional Sport articles
  {
    id: '27',
    title: 'World Cup qualifiers produce major upsets',
    description: 'Underdog teams secure surprising victories in crucial matches.',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
    slug: 'world-cup-qualifiers-major-upsets',
    section: 'Sport',
    timestamp: '3 hours ago',
    content: 'Underdog teams secure surprising victories in crucial matches...',
  },
  {
    id: '28',
    title: 'Tennis Grand Slam sees record-breaking attendance',
    description: 'Tournament officials celebrate highest viewer numbers in history.',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
    slug: 'tennis-grand-slam-record-attendance',
    section: 'Sport',
    timestamp: '1 day ago',
    content: 'Tournament officials celebrate highest viewer numbers in history...',
  },
  // Additional Innovation articles
  {
    id: '29',
    title: 'Revolutionary battery technology promises 10-minute charging',
    description: 'New solid-state batteries could transform electric vehicle adoption.',
    imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800&h=600&fit=crop',
    slug: 'revolutionary-battery-technology-10-minute-charging',
    section: 'Innovation',
    timestamp: '4 hours ago',
    content: 'New solid-state batteries could transform electric vehicle adoption...',
  },
  {
    id: '30',
    title: 'Gene therapy shows promise for treating rare diseases',
    description: 'Clinical trials demonstrate effectiveness in previously untreatable conditions.',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
    slug: 'gene-therapy-rare-diseases-treatment',
    section: 'Innovation',
    timestamp: '1 day ago',
    content: 'Clinical trials demonstrate effectiveness in previously untreatable conditions...',
  }
];

export function getArticles(section?: string): Article[] {
  if (section) {
    // Handle different section name variations
    const sectionLower = section.toLowerCase();
    return articles.filter(article => {
      const articleSectionLower = article.section.toLowerCase();
      return articleSectionLower === sectionLower || 
             (sectionLower === 'tech' && articleSectionLower === 'technology') ||
             (sectionLower === 'technology' && articleSectionLower === 'tech');
    });
  }
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}

export function getFeaturedArticle(): Article | undefined {
  return articles.find(article => article.featured);
}

export function getArticleById(id: string): Article | undefined {
  return articles.find(article => article.id === id);
}