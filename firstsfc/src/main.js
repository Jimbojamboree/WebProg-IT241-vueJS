import { createApp } from 'vue'

import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
import Comment from './components/Comment.vue'
import CommentForm from './components/CommentForm.vue'

const app = createApp(App)
app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)
app.component('comment',Comment)
app._component('Comment-form',CommentForm)
app.mount('#app')