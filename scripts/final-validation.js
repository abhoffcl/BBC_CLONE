#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const projectRoot = path.resolve(__dirname, '..')
const nextDir = path.join(projectRoot, '.next')

console.log('🎯 FINAL VALIDATION - Prerender Manifest Fix')
console.log('='.repeat(50))
console.log('')

/**
 * Check 1: Verify prerender manifest exists and is valid
 */
function validatePrerenderManifest() {
  console.log('1. 🔍 Checking prerender-manifest.json...')
  
  const manifestPath = path.join(nextDir, 'prerender-manifest.json')
  
  if (!fs.existsSync(manifestPath)) {
    console.log('   ❌ prerender-manifest.json is missing')
    return false
  }
  
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
    console.log(`   ✅ Found and valid (version ${manifest.version})`)
    console.log(`   ✅ Static routes: ${Object.keys(manifest.routes || {}).length}`)
    console.log(`   ✅ Dynamic routes: ${Object.keys(manifest.dynamicRoutes || {}).length}`)
    
    // Check for critical routes
    const criticalRoutes = ['/', '/business', '/world', '/sport']
    const presentRoutes = criticalRoutes.filter(route => manifest.routes[route])
    console.log(`   ✅ Critical routes present: ${presentRoutes.length}/${criticalRoutes.length}`)
    
    return presentRoutes.length === criticalRoutes.length
  } catch (error) {
    console.log(`   ❌ Invalid JSON: ${error.message}`)
    return false
  }
}

/**
 * Check 2: Verify next.config.js doesn't have problematic settings
 */
function validateNextConfig() {
  console.log('')
  console.log('2. 🔧 Checking next.config.js...')
  
  const configPath = path.join(projectRoot, 'next.config.js')
  
  if (!fs.existsSync(configPath)) {
    console.log('   ⚠️  next.config.js not found')
    return false
  }
  
  const configContent = fs.readFileSync(configPath, 'utf8')
  
  // Check for problematic patterns
  const issues = []
  
  if (configContent.includes('output: \'standalone\'') && !configContent.includes('// output:')) {
    issues.push('Active standalone output mode (can interfere with prerendering)')
  }
  
  if (configContent.includes('generateBuildId:') && !configContent.includes('// generateBuildId:')) {
    issues.push('Custom generateBuildId (can interfere with manifest generation)')
  }
  
  if (issues.length === 0) {
    console.log('   ✅ Configuration looks good')
    return true
  } else {
    console.log('   ⚠️  Potential issues found:')
    issues.forEach(issue => console.log(`      - ${issue}`))
    return false
  }
}

/**
 * Check 3: Verify build completed successfully
 */
function validateBuildOutput() {
  console.log('')
  console.log('3. 🔨 Checking build output...')
  
  const criticalFiles = [
    '.next/build-manifest.json',
    '.next/routes-manifest.json',
    '.next/prerender-manifest.json',
    '.next/server/middleware-manifest.json'
  ]
  
  let allPresent = true
  criticalFiles.forEach(file => {
    if (fs.existsSync(path.join(projectRoot, file))) {
      console.log(`   ✅ ${file}`)
    } else {
      console.log(`   ❌ ${file} - Missing`)
      allPresent = false
    }
  })
  
  return allPresent
}

/**
 * Check 4: Verify scripts are available
 */
function validateScripts() {
  console.log('')
  console.log('4. 📋 Checking available scripts...')
  
  const packagePath = path.join(projectRoot, 'package.json')
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'))
  
  const expectedScripts = [
    'clean-build',
    'check-prerender',
    'dev',
    'build'
  ]
  
  let allPresent = true
  expectedScripts.forEach(script => {
    if (packageJson.scripts[script]) {
      console.log(`   ✅ npm run ${script}`)
    } else {
      console.log(`   ❌ npm run ${script} - Missing`)
      allPresent = false
    }
  })
  
  return allPresent
}

/**
 * Main validation
 */
function main() {
  const results = [
    validatePrerenderManifest(),
    validateNextConfig(),
    validateBuildOutput(),
    validateScripts()
  ]
  
  const allPassed = results.every(result => result)
  
  console.log('')
  console.log('='.repeat(50))
  if (allPassed) {
    console.log('🎉 ALL CHECKS PASSED!')
    console.log('')
    console.log('✅ Your Next.js app is properly configured')
    console.log('✅ Prerender manifest is present and valid')
    console.log('✅ All routes should work without 500 errors')
    console.log('✅ Emergency scripts are available if needed')
    console.log('')
    console.log('🚀 You can now run:')
    console.log('   • npm run dev - Start development server')
    console.log('   • npm start - Start production server')
    console.log('   • npm run check-prerender - Verify manifest anytime')
    console.log('')
  } else {
    console.log('⚠️  SOME ISSUES DETECTED')
    console.log('')
    console.log('🔧 To fix any remaining issues:')
    console.log('   1. Run: npm run clean-build')
    console.log('   2. Check: npm run check-prerender')
    console.log('   3. If still broken: npm run check-prerender --fix')
    console.log('')
  }
  
  process.exit(allPassed ? 0 : 1)
}

// Run if called directly
if (require.main === module) {
  main()
}

module.exports = { 
  validatePrerenderManifest, 
  validateNextConfig, 
  validateBuildOutput, 
  validateScripts 
}