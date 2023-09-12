<template>
    <section class="lg:container mx-auto mt-10">
        <router-link :to="{name: 'category'}" class="font-medium hover:text-blue-800 inline items-center text-xl text-blue-500 text-center">
            <svg class="h h-4 inline w-6 mb-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"></path>
            </svg>
            Go Back
        </router-link>
    </section>
    <section class="lg:container mx-auto mt-10 p-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6">
            <MealsCard 
                v-for="meal in meals" :key="meal.idMeal"
                :title="meal.strMeal"
                :image="meal.strMealThumb"
                :id="meal.idMeal"
            />
        </div>
    </section>

</template>

<script setup>
    import { computed, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { useStore } from 'vuex';

    import MealsCard from '../components/MealsCard.vue';

    const route = useRoute()
    const store = useStore();

    const meals = computed(() => store.state.allCategoryMeals)


    onMounted((
        store.dispatch('getAllMealsByCategory', route.params.id)
    ))
    
</script>

<style scoped>
</style>