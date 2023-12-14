
import type { NuxtLink } from '#build/components';
<template>
    <div class="flex justify-around p-4 bg-zinc-400 border-b-2 border-green-600">
        <span class="hover:pointer hover:text-white"><Icon name="mdi:home" size="32" /><NuxtLink to="/">Home</NuxtLink></span>
        <span class="hover:pointer hover:text-white"><Icon name="mdi:information" size="32" /><NuxtLink to="/about">About</NuxtLink></span>
        <span class="hover:pointer hover:text-white"><Icon name="mdi:wrench" size="32" /><NuxtLink to="/projects">Projects</NuxtLink></span>
        <span class="hover:pointer hover:text-white"><Icon name="mdi:contacts" size="32" /><NuxtLink to="/contact">Contact</NuxtLink></span>
        <span class="hover:pointer hover:text-white"><Icon name="mdi:github" size="32" /><NuxtLink to="/github">Github</NuxtLink></span>
        <span class="hover:pointer hover:text-white"><Icon name="mdi:linkedin" size="32" /><NuxtLink to="/linkedin">Linkedin</NuxtLink></span>
    </div>
</template>