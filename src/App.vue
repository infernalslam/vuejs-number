<template>
  <div>
    <ul class="topnav" id="myTopnav">
      <li><a v-link="{ path: '/first' }">First</a></li>
      <li><a v-link="{ path: '/two' }">Two</a></li>
      <li><a v-link="{ path: '/three' }">Three</a></li>
      <li><a v-link="{ path: '/four' }">Four</a></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style scope>
@font-face {
  font-family: "Oswald";
  font-style: normal;
  font-weight: 400;
  src: local("Oswald Regular"), local("Oswald-Regular"), url(http://fonts.gstatic.com/s/oswald/v10/Qw6_9HvXRQGg5mMbFR3Phn-_kf6ByYO6CLYdB4HQE-Y.woff2) format("woff2");
  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Oswald";
  font-style: normal;
  font-weight: 400;
  src: local("Oswald Regular"), local("Oswald-Regular"), url(http://fonts.gstatic.com/s/oswald/v10/_P8jt3Y65hJ9c4AzRE0V1OvvDin1pK8aKteLpeZ5c0A.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
}
body { 
  font-family: oswald;
  font-weight: normal;
  text-transform: uppercase;
  text-align: center;
}
ul.topnav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: black;
}
ul.topnav li {
  float: left;
}
ul.topnav li a {
  display:inline;
  color: #42b983;
  text-align: center;
  text-decoration: none;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 30px;
}
ul.topnav li a:hover {
  background-color: white;
}
ul.topnav li.icon {
  display: none;
}
</style>
