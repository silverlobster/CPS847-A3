<template>
  <GetTime />
  <GetWeather />
</template>

<script>
import GetTime from "./GetTime.vue";
import GetWeather from "./GetWeather.vue";

export default {
  name: "HomePage",
  components: {
    GetTime,
    GetWeather,
  },
};
</script>
