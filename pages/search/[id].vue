<template>
    <div class="">
        <NuxtLayout :name="layouts.header"></NuxtLayout>
        <section class="my-4 mx-9 md:mx-auto w-11/12">
            <div
                class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] grid-rows-[repeat(auto,550px)] gap-y-8 gap-6 my-4">
                <!-- <div v-for="item in hotelData" :key="item.id">
                    <Card :data="item"></Card>
                </div> -->
                <div v-for="(value, key) in Object.entries(hotelData.images)" :key="key">
                    <img :src="'/'+ value[1]" alt="" loading="lazy" class = "w-full h-full object-cover object-top">
                    <p v-if="value[1]"></p>
                </div>
            </div>
        </section>
        <NuxtLayout :name="layouts.footer"></NuxtLayout>
    </div>
</template>
<script>
import json from '@/assets/data/category.json';
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