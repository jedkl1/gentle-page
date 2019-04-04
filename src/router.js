import Vue from 'vue';
import VueRouter from 'vue-router';
import StrongPoints from './components/StrongPointsContainer';
import WelcomeScreen from './components/WelcomeScreen.vue'

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes:[
        {
            path: '/',
            name: 'WelcomeScreen',
            component: WelcomeScreen,
        },
        {
            path: '/home',
            name: 'Home',
            component: StrongPoints
        },
        {
            path: '/*',
            name: 'default',
            component: WelcomeScreen
        },
    ]
});