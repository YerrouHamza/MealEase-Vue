import { createStore } from "vuex";

import mealsAPI from "../axiosClient";

const store = createStore({
    state: {
        meals: []
    },

    // mutations
    mutations: {
        // request 10 Random meals
        getRandomMeals(state, newMeals) {
            state.meals.push(newMeals)
        },

        // search Meals by name
        searchMealsByName(state, newMeals) {
            state.meals = newMeals;
        },
    },

    // actions
    actions: {
        // request Meals 10 random meals data
        async getRandomMeals({ commit }) {
            let newMeals = []
            for (let i = 0; i < 10; i++) {
                await mealsAPI.get(`random.php`)
                    .then(({ data }) => {
                        newMeals = [...newMeals, ...data.meals]
                    })
                    .catch(({error}) => {
                        console.error(error)
                    })
                }
                commit('searchMealsByName', newMeals)
                
        },

        // search Meals by name by API Request function
        async searchMealsByName({ commit }, newMeals) {
            await mealsAPI.get(`search.php?s=${newMeals}`)
                .then(({ data }) => {
                    commit('searchMealsByName', data.meals)
                })
                .catch(({error}) => {
                    console.error(error)
                })
        }

    },

    // getters
    getters: {
        
    }
})


export default store;