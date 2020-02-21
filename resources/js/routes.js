import AdminHome from './components/admin/AdminHome.vue'
import CategoryList from './components/admin/category/list.vue'
import AddCategory from './components/admin/category/new.vue'
import EditCategory from './components/admin/category/edit.vue'
//post
import PostList from './components/admin/post/List.vue'
import AddPost from './components/admin/post/New.vue'
import EditPost from './components/admin/post/Edit.vue'
export const routes = [
{ path: '/home', component: AdminHome },
{ path: '/category-list', component: CategoryList },
{ path: '/add-category', component: AddCategory },
{ path: '/edit-category/:categoryid', component: EditCategory },
//post
{ path: '/post-list', component: PostList },
{ path: '/add-post', component: AddPost },
{ path: '/edit-post/:postid', component: EditPost },
   ]