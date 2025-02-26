<template>
    <section class="p-6 md:p-12 text-white bg-gradient-to-b from-black/50 via-darkPurple/20 to-black/50 backdrop-filter backdrop-blur-sm">
        <h2 class="text-2xl md:text-3xl font-bold mb-6 text-center animate-fadeIn text-gradient">Features</h2>
        <div class="flex flex-wrap justify-center">
            <div class="w-full flex flex-wrap justify-center">
                <div class="feature-box animate-fadeInRight w-full sm:w-auto">
                    <i class="fas fa-rocket fa-2x mb-4 text-purple-400"></i>
                    <h3 class="text-xl md:text-2xl font-bold mb-2 text-center">Rocket Speed</h3>
                    <p class="text-md md:text-lg text-center text-purple-200">Experience unparalleled speed and performance.</p>
                </div>
                <div class="feature-box animate-fadeInRight delay-2 w-full sm:w-auto">
                    <i class="fas fa-galaxy fa-2x mb-4 text-purple-400"></i>
                    <h3 class="text-xl md:text-2xl font-bold mb-2 text-center">Galaxy of Features</h3>
                    <p class="text-md md:text-lg text-center text-purple-200">Unlock a myriad of features designed to enhance your workflow.</p>
                </div>
                <div class="feature-box animate-fadeInRight delay-4 w-full sm:w-auto">
                    <i class="fas fa-star fa-2x mb-4 text-purple-400"></i>
                    <h3 class="text-xl md:text-2xl font-bold mb-2 text-center">Stellar Quality</h3>
                    <p class="text-md md:text-lg text-center text-purple-200">Delivering top-notch quality and reliability.</p>
                </div>
            </div>
            <div class="w-full flex flex-wrap justify-center">
                <div class="feature-box animate-fadeInRight w-full sm:w-auto">
                    <i class="fas fa-bell fa-2x mb-4 text-purple-400"></i>
                    <h3 class="text-xl md:text-2xl font-bold mb-2 text-center">Instant Notifications</h3>
                    <p class="text-md md:text-lg text-center text-purple-200">Stay informed with real-time updates and alerts.</p>
                </div>
                <div class="feature-box animate-fadeInRight delay-2 w-full sm:w-auto">
                    <i class="fas fa-lightbulb fa-2x mb-4 text-purple-400"></i>
                    <h3 class="text-xl md:text-2xl font-bold mb-2 text-center">Innovative Solutions</h3>
                    <p class="text-md md:text-lg text-center text-purple-200">Creative and innovative solutions at your fingertips.</p>
                </div>
                <div class="feature-box animate-fadeInRight delay-4 w-full sm:w-auto">
                    <i class="fas fa-music fa-2x mb-4 text-purple-400"></i>
                    <h3 class="text-xl md:text-2xl font-bold mb-2 text-center">Symphony of Design</h3>
                    <p class="text-md md:text-lg text-center text-purple-200">Harmonize your design with our intuitive tools.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.feature-box {
    background-color: rgba(10, 10, 10, 0.6);
    border: 1px solid rgba(75, 0, 130, 0.4);
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 4px 15px rgba(75, 0, 130, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 16px;
    width: 250px;
    height: 220px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    backdrop-filter: blur(4px);
    position: relative;
    overflow: hidden;
}

@media (max-width: 640px) {
    .feature-box {
        width: 100%;
        max-width: 320px;
        height: auto;
        min-height: 180px;
        padding: 20px;
    }
}

.feature-box::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(138, 43, 226, 0.8), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
}

.feature-box:hover::before {
    transform: translateX(100%);
}

.feature-box:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(138, 43, 226, 0.5);
    border-color: rgba(147, 112, 219, 0.6);
}

@media (max-width: 640px) {
    .feature-box:hover {
        transform: translateY(-5px);
    }
}
</style>
