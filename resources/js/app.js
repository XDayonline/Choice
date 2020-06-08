/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import App from "./components/App";

require('./bootstrap');

window.Vue = require('vue');
import VueSwing from 'vue-swing';
import Vue from 'vue'
import { Vue2InteractDraggable } from 'vue2-interact'

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('vue-swing', VueSwing);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('gamecard', require('./components/Gamecard.vue').default);
Vue.component('gamecards-stack', require('./components/GameCardsStack.vue').default);
Vue.component('app', require('./components/App.vue').default);

export default {
    components: {
        Vue2InteractDraggable
    }
}

const app = new Vue({
    el: '#app',
    // components: { App },
    // template: "<App/>",
    data: {questions: []},
    created: function() {
        // Alias the component instance as `vm`, so that we
        // can access it inside the promise function
        let vm = this;
        // Fetch our array of posts from an API
        fetch("http://choicegianni.herokuapp.com/api/v1/question")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                vm.questions = data;
            });
    }
});
