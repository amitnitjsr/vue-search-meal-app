<template>
 <div 
    class="bg-white shadow rounded-xl"
    v-for="meal of meals" 
    :key="meal.idMeal"
    >
    <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" 
        class="rounded-t-xl h-48 w-full object-cover"/>
    </router-link>
        <h3 class="p-3 font-semibold">{{ meal.strMeal }}</h3>
        <div class="flex items-center justify-between">
            <YouTubeButton :href="meal.strYoutube">
                YouTube
            </YouTubeButton>
        </div>
    </div>
</template>

<script setup>
import YouTubeButton from '../components/YouTubeButton.vue';

const {meal} = defineProps({
    meal: {
        required: true,
        type: Object
    }
})
</script>