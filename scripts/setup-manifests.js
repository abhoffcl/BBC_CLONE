#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const projectRoot = path.resolve(__dirname, '..')
const nextDir = path.join(projectRoot, '.next')
const serverDir = path.join(nextDir, 'server')

console.log('🔧 Setting up critical manifest files...')

// Ensure directories exist
if (!fs.existsSync(nextDir)) {
  fs.mkdirSync(nextDir, { recursive: true })
  console.log('✅ Created .next directory')
}

if (!fs.existsSync(serverDir)) {
  fs.mkdirSync(serverDir, { recursive: true })
  console.log('✅ Created .next/server directory')
}

// Create middleware-manifest.json
const middlewareManifest = {
  "sortedMiddleware": [
    {
      "name": "middleware",
      "page": "/",
      "matchers": [
        {
          "regexp": "^(?:\\/(?!api|_next\\/static|_next\\/image|favicon\\.ico).*)",
          "locale": false,
          "has": undefined,
          "missing": undefined
        }
      ]
    }
  ],
  "middleware": {
    "/": {
      "name": "middleware",
      "page": "/",
      "matchers": [
        {
          "regexp": "^(?:\\/(?!api|_next\\/static|_next\\/image|favicon\\.ico).*)",
          "locale": false,
          "has": undefined,
          "missing": undefined
        }
      ]
    }
  },
  "functions": {},
  "version": 2
}

fs.writeFileSync(
  path.join(serverDir, 'middleware-manifest.json'),
  JSON.stringify(middlewareManifest, null, 2)
)
console.log('✅ Created middleware-manifest.json')

// Create routes-manifest.json
const routesManifest = {
  "version": 3,
  "pages404": true,
  "basePath": "",
  "redirects": [],
  "rewrites": [],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        }
      ]
    }
  ],
  "dynamicRoutes": [
    {
      "page": "/article/[slug]",
      "regex": "^/article/([^/]+?)(?:/)?$",
      "namedRegex": "^/article/(?<slug>[^/]+?)(?:/)?$",
      "routeKeys": {
        "slug": "slug"
      }
    }
  ],
  "staticRoutes": [
    "/", "/arts", "/business", "/culture", "/earth", "/health", 
    "/innovation", "/live", "/news", "/politics", "/register", 
    "/signin", "/sport", "/technology", "/travel", "/uk", "/video", "/world"
  ].map(route => ({
    "page": route,
    "regex": `^${route === '/' ? '/' : route}(?:/)?$`,
    "namedRegex": `^${route === '/' ? '/' : route}(?:/)?$`,
    "routeKeys": {}
  })),
  "dataRoutes": [],
  "i18n": null
}

fs.writeFileSync(
  path.join(nextDir, 'routes-manifest.json'),
  JSON.stringify(routesManifest, null, 2)
)
console.log('✅ Created routes-manifest.json')

// Create prerender-manifest.json
const prerenderManifest = {
  "version": 4,
  "routes": {},
  "dynamicRoutes": {},
  "notFoundRoutes": [],
  "preview": {
    "previewModeId": "development-preview-mode",
    "previewModeSigningKey": "development-signing-key",
    "previewModeEncryptionKey": "development-encryption-key"
  }
}

fs.writeFileSync(
  path.join(nextDir, 'prerender-manifest.json'),
  JSON.stringify(prerenderManifest, null, 2)
)
console.log('✅ Created prerender-manifest.json')

// Create build-manifest.json
const buildManifest = {
  "devFiles": [],
  "ampDevFiles": [],
  "polyfillFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "pages": {
    "/": ["static/chunks/webpack.js", "static/chunks/main-app.js", "static/chunks/app/page.js"],
    "/_app": ["static/chunks/webpack.js", "static/chunks/main-app.js"],
    "/_error": ["static/chunks/webpack.js", "static/chunks/main-app.js", "static/chunks/app/error.js"]
  },
  "ampFirstPages": []
}

fs.writeFileSync(
  path.join(nextDir, 'build-manifest.json'),
  JSON.stringify(buildManifest, null, 2)
)
console.log('✅ Created build-manifest.json')

// Create app-build-manifest.json
const appBuildManifest = {
  "pages": {
    "/": ["static/chunks/webpack.js", "static/chunks/main-app.js", "static/chunks/app/page.js"]
  }
}

fs.writeFileSync(
  path.join(nextDir, 'app-build-manifest.json'),
  JSON.stringify(appBuildManifest, null, 2)
)
console.log('✅ Created app-build-manifest.json')

// Create react-loadable-manifest.json
fs.writeFileSync(
  path.join(nextDir, 'react-loadable-manifest.json'),
  '{}'
)
console.log('✅ Created react-loadable-manifest.json')

console.log('')
console.log('🎉 All critical manifest files have been created!')
console.log('   You can now start the development server with: npm run dev')
console.log('')