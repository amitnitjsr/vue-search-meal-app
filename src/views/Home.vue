<template>
    <div class="flex flex-col p-8 ">
        <input type="text" class="rounded border-2 border-grey-200 w-full" 
        placeholder="Search for Meals" />
        
    </div>
</template>

<script setup>
import { computed } from 'vue';
import store from '../store';
import { onMounted } from 'vue';
import axiosClient from '../axiosClient.js'
// const meals = computed(() => store.state.meals);




onMounted(async () =>{
  const response = await axiosClient.get('/list.php?i=list');

});
//   console.log(response.data)
// fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list',{
//     method: "GET",
//     headers: {'Content-Type': 'application/json; charset=utf-8'}
// })
// .then(error)
// .then((res)=>{
//     console.log(res)
// })
// })
</script>