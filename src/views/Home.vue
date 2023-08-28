<template>
    <header class="h-[40vh] p-4 flex flex-col justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500">
        <h1 class="text-4xl font-semibold text-gray-100 mb-8">Find Your Meals For <span class="font-bold uppercase underline">free</span></h1>
        <form>   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="text" v-model="mealByname" class="block max-w-[90vw] w-[500px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search meals by name" required>
                <button class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
            </div>
        </form>
    </header>
    
</template>

<script setup>
    import { computed, ref, watch } from 'vue';
    import { useStore } from 'vuex';

    const mealByname = ref('');
    const store = useStore();
    
    const meals = computed(() => store.state.meals)

</script>

<style scoped>
</style>