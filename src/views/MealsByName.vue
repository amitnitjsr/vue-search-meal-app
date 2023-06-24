<template>
<div class="p-8 pb-0">
    <input type="text" class="rounded border-2 bg-white border-grey-200 w-full" 
        placeholder="Search for Meals"
        @change="searchMeals"
    />
</div>
<Meals :meals="meals" />
</template>

<script setup>
import {computed, onMounted, ref} from 'vue';
import axiosClient from '../axiosClient';
import store from '../store';
import YouTubeButton from '../components/YouTubeButton.vue';
import MealItem from '../components/MealItem.vue';
import Meals from '../components/Meals.vue';
import {useRoute} from 'vue-router';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
    if(keyword.value){
        store.dispatch('searchMeals', keyword.value)
    }
    else{
        store.commit('setSearchMeals', []) 
    }
}

onMounted(() => {
    keyword.value = route.params.name
    if(keyword.value){
        searchMeals();
    }
})
</script>