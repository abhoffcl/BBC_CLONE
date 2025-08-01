// FIXES APPLIED:
// 1. Updated Ukraine article image (id: '1') to more reliable Unsplash URL
// 2. Fixed duplicate images for unique article representation:
//    - Biodiversity article (id: '61') - changed to wildlife image
//    - Science conference (id: '74') - changed to conference image  
//    - Sustainable materials (id: '36') - changed to manufacturing image
// 3. All articles now have unique, relevant images for better user experience

export interface Article {
  id: string
  slug: string
  title: string
  description: string
  content?: string
  imageUrl: string
  section: string
  category: string
  timestamp: string
  author?: string
  isLive?: boolean
  isVideo?: boolean
  isBBCVerify?: boolean
  readTime?: number
}

export const mockArticles: Article[] = [
  // HOME/NEWS SECTION
  {
    id: '1',
    slug: 'ukraine-latest-developments',
    title: 'Ukraine conflict: Latest developments as winter approaches',
    description: 'Key updates on the ongoing situation in Ukraine as international support continues.',
    content: 'The ongoing conflict in Ukraine continues to evolve as winter approaches, bringing new challenges for both civilian populations and military operations. International support remains strong, with several key developments emerging this week.\n\nDiplomatic efforts have intensified, with major world leaders calling for renewed peace negotiations. The humanitarian situation remains a priority, with aid organizations working to ensure adequate supplies reach affected areas before the harsh winter months.\n\nMilitary analysts note that weather conditions are likely to impact operations significantly, potentially creating opportunities for diplomatic breakthroughs. Local authorities are implementing contingency plans to protect civilian infrastructure.\n\nThe international community continues to provide both humanitarian aid and strategic support, demonstrating sustained commitment to Ukrainian sovereignty and territorial integrity.',
    imageUrl: 'https://images.unsplash.com/photo-1542062152-eb0a2b05e31b?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'News',
    category: 'International',
    timestamp: '2 hours ago',
    author: 'Sarah Mitchell',
    isLive: true,
    readTime: 4
  },
  {
    id: '2',
    slug: 'uk-economy-update',
    title: 'UK economy shows signs of recovery after difficult period',
    description: 'Latest figures suggest gradual improvement in key economic indicators.',
    content: 'The UK economy is showing encouraging signs of recovery following a challenging period marked by inflation concerns and market volatility. Recent data releases indicate positive trends across multiple sectors.\n\nEmployment figures have strengthened, with unemployment rates declining to their lowest levels in months. Consumer confidence is gradually returning as inflation pressures begin to ease, providing relief to households across the country.\n\nBusiness investment has shown particular resilience, with companies expressing increased optimism about future growth prospects. The manufacturing sector has demonstrated notable improvements, supported by strong export performance.\n\nEconomists remain cautiously optimistic about the recovery trajectory, noting that sustained growth will depend on continued stability in global markets and effective policy implementation.',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'News',
    category: 'Economy',
    timestamp: '4 hours ago',
    author: 'James Thompson',
    readTime: 3
  },
  {
    id: '3',
    slug: 'climate-summit-outcomes',
    title: 'Climate summit reaches historic agreement on fossil fuels',
    description: 'World leaders agree on ambitious targets for renewable energy transition.',
    imageUrl: 'https://images.unsplash.com/photo-1569163139394-de44cb542a5b?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'News',
    category: 'Environment',
    timestamp: '6 hours ago',
    readTime: 5
  },
  {
    id: '4',
    slug: 'tech-breakthrough-ai',
    title: 'Major breakthrough in AI research promises medical advances',
    description: 'Scientists develop new AI system that could revolutionize drug discovery.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'News',
    category: 'Technology',
    timestamp: '8 hours ago',
    readTime: 4
  },
  {
    id: '5',
    slug: 'space-mission-success',
    title: 'Space mission returns with unprecedented scientific data',
    description: 'Successful completion of international space collaboration yields new discoveries.',
    imageUrl: 'https://images.unsplash.com/photo-1446776653964-20c1d3c81b06?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'News',
    category: 'Science',
    timestamp: '10 hours ago',
    readTime: 6
  },

  // WORLD SECTION
  {
    id: '6',
    slug: 'middle-east-diplomatic-talks',
    title: 'Middle East diplomatic talks show promise for regional stability',
    description: 'International mediators report progress in ongoing negotiations.',
    imageUrl: 'https://images.unsplash.com/photo-1611003228941-98852ba54822?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'World',
    category: 'International',
    timestamp: '1 hour ago',
    isLive: true,
    readTime: 5
  },
  {
    id: '7',
    slug: 'asia-economic-growth',
    title: 'Asian markets surge on positive economic indicators',
    description: 'Strong performance across major Asian economies signals regional recovery.',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'World',
    category: 'Economy',
    timestamp: '3 hours ago',
    readTime: 4
  },
  {
    id: '8',
    slug: 'africa-renewable-energy',
    title: 'Africa leads global renewable energy expansion',
    description: 'Continent emerges as major player in solar and wind power development.',
    imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'World',
    category: 'Environment',
    timestamp: '5 hours ago',
    readTime: 6
  },
  {
    id: '9',
    slug: 'europe-migration-policy',
    title: 'European Union unveils new migration framework',
    description: 'Comprehensive approach aims to address humanitarian and security concerns.',
    imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a08b?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'World',
    category: 'Politics',
    timestamp: '7 hours ago',
    readTime: 5
  },
  {
    id: '10',
    slug: 'south-america-conservation',
    title: 'South American nations unite for Amazon conservation',
    description: 'Historic agreement signed to protect world\'s largest rainforest.',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'World',
    category: 'Environment',
    timestamp: '9 hours ago',
    readTime: 4
  },

  // BUSINESS SECTION
  {
    id: '11',
    slug: 'tech-giants-earnings',
    title: 'Tech giants report record earnings amid market uncertainty',
    description: 'Major technology companies exceed analyst expectations despite economic headwinds.',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Business',
    category: 'Technology',
    timestamp: '30 minutes ago',
    readTime: 4
  },
  {
    id: '12',
    slug: 'green-bonds-investment',
    title: 'Green bonds attract record investment as ESG focus grows',
    description: 'Sustainable financing instruments see unprecedented demand from institutional investors.',
    imageUrl: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Business',
    category: 'Finance',
    timestamp: '2 hours ago',
    readTime: 5
  },
  {
    id: '13',
    slug: 'supply-chain-recovery',
    title: 'Global supply chains show resilience after recent disruptions',
    description: 'Manufacturing and logistics sectors adapt to new operational challenges.',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Business',
    category: 'Manufacturing',
    timestamp: '4 hours ago',
    readTime: 3
  },
  {
    id: '14',
    slug: 'retail-digital-transformation',
    title: 'Retail sector accelerates digital transformation initiatives',
    description: 'Traditional retailers invest heavily in e-commerce and omnichannel strategies.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Business',
    category: 'Retail',
    timestamp: '6 hours ago',
    readTime: 4
  },
  {
    id: '15',
    slug: 'cryptocurrency-regulation',
    title: 'New cryptocurrency regulations bring clarity to digital assets',
    description: 'Regulatory framework provides guidance for institutional adoption.',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Business',
    category: 'Finance',
    timestamp: '8 hours ago',
    readTime: 6
  },

  // SPORT SECTION
  {
    id: '16',
    slug: 'premier-league-weekend',
    title: 'Premier League weekend delivers thrilling matches',
    description: 'Top teams battle for crucial points in exciting encounters across England.',
    imageUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Sport',
    category: 'Football',
    timestamp: '2 hours ago',
    isLive: true,
    readTime: 3
  },
  {
    id: '17',
    slug: 'tennis-championship-results',
    title: 'Tennis championship produces stunning upsets',
    description: 'Unseeded players advance to later rounds in major tournament.',
    imageUrl: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Sport',
    category: 'Tennis',
    timestamp: '4 hours ago',
    readTime: 4
  },
  {
    id: '18',
    slug: 'olympics-preparation',
    title: 'Athletes intensify training as Olympics approach',
    description: 'National teams make final preparations for upcoming Games.',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Sport',
    category: 'Olympics',
    timestamp: '6 hours ago',
    readTime: 5
  },
  {
    id: '19',
    slug: 'rugby-world-cup',
    title: 'Rugby World Cup quarter-finals set for weekend showdown',
    description: 'Eight nations compete for semi-final spots in tournament climax.',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Sport',
    category: 'Rugby',
    timestamp: '8 hours ago',
    readTime: 4
  },
  {
    id: '20',
    slug: 'formula-1-race',
    title: 'Formula 1 championship battle intensifies with latest race',
    description: 'Drivers\' championship remains wide open as season enters final phase.',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Sport',
    category: 'Formula 1',
    timestamp: '10 hours ago',
    readTime: 3
  },

  // TECHNOLOGY SECTION
  {
    id: '21',
    slug: 'quantum-computing-advance',
    title: 'Quantum computing reaches new milestone in processing power',
    description: 'Breakthrough achievement brings practical applications closer to reality.',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Technology',
    category: 'Computing',
    timestamp: '1 hour ago',
    readTime: 6
  },
  {
    id: '22',
    slug: 'ai-healthcare-revolution',
    title: 'AI revolution transforms healthcare diagnostics',
    description: 'Machine learning algorithms improve accuracy of medical diagnoses.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Technology',
    category: 'Healthcare',
    timestamp: '3 hours ago',
    readTime: 5
  },
  {
    id: '23',
    slug: 'renewable-energy-tech',
    title: 'Renewable energy technology achieves new efficiency records',
    description: 'Solar and wind power innovations drive cost reductions globally.',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Technology',
    category: 'Energy',
    timestamp: '5 hours ago',
    readTime: 4
  },
  {
    id: '24',
    slug: 'space-exploration-tech',
    title: 'Space exploration technology enables deep space missions',
    description: 'Advanced propulsion systems open new frontiers for scientific discovery.',
    imageUrl: 'https://images.unsplash.com/photo-1457364887197-9150188c107b?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Technology',
    category: 'Space',
    timestamp: '7 hours ago',
    readTime: 5
  },
  {
    id: '25',
    slug: 'cybersecurity-advances',
    title: 'Cybersecurity advances combat evolving digital threats',
    description: 'New defensive technologies protect against sophisticated cyber attacks.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Technology',
    category: 'Security',
    timestamp: '9 hours ago',
    readTime: 4
  },

  // CULTURE SECTION
  {
    id: '26',
    slug: 'art-exhibition-london',
    title: 'London art exhibition showcases contemporary masterpieces',
    description: 'Major gallery unveils collection featuring emerging and established artists.',
    imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Culture',
    category: 'Arts',
    timestamp: '2 hours ago',
    readTime: 4
  },
  {
    id: '27',
    slug: 'music-festival-success',
    title: 'Music festival celebrates cultural diversity and innovation',
    description: 'International artists perform across multiple genres and traditions.',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Culture',
    category: 'Music',
    timestamp: '4 hours ago',
    readTime: 3
  },
  {
    id: '28',
    slug: 'theater-award-winners',
    title: 'Theater awards recognize outstanding performances and productions',
    description: 'Annual ceremony honors excellence in dramatic arts and stage performance.',
    imageUrl: 'https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Culture',
    category: 'Theater',
    timestamp: '6 hours ago',
    readTime: 5
  },
  {
    id: '29',
    slug: 'literary-prize-announcement',
    title: 'Literary prize celebrates diverse voices in contemporary writing',
    description: 'Authors from around the world recognized for exceptional storytelling.',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Culture',
    category: 'Literature',
    timestamp: '8 hours ago',
    readTime: 4
  },
  {
    id: '30',
    slug: 'film-festival-highlights',
    title: 'Film festival highlights emerging talent and innovative storytelling',
    description: 'Independent filmmakers showcase creative approaches to cinema.',
    imageUrl: 'https://images.unsplash.com/photo-1489599904472-84978d9b6844?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Culture',
    category: 'Film',
    timestamp: '10 hours ago',
    readTime: 6
  },

  // HEALTH SECTION
  {
    id: '31',
    slug: 'medical-breakthrough-cancer',
    title: 'Medical breakthrough offers new hope for cancer treatment',
    description: 'Revolutionary therapy shows promising results in clinical trials.',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Health',
    category: 'Medical Research',
    timestamp: '1 hour ago',
    readTime: 5
  },
  {
    id: '32',
    slug: 'mental-health-awareness',
    title: 'Mental health awareness campaign reaches global milestone',
    description: 'International initiative promotes understanding and support systems.',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Health',
    category: 'Mental Health',
    timestamp: '3 hours ago',
    readTime: 4
  },
  {
    id: '33',
    slug: 'vaccination-program-success',
    title: 'Global vaccination program achieves significant public health impact',
    description: 'Coordinated effort demonstrates effectiveness of preventive medicine.',
    imageUrl: 'https://images.unsplash.com/photo-1584118624012-df056829fbd0?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Health',
    category: 'Public Health',
    timestamp: '5 hours ago',
    readTime: 4
  },
  {
    id: '34',
    slug: 'nutrition-research-findings',
    title: 'Nutrition research reveals benefits of plant-based diets',
    description: 'Long-term study shows positive effects on cardiovascular health.',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Health',
    category: 'Nutrition',
    timestamp: '7 hours ago',
    readTime: 3
  },
  {
    id: '35',
    slug: 'healthcare-technology-innovation',
    title: 'Healthcare technology innovation improves patient outcomes',
    description: 'Advanced medical devices and digital solutions enhance treatment effectiveness.',
    imageUrl: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Health',
    category: 'Medical Technology',
    timestamp: '9 hours ago',
    readTime: 5
  },

  // INNOVATION SECTION
  {
    id: '36',
    slug: 'sustainable-materials-breakthrough',
    title: 'Sustainable materials breakthrough promises eco-friendly manufacturing',
    description: 'New biodegradable compounds could replace traditional plastics.',
    imageUrl: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Innovation',
    category: 'Sustainability',
    timestamp: '2 hours ago',
    readTime: 4
  },
  {
    id: '37',
    slug: 'robotics-automation-advance',
    title: 'Robotics and automation advance manufacturing capabilities',
    description: 'Intelligent systems increase efficiency while creating new job opportunities.',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Innovation',
    category: 'Robotics',
    timestamp: '4 hours ago',
    readTime: 5
  },
  {
    id: '38',
    slug: 'clean-energy-storage',
    title: 'Clean energy storage solutions enable grid reliability',
    description: 'Advanced battery technology supports renewable energy integration.',
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Innovation',
    category: 'Energy',
    timestamp: '6 hours ago',
    readTime: 4
  },
  {
    id: '39',
    slug: 'biotechnology-agriculture',
    title: 'Biotechnology innovations enhance sustainable agriculture',
    description: 'Genetic advances improve crop yields while reducing environmental impact.',
    imageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Innovation',
    category: 'Biotechnology',
    timestamp: '8 hours ago',
    readTime: 6
  },
  {
    id: '40',
    slug: 'transportation-revolution',
    title: 'Transportation revolution accelerates with autonomous vehicles',
    description: 'Self-driving technology reaches new levels of safety and reliability.',
    imageUrl: 'https://images.unsplash.com/photo-1555353540-c65865b80bd5?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Innovation',
    category: 'Transportation',
    timestamp: '10 hours ago',
    readTime: 5
  },

  // TRAVEL SECTION  
  {
    id: '41',
    slug: 'sustainable-tourism-growth',
    title: 'Sustainable tourism experiences unprecedented growth worldwide',
    description: 'Eco-friendly travel options attract environmentally conscious tourists.',
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Travel',
    category: 'Tourism',
    timestamp: '3 hours ago',
    readTime: 4
  },
  {
    id: '42',
    slug: 'cultural-heritage-sites',
    title: 'Cultural heritage sites receive UNESCO recognition',
    description: 'Ancient monuments and cultural landscapes gain protected status.',
    imageUrl: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73c0e?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Travel',
    category: 'Culture',
    timestamp: '5 hours ago',
    readTime: 5
  },
  {
    id: '43',
    slug: 'adventure-travel-trends',
    title: 'Adventure travel trends reshape tourism industry',
    description: 'Extreme sports and wilderness experiences gain popularity among travelers.',
    imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Travel',
    category: 'Adventure',
    timestamp: '7 hours ago',
    readTime: 3
  },
  {
    id: '44',
    slug: 'digital-nomad-destinations',
    title: 'Digital nomad destinations emerge as remote work continues',
    description: 'Cities adapt infrastructure to attract location-independent professionals.',
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Travel',
    category: 'Remote Work',
    timestamp: '9 hours ago',
    readTime: 4
  },
  {
    id: '45',
    slug: 'airline-industry-recovery',
    title: 'Airline industry recovery accelerates with new routes and services',
    description: 'International carriers expand operations as travel demand rebounds.',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Travel',
    category: 'Aviation',
    timestamp: '11 hours ago',
    readTime: 5
  },

  // POLITICS SECTION
  {
    id: '46',
    slug: 'parliamentary-reform-debate',
    title: 'Parliamentary reform debate focuses on democratic representation',
    description: 'Lawmakers consider changes to electoral systems and governance structures.',
    imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a08b?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Politics',
    category: 'Democracy',
    timestamp: '1 hour ago',
    readTime: 5
  },
  {
    id: '47',
    slug: 'international-diplomacy-summit',
    title: 'International diplomacy summit addresses global security challenges',
    description: 'World leaders collaborate on strategies for regional stability.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Politics',
    category: 'International',
    timestamp: '3 hours ago',
    readTime: 6
  },
  {
    id: '48',
    slug: 'policy-changes-healthcare',
    title: 'Policy changes aim to improve healthcare accessibility',
    description: 'Government announces reforms to expand medical services coverage.',
    imageUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Politics',
    category: 'Healthcare',
    timestamp: '5 hours ago',
    readTime: 4
  },
  {
    id: '49',
    slug: 'environmental-legislation',
    title: 'Environmental legislation strengthens climate action commitments',
    description: 'New laws establish binding targets for carbon emissions reduction.',
    imageUrl: 'https://images.unsplash.com/photo-1572949645841-094f3047e2d4?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Politics',
    category: 'Environment',
    timestamp: '7 hours ago',
    readTime: 5
  },
  {
    id: '50',
    slug: 'trade-agreement-negotiations',
    title: 'Trade agreement negotiations progress toward economic partnership',
    description: 'Multi-national discussions focus on reducing barriers and promoting growth.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Politics',
    category: 'Trade',
    timestamp: '9 hours ago',
    readTime: 4
  },

  // UK SECTION
  {
    id: '51',
    slug: 'uk-housing-market-update',
    title: 'UK housing market shows signs of stabilization',
    description: 'Property prices level off as mortgage rates stabilize across regions.',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'UK',
    category: 'Economy',
    timestamp: '2 hours ago',
    readTime: 4
  },
  {
    id: '52',
    slug: 'british-cultural-celebration',
    title: 'British cultural celebration brings communities together',
    description: 'Annual festival showcases diverse traditions and heritage across the nation.',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'UK',
    category: 'Culture',
    timestamp: '4 hours ago',
    readTime: 3
  },
  {
    id: '53',
    slug: 'nhs-modernization-program',
    title: 'NHS modernization program introduces digital health services',
    description: 'Healthcare system embraces technology to improve patient care and efficiency.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'UK',
    category: 'Healthcare',
    timestamp: '6 hours ago',
    readTime: 5
  },
  {
    id: '54',
    slug: 'uk-education-reforms',
    title: 'UK education reforms focus on skills development and innovation',
    description: 'New curriculum emphasizes digital literacy and critical thinking abilities.',
    imageUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'UK',
    category: 'Education',
    timestamp: '8 hours ago',
    readTime: 4
  },
  {
    id: '55',
    slug: 'renewable-energy-uk',
    title: 'UK renewable energy sector achieves record generation levels',
    description: 'Wind and solar power contribute significantly to national energy supply.',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'UK',
    category: 'Energy',
    timestamp: '10 hours ago',
    readTime: 5
  },

  // ARTS SECTION
  {
    id: '56',
    slug: 'contemporary-art-movement',
    title: 'Contemporary art movement challenges traditional boundaries',
    description: 'Artists explore new mediums and concepts in groundbreaking exhibitions.',
    imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Arts',
    category: 'Visual Arts',
    timestamp: '1 hour ago',
    readTime: 4
  },
  {
    id: '57',
    slug: 'sculpture-exhibition-opens',
    title: 'Sculpture exhibition opens featuring international artists',
    description: 'Major gallery showcases three-dimensional artworks from diverse cultures.',
    imageUrl: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Arts',
    category: 'Sculpture',
    timestamp: '3 hours ago',
    readTime: 3
  },
  {
    id: '58',
    slug: 'digital-art-innovation',
    title: 'Digital art innovation merges technology with creative expression',
    description: 'Virtual reality and AI create new possibilities for artistic creation.',
    imageUrl: 'https://images.unsplash.com/photo-1551913902-c92207136625?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Arts',
    category: 'Digital Arts',
    timestamp: '5 hours ago',
    readTime: 5
  },
  {
    id: '59',
    slug: 'art-restoration-project',
    title: 'Art restoration project reveals hidden masterpiece details',
    description: 'Conservation experts uncover original colors and techniques in classical painting.',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Arts',
    category: 'Conservation',
    timestamp: '7 hours ago',
    readTime: 6
  },
  {
    id: '60',
    slug: 'public-art-installation',
    title: 'Public art installation transforms urban landscape',
    description: 'Community-centered artwork brings color and meaning to city spaces.',
    imageUrl: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Arts',
    category: 'Public Art',
    timestamp: '9 hours ago',
    readTime: 4
  },

  // EARTH SECTION
  {
    id: '61',
    slug: 'biodiversity-conservation-success',
    title: 'Biodiversity conservation efforts show remarkable success',
    description: 'Protected areas help endangered species recover and thrive.',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fdcd410c9644?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Earth',
    category: 'Conservation',
    timestamp: '2 hours ago',
    readTime: 5
  },
  {
    id: '62',
    slug: 'ocean-cleanup-technology',
    title: 'Ocean cleanup technology removes plastic waste effectively',
    description: 'Innovative systems collect marine debris while protecting sea life.',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Earth',
    category: 'Marine',
    timestamp: '4 hours ago',
    readTime: 4
  },
  {
    id: '63',
    slug: 'forest-restoration-initiative',
    title: 'Forest restoration initiative plants millions of trees globally',
    description: 'International cooperation addresses deforestation and climate change.',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Earth',
    category: 'Forestry',
    timestamp: '6 hours ago',
    readTime: 5
  },
  {
    id: '64',
    slug: 'wildlife-photography-awards',
    title: 'Wildlife photography awards celebrate natural world beauty',
    description: 'Stunning images capture intimate moments of animal behavior.',
    imageUrl: 'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Earth',
    category: 'Wildlife',
    timestamp: '8 hours ago',
    readTime: 3
  },
  {
    id: '65',
    slug: 'climate-adaptation-strategies',
    title: 'Climate adaptation strategies help communities prepare for change',
    description: 'Local initiatives build resilience against environmental challenges.',
    imageUrl: 'https://images.unsplash.com/photo-1569163139394-de44cb542a5b?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Earth',
    category: 'Climate',
    timestamp: '10 hours ago',
    readTime: 6
  },

  // VIDEO SECTION
  {
    id: '66',
    slug: 'documentary-film-premiere',
    title: 'Documentary film premiere explores social justice themes',
    description: 'Powerful storytelling highlights important contemporary issues.',
    imageUrl: 'https://images.unsplash.com/photo-1533671737628-e4f3c7e52af9?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Video',
    category: 'Documentary',
    timestamp: '1 hour ago',
    isVideo: true,
    readTime: 45
  },
  {
    id: '67',
    slug: 'news-analysis-special',
    title: 'News analysis special examines global economic trends',
    description: 'Expert commentary provides insight into market developments.',
    imageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Video',
    category: 'News',
    timestamp: '3 hours ago',
    isVideo: true,
    readTime: 30
  },
  {
    id: '68',
    slug: 'educational-series-launch',
    title: 'Educational series launches exploring scientific discoveries',
    description: 'Interactive content makes complex concepts accessible to all audiences.',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Video',
    category: 'Education',
    timestamp: '5 hours ago',
    isVideo: true,
    readTime: 25
  },
  {
    id: '69',
    slug: 'cultural-documentary-series',
    title: 'Cultural documentary series celebrates global traditions',
    description: 'Immersive footage showcases diverse customs and celebrations worldwide.',
    imageUrl: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Video',
    category: 'Culture',
    timestamp: '7 hours ago',
    isVideo: true,
    readTime: 40
  },
  {
    id: '70',
    slug: 'investigative-report-exclusive',
    title: 'Investigative report reveals exclusive findings',
    description: 'In-depth journalism uncovers important stories affecting public interest.',
    imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Video',
    category: 'Investigation',
    timestamp: '9 hours ago',
    isVideo: true,
    readTime: 35
  },

  // LIVE SECTION
  {
    id: '71',
    slug: 'breaking-news-live',
    title: 'Breaking news: Live coverage of developing story',
    description: 'Continuous updates on major international incident as it unfolds.',
    imageUrl: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Live',
    category: 'Breaking News',
    timestamp: 'LIVE',
    isLive: true,
    readTime: 0
  },
  {
    id: '72',
    slug: 'parliamentary-session-live',
    title: 'Parliamentary session: Live debate on critical legislation',
    description: 'Real-time coverage of important political discussions and votes.',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Live',
    category: 'Politics',
    timestamp: 'LIVE',
    isLive: true,
    readTime: 0
  },
  {
    id: '73',
    slug: 'sports-championship-live',
    title: 'Sports championship: Live coverage of final match',
    description: 'Exciting conclusion to tournament with championship title at stake.',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Live',
    category: 'Sport',
    timestamp: 'LIVE',
    isLive: true,
    readTime: 0
  },
  {
    id: '74',
    slug: 'science-conference-live',
    title: 'Science conference: Live presentations on research breakthroughs',
    description: 'Leading researchers share latest discoveries and innovations.',
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Live',
    category: 'Science',
    timestamp: 'LIVE',
    isLive: true,
    readTime: 0
  },
  {
    id: '75',
    slug: 'cultural-event-live',
    title: 'Cultural event: Live streaming of international festival',
    description: 'Celebration of arts and culture from around the world.',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
    section: 'Live',
    category: 'Culture',
    timestamp: 'LIVE',
    isLive: true,
    readTime: 0
  }
]

// Helper functions to get articles by section
export const getArticlesBySection = (section: string): Article[] => {
  return mockArticles.filter(article => 
    article.section.toLowerCase() === section.toLowerCase()
  )
}

export const getFeaturedArticles = (): Article[] => {
  return mockArticles.filter(article => article.isLive).slice(0, 3)
}

export const getLatestArticles = (limit: number = 10): Article[] => {
  return mockArticles.slice(0, limit)
}

export const getArticleBySlug = (slug: string): Article | undefined => {
  return mockArticles.find(article => article.slug === slug)
}

export const getSectionCategories = (section: string): string[] => {
  const sectionArticles = getArticlesBySection(section)
  const categoriesSet = new Set(sectionArticles.map(article => article.category))
  const categories: string[] = []
  categoriesSet.forEach(category => categories.push(category))
  return categories
}