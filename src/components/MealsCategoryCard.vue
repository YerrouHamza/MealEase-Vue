<template>
    <router-link to="" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" :src="props.image" :alt="props.category">
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ props.category }}</h5>
            <p class="mb-3 font-normal text-gray-700 maxLines-3">{{ props.discription }}</p>
        </div>
    </router-link>
</template>

<script setup>
    const props = defineProps(['category', 'discription', 'image'])
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