import Router from 'vue-router';
import NProgress from "nprogress";

// Import the .vue files, the router views.
// import Frontpage from '../views/Frontpage.vue';
const Frontpage = () => import('../views/Frontpage.vue');

// Initialize and setup the routes
const Routes = new Router({
  routes: [
    {
      path: '/',
      name: 'Frontpage',
      component: Frontpage,
      meta: {
        iconType: 'material',
        icon: 'home'
      },
    }
  ]
});


// Add the nprogress loader to route change
Routes.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

Routes.afterEach((to, from) => {
  NProgress.done();
});


// Export the router for consumption in index.ts file
export default Routes;
