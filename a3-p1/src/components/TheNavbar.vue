<template>
  <div class="menu-bar">
    <div>
      <a><router-link to="/">Home Page</router-link></a>
    </div>
    <div>
      <a><router-link to="/AboutUs">AboutUs</router-link></a>
    </div>
    <div>
      <a><router-link to="/OurCustomers">OurCustomers</router-link></a>
    </div>
    <div>
      <a><router-link to="/AboutUs">AboutUs</router-link></a>
    </div>
  </div>
</template>

<style>
.menu-bar {
  height: 5em;
  width: 100%;
  background-color: rgb(27, 21, 58);

  display: flex;
  flex-wrap: nowrap;
}

.menu-bar > div {
  /* background-color: #ca4747; */
  color: white;
  width: 5em;
  margin: auto;
  text-align: center;
  /* line-height: 75px; */
  font-size: 20px;
}

a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
a:active {
  text-decoration: none;
}
a {
  color: white;
}
</style>