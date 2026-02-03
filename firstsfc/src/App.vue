<template>
  <h1>Food</h1>
  <food-item/>
  <food-item2/>
  <ul>
    <li v-for="instrument in instruments" :key="instrument.id">{{ instrument.name }}</li>
  </ul>
</template>

<script></script>

<style></style>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'
const instruments = ref([])
async function getInstruments() {
  const { data } = await supabase.from('instruments').select()
  instruments.value = data
}
onMounted(() => {
   getInstruments()
})
</script>
