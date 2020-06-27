<template>
  <div id="app">
    <p>My counter is at: {{counter}}</p>
    <p>{{num}}</p>
    <button @click="numIncrease()" ref="numIncrease">Num increase</button>
    <button @click="increment()">Increment</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      counter: 0,
      num: 10
    }
  },
  methods: {
    increment() {
      // console.log("Increasing counter");
      // setTimeout(()=> {
        this.counter++;
      // }, 1000)
    },
    random() {
      console.log("random")
    },
    numIncrease() {
      this.num++;
      console.log(this.$refs.numIncrease.innerText = "hello");
    }
  },
  beforeCreate() {
    console.log("In beforeCreate()")
    console.log(this.counter);
    console.log(document.getElementById("app"))
  },
  created() {
    console.log("In created()")
    console.log(this);
    console.log(this.counter)
    console.log(document.getElementById("app"))
  },
  beforeMount() {
    console.log("In beforeMount()")
    console.log(document.getElementById("app"))
  },
  mounted() {
    console.log("In mounted()")
    console.log(document.getElementById("app"))
  },
  beforeUpdate() {
    console.log("In beforeUpdate()");
  },
  updated() {
    console.log("In updated()");
  },
  beforeDestroy() {
    console.log("In beforeDestroy()")
  },
  destroyed() {
    console.log("in destroyed()")
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 24px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  margin-top: 50px;
  width: 250px;
  height: 50px;
  margin-right: 10px;
}
</style>
