import Vue from 'vue';
import VueRouter from 'vue-router';
import IconWithDesc from './components/IconWithDesc';
import WelcomeScreen from './components/WelcomeScreen.vue'

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes:[
        {
            path: '/',
            name: 'WelcomeScreen',
            component: WelcomeScreen
        },
        {
            path: '/asd',
            name: 'icon',
            component: IconWithDesc
        },
        {
            path: '/*',
            name: 'default',
            component: WelcomeScreen
        },
    ]
});