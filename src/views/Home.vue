<template>
    <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1>
    <pre>{{ meals }}</pre>
</template>

<script setup>
    import { computed } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();

    const meals = computed(() => store.state.meals)


    console.log(meals.value)



</script>

<style scoped>
</style>