<template>
  <div class="mx-9">
    <main class="w-full max-w-[1100px] mx-auto my-4" v-if="hotelData" :key="hotelData.id">
      <div class="my-4 flex flex-col gap-4">
        <h2 class="font-[500] text-2xl">{{ hotelData.hotel_name }}</h2>
        <div class="flex items-center gap-2 text-[14px] justify-between">
          <div class="flex items-center gap-2">
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <p>{{ hotelData.rating }}</p>
            </div>
            <i class="fa-solid fa-circle text-[3px]"></i>
            <p class="underline">23 Ulasan</p>
            <i class="fa-solid fa-circle text-[3px]"></i>
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-medal"></i>
              <p>Hos Teladan</p>
            </div>
            <i class="fa-solid fa-circle text-[3px]"></i>
            <p class="underline">Seddon, Victoria, Australia</p>
          </div>
          <div class="flex items-center gap-4">
            <div class="flex items-center text-[14px] font-[500] gap-2">
              <i class="fa-solid fa-arrow-up-from-bracket"></i>
              <p class="underline">Bagikan</p>
            </div>
            <div class="flex items-center text-[14px] font-[500] gap-2">
              <i class="fa-regular fa-heart"></i>
              <p class="underline">Simpan</p>
            </div>
          </div>
        </div>
      </div>
      <div class="my-8">
        <img :src="hotelData.img" alt="" class="w-full rounded-xl h-[400px]">
      </div>
      <div class="flex gap-16">
        <div class="flex-grow">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl font-[500]">Kamar dirumah. Tuan rumah: {{ hotelData.owner_name }}</h3>
            <img :src="hotelData.owner_img" alt="" class="w-[40px] object-cover object-top rounded-full">
          </div>
          <div class="flex flex-col gap-2">
            <div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid-rows-[repeat(auto,550px)] gap-4 my-4">
              <div v-for="(value, key) in hotelData.facility" :key="key"
                class="flex py-5 px-6 border-[1px] border-black/[0.2] rounded-lg text-left gap-4 items-center justify-start text-[14px] font-[500]">
                <span v-html="value"></span>{{ key }}
              </div>
            </div>
            <hr class="my-4 w-full">
            <div class="flex flex-col gap-8">
              <div v-for="(value, key) in hotelData.benefit" :key="key"
                class="flex rounded-lg text-left gap-4 items-center justify-start text-[16px] font-[500]">
                <span v-html="value" class="w-[20px] text-center"></span>{{ key }}
              </div>
            </div>
            <hr class="my-4 w-full">
            <div class="">
              <h3 class="font-[500] text-2xl">Tentang tempat ini</h3>
              <p class="text-[15px] my-2">
                Tempat ini, {{ hotelData.hotel_name }}, adalah sebuah hotel mewah yang terletak di {{ hotelData.city }}.
                Dengan
                pemandangan yang menakjubkan dan suasana yang tropis, hotel ini menawarkan pengalaman menginap yang tak
                terlupakan.
                <br>
                <br>
                Dengan fasilitas kamar yang lengkap, termasuk tempat tidur ganda yang nyaman dan akses gratis WiFi, tamu
                dapat menikmati kenyamanan dan koneksi internet yang lancar selama menginap di sini. Selain itu, hotel ini
                juga menyediakan layanan check-in mandiri untuk mempermudah tamu dalam proses pendaftaran.
                <br>
                <br>
                Dikelola oleh {{ hotelData.owner_name }}, hotel ini menawarkan harga yang terjangkau dengan kualitas yang
                tinggi. Dengan
                rating {{ hotelData.rating }}, {{ hotelData.hotel_name }} menjadi pilihan yang populer bagi wisatawan yang
                mencari penginapan yang mewah dan
                memenuhi standar kualitas tinggi.
              </p>
            </div>
            <hr class="my-4 w-full">
            <div class="">
              <h3 class="font-[500] text-2xl">Fasilitas yang ditawarkan</h3>
              <div class="grid grid-cols-2 gap-2 my-4">
                <div v-for="(value, key) in hotelData.facility" :key="key"
                  class="flex rounded-lg text-left gap-4 items-center justify-start text-[15px] font-[400] text-center">
                  <span v-html="value" class="w-[20px] text-center"></span>{{ key }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <form action="" class="p-4 rounded-lg border-[1px] border-black/[0.1] shadow-md w-[380px] flex flex-col gap-4">
            <div class="flex items-center justify-between">
              <div class="">
                <h3 class="text-xl font-bold">Rp. 920.000 <span class="font-[500] text-black/[0.8] text-base">malam</span>
                </h3>
              </div>
              <div class="flex items-center gap-2">
                <div class="flex items-center gap-2 text-[14px] font-[500]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <p>{{ hotelData.rating }}</p>
                </div>
                <i class="fa-solid fa-circle text-[3px]"></i>
                <p class="text-[12px] underline">23 Ulasan</p>
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <div class="">
                <div class="flex">
                  <input type="date" name="" id="" class="p-3 rounded-ss-lg border-[1px] border-black/[0.4] w-full"
                    value="today">
                  <input type="date" name="" id="" class="p-3 rounded-se-lg border-[1px] border-black/[0.4] w-full"
                    value="today">
                </div>
                <div class="">
                  <select name="person" id=""
                    class="p-3 rounded-ee-xl rounded-es-lg border-[1px] border-black/[0.4] w-full text-[14px] font-[400]"
                    placeholder="Jumlah Tamu">
                    <option value="1">1 Tamu</option>
                    <option value="2">2 Tamu</option>
                    <option value="3">3 Tamu</option>
                    <option value="4">4 Tamu</option>
                  </select>
                </div>
              </div>
              <button
                class="bg-[#E01461] w-full p-3 rounded-md text-white text-center text-[15px] font-bold">Pesan</button>
            </div>
            <div class="flex flex-col gap-4">
              <p class="text-[14px] text-center">Anda belum dikenakan biaya</p>
              <div class="flex flex-col gap-2">
                <div class="flex flex-col gap-4">
                  <div class="flex items-center justify-between text-[15px]">
                    <p class="underline">Rp. 920.000 x 7 malam</p>
                    <p>Rp. 6.440.000</p>
                  </div>
                  <div class="flex items-center justify-between text-[15px]">
                    <p class="underline">Biaya layanan Airbnb</p>
                    <p>Rp. 1.000.000</p>
                  </div>
                </div>
                <hr class="my-4">
                <div class="flex items-center justify-between text-[16px] font-bold">
                  <h4>Total sebelum pajak</h4>
                  <p>Rp. 7.440.000</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
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
      hotel: json,
    }
  },
  computed: {
    hotelData() {
      const itemId = this.$route.params.id; // Retrieve the ID from the URL
      return this.hotel.find(item => item.id.toString() === itemId); // Find the matching item based on the ID
    },
  }
}
</script>