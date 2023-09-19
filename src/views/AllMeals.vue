<template>
    <section class="container max-w-screen-xl mx-auto mt-10 px-4">
        <GoBackBtn/>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6 mt-10">
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
    import GoBackBtn from '../components/GoBackBtn.vue';

    const route = useRoute();
    const store = useStore();

    const meals = computed(() => store.state.allCategoryMeals)


    onMounted((
        store.dispatch('getAllMealsByCategory', route.params.id)
    ))
    
</script>

<style scoped>
</style>