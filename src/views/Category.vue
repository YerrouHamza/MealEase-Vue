<template>
    <Header title="Category"/>
    
    <section class="container max-w-screen-xl m-auto p-4 my-10">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <MealsCategoryCard v-for="category in mealsCategorys" :key="category.idCategory"
                :category="category.strCategory"
                :discription="category.strCategoryDescription"
                :image="category.strCategoryThumb" 
            />
        </div>
    </section>
</template>

<script setup>
    import MealsCategoryCard from '../components/MealsCategoryCard.vue';
    import Header from '../components/Header.vue';

    import { onMounted, computed } from 'vue';
    import { useStore } from 'vuex'
    
    const store = useStore();
    const mealsCategorys = computed(() => store.state.mealsCategorys)
   
    onMounted((
       store.dispatch('getMealsCategorys')
    ))

</script>

<style scoped>
    .maxLines-3 {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* number of lines to show */
                line-clamp: 3; 
        -webkit-box-orient: vertical;
    }
</style>