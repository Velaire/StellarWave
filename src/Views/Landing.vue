<template>
    <div class="min-h-screen bg-black">
        <!-- Enhanced Background Elements -->
        <div class="fixed inset-0 overflow-hidden">
            <!-- Primary gradient background -->
            <div class="absolute inset-0 bg-gradient-to-br from-black via-darkPurple to-deepPurple opacity-80"></div>

            <!-- Animated gradient orbs -->
            <div
                class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-midPurple to-lightPurple blur-3xl opacity-20 animate-pulse">
            </div>
            <div class="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-deepPurple to-midPurple blur-3xl opacity-15 animate-pulse"
                style="animation-delay: 1s;"></div>

            <!-- Star field effect -->
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-fixed"
                style="background-size: 20px 20px;"></div>
        </div>

        <!-- Glass morphism overlay for depth -->
        <div class="fixed inset-0 backdrop-blur-sm bg-gradient-to-b from-black/10 to-deepPurple/10 z-0"></div>

        <!-- Content container -->
        <div class="relative z-10">
            <Header />

            <!-- Hero Section - Enhanced with improved shadows and lighting -->
            <section
                class="flex flex-col md:flex-row items-center p-6 md:p-12 mt-24 bg-dark/30 backdrop-filter backdrop-blur-sm">
                <div class="w-full md:w-1/2 flex justify-center">
                    <img src="/night-imr-purpl.jfif" alt="StellarWave Hero Image"
                        class="w-4/5 md:w-full lg:w-1/2 rounded-lg shadow-glow animate-zoomIn" />
                </div>
                <div class="w-full md:w-1/2 text-white mt-8 md:mt-0 md:ml-12 text-center md:text-left">
                    <h1 class="text-3xl md:text-5xl font-bold mb-2 animate-fadeIn text-gradient">Welcome to StellarWave
                    </h1>
                    <p class="text-purple-300 mb-4 animate-fadeIn">Dive into the next generation of web design and
                        development.</p>
                    <p class="text-md md:text-lg text-gray-300 animate-fadeIn delay-2">Experience a universe of
                        possibilities with our cutting-edge solutions and stellar design.</p>
                </div>
            </section>

            <section id="features">
                <Features />
            </section>

            <section id="faqs">
                <Faqs />
            </section>

            <!-- CTA Section for Mobile -->
            <section class="p-6 py-12 bg-gradient-to-r from-deepPurple to-darkPurple text-center block md:hidden">
                <h2 class="text-2xl font-bold mb-4 text-white">Unlock the Source Code!</h2>
                <p class="text-purple-200 mb-6">Discover a universe of possibilities today.</p>
                <button class="signup-button text-lg px-8 py-3" @click="GetSourceCode">Get Source Code</button>
            </section>


            <!-- Footer - Enhanced with gradient border -->
            <footer
                class="p-6 text-center text-purple-300 border-t border-purple-900/30 bg-black/80 backdrop-filter backdrop-blur-sm">
                <div class="mb-4">
                    <div class="text-gradient text-lg md:text-xl font-bold mb-2">StellarWave</div>
                    <p class="text-xs md:text-sm text-purple-400">Exploring the cosmos of web development</p>
                </div>
                <div class="text-xs md:text-sm">&copy; 2025 StellarWave. All rights reserved.</div>
            </footer>
        </div>
    </div>
</template>

<script>
import Features from '../components/Features.vue';
import Faqs from '../components/Faqs.vue';
import Header from '../components/Header.vue';

export default {
    components: {
        Header,
        Features,
        Faqs
    },
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
        }
    }
}
</script>

<style scoped>
html,
body {
    background-color: #000000;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    color: white;
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

.shadow-glow {
    box-shadow: 0 0 25px rgba(138, 43, 226, 0.6);
    transition: box-shadow 0.3s ease;
}

.shadow-glow:hover {
    box-shadow: 0 0 35px rgba(138, 43, 226, 0.8);
}

.delay-2 {
    animation-delay: 0.4s;
}

.delay-4 {
    animation-delay: 0.8s;
}

@keyframes gradientShift {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>
