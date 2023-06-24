<template>
    <a 
    :href="meal.strYoutube" target="_blank"
    class="px-3 py-2 rounded border-2 text-white border-y-red-600"
    >
    <slot> </slot>
    </a>
</template>

<script setup>
 const props = defineProps({
    href: String
 })
</script>