<template>
    <div>
        <h1>{{ message }}</h1>
    </div>
</template>

<script lang="js">
    import Vue from "vue";


    let HelloComp = {
        name: "hello-comp", 
        data() {
            return {
                message: "Hello from a component"
            }
        }
    };

    export default HelloComp;
    Vue.component("hello-comp", HelloComp);
</script>