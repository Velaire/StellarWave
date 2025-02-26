#!/bin/bash

# Clone the repository
git clone https://github.com/Velaire/StellarWave.git

# Navigate to the project directory
cd StellarWave

# Install dependencies
npm install

# Run the development server
npm run dev

echo "StellarWave installed successfully! You can view it at http://localhost:5173/"
