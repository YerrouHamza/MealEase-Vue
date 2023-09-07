import { createRouter, createWebHistory } from "vue-router";

// Import the views components
import Home from '../views/Home.vue';
import Category from '../views/Category.vue'
import Ingredient from '../views/Ingredient.vue'
import SingleMeal from '../views/SingleMeal.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },

    {
        path: '/meal/:id?',
        name: 'singleMeal',
        component: SingleMeal
    },

    {
        path: '/ingredient',
        name: 'ingredient',
        component: Ingredient
    },

    {
        path: '/category',
        name: 'category',
        component: Category
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
})


export default router;