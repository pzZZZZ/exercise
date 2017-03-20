/**
 * Created by an.han on 16/10/15.
 */
import _ from 'lodash'

export default {
    state: {
        message: '',
        carProductList:[],
    },
    mutations: {
        MESSAGE (state, value) {
          state.message = value || state.message;
        },
        CHANGE_CAR_PRODUCT(state, carProductList){
            state.carProductList.push(carProductList);
        }
    },
    actions: {
        change_car({commit}, carProductList){
            commit('CHANGE_CAR_PRODUCT', carProductList);
        },


    },
    getters: {
        getcarlist: (state) => state.carProductList
    }
}
