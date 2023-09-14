<template>
    <section class="container py-10 px-4 mx-auto max-w-screen-xl">
        <GoBackBtn/>

        <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-10 mt-20">
            <div class="flex flex-col justify-center">
                <h2 class="mb-10 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-4xl">{{ meal.strMeal }}</h2>
                <div class="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12">
                    <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                        <div class="flex flex-col pb-3" v-show="meal.strCategory">
                            <dt class="mb-1 text-gray-500 md:text-lg">The Meal Categories</dt>
                            <dd class="text-lg font-semibold">{{ meal.strCategory }}</dd>
                        </div>
    
                        <div class="flex flex-col py-3" v-show="meal.strArea">
                            <dt class="mb-1 text-gray-500 md:text-lg">The Meal Country</dt>
                            <dd class="text-lg font-semibold">{{ meal.strArea }}</dd>
                        </div>
    
                        <div class="flex flex-col py-3" v-if="meal.strTags">
                            <dt class="mb-1 text-gray-500 md:text-lg">The Meal Tags</dt>
                            <dd class="text-lg font-semibold">
                                {{ meal.strTags }}
                            </dd>
                        </div>

                    </dl>
                </div>
            </div>
            <div class="mx-auto object-cover lg:max-w-xl rounded-lg shadow-xl">
                <iframe
                width="560"
                height="100%"
                :src="getEmbedUrl(meal.strYoutube)"
                frameborder="0"
                allowfullscreen
                ></iframe>
            </div>
        </div>
    
        <p class="mb-8 text-lg font-normal text-gray-900 lg:text-xl ">{{ meal.strInstructions }}</p>

        <div class="grid grid-cols-2 gap-8">
            <img class="h-full w-full rounded-xl" :src="meal.strMealThumb" :alt="meal.strMeal">

            <div class="grid md:grid-cols-1 gap-8">
                <div class="bg-gray-50 border border-gray-200 rounded-lg p-8">
                    <h2 class="text-gray-900 text-3xl font-extrabold mb-10">Ingredient And Measure</h2>
                    <ul class="flex flex-col gap-x-3 gap-y-4 flex-wrap">
                        <template v-for="ind in 20" key="ind">
                            <li class="font-semibold" v-if="meal[`strIngredient${ind}`]"> {{ meal[`strIngredient${ind}`] }}:&nbsp;<span class="bg-green-100 py-1 px-5 rounded-lg text-sm ">{{ meal[`strMeasure${ind}`] }}</span> </li>
                        </template>
                    </ul>
                </div>
                <a :href="meal.strSource" target="_blank" class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center max-h-14 text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                    Read more
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    </section>

</template>

<script setup>
    import { onMounted, computed } from 'vue';
    import { useStore } from 'vuex';
    import { useRoute } from 'vue-router';

    import GoBackBtn from '../components/GoBackBtn.vue';
    
    const store = useStore();
    const route = useRoute();


    const meal = computed(() => store.state.mealsDetails)

    
    // Convert the Youtube "watch" URL to "embed" URL
    const getEmbedUrl  = (watchUrl) => {
        const videoId = new URLSearchParams(new URL(watchUrl).search).get('v'); // extract the URL
        return `https://www.youtube.com/embed/${videoId}`;
    };
    
    onMounted((
       store.dispatch('getMealDetails', route.params.id)
    ));
</script>

<style lang="">
    
</style>