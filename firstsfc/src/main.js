import { createApp } from 'vue'

import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
import Comment from './components/Comment.vue'
import CommentForm from './components/CommentForm.vue'

const app = createApp(App)
app.component('FoodItem', FoodItem)
app.component('FoodItem2', FoodItem2)
app.component('Comment',Comment)
app.component('CommentForm',CommentForm)
app.mount('#app')