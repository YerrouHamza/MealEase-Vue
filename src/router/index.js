import { createRouter, createWebHistory } from "vue-router";

// Import the views components
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router;