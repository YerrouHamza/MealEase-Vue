<template>
    <section class="mb-10 flex flex-col justify-center items-center">
        <img class="w-[300px]" :src="notFound" alt="not found data">
        <h1 class="text-3xl text-center mb-2 font-bold uppercase">Sorry!!</h1>
        <p class="text-xl capitalize">We haven't found any {{ title || 'Meals' }}</p>
    </section>
</template>

<script setup>
    import notFound from '../assets/images/notfound.gif';
</script>