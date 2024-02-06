<template>
  <div
    class="flex h-[calc(100vh-16rem)] w-full flex-col items-center justify-center gap-y-4 bg-[url('https://ik.imagekit.io/2gweb/neuronode/slider.webp')]">
    <h1 class="mx-auto text-4xl font-extrabold text-white md:text-5xl">Neuronode</h1>
    <h2 class="mx-auto text-2xl text-white">Systems Analysis of Key Nodes in Neurodegenerative Diseases</h2>
    <NuxtLink
      to="#"
      class="block w-full rounded-md border bg-gray-400 px-10 py-3.5 text-center text-xl text-gray-100 duration-300 hover:bg-gray-800 hover:text-white hover:shadow sm:w-auto">
      See project details
    </NuxtLink>
  </div>
  <section class="py-20">
    <div class="mx-auto max-w-screen-xl md:px-8">
      <div class="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
        <div class="mt-6 max-w-xl space-y-3 px-4 sm:px-0 md:mt-0 lg:max-w-2xl">
          <h3 class="font-semibold text-indigo-600">Neuronode</h3>
          <p class="text-3xl font-semibold text-gray-800 sm:text-4xl">Mission and hypotesis</p>
          <p class="mt-3 text-gray-600">
            Our aim is to achieve a systems-level understanding of protein homeostasis regulation across several
            neurological diseases where altered protein homeostasis is implicated to understand where the similarities
            and differences occur.
          </p>
          <p class="mt-3 text-gray-600">
            Our hypothesis is that although each ND involves distinct culprit proteins and manifests itself in different
            ways in different brain cells, there exist key common regulatory nodes driving changes in protein
            homeostasis.
          </p>
        </div>
        <div class="flex-1 sm:hidden lg:block">
          <img src="https://ik.imagekit.io/2gweb/neuronode/logo-big.webp" class="sm:rounded-lg md:max-w-lg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
// const storyblokApi = useStoryblokApi(); // accessing to the Storyblok client object
// const data = await storyblokApi.getAll('cdn/stories', {
//   starts_with: 'team-member/',
//   version: 'draft',
// });

// onMounted(() => {
//   console.log(data);
// });
</script>
