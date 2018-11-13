<template>
  <div>
    <h2>I am a counterr!</h2>
    <p>You have clicked the button, this many timess:
      <b>{{ $store.state.count }}</b> times.</p>

    <v-btn color="primary" @click.native="increment">+</v-btn>
    <v-btn v-if="$store.state.count >= 42" color="secondary" @click.native="$store.state.count += 10"> FASTER!</v-btn>
    <v-btn v-if="$store.state.count >= 256" color="error" @click.native="$store.state.count += 100"> FASTER!</v-btn>
    erger

  </div>
</template>

<script>
  import Vue from "vue";


  export default Vue.component("my-component", {
    name: "my-component",
    data() {
      return {
        message: "Hello",
        count: 0
      }
    },
    methods: {
      increment() {
        // Store the count in Vuex
        this.$store.state.count++;
      }
    },
    created() {
      this.message = "Bye";
    }
  });
</script>


<style lang="scss" scoped>
div {
  margin-top: 60px;
}

b {
  font-size: 22px;
}
</style>
