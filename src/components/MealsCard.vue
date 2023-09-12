<template>
    <div class="max-w-sm mx-auto md:mx-0 bg-white border border-gray-200 rounded-lg shadow">
        <div>
            <img class="rounded-t-lg" :src="props.image" :alt="props.title" />
        </div>
        <div class="p-5">
            <h5 class="maxLine-2 mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ props.title }}</h5>
            <p class="maxLines-3 mb-3 font-normal text-gray-700" v-if="props.discription">{{ props.discription }}</p>
            <router-link :to="{name: 'singleMeal', params: {id: props.id}}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Read more
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </router-link>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(['title', 'discription', 'image', 'id'])
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