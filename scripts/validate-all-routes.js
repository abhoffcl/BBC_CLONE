#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

console.log('🔍 COMPREHENSIVE ROUTE VALIDATION')
console.log('='.repeat(50))

// Get all app routes
const appDir = path.join(__dirname, '..', 'app')
const routes = []

function scanDirectory(dir, basePath = '') {
  const items = fs.readdirSync(dir)
  
  items.forEach(item => {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)
    
    if (stat.isDirectory()) {
      if (item.startsWith('[') && item.endsWith(']')) {
        // Dynamic route
        const paramName = item.slice(1, -1)
        const routePath = basePath + '/[' + paramName + ']'
        
        // Check for page.tsx
        const pagePath = path.join(fullPath, 'page.tsx')
        if (fs.existsSync(pagePath)) {
          routes.push({
            type: 'dynamic',
            path: routePath,
            param: paramName,
            component: pagePath
          })
        }
      } else if (!['components', 'lib', 'public'].includes(item)) {
        // Regular directory - check for page.tsx
        const pagePath = path.join(fullPath, 'page.tsx')
        if (fs.existsSync(pagePath)) {
          const routePath = basePath + '/' + item
          routes.push({
            type: 'static',
            path: routePath === '/page' ? '/' : routePath,
            component: pagePath
          })
        }
        
        // Recurse into subdirectory
        scanDirectory(fullPath, basePath + '/' + item)
      }
    }
  })
}

// Check for page.tsx in root app directory
const rootPagePath = path.join(appDir, 'page.tsx')
if (fs.existsSync(rootPagePath)) {
  routes.push({
    type: 'static',
    path: '/',
    component: rootPagePath
  })
}

scanDirectory(appDir)

console.log('📄 Static Routes Found:')
const staticRoutes = routes.filter(r => r.type === 'static').sort((a, b) => a.path.localeCompare(b.path))
staticRoutes.forEach(route => {
  console.log(`   ✅ ${route.path}`)
})

console.log('\n🔀 Dynamic Routes Found:')
const dynamicRoutes = routes.filter(r => r.type === 'dynamic')
dynamicRoutes.forEach(route => {
  console.log(`   🔄 ${route.path} (param: ${route.param})`)
})

// Parse mock data for article slugs
const mockDataPath = path.join(__dirname, '..', 'lib', 'mockData.ts')
const mockContent = fs.readFileSync(mockDataPath, 'utf8')

const slugs = []
const slugMatches = mockContent.match(/slug:\s*['"](.*?)['"]/g)
if (slugMatches) {
  slugMatches.forEach(match => {
    const slug = match.match(/slug:\s*['"](.*?)['"]/)[1]
    slugs.push(slug)
  })
}

console.log(`\n📝 Article Slugs Found: ${slugs.length}`)
if (slugs.length > 0) {
  console.log('   Sample slugs:')
  slugs.slice(0, 5).forEach(slug => {
    console.log(`   - ${slug}`)
  })
  if (slugs.length > 5) {
    console.log(`   ... and ${slugs.length - 5} more`)
  }
}

// Check for duplicate slugs
const duplicateSlugs = slugs.filter((slug, index) => slugs.indexOf(slug) !== index)
if (duplicateSlugs.length > 0) {
  console.log('\n❌ Duplicate slugs found:')
  const uniqueDuplicates = Array.from(new Set(duplicateSlugs))
  uniqueDuplicates.forEach(slug => {
    console.log(`   - ${slug}`)
  })
} else {
  console.log('\n✅ No duplicate slugs found')
}

// Check section coverage
console.log('\n📊 Section Coverage Analysis:')
const sections = {}
const sectionMatches = mockContent.match(/section:\s*['"](.*?)['"]/g)
if (sectionMatches) {
  sectionMatches.forEach(match => {
    const section = match.match(/section:\s*['"](.*?)['"]/)[1]
    if (!sections[section]) sections[section] = 0
    sections[section]++
  })
}

const sectionRoutes = staticRoutes.filter(r => 
  r.path !== '/' && 
  !['register', 'signin'].includes(r.path.replace('/', ''))
)

sectionRoutes.forEach(route => {
  const routeName = route.path.replace('/', '')
  const sectionName = routeName.charAt(0).toUpperCase() + routeName.slice(1)
  
  let hasArticles = false
  let articleCount = 0
  
  // Check various section name variations
  const variations = [routeName, sectionName, routeName.toUpperCase(), sectionName.toUpperCase()]
  for (const variation of variations) {
    if (sections[variation]) {
      hasArticles = true
      articleCount = sections[variation]
      break
    }
  }
  
  const status = articleCount >= 4 ? '✅' : (articleCount > 0 ? '⚠️' : '❌')
  console.log(`   ${status} ${route.path} -> ${articleCount} articles`)
})

console.log('\n🎯 Summary:')
console.log(`   📄 Static routes: ${staticRoutes.length}`)
console.log(`   🔄 Dynamic routes: ${dynamicRoutes.length}`)
console.log(`   📝 Article slugs: ${slugs.length}`)
console.log(`   📊 Sections with articles: ${Object.keys(sections).length}`)

// Recommendations
const problemRoutes = sectionRoutes.filter(route => {
  const routeName = route.path.replace('/', '')
  const sectionName = routeName.charAt(0).toUpperCase() + routeName.slice(1)
  const variations = [routeName, sectionName, routeName.toUpperCase(), sectionName.toUpperCase()]
  
  for (const variation of variations) {
    if (sections[variation] >= 4) return false
  }
  return true
})

if (problemRoutes.length > 0) {
  console.log('\n⚠️  Routes that may show empty content:')
  problemRoutes.forEach(route => {
    console.log(`   - ${route.path}`)
  })
} else {
  console.log('\n✅ All section routes have sufficient content')
}

console.log('\n🚀 Route Testing Complete')