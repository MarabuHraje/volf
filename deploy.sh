#!/bin/bash

# Deployment script pro Vercel
echo "🚀 Spouštím deployment na Vercel..."

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Instalujem Vercel CLI..."
    npm install -g vercel
fi

# Build check
echo "🔧 Kontrolujem build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build úspěšný"
    
    # Deploy to production
    echo "🌐 Nasazujem na produkci..."
    vercel --prod
    
    echo "🎉 Deployment dokončen!"
else
    echo "❌ Build selhal. Zkontrolujte chyby výše."
    exit 1
fi
