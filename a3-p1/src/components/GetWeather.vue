<template>
  <div id="intro" style="text-align: center">
    <h1>Weather in Paris, ON is currently: {{ info }}°C</h1>
    <!-- <h1>{{ info }}</h1> -->
  </div>
</template>

<script>
const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=43.19511533534375&lon=-80.38432794005911&appid=239c2008ec8acfe089c3883b7bb91425&units=metric`;
export default {
  name: "DateComponent",
  data() {
    return {
      info: null,
    };
  },
  methods: {
    async fetchData() {
      const url = `${API_URL}`;
      this.fetched = await (await fetch(url)).json();
      this.info = this.fetched.main.temp;
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

