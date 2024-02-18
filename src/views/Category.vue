<template>
    <header class="h-[30vh] p-4 flex flex-col justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500">
        <h1 class="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-100">Find Your Meals By <span class="font-bold uppercase underline underline-offset-8 pl-2">Category</span></h1>
    </header>
    
    <section class="container max-w-screen-xl m-auto p-4 mt-10">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <!-- <MealsCategoryCard v-for="category in mealsCategorys" :key="category.idCategory"
                :category="category.strCategory"
                :discription="category.strCategoryDescription"
                :image="category.strCategoryThumb" 
            /> -->
        </div>
    </section>
</template>

<script setup>
    import { onMounted, computed } from 'vue';
    import { useStore } from 'vuex'
    
    // import MealsCategoryCard from '../components/MealsCategoryCard.vue';

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