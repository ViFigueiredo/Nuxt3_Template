const logado = true;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== '/login' && !logado) {
    return navigateTo('/login');
  }
});
