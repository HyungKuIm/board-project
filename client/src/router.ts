import {createRouter, createWebHistory} from "vue-router";
import PostList from './components/PostList.vue'
import PostCreate from './components/PostCreate.vue'

const routes = [
    {
      path: "/",
      redirect: "/posts"
    },
    {
        path: '/posts',
        component: PostList
    },
    {
        path: '/posts/create',
        component: PostCreate
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;