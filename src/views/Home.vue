<template>
    <header class="h-[40vh] p-4 flex flex-col justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500">
        <h1 class="text-4xl font-semibold text-gray-100 mb-8">Find Your Meals For <span class="font-bold uppercase underline">free</span></h1>
        <form @submit.prevent="searchMealsByName">   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="text" v-model="mealByname" class="block max-w-[90vw] w-[500px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search meals by name">
                <button type='button' class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2" @click="searchMealsByName">Search</button>
            </div>
        </form>
    </header>

    <section class="lg:container mx-auto mt-7 p-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6">
            <MealsCard 
                v-for="meal in meals" :key="meal.idMeal"
                :title="meal.strMeal"
                :discription="meal.strInstructions"
                :image="meal.strMealThumb"
                :id="meal.idMeal"
            />
        </div>
    </section>
</template>

<script setup>
    import { computed, onMounted, ref } from 'vue';
    import { useStore } from 'vuex';
    
    import MealsCard from '../components/Mealscard.vue';
    
    const mealByname = ref('');
    const store = useStore();
    const meals = computed(() => store.state.meals)

    const searchMealsByName = () => {
        store.dispatch('searchMealsByName', mealByname.value)

    }

    onMounted((
        store.dispatch('getRandomMeals')
    ))
</script>

<style scoped>

    .maxLines-2, .maxLines-3 {
        overflow: hidden;
        display: -webkit-box;
    }
    .maxLines-2 {
        -webkit-line-clamp: 2; /* number of lines to show */
                line-clamp: 2; 
        -webkit-box-orient: vertical;
    }
    .maxLines-3 {
        -webkit-line-clamp: 3; /* number of lines to show */
                line-clamp: 3; 
        -webkit-box-orient: vertical;
    }
</style>