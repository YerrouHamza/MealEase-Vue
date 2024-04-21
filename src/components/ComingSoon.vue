<template>
    <section class="mt-10 mb-16 flex flex-col justify-center items-center">
        <img class="w-[400px] mb-4" :src="comingSoon" alt="not found data">
        <h1 class="text-3xl text-gray-600 text-center mb-2 font-bold capitalize">Coming Soon...</h1>
    </section>
</template>

<script setup>
    import comingSoon from '../assets/images/coming-soon.svg';
</script>