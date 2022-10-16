import About from "../pages/about"
import Mine from "../pages/mine"
import News from "../pages/news"

import Recommend from "../pages/news/c-pages/recommend";
import Ranking from "../pages/news/c-pages/ranking";
import Songs from "../pages/news/c-pages/songs";
import Djradio from "../pages/news/c-pages/djradio";
import Artist from "../pages/news/c-pages/artist";
import Album from "../pages/news/c-pages/album";

import { Redirect } from "react-router-dom"
import React from "react"

const routes = [
  {
    path:'/',   //默认展示,重定向至发现音乐
    exact:true, //全量匹配
    render:()=>( //不止接受component，也可以接受render
      <Redirect to='/news'></Redirect>
    )
  },
  {
    path:"/news",
    component:News,
    routes:[
      {
        path:'/news',
        exact:true,
        render:()=>(
          <Redirect to='/news/recommend'></Redirect>
        )
      },
      {
        path: "/news/recommend",
        component: Recommend
      },
      {
        path: "/news/ranking",
        component: Ranking
      },
      {
        path: "/news/songs",
        component: Songs
      },
      {
        path: "/news/djradio",
        exact: true,
        component: Djradio
      },
      {
        path: "/news/artist",
        component: Artist
      },
      {
        path: "/news/album",
        component: Album
      },
    ]
  },
  {
    path:"/mine",
    component:Mine
  },
  {
    path:"/about",
    component:About
  }
]

export default routes