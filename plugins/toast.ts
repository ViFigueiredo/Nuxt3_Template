import Vue3Toasity, { type ToastContainerOptions, toast, type Content } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(Vue3Toasity, {
    autoclose: 2000,
  } as ToastContainerOptions);

  toast.error = (message: Content) =>
    toast(message, {
      type: 'error',
      position: 'top-right',
      icon: 'X',
      theme: 'dark',
    });

  return { provide: { toast } };
});
