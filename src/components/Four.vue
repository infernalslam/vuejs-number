<template>
	<h1> {{ msg }} </h1> <br>
	<h2> 4 </h2>
</template>

<script>
export default {
  data () {
    return {
      msg: 'HELLO WORLD'
    }
  },
  components: {},
  methods: {}
}
</script>

<style scope>
	h1 {
		color: #42b983;
  		font-size: 160px;
	}
	h2 {
		color: white;
		font-size: 140px;
	}
</style>