<template>
    <section class="p-6 md:p-12 text-white bg-gradient-to-b from-black/90 to-black/70">
        <h2 class="text-2xl md:text-3xl font-bold mb-6 text-center animate-fadeIn text-gradient">Frequently
            Asked Questions</h2>
        <div class="space-y-4">
            <div class="faq-box animate-fadeInLeft">
                <h3 class="text-xl md:text-2xl font-bold mb-2">What is StellarWave?</h3>
                <p class="text-md md:text-lg text-purple-200">StellarWave is a cutting-edge web design and
                    development platform offering innovative solutions for modern needs.</p>
            </div>
            <div class="faq-box animate-fadeInLeft delay-2">
                <h3 class="text-xl md:text-2xl font-bold mb-2">Is StellarWave opensource ?</h3>
                <p class="text-md md:text-lg text-purple-200">StellarWave is a completely free and open-source theme. Just click the button below labeled 'Get Source Code' to access it instantly.</p>
            </div>
            <div class="faq-box animate-fadeInLeft delay-4">
                <h3 class="text-xl md:text-2xl font-bold mb-2">What features does StellarWave offer?</h3>
                <p class="text-md md:text-lg text-purple-200">StellarWave offers a wide range of features
                    including real-time notifications, innovative tools, and top-notch performance.</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.faq-box {
    background-color: rgba(10, 10, 10, 0.6);
    border: 1px solid rgba(75, 0, 130, 0.4);
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 4px 15px rgba(75, 0, 130, 0.3);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    backdrop-filter: blur(4px);
}

@media (max-width: 640px) {
    .faq-box {
        padding: 16px;
    }
}

.faq-box:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 25px rgba(138, 43, 226, 0.5);
    border-color: rgba(147, 112, 219, 0.6);
}
</style>
