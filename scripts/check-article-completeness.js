#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Simple parser for TypeScript mock data
const mockDataPath = path.join(__dirname, '..', 'lib', 'mockData.ts')
const content = fs.readFileSync(mockDataPath, 'utf8')

console.log('🔍 Checking article completeness...')
console.log('='.repeat(40))

// Count total articles
const articleCount = (content.match(/{\s*id:/g) || []).length
console.log(`📊 Total articles found: ${articleCount}`)

// Check for required fields
const requiredFields = ['id', 'slug', 'title', 'description', 'imageUrl', 'section', 'timestamp']
const fieldCounts = {}

requiredFields.forEach(field => {
  const regex = new RegExp(`${field}:\\s*['"']`, 'g')
  const matches = content.match(regex) || []
  fieldCounts[field] = matches.length
  
  const status = matches.length === articleCount ? '✅' : '⚠️'
  console.log(`${status} ${field}: ${matches.length}/${articleCount}`)
})

console.log('')

// Check for articles with content field
const contentMatches = content.match(/content\??\s*:/g) || []
console.log(`📝 Articles with content field: ${contentMatches.length}/${articleCount}`)

// Check for articles with author field (not required but nice to have)
const authorMatches = content.match(/author\s*:/g) || []
console.log(`👤 Articles with author field: ${authorMatches.length}/${articleCount}`)

console.log('')
console.log('🎯 Recommendations:')

const missingFields = requiredFields.filter(field => fieldCounts[field] < articleCount)
if (missingFields.length > 0) {
  console.log('❌ Some articles are missing required fields:')
  missingFields.forEach(field => {
    console.log(`   - ${field}: ${articleCount - fieldCounts[field]} articles missing`)
  })
} else {
  console.log('✅ All articles have required fields')
}

if (contentMatches.length < articleCount) {
  console.log(`⚠️  ${articleCount - contentMatches.length} articles missing full content`)
}

if (authorMatches.length === 0) {
  console.log('ℹ️  Consider adding author field to articles')
}