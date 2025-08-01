#!/usr/bin/env node

const http = require('http')

const routes = [
  '/',
  '/business',
  '/world',
  '/sport',
  '/technology',
  '/culture',
  '/health',
  '/innovation',
  '/travel',
  '/politics',
  '/uk',
  '/arts',
  '/earth',
  '/video',
  '/live',
  '/news'
]

const testRoute = (path, port = 3001) => {
  return new Promise((resolve) => {
    const options = {
      hostname: 'localhost',
      port: port,
      path: path,
      method: 'GET',
      timeout: 5000
    }

    const req = http.request(options, (res) => {
      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      })
      res.on('end', () => {
        resolve({
          path,
          status: res.statusCode,
          success: res.statusCode >= 200 && res.statusCode < 400,
          hasContent: data.length > 0,
          error: null
        })
      })
    })

    req.on('timeout', () => {
      req.destroy()
      resolve({
        path,
        status: 0,
        success: false,
        hasContent: false,
        error: 'Timeout'
      })
    })

    req.on('error', (err) => {
      resolve({
        path,
        status: 0,
        success: false,
        hasContent: false,
        error: err.message
      })
    })

    req.end()
  })
}

async function testAllRoutes() {
  console.log('🧪 Testing all routes...\n')
  
  const results = []
  
  for (const route of routes) {
    process.stdout.write(`Testing ${route}... `)
    const result = await testRoute(route)
    results.push(result)
    
    if (result.success) {
      console.log(`✅ ${result.status}`)
    } else {
      console.log(`❌ ${result.status || 'ERROR'} ${result.error || ''}`)
    }
  }
  
  console.log('\n📊 Summary:')
  const successful = results.filter(r => r.success).length
  const failed = results.filter(r => !r.success).length
  
  console.log(`Total routes tested: ${results.length}`)
  console.log(`Successful: ${successful}`)
  console.log(`Failed: ${failed}`)
  
  if (failed > 0) {
    console.log('\n❌ Failed routes:')
    results.filter(r => !r.success).forEach(r => {
      console.log(`   ${r.path}: ${r.status || 'ERROR'} ${r.error || ''}`)
    })
  } else {
    console.log('\n🎉 All routes are working correctly!')
  }
  
  return failed === 0
}

// Run if called directly
if (require.main === module) {
  testAllRoutes().then(success => {
    process.exit(success ? 0 : 1)
  })
}

module.exports = { testRoute, testAllRoutes }