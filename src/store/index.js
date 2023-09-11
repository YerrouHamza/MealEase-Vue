import { createStore } from "vuex";

import mealsAPI from "../axiosClient";

const store = createStore({
    state: {
        meals: [],
        mealsDetails: [],
        mealsCategorys: []
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

        // get the targeted meals details
        getMealDetails(state, mealsDetails) {
            state.mealsDetails = mealsDetails;
        },

        // get all the meals categorys
        getMealsCategorys(state, categore) {
            state.mealsCategorys = categore;
        }
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
        },

        // get the meal Details from the API
        async getMealDetails({ commit }, mealID) {
            await mealsAPI.get(`lookup.php?i=${mealID}`)
                .then(({ data }) => {
                    commit('getMealDetails', data.meals[0])
                })
                .catch(({ error }) => {
                    console.log(error);
                })
        },

        // get all categores
        async getMealsCategorys({commit}) {
       console.log('test 1');

            mealsAPI.get('categories.php')
                .then(({data}) => {
                    commit('getMealsCategorys', data.categories);
                })
                .catch(({error}) => {
                    console.log(error);
                })
        }


    },

    // getters
    getters: {
        
    }
})


export default store;