/**
 * Created by an.han on 16/10/15.
 */
import _ from 'lodash'

export default {
    state: {
        message: 'abc',
        carProductList:[],
    },
    mutations: {
        MESSAGE (state, value) {
          state.message = value || state.message;
        },
        ADD_PRODUCTLIST(state,obj){
            state.carProductList.push(obj)
        },
        DEL_PRODUCTLIST(state,obj){

        },
        CHANGE_CAR_PRODUCT(state, carProductList){
            state.carProductList.push(carProductList);
        }
    },
    actions: {
        change_car({commit}, carProductList){
            commit('CHANGE_CAR_PRODUCT', carProductList);
        },
        add_car({commit},obj){
            commit('ADD_PRODUCTLIST',obj);
        }


    },
    getters: {
        getcarlist: (state) => state.carProductList
    }
}
