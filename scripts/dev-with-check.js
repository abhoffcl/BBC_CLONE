#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { spawn } = require('child_process')

const projectRoot = path.resolve(__dirname, '..')
const nextDir = path.join(projectRoot, '.next')

/**
 * Check if critical server-side assets exist
 */
function checkServerAssets() {
  console.log('🔍 Checking server-side assets...')
  
  const criticalFiles = [
    { path: path.join(nextDir, 'server', 'middleware-manifest.json'), name: 'Middleware Manifest' },
    { path: path.join(nextDir, 'routes-manifest.json'), name: 'Routes Manifest' },
    { path: path.join(nextDir, 'build-manifest.json'), name: 'Build Manifest' },
    { path: path.join(nextDir, 'prerender-manifest.json'), name: 'Prerender Manifest' },
  ]
  
  const missing = []
  const present = []
  
  criticalFiles.forEach(file => {
    if (fs.existsSync(file.path)) {
      present.push(file.name)
      console.log(`✅ ${file.name}: Found`)
    } else {
      missing.push(file.name)
      console.log(`❌ ${file.name}: Missing`)
    }
  })
  
  if (missing.length > 0) {
    console.log('')
    console.log('⚠️  WARNING: Missing server-side assets detected!')
    console.log('   Missing files:', missing.join(', '))
    
    // Special handling for prerender manifest
    if (missing.includes('Prerender Manifest')) {
      console.log('')
      console.log('🚨 CRITICAL: Prerender Manifest is missing!')
      console.log('   This WILL cause 500 errors on route loads.')
      console.log('   Run "npm run check-prerender --fix" for emergency fix')
      console.log('   Or run "npm run clean-build" for proper rebuild')
    } else {
      console.log('   This may cause 500 errors on route loads.')
      console.log('   Run "npm run clean-build" to regenerate all assets.')
    }
    console.log('')
    return false
  }
  
  console.log('✅ All critical server-side assets are present')
  return true
}

/**
 * Monitor for file system issues during development
 */
function monitorDevServer() {
  const node = process.execPath;
  const devProcess = spawn(node, [path.join(projectRoot, 'node_modules', '.bin', 'next'), 'dev'], {
    stdio: ['inherit', 'pipe', 'pipe'],
    cwd: projectRoot,
    shell: process.platform === 'win32'
  })
  
  let buildReady = false
  
  devProcess.stdout.on('data', (data) => {
    const output = data.toString()
    process.stdout.write(output)
    
    // Detect when the build is ready
    if (output.includes('Ready in')) {
      buildReady = true
      setTimeout(() => {
        console.log('')
        console.log('🔍 Post-build asset check:')
        checkServerAssets()
        console.log('')
      }, 1000)
    }
    
    // Monitor for specific errors
    if (output.includes('middleware-manifest.json')) {
      console.log('')
      console.log('⚠️  Middleware manifest issue detected!')
      console.log('   Try stopping the dev server and running "npm run clean-build"')
      console.log('')
    }
  })
  
  devProcess.stderr.on('data', (data) => {
    const error = data.toString()
    process.stderr.write(error)
    
    // Handle EPERM errors specifically
    if (error.includes('EPERM') || error.includes('operation not permitted')) {
      console.log('')
      console.log('❌ File permission error detected!')
      console.log('   This is common on Windows. Try:')
      console.log('   1. Close all editors/IDEs')
      console.log('   2. Run "npm run clean-build"')
      console.log('   3. Restart the dev server')
      console.log('')
    }
  })
  
  devProcess.on('close', (code) => {
    console.log(`Dev server exited with code ${code}`)
  })
  
  // Handle process termination
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down dev server...')
    devProcess.kill('SIGINT')
    process.exit(0)
  })
  
  process.on('SIGTERM', () => {
    devProcess.kill('SIGTERM')
    process.exit(0)
  })
}

/**
 * Main function
 */
function main() {
  console.log('🚀 Starting Next.js development server with enhanced monitoring...')
  console.log('')
  
  // Initial check
  if (!fs.existsSync(nextDir)) {
    console.log('ℹ️  No .next directory found. This is normal for first run.')
    console.log('')
  } else {
    checkServerAssets()
    console.log('')
  }
  
  // Start monitored dev server
  monitorDevServer()
}

// Run if called directly
if (require.main === module) {
  main()
}

module.exports = { checkServerAssets }