#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const projectRoot = path.resolve(__dirname, '..')
const nextDir = path.join(projectRoot, '.next')
const prerenderManifestPath = path.join(nextDir, 'prerender-manifest.json')

/**
 * Check if prerender manifest exists and is valid
 */
function checkPrerenderManifest() {
  console.log('🔍 Checking prerender manifest...')
  
  if (!fs.existsSync(nextDir)) {
    console.log('❌ .next directory not found - run npm run build first')
    return false
  }
  
  if (!fs.existsSync(prerenderManifestPath)) {
    console.log('')
    console.log('❌ CRITICAL ERROR: prerender-manifest.json is missing!')
    console.log('')
    console.log('   This will cause 500 errors on route loads.')
    console.log('')
    console.log('🔧 To fix this issue:')
    console.log('   1. Run: npm run clean-build')
    console.log('   2. If that fails, check next.config.js for:')
    console.log('      - output: "standalone" (remove this)')
    console.log('      - Custom generateBuildId (remove this)')
    console.log('      - Experimental features that might interfere')
    console.log('   3. Ensure all pages can be statically generated')
    console.log('   4. Check for broken getStaticProps/getServerSideProps')
    console.log('')
    return false
  }
  
  try {
    const manifest = JSON.parse(fs.readFileSync(prerenderManifestPath, 'utf8'))
    
    console.log('✅ Prerender manifest found and valid')
    console.log(`   Version: ${manifest.version}`)
    console.log(`   Static routes: ${Object.keys(manifest.routes || {}).length}`)
    console.log(`   Dynamic routes: ${Object.keys(manifest.dynamicRoutes || {}).length}`)
    console.log('')
    
    // Check for critical routes
    const criticalRoutes = ['/', '/business', '/world', '/sport']
    const missingRoutes = criticalRoutes.filter(route => !manifest.routes[route])
    
    if (missingRoutes.length > 0) {
      console.log('⚠️  Some critical routes are missing from prerender manifest:')
      missingRoutes.forEach(route => console.log(`   - ${route}`))
      console.log('   This might cause issues with those specific routes.')
      console.log('')
    }
    
    return true
  } catch (error) {
    console.log('❌ Prerender manifest exists but contains invalid JSON:')
    console.log(`   Error: ${error.message}`)
    console.log('')
    console.log('🔧 To fix: Run npm run clean-build to regenerate the manifest')
    console.log('')
    return false
  }
}

/**
 * Generate a simple prerender manifest if missing (emergency fallback)
 */
function generateEmergencyManifest() {
  console.log('🚨 Generating emergency prerender manifest...')
  
  const emergencyManifest = {
    "version": 4,
    "routes": {
      "/": {
        "experimentalBypassFor": [],
        "initialRevalidateSeconds": false,
        "srcRoute": "/",
        "dataRoute": "/index.rsc"
      },
      "/business": {
        "experimentalBypassFor": [],
        "initialRevalidateSeconds": false,
        "srcRoute": "/business",
        "dataRoute": "/business.rsc"
      },
      "/world": {
        "experimentalBypassFor": [],
        "initialRevalidateSeconds": false,
        "srcRoute": "/world", 
        "dataRoute": "/world.rsc"
      },
      "/sport": {
        "experimentalBypassFor": [],
        "initialRevalidateSeconds": false,
        "srcRoute": "/sport",
        "dataRoute": "/sport.rsc"
      }
    },
    "dynamicRoutes": {},
    "notFoundRoutes": [],
    "preview": {
      "previewModeId": "emergency-preview-mode",
      "previewModeSigningKey": "emergency-signing-key",
      "previewModeEncryptionKey": "emergency-encryption-key"
    }
  }
  
  try {
    if (!fs.existsSync(nextDir)) {
      fs.mkdirSync(nextDir, { recursive: true })
    }
    
    fs.writeFileSync(prerenderManifestPath, JSON.stringify(emergencyManifest, null, 2))
    console.log('✅ Emergency prerender manifest created')
    console.log('⚠️  This is a temporary fix - run npm run clean-build for a proper rebuild')
    return true
  } catch (error) {
    console.log('❌ Failed to create emergency manifest:', error.message)
    return false
  }
}

// Main function
function main() {
  const args = process.argv.slice(2)
  const shouldFix = args.includes('--fix')
  
  const isValid = checkPrerenderManifest()
  
  if (!isValid && shouldFix) {
    console.log('🔧 Attempting to create emergency manifest...')
    generateEmergencyManifest()
  }
  
  process.exit(isValid ? 0 : 1)
}

// Run if called directly
if (require.main === module) {
  main()
}

module.exports = { checkPrerenderManifest, generateEmergencyManifest }