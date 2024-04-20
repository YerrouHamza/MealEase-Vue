<template>
    <footer class="bg-gradient-to-r to-indigo-500 from-sky-500">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div class="flex items-center justify-between md:flex md:justify-between">
            <router-link :to="{name: 'home'}" class="flex items-center">
                <div class="flex justify-center items-center gap-2">
                    <img class="h-12 w-12" src="../../public/meal-ease.png" alt="MealEase logo">
                    <span class="text-gray-200 self-center text-2xl font-semibold whitespace-nowrap">MealEase</span>
                </div>
            </router-link>
            <div class="flex gap-8 md:justify-between">
                <a href="https://www.linkedin.com/in/hamza-yerrou/" class="text-gray-200 underlineActive" target="_blank">LinKedin</a>
                <a href="https://github.com/YerrouHamza/" class="text-gray-200 underlineActive" target="_blank">GitHub</a> 
                <a href="https://codepen.io/yerrouhamza" class="text-gray-200 underlineActive" target="">CodePen</a>
            </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto" />
        <div class="flex flex-col gap-4 items-center justify-between md:flex-row">
            <span class="text-sm text-gray-300 sm:text-center">© 2024 <a href="https://github.com/YerrouHamza" class="text-gray-300 underlineActive">Hamza Yerrou</a>. All Rights Reserved.
            </span>
        </div>
    </div>
    </footer>
</template>