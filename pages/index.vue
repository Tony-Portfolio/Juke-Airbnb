<template>
    <div class="mt-0">
        <NuxtLayout :name="layouts.header">

        </NuxtLayout>
        <div class="w-11/12 mx-auto">
            <Hero/>
            <Package/>
            <section class = "my-2">
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
            <Explore/>
            <Order/>
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