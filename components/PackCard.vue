<template>
    <div>
        <div class="flex flex-col gap-2">
            <div class="">
                <img :src="/images/ + image" alt="" class="w-full rounded-lg h-[full]">
            </div>
            <div class="flex flex-col">
                <div class="flex items-center justify-between font-[500]">
                    <h3 class="text-sm font-[500] text-black/[0.6]">{{ city }}</h3>
                </div>
                <div class="">
                    <h3 class="text-black/[1] font-[600] text-lg">2 Malam Paket Exclusive</h3>
                    <p class="text-black/[0.6] font-[500] text-[14px]">Rp. {{ price }} per malam</p>
                </div>
                <div class="flex gap-2 items-center text-[14px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <p>{{ rating }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup>
const props = defineProps({
    title: String,
    image: String,
    link: String,
    date: String,
    city: String,
    price: String,
    rating: String,
})
</script>