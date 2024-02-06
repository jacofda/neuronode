<template>
    <nav class="relative items-center py-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
        <div class="flex justify-between">
          <a href="#" class="flex items-center">
            <img
              src="https://ik.imagekit.io/2gweb/neuronode/logo.webp?updatedAt=1707147679635"
              width="38"
              height="46"
              alt="neuro node"
            />
            <div class="ml-3">
                <h1 class="text-lg font-bold text-[#4fa2c8]"><span class="text-[#4f7f95]">N</span>euro<span class="text-[#4f7f95]">N</span>ode</h1>
                <p class="hidden sm:flex text-xs text-gray-500 -mt-2 capitalize">Systems Analysis of Key Nodes in Neurodegenerative Diseases</p>
            </div>
          </a>
          <button class="text-gray-500 outline-none md:hidden" @click="toggleMenu">
            <template v-if="isOpen">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </template>
            <template v-else>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </template>
          </button>
        </div>
        <ul :class="isOpen ? 'absolute inset-x-0 px-4 border-b bg-white md:border-none md:static' : 'hidden'" class="flex-1 justify-end py-5 md:text-sm md:font-medium md:flex md:mt-0">
          <div class="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
            <li class="text-gray-500 hover:text-indigo-600" v-for="(item, idx) in navigation" :key="idx">
              <a :href="item.path" v-text="item.title"></a>
            </li>
          </div>
        </ul>
    </nav>
</template>
<script lang="ts" setup>
    
    const isOpen = ref(false);
    const toggleMenu = () => {
      isOpen.value = !isOpen.value;
    };
    
    const navigation = [
      { title: "Project", path: "javascript:void(0)" },
      { title: "Team", path: "javascript:void(0)" },
      { title: "Activities", path: "javascript:void(0)" },
      { title: "Founding Org", path: "javascript:void(0)" },
      { title: "Contact", path: "javascript:void(0)" },
    ];

    </script>
    