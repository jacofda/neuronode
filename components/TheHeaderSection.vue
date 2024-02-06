<template>
  <div class="my-bg">
    <h1 class="mx-auto text-4xl font-extrabold text-white md:text-5xl">{{ title }}</h1>
    <h2 class="mx-auto text-2xl text-white">{{ description }}</h2>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: "Neuronode",
  },
  description: {
    type: String,
    default: "Systems Analysis of Key Nodes in Neurodegenerative Diseases",
  },
});
</script>
<style scoped>
.my-bg {
  background-image: url("https://ik.imagekit.io/2gweb/neuronode/slider.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-bottom: 3rem;
  padding-top: 3rem;
}
</style>
