#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Read and parse the mockData.ts file
const mockDataPath = path.join(__dirname, '..', 'lib', 'mockData.ts')
const content = fs.readFileSync(mockDataPath, 'utf8')

// Extract articles data (simple parsing for TypeScript)
const articles = []
const lines = content.split('\n')
let currentArticle = {}
let inArticleObject = false

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim()
  
  if (line === '{' && lines[i+1] && lines[i+1].trim().startsWith('id:')) {
    inArticleObject = true
    currentArticle = {}
  } else if (line === '},' && inArticleObject) {
    if (currentArticle.section) {
      articles.push(currentArticle)
    }
    inArticleObject = false
    currentArticle = {}
  } else if (inArticleObject) {
    if (line.startsWith('section:')) {
      const match = line.match(/section:\s*['"](.*?)['"]/)
      if (match) currentArticle.section = match[1]
    }
    if (line.startsWith('slug:')) {
      const match = line.match(/slug:\s*['"](.*?)['"]/)
      if (match) currentArticle.slug = match[1]
    }
  }
}

// Count articles per section
const sectionCounts = {}
const sectionSlugs = {}

articles.forEach(article => {
  if (article.section) {
    if (!sectionCounts[article.section]) {
      sectionCounts[article.section] = 0
      sectionSlugs[article.section] = []
    }
    sectionCounts[article.section]++
    if (article.slug) {
      sectionSlugs[article.section].push(article.slug)
    }
  }
})

console.log('📊 Current Article Distribution:')
console.log('='.repeat(40))

// Check app directory routes
const appDir = path.join(__dirname, '..', 'app')
const routes = []
if (fs.existsSync(appDir)) {
  const items = fs.readdirSync(appDir)
  items.forEach(item => {
    const pagePath = path.join(appDir, item, 'page.tsx')
    if (fs.existsSync(pagePath)) {
      routes.push(item)
    }
  })
}

console.log('\n🗂️  Available Routes vs Articles:')
routes.filter(route => !['article', 'register', 'signin'].includes(route)).forEach(route => {
  const sectionName = route.charAt(0).toUpperCase() + route.slice(1)
  const variations = [route, sectionName, route.toUpperCase()]
  
  let found = false
  let count = 0
  let actualSection = ''
  
  for (const variation of variations) {
    if (sectionCounts[variation]) {
      found = true
      count = sectionCounts[variation]
      actualSection = variation
      break
    }
  }
  
  const status = count >= 4 ? '✅' : (count > 0 ? '⚠️' : '❌')
  console.log(`${status} /${route} -> ${actualSection || 'NO MATCH'} (${count} articles)`)
})

console.log('\n📋 Sections in Mock Data:')
Object.entries(sectionCounts).sort().forEach(([section, count]) => {
  const status = count >= 4 ? '✅' : (count > 0 ? '⚠️' : '❌')
  console.log(`${status} ${section}: ${count} articles`)
})

console.log('\n🎯 Recommendations:')
const needsContent = routes.filter(route => {
  const sectionName = route.charAt(0).toUpperCase() + route.slice(1)
  const variations = [route, sectionName, route.toUpperCase()]
  
  for (const variation of variations) {
    if (sectionCounts[variation] >= 4) {
      return false
    }
  }
  return !['article', 'register', 'signin'].includes(route)
})

if (needsContent.length > 0) {
  console.log('❌ Routes needing content (less than 4 articles):')
  needsContent.forEach(route => {
    console.log(`   - /${route}`)
  })
} else {
  console.log('✅ All routes have sufficient content')
}