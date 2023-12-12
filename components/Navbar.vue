
import type { NuxtLink } from '#build/components';
<template>
    <div class="flex justify-around p-4 bg-zinc-400 border-b-2 border-green-600">
        <span><NuxtLink to="/">Home</NuxtLink></span>
        <span><NuxtLink to="/about">About</NuxtLink></span>
        <span><NuxtLink to="/projects">Projects</NuxtLink></span>
        <span><NuxtLink to="/blog/test">blog</NuxtLink></span>
        <span><NuxtLink to="/contact">Contact</NuxtLink></span>
        <span><NuxtLink to="/contact">Github</NuxtLink><Icon name="mdi:github" size="32" /></span>
    </div>
</template>