#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const isWindows = process.platform === 'win32'
const projectRoot = path.resolve(__dirname, '..')
const nextDir = path.join(projectRoot, '.next')

console.log('🧹 Starting clean build process...')

/**
 * Safely remove directory with Windows permission handling
 */
async function safeRemoveDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`ℹ️  Directory ${dirPath} doesn't exist, skipping...`)
    return
  }

  try {
    if (isWindows) {
      // On Windows, try multiple approaches to handle EPERM issues
      try {
        execSync(`rmdir /s /q "${dirPath}"`, { stdio: 'inherit' })
        console.log(`✅ Removed ${dirPath} using Windows rmdir`)
      } catch (error) {
        console.log(`⚠️  Windows rmdir failed, trying alternative method...`)
        // Fallback to Node.js recursive removal
        fs.rmSync(dirPath, { recursive: true, force: true })
        console.log(`✅ Removed ${dirPath} using Node.js rmSync`)
      }
    } else {
      fs.rmSync(dirPath, { recursive: true, force: true })
      console.log(`✅ Removed ${dirPath}`)
    }
  } catch (error) {
    if (error.code === 'EPERM' || error.code === 'EBUSY') {
      console.log(`⚠️  Permission error, attempting to fix permissions...`)
      
      if (isWindows) {
        try {
          // Try to take ownership and remove readonly attributes
          execSync(`takeown /f "${dirPath}" /r /d y`, { stdio: 'inherit' })
          execSync(`attrib -r "${dirPath}\\*.*" /s`, { stdio: 'inherit' })
          execSync(`rmdir /s /q "${dirPath}"`, { stdio: 'inherit' })
          console.log(`✅ Fixed permissions and removed ${dirPath}`)
        } catch (winError) {
          console.error(`❌ Failed to remove ${dirPath}:`, winError.message)
        }
      }
    } else {
      console.error(`❌ Failed to remove ${dirPath}:`, error.message)
    }
  }
}

/**
 * Kill any running Node.js processes that might lock files
 */
function killNodeProcesses() {
  if (isWindows) {
    try {
      execSync('taskkill /F /IM node.exe /T', { stdio: 'pipe' })
      console.log('🔄 Killed running Node.js processes')
    } catch (error) {
      console.log('ℹ️  No Node.js processes to kill')
    }
  } else {
    try {
      execSync('pkill -f "next"', { stdio: 'pipe' })
      console.log('🔄 Killed running Next.js processes')
    } catch (error) {
      console.log('ℹ️  No Next.js processes to kill')
    }
  }
}

/**
 * Verify critical manifest files exist after build
 */
function verifyManifestFiles() {
  const manifestFiles = [
    path.join(nextDir, 'server', 'middleware-manifest.json'),
    path.join(nextDir, 'routes-manifest.json'),
    path.join(nextDir, 'prerender-manifest.json'),
    path.join(nextDir, 'build-manifest.json'),
  ]

  const missingFiles = []
  
  manifestFiles.forEach(file => {
    if (!fs.existsSync(file)) {
      missingFiles.push(file)
    }
  })

  if (missingFiles.length > 0) {
    console.log('❌ Missing critical manifest files:')
    missingFiles.forEach(file => console.log(`   - ${file}`))
    return false
  }

  console.log('✅ All critical manifest files are present')
  return true
}

/**
 * Main cleanup and build process
 */
async function main() {
  try {
    // Step 1: Kill running processes
    killNodeProcesses()
    
    // Step 2: Wait a moment for processes to fully terminate
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Step 3: Remove build artifacts
    console.log('🗑️  Cleaning build artifacts...')
    await safeRemoveDir(nextDir)
    await safeRemoveDir(path.join(projectRoot, 'node_modules', '.cache'))
    
    // Step 4: Clean npm cache if needed
    console.log('🧽 Clearing npm cache...')
    try {
      execSync('npm cache clean --force', { stdio: 'inherit' })
    } catch (error) {
      console.log('⚠️  Could not clean npm cache:', error.message)
    }
    
    // Step 5: Reinstall dependencies
    console.log('📦 Reinstalling dependencies...')
    execSync('npm install', { stdio: 'inherit', cwd: projectRoot })
    
    // Step 6: Build the project
    console.log('🔨 Building project...')
    execSync('npm run build', { stdio: 'inherit', cwd: projectRoot })
    
    // Step 7: Verify manifest files
    console.log('🔍 Verifying manifest files...')
    const manifestsOk = verifyManifestFiles()
    
    if (!manifestsOk) {
      console.log('⚠️  Some manifest files are missing, but build completed.')
      console.log('   This might cause runtime issues. Try running the build again.')
    }
    
    console.log('🎉 Clean build process completed successfully!')
    
  } catch (error) {
    console.error('❌ Clean build process failed:', error.message)
    process.exit(1)
  }
}

// Run if called directly
if (require.main === module) {
  main()
}

module.exports = { safeRemoveDir, verifyManifestFiles }