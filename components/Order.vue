<template>
    <div class="my-8">
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
</template>