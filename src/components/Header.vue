<template>
    <header class="h-[200px] p-4 flex flex-col justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500">
        <h1 class="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-100">
            Find Your Meals By
            <span class="font-bold uppercase underline underline-offset-8 pl-2">{{ title }}</span>
        </h1>
    </header>
</template>

<script setup>
   const props = defineProps(['title'])
</script>