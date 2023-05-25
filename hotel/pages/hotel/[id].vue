<template>
  <div class="">
    <main class="w-10/12 mx-auto my-4" v-if="hotelData" :key="hotelData.id">
      <p>{{ hotelData.id }}</p>
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