import { createStore } from "vuex";

import mealsAPI from "../axiosClient";

const store = createStore({
    state: {
        meals: [],
        mealsDetails: [],
        mealsCategorys: [],
        allCategoryMeals: []
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
        },


        getAllMealsByCategory(state, newMeals ) {
            state.allCategoryMeals = newMeals;
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
            commit('searchMealsByName', '');

            await mealsAPI.get(`search.php?s=${newMeals}`)
                .then(({ data }) => {
                    setTimeout(() => {
                        commit('searchMealsByName', data.meals)
                    }, 500);
                })
                .catch(({error}) => {
                    console.error(error)
                })
        },

        // get the meal Details from the API
        async getMealDetails({ commit }, mealID) {
            commit('getMealDetails', '');
            await mealsAPI.get(`lookup.php?i=${mealID}`)
                .then(({ data }) => {
                    setTimeout(() => {
                        commit('getMealDetails', data.meals[0])
                    }, 500);
                })
                .catch(({ error }) => {
                    console.log(error);
                })
        },

        // get all categores
        async getMealsCategorys({commit}) {
            mealsAPI.get('categories.php')
                .then(({data}) => {
                    commit('getMealsCategorys', data.categories);
                })
                .catch(({error}) => {
                    console.log(error);
                })
        },

        // get All Meals By Category
        async getAllMealsByCategory({commit}, categoreName) {
            commit('getAllMealsByCategory', '')

            await mealsAPI.get(`/filter.php?c=${categoreName}`)
                .then(({ data }) => {
                    setTimeout(()=> {
                        commit('getAllMealsByCategory', data.meals)
                    }, 500)
                })
                .catch(({ error }) => {
                    console.log(error);
                })
        }


    },

    // getters
    getters: {
        
    }
})


export default store;