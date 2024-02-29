<script setup></script>

<template>
  <div>
    <div class="im-container flex items-center w-full h-[500px] bg-[#222]">
      <div class="w-[40%] h-full relative">
        <BgAnimation class="" />
        <div class="w-60 h-60 rounded-full absolute top-[25%] right-0">
          <img
            src="https://avatars.githubusercontent.com/u/67883343?s=400&u=f92f196f0ced5790435c63da5e1041ff654bf194&v=4"
            alt="Vinicius Figueiredo"
          />
        </div>
      </div>
      <div class="flex flex-col w-[45%]">
        <div class="flex flex-col w-full text-center">
          <span class="text-6xl">Vinicius Figueiredo</span>
          <span class="text-3xl"> Sou Desenvolvedor Fullstack Web</span>
        </div>
        <div class="flex w-full justify-center mt-3">
          <button class="flex border border-solid p-2">
            <UIcon name="i-heroicons-arrow-down-tray" class="text-xl mr-2" />
            <span>Download CV</span>
          </button>
          <div class="mx-2"></div>
          <button class="flex border border-solid p-2">
            <UIcon name="i-heroicons-envelope" class="text-xl mr-2" />
            <span>Contate me</span>
          </button>
        </div>
      </div>
    </div>

    <div>
      <h1 id="aboutme" class="text-center text-4xl mt-10">Sobre mim</h1>
    </div>

    <div>
      <h1 id="skills" class="text-center text-4xl mt-10">Habilidades</h1>
    </div>

    <div>
      <h1 id="projects" class="text-center text-4xl mt-10">Projetos</h1>
    </div>
  </div>
</template>
