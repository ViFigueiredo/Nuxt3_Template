<template>
  <div>
    <h1 class="text-4xl text-center">{{ $t("title") }}</h1>

    <div class="grid grid-cols-2 lg:grid-cols-2 items-center justify-center">
      <UCard v-for="data in example" :key="data.id" class="my-4 mx-4">
        <h2 class="mb-4"> {{ data.description }} </h2>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">

const pinia = useExampleStore();
const { example } = storeToRefs(pinia)
const { $toast } = useNuxtApp();

onMounted(() => {
  $toast.success('Página carregada com sucesso.')
})

</script>