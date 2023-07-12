import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from "@/views/pk/PkIndexView"
import RecordIndexView from "@/views/record/RecordIndexView"
import RanklistIndexView from "@/views/ranlist/RanklistIndexView"
import UserbotIndexView from "@/views/user/bot/UserbotIndexView"
import NotFound   from "@/views/error/NotFound"


const routes = [
  {
    path:"/pk/",
    name:"pk_index",
    component :PkIndexView,

  },
  {
    path:"/record/",
    name:"record_index",
    component :RecordIndexView,

  },
  {
    path:"/ranklist/",
    name:"ranklist_index",
    component :RanklistIndexView,

  },
  {
    path:"/user/bot",
    name:"user_bot_index",
    component :UserbotIndexView,

  },
  {
    path:"/404/",
    name:"404",
    component :NotFound,

  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
