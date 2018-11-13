/** 
 * From https://vuex.vuejs.org
 * Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store 
 * for all the components in an application, with rules ensuring that the state can only be mutated in a 
 * predictable fashion. It also integrates with Vue's official devtools extension to provide advanced 
 * features such as zero-config time-travel debugging and state snapshot export / import.
 */

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


let store = new Vuex.Store({
  state: {
    count: 0
  }
});

export default store;