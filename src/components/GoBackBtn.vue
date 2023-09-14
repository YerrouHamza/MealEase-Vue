<template>
    <div @click="router.back()" class="font-medium hover:text-blue-800 inline items-center text-xl text-blue-500 text-center cursor-pointer">
        <svg class="h-4 inline w-6 mb-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"></path>
        </svg>
        Go Back
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter();
</script>

<style scoped>
</style>