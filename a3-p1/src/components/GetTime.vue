<template>
  <div id="intro" style="text-align: center">
    <h1>{{ blah }}</h1>
  </div>
</template>

<script>
import { format } from "date-fns";
export default {
  data: () => ({
    blah: "",
  }),
  methods: {
    getNow: function () {
      this.blah = format(new Date(), "yyyy-MM-dd hh:mm:ss");
    },
  },
  mounted() {
    this.getNow();
  },
};
</script>

<!-- https://api.openweathermap.org/data/2.5/weather?lat=43.19511533534375&lon=-80.38432794005911&appid=239c2008ec8acfe089c3883b7bb91425 -->