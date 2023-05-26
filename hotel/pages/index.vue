<template>
    <div class="mt-0">
        <NuxtLayout :name="layouts.header">

        </NuxtLayout>
        <div class="w-11/12 mx-auto">
            <section>
                <div class="my-12 relative">
                    <img src="/images/banner-1.jpg" alt="" class="w-full h-[400px] object-cover">
                    <div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-4">
                        <img src="/images/airbnb-logo.png" alt="" class="w-[400px] mx-auto">
                        <p class="font-[500] text-white text-center text-lg">Discover unique accommodations and
                            unforgettable
                            experiences around the world with Airbnb. Find your perfect stay and create lasting memories.
                        </p>
                        <button class="bg-white p-2 px-8 text-lg font-bold text-black btn relative mx-auto w-fit">Discover
                            more</button>
                    </div>
                </div>
            </section>
            <section>
                <h3 class="text-4xl font-bold">Paket inap hotel</h3>
                <p class="text-base font-[500] text-black/[0.8]">Our top recomendation for your adventure</p>
                <div
                    class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid-rows-[repeat(auto,550px)] gap-y-8 gap-6 my-4">
                    <PackCard image="pack-1.jpg" title="Lyon, Prancis" city="CAYMAN ISLANDS" price="700.000" rating="4.8">
                    </PackCard>
                    <PackCard image="pack-2.jpg" title="Lyon, Prancis" city="URUGUAY" price="1.000.000" rating="4.7">
                    </PackCard>
                    <PackCard image="pack-3.jpg" title="Lyon, Prancis" city="ICELAND" price="800.000" rating="5.0">
                    </PackCard>
                    <PackCard image="pack-4.jpg" title="Lyon, Prancis" city="MONGOLIA" price="750.000" rating="4.9">
                    </PackCard>
                    <PackCard image="pack-5.jpg" title="Lyon, Prancis" city="BAHRAIN" price="850.000" rating="4.5">
                    </PackCard>
                    <PackCard image="pack-6.jpg" title="Lyon, Prancis" city="BOSNIA DAN HERZEGOVINA" price="900.000"
                        rating="4.6"></PackCard>
                </div>
            </section>
            <section>
                <h3 class="text-4xl font-bold">Temukan berbagai macam hotel</h3>
                <p class="text-base font-[500] text-black/[0.8]">Top rekomendasi kami untuk memulai journey perjalanan kamu
                </p>
                <div
                    class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] grid-rows-[repeat(auto,550px)] gap-y-8 gap-6 my-4">
                    <div v-for="item in hotelData" :key="item.id">
                        <Card :data="item"></Card>
                    </div>
                </div>

            </section>
            <section>
                <h3 class="text-4xl font-bold">Apa yang anda cari ?</h3>
                <p class="text-base font-[500] text-black/[0.8]">Bantu kami untuk menemukan yang anda inginkan</p>
                <div
                    class="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] grid-rows-[repeat(auto,550px)] gap-y-8 gap-6 my-4 items-center">
                    <div class="relative group overflow-hidden">
                        <img src="/images/category-1.jpg" alt=""
                            class="w-full h-full rounded group-hover:scale-[1] scale-[1.1] transition duration-500 ease-in-out">
                        <div
                            class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/[0.8] to-black/[0] p-4 rounded">
                            <h4 class="text-white text-xl">Pemandangan indah</h4>
                            <p class="text-white/[0.8] text-base">Hotel dengan pemandangan indah dan terbuka</p>
                        </div>
                    </div>
                    <div class="relative group overflow-hidden">
                        <img src="/images/category-2.jpg" alt=""
                            class="w-full h-full rounded group-hover:scale-[1] scale-[1.1] transition duration-500 ease-in-out">
                        <div
                            class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/[0.8] to-black/[0] p-4 rounded">
                            <h4 class="text-white text-xl">Modern</h4>
                            <p class="text-white/[0.8] text-base">Kamar hotel dengan design yang modern</p>
                        </div>
                    </div>
                    <div class="relative group overflow-hidden">
                        <img src="/images/category-3.jpg" alt=""
                            class="w-full h-full rounded group-hover:scale-[1] scale-[1.1] transition duration-500 ease-in-out">
                        <div
                            class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/[0.8] to-black/[0] p-4 rounded">
                            <h4 class="text-white text-xl">Klasik sederhana</h4>
                            <p class="text-white/[0.8] text-base">Design kamar hotel dengan gaya klasik</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="flex items-center justify-between img_linear_order p-8 bg-no-repeat bg-cover">
                    <div class="flex flex-row-reverse gap-8 lg:flex-row-reverse flex-col">
                        <div class="">
                            <h4 class="text-white text-4xl font-bold mb-4">Buat liburan anda menjadi lebih menarik</h4>
                            <p class="text-white font-[500]">Nikmati liburan yang tak terlupakan dengan Airbnb! Dalam
                                pencarian petualangan dan pengalaman unik, Airbnb adalah mitra terbaik untuk membuat liburan
                                Anda menjadi lebih menarik. Dengan beragam pilihan akomodasi yang unik dan lokasi yang
                                menakjubkan di seluruh dunia, Airbnb memberikan pengalaman yang tak terlupakan bagi para
                                pelancong yang mencari petualangan yang sesuai dengan gaya hidup mereka.</p>
                        </div>
                        <div class="w-full sm:w-[400px] lg:w-[600px] block p-8 rounded bg-white flex-grow">
                            <h4 class="text-4xl font-bold">Pesan kamar anda</h4>
                            <form action="" method="post" class="flex flex-col gap-4 mt-8 font-[500]">
                                <div class="flex items-center gap-4 flex-col md:flex-row">
                                    <div class="flex flex-col w-full gap-2">
                                        <label for="check_in">Check in</label>
                                        <input type="date" name="" id="check_in"
                                            class="border-2 border-black/[0.1] rounded px-2 py-2 w-full">
                                    </div>
                                    <div class="flex flex-col w-full gap-2">
                                        <label for="check_out">Check out</label>
                                        <input type="date" name="" id="check_out"
                                            class="border-2 border-black/[0.1] rounded px-2 py-2 w-full">
                                    </div>
                                </div>
                                <div class="flex flex-col gap-2">
                                    <label for="">Email</label>
                                    <input type="text" class="border-2 border-black/[0.1] rounded px-2 py-2"
                                        placeholder="Email anda...">
                                </div>
                                <div class="flex flex-col gap-2">
                                    <label for="">Nama anda</label>
                                    <input type="text" class="border-2 border-black/[0.1] rounded px-2 py-2"
                                        placeholder="Nama anda...">
                                </div>
                                <button class="bg-sky-500 p-2 rounded text-white px-4 py-3">Pesan</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <NuxtLayout :name="layouts.footer">

        </NuxtLayout>
    </div>
</template>
<script>
import json from '@/assets/data/hotel.json';
export default {
    data() {
        return {
            layouts: {
                header: "header",
                footer: "footer"
            },
            hotelData: json,
        }
    }
}
</script>