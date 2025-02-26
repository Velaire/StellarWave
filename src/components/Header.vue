<template>
    <div>
      <div class="block lg:hidden fixed top-6 right-6 z-50" @click="toggleMobileMenu">
        <button class="mobile-menu-button p-2 rounded-md text-white" aria-label="Menu">
          <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
  
      <nav class="header flex justify-between items-center p-6 border-b border-purple-900/30 bg-black/40 backdrop-filter backdrop-blur-lg fixed top-0 left-0 right-0 z-40">
        <div class="text-2xl md:text-3xl font-bold text-white flex items-center">
          <img src="/moon.png" alt="StellarWave Logo" class="h-8 md:h-10 mr-2" />
          <span class="text-gradient">StellarWave</span>
        </div>
        <ul class="hidden lg:flex space-x-8">
          <li><a href="#" class="nav-item">Home</a></li>
          <li><a href="#features" class="nav-item">Features</a></li>
          <li><a href="#faqs" class="nav-item">FAQ</a></li>
          <li><a href="#" class="nav-item">Contact</a></li>
          <li><button class="signup-button" @click="GetSourceCode">Get Source Code</button></li>
        </ul>
      </nav>
  
      <div v-if="mobileMenuOpen"
           class="fixed inset-0 bg-black/95 backdrop-filter backdrop-blur-lg z-40 flex flex-col items-center justify-center">
        <ul class="flex flex-col items-center space-y-8">
          <li><a href="#" class="text-xl text-white font-bold" @click="closeMobileMenu">Home</a></li>
          <li><a href="#features" class="text-xl text-white font-bold" @click="closeMobileMenu">Features</a></li>
          <li><a href="#faqs" class="text-xl text-white font-bold" @click="closeMobileMenu">FAQ</a></li>
          <li><a href="#" class="text-xl text-white font-bold" @click="closeMobileMenu">Contact</a></li>
          <li><button class="signup-button text-lg px-8 py-3 mt-4" @click="joinTheWave">Get Source Code</button></li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        mobileMenuOpen: false
      }
    },
    methods: {
      toggleMobileMenu() {
        this.mobileMenuOpen = !this.mobileMenuOpen;
        // Prevent scrolling when menu is open
        if (this.mobileMenuOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      },
      closeMobileMenu() {
        this.mobileMenuOpen = false;
        document.body.style.overflow = '';
      },
      GetSourceCode() {
        window.location.href = 'https://github.com/Velaire/StellarWave';
      },
      joinTheWave() {
        window.location.href = 'https://github.com/Velaire/StellarWave';
      }
    }
  }
  </script>
  
  <style scoped>
  .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 40;
  }
  
  .mobile-menu-button {
      background-color: rgba(75, 0, 130, 0.4);
      border: 1px solid rgba(138, 43, 226, 0.4);
      box-shadow: 0 0 10px rgba(138, 43, 226, 0.3);
      transition: all 0.3s ease;
  }
  
  .mobile-menu-button:hover,
  .mobile-menu-button:focus {
      background-color: rgba(106, 13, 173, 0.6);
      box-shadow: 0 0 15px rgba(138, 43, 226, 0.5);
  }
  
  .text-gradient {
      background: linear-gradient(90deg, #fff, #c77dff);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
  }
  
  .nav-item {
      position: relative;
      display: inline-block;
      padding-bottom: 4px;
      color: white;
      font-weight: bold;
      transition: color 0.3s ease-in-out;
  }
  
  .nav-item::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      height: 2px;
      width: 0;
      background: linear-gradient(90deg, #c77dff, #8a2be2);
      transition: all 0.3s ease-in-out;
  }
  
  .nav-item:hover {
      color: #c77dff;
  }
  
  .nav-item:hover::after {
      width: 100%;
      left: 0;
  }
  
  .signup-button {
      padding: 8px 16px;
      background: linear-gradient(45deg, #4b0082, #6a0dad);
      color: white;
      font-weight: bold;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      box-shadow: 0 0 15px rgba(138, 43, 226, 0.5);
      position: relative;
      overflow: hidden;
      z-index: 1;
  }
  
  .signup-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, #6a0dad, #9370db);
      transition: left 0.3s ease-in-out;
      z-index: -1;
  }
  
  .signup-button:hover::before {
      left: 0;
  }
  
  .signup-button:hover {
      transform: scale(1.05);
      box-shadow: 0 0 20px rgba(138, 43, 226, 0.8);
  }
  
  html {
    scroll-behavior: smooth;
  }
  </style>
  