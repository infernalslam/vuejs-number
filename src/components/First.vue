 <template>
  <div class="uppper-text">
    {{ number }} <span class="lowwer-text">{{ perfix }}</span>
  </div>
  <div class="button-select1" @click="sub()" v-bind:class="{ 'Active': toggle}">
    <div class="sub"> Sub  </div>
  </div>
  <div class="button-select2" @click="add()">
    <div class="plus"> Plus </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      number: 0,
      perfix: 'st',
      toggle: false
    }
  },
  components: {},
  methods: {
    add: function () {
      this.number = this.number + 1
      this.checkNum(this.number)
    },
    sub: function () {
      this.number = this.number - 1
      this.checkNum(this.number)
    },
    checkNum: function (number) {
      if (number === 1) {
        this.perfix = 'st'
        this.toggle = false
      } else if (number === 2) {
        this.perfix = 'nd'
      } else if (number === 3) {
        this.perfix = 'rd'
      } else if (number >= 4) {
        this.perfix = '$'
      } else if (number <= 0) {
        this.perfix = 'x'
        this.toggle = true
      }
      console.log(this.number)
    }
  }
}
</script>

<style scoped>
.uppper-text {
  color: #42b983;
  font-size: 160px;
}
.lowwer-text {
  font-size: 30px;
  color: white;
}
.button-select1 {
  background-color: #fff;
  display: inline-block;
  padding: 14px;
  cursor: pointer;
}
.button-select2 {
  background-color: #42b983;
  display: inline-block;
  padding: 14px;
  cursor: pointer;
}
.Active {
  text-decoration: line-through;
  cursor: none;
  pointer-events: none;
}
</style>
