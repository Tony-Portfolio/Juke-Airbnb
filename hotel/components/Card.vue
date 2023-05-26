<template>
    <div>
        <div class="flex flex-col gap-2">
            <NuxtLink :to="/hotel/ + data.id">
                <div class="relative">
                    <img :src="data.img" alt="" class="w-[full] rounded-lg h-[full]">
                    <div class="absolute bottom-[10px] left-[10px] bg-white w-[60px] h-[70px] rounded-se-lg rounded-ee-lg">
                        <div class="flex items-center justify-center h-full h-full relative">
                            <img :src="data.owner_img" alt=""
                                class="w-[40px] h-[40px] object-cover object-top rounded-full">
                            <div class="absolute border-l-[1px] border-black/[0.2] top-0 left-[5px] h-full w-full"></div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="flex items-center justify-between font-[500]">
                        <h3 class="">{{ data.hotel_name }}</h3>
                        <div class="flex gap-2 items-center text-[14px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            <p>{{ data.rating }}</p>
                        </div>
                    </div>
                    <div class="">
                        <p class="text-black/[0.6] font-[500] text-[14px]">Menginap di tempat {{ data.owner_name }}</p>
                        <p class="text-black/[0.6] font-[500] text-[14px]">{{ data.night }}</p>
                        <p class="text-black/[0.6] text-[15px] font-[500] my-2"><span class="text-black">Rp. {{ data.price.toLocaleString()
                        }}</span> malam</p>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
    
<script setup>
const props = defineProps({
    data: Object,
})
</script>