import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from '../views/front/Index'
import Category from "../views/front/main/Category";
import Archive from "../views/front/main/Archive";
import Detail from "../views/front/main/Detail";
import Search from "../views/front/main/Search";
import About from "../views/front/other/About";
import Board from "../views/front/other/Board";
import Error from '../views/front/other/404';
import BreadCrumb from "../views/admin/other/BreadCrumb";
import Login from "../views/admin/login/Login";
import Welcome from "../views/admin/home/Welcome";
import Home from "../views/admin/Home";
import ArticleMg from "../views/admin/artice/ArticleList";
import Push from "../views/admin/artice/Write";
import Edit from "../views/admin/artice/Edit";
import TagMg from "../views/admin/tag/TagMg";
import Setting from "../views/admin/setting/Setting";
import UserList from "../views/admin/user/UserList";
import Sex from '../views/admin/statistic/Sex'
import CommentList from "../views/admin/comment/CommentList";
import MessageList from "../views/admin/msg/MessageList";
import NoticeList from "../views/admin/msg/NoticeList";
import CategoryMg from "../views/admin/category/CategoryMg";
import TagPage from "../views/front/main/TagPage";
import CategoryStatistic from "../views/admin/statistic/CategoryStatistic";
import PvStatistic from "../views/admin/statistic/PvStatistic";
import InfoCenter from "../views/admin/other/InfoCenter";
import UpdateInfoDialog from "../views/admin/user/UpdateInfoDialog";

const routes = [
    {
        path: '/',
        component: Index
    },

    {
        path: '/article/:id',
        component: Detail,
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/categories/:category',
        component: Category,
    },
    {
        path: '/tag',
        component: TagPage,
    },
    {
        path: '/tag/:tag',
        component: TagPage,
    },
    {
        path: '/search/:keyword',
        component: Search,
    },
    {
        path: '/archive',
        component: Archive,
    },
    {
        path: '/board',
        component: Board,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/404',
        component: Error,
    },

    // admin
    {
        path: '/admin',
        component: Login,
    },

    // ????????????
    {
        path: '/mg',
        component: Home,
        redirect: '/mg/welcome',
        meta: {title: '??????'},
        children: [
            {path: 'info', component: InfoCenter, meta: {title: '????????????'}},
            {path: 'welcome', component: Welcome, meta: {title: '?????????'}},
            {
                path: 'userManager',
                component: BreadCrumb,
                meta: {title: '????????????'},
                children: [
                    {path: 'users', component: UserList, meta: {title: '????????????'}},
                    {path: 'userInfo/:uid', component: UpdateInfoDialog, meta: {title: '????????????'}}
                ]
            },
            {
                path: 'articleManager',
                component: BreadCrumb,
                meta: {title: '????????????'},
                children: [
                    {path: 'article', component: ArticleMg, meta: {title: '????????????'}},
                    {path: 'write', component: Push, meta: {title: '????????????'}},
                    {path: 'edit/:id', component: Edit, meta: {title: '????????????'}},
                ]
            },
            {
                path: 'categoryManager',
                component: BreadCrumb,
                meta: {title: '????????????'},
                children: [
                    {path: 'category', component: CategoryMg, meta: {title: '????????????'}}
                ]
            },
            {
                path: 'tagManager',
                component: BreadCrumb,
                meta: {title: '????????????'},
                children: [
                    {path: 'tag', component: TagMg, meta: {title: '????????????'}}
                ]
            },
            {
                path: 'commentManager',
                component: BreadCrumb,
                meta: {title: '????????????'},
                children: [
                    {path: 'comment', component: CommentList, meta: {title: '????????????'}}
                ]
            },
            {
                path: 'msgManager',
                component: BreadCrumb,
                meta: {title: '????????????'},
                children: [
                    {path: 'message', component: MessageList, meta: {title: '????????????'}},
                    {path: 'notice', component: NoticeList, meta: {title: '????????????'}}
                ]
            },
            {
                path: 'dataManager',
                component: BreadCrumb,
                meta: {title: '????????????'},
                children: [
                    {path: 'sex', component: Sex, meta: {title: '????????????'}},
                    {path: 'category', component: CategoryStatistic, meta: {title: '????????????'}},
                    {path: 'pv', component: PvStatistic, meta: {title: '???????????????'}},
                ]
            },
            {
                path: 'settings',
                component: BreadCrumb,
                meta: {title: '????????????'},
                children: [
                    {path: 'setting', component: Setting, meta: {title: '??????'}},
                ]
            }
        ]
    },

    // ?????????404
    {
        path: '*',
        redirect: '/404'
    },


]

const router = new VueRouter({
    mode: "history",
    routes
})


// ????????????????????????
// router.beforeEach((to, from, next) => {
//     //    to ?????????????????????
//     //    from ?????????????????????????????????
//     //    next ??????????????????????????????
//     //    next() ??????  next('/login') ????????????
//     if (
//         // ???????????????????????????????????????
//         to.path == '/login' ||
//         to.path == '/blog' ||
//         to.path == '/archives' ||
//         to.path == '/tag' ||
//         to.path == '/about') {
//         return next();
//     }
//     //  ??????token??????token???????????????????????????????????????
//     const tokenStr = window.sessionStorage.getItem('token')
//     if (!tokenStr) return next('/login')
//     next()
// })

export default router
