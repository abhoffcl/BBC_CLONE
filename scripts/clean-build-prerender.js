#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const isWindows = process.platform === 'win32'
const projectRoot = path.resolve(__dirname, '..')
const nextDir = path.join(projectRoot, '.next')

console.log('🚨 PRERENDER MANIFEST FIX - Starting deep cleanup and rebuild...')
console.log('')

/**
 * Kill all Node.js processes to prevent file locks
 */
function killNodeProcesses() {
  console.log('🔄 Killing Node.js processes...')
  if (isWindows) {
    try {
      execSync('taskkill /F /IM node.exe /T', { stdio: 'pipe' })
      console.log('✅ Killed Node.js processes')
    } catch (error) {
      console.log('ℹ️  No Node.js processes to kill')
    }
  } else {
    try {
      execSync('pkill -f "next"', { stdio: 'pipe' })
      console.log('✅ Killed Next.js processes')
    } catch (error) {
      console.log('ℹ️  No Next.js processes to kill')
    }
  }
}

/**
 * Safely remove directory with Windows permission handling
 */
async function safeRemoveDir(dirPath, dirName) {
  if (!fs.existsSync(dirPath)) {
    console.log(`ℹ️  ${dirName} doesn't exist, skipping...`)
    return true
  }

  console.log(`🗑️  Removing ${dirName}...`)
  
  try {
    if (isWindows) {
      // Use PowerShell for better Windows handling
      execSync(`powershell -Command "Remove-Item -Path '${dirPath}' -Recurse -Force -ErrorAction SilentlyContinue"`, { stdio: 'pipe' })
      console.log(`✅ Removed ${dirName} using PowerShell`)
    } else {
      fs.rmSync(dirPath, { recursive: true, force: true })
      console.log(`✅ Removed ${dirName}`)
    }
    return true
  } catch (error) {
    console.log(`⚠️  Failed to remove ${dirName}: ${error.message}`)
    return false
  }
}

/**
 * Verify critical manifest files exist
 */
function verifyPrerenderManifest() {
  const prerenderManifestPath = path.join(nextDir, 'prerender-manifest.json')
  const serverPrerenderPath = path.join(nextDir, 'server', 'prerender-manifest.json')
  
  console.log('🔍 Checking prerender manifest files...')
  
  const checks = [
    { path: prerenderManifestPath, name: 'Root prerender-manifest.json' },
    { path: serverPrerenderPath, name: 'Server prerender-manifest.json' },
  ]
  
  let allPresent = true
  
  checks.forEach(check => {
    if (fs.existsSync(check.path)) {
      console.log(`✅ ${check.name}: Found`)
      try {
        const content = JSON.parse(fs.readFileSync(check.path, 'utf8'))
        console.log(`   Version: ${content.version || 'unknown'}`)
        console.log(`   Routes: ${Object.keys(content.routes || {}).length}`)
      } catch (e) {
        console.log(`   ⚠️  Invalid JSON in ${check.name}`)
        allPresent = false
      }
    } else {
      console.log(`❌ ${check.name}: Missing`)
      allPresent = false
    }
  })
  
  return allPresent
}

/**
 * Verify all critical manifests
 */
function verifyAllManifests() {
  const manifestFiles = [
    { path: path.join(nextDir, 'build-manifest.json'), name: 'Build Manifest' },
    { path: path.join(nextDir, 'routes-manifest.json'), name: 'Routes Manifest' },
    { path: path.join(nextDir, 'prerender-manifest.json'), name: 'Prerender Manifest' },
    { path: path.join(nextDir, 'server', 'middleware-manifest.json'), name: 'Middleware Manifest' },
    { path: path.join(nextDir, 'app-build-manifest.json'), name: 'App Build Manifest' },
  ]

  console.log('')
  console.log('🔍 Verifying all critical manifests...')
  
  let allPresent = true
  manifestFiles.forEach(file => {
    if (fs.existsSync(file.path)) {
      console.log(`✅ ${file.name}: Present`)
    } else {
      console.log(`❌ ${file.name}: Missing`)
      allPresent = false
    }
  })
  
  return allPresent
}

/**
 * Check next.config.js for issues that might prevent prerender manifest generation
 */
function checkNextConfig() {
  const configPath = path.join(projectRoot, 'next.config.js')
  
  console.log('')
  console.log('🔧 Checking next.config.js for prerender issues...')
  
  if (!fs.existsSync(configPath)) {
    console.log('⚠️  next.config.js not found')
    return false
  }
  
  try {
    const configContent = fs.readFileSync(configPath, 'utf8')
    
    // Check for problematic configurations
    const problematicPatterns = [
      { pattern: /output:\s*['"]standalone['"]/, issue: 'Standalone output mode can interfere with prerendering' },
      { pattern: /trailingSlash:\s*true/, issue: 'Trailing slash configuration might affect static generation' },
      { pattern: /generateEtags:\s*false/, issue: 'Disabled ETags might affect caching' },
    ]
    
    let hasIssues = false
    problematicPatterns.forEach(({ pattern, issue }) => {
      if (pattern.test(configContent)) {
        console.log(`⚠️  Potential issue: ${issue}`)
        hasIssues = true
      }
    })
    
    if (!hasIssues) {
      console.log('✅ next.config.js looks good for prerendering')
    }
    
    return !hasIssues
  } catch (error) {
    console.log(`❌ Error reading next.config.js: ${error.message}`)
    return false
  }
}

/**
 * Main cleanup and rebuild process
 */
async function main() {
  try {
    // Step 1: Kill processes
    killNodeProcesses()
    
    // Wait for processes to terminate
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Step 2: Remove build artifacts
    const cleanupTasks = [
      { path: nextDir, name: '.next directory' },
      { path: path.join(projectRoot, 'node_modules', '.cache'), name: 'node_modules cache' },
      { path: path.join(projectRoot, '.next'), name: '.next (double-check)' },
    ]
    
    for (const task of cleanupTasks) {
      await safeRemoveDir(task.path, task.name)
    }
    
    // Step 3: Check configuration
    checkNextConfig()
    
    // Step 4: Clean npm cache
    console.log('')
    console.log('🧽 Clearing npm cache...')
    try {
      execSync('npm cache clean --force', { stdio: 'inherit' })
      console.log('✅ NPM cache cleared')
    } catch (error) {
      console.log('⚠️  Could not clean npm cache:', error.message)
    }
    
    // Step 5: Rebuild
    console.log('')
    console.log('🔨 Building project to regenerate all manifests...')
    execSync('npm run build', { stdio: 'inherit', cwd: projectRoot })
    
    // Step 6: Verify manifests
    console.log('')
    const prerenderOk = verifyPrerenderManifest()
    const allManifestsOk = verifyAllManifests()
    
    if (prerenderOk && allManifestsOk) {
      console.log('')
      console.log('🎉 SUCCESS: All manifests including prerender-manifest.json are present!')
      console.log('   Your Next.js app should now work without 500 errors.')
    } else {
      console.log('')
      console.log('⚠️  WARNING: Some manifest files are still missing.')
      console.log('   This might indicate deeper configuration issues.')
      console.log('   Check your pages for getStaticProps/getServerSideProps issues.')
    }
    
  } catch (error) {
    console.error('')
    console.error('❌ Clean build process failed:', error.message)
    console.error('')
    console.error('🔧 Troubleshooting steps:')
    console.error('   1. Check if any pages have broken getStaticProps')
    console.error('   2. Verify all imports in your pages are valid')
    console.error('   3. Check next.config.js for problematic settings')
    console.error('   4. Try running: npm install && npm run build')
    process.exit(1)
  }
}

// Run if called directly
if (require.main === module) {
  main()
}

module.exports = { verifyPrerenderManifest, verifyAllManifests }