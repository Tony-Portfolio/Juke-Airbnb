<template>
    <div class="">
        <section>
            <h3 class="text-4xl font-bold">Apa yang anda cari ?</h3>
            <p class="text-base font-[500] text-black/[0.8]">Bantu kami untuk menemukan yang anda inginkan</p>
            <div
                class="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] grid-rows-[repeat(auto,550px)] gap-y-8 gap-6 my-4 items-center">
                <div class="relative group overflow-hidden">
                    <img src="/images/category-1.jpg" alt=""
                        class="w-full h-full rounded group-hover:scale-[1] scale-[1.1] transition duration-500 ease-in-out">
                    <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/[0.8] to-black/[0] p-4 rounded">
                        <h4 class="text-white text-xl">Pemandangan indah</h4>
                        <p class="text-white/[0.8] text-base">Hotel dengan pemandangan indah dan terbuka</p>
                    </div>
                </div>
                <div class="relative group overflow-hidden">
                    <img src="/images/category-2.jpg" alt=""
                        class="w-full h-full rounded group-hover:scale-[1] scale-[1.1] transition duration-500 ease-in-out">
                    <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/[0.8] to-black/[0] p-4 rounded">
                        <h4 class="text-white text-xl">Modern</h4>
                        <p class="text-white/[0.8] text-base">Kamar hotel dengan design yang modern</p>
                    </div>
                </div>
                <div class="relative group overflow-hidden">
                    <img src="/images/category-3.jpg" alt=""
                        class="w-full h-full rounded group-hover:scale-[1] scale-[1.1] transition duration-500 ease-in-out">
                    <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/[0.8] to-black/[0] p-4 rounded">
                        <h4 class="text-white text-xl">Klasik sederhana</h4>
                        <p class="text-white/[0.8] text-base">Design kamar hotel dengan gaya klasik</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>