<template>
  <div class="main">
    <div
      v-for="circle in circles"
      :key="circle.id"
      :style="{ width: circle.size, left: circle.left }"
      class="circle"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const circles = ref([]);

onMounted(() => {
  setInterval(() => {
    createCircle();
  }, 100);
});

function createCircle() {
  const left = Math.random() * window.innerWidth + 'px';
  circles.value.push({ size: '7px', left, id: Date.now() });

  setTimeout(() => {
    circles.value.shift();
  }, 5000);
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  min-height: 100%;
  background: #222;
  overflow: hidden;
  position: relative;
}

.circle {
  position: absolute;
  bottom: 10px;
  aspect-ratio: 1/1;
  background: #0f0;
  box-shadow:
    0 0 10px #0f0,
    0 0 20px #0f0,
    0 0 30px #0f0,
    0 0 50px #0f0;
  border-radius: 50%;
  animation: animate 5s linear forwards;
}

@keyframes animate {
  0% {
    transform: translateY(0);
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: translateY(-100vh);
    opacity: 0;
  }
}

.circle::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 25%;
  width: 50%;
  height: 100vh;
  opacity: 0.5;
  background: linear-gradient(#0f0, transparent);
}
</style>
