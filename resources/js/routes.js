import AdminHome from './components/admin/AdminHome.vue'
import CategoryList from './components/admin/category/list.vue'
import AddCategory from './components/admin/category/new.vue'
import EditCategory from './components/admin/category/edit.vue'
export const routes = [
{ path: '/home', component: AdminHome },
{ path: '/category-list', component: CategoryList },
{ path: '/add-category', component: AddCategory },
{ path: '/edit-category/:categoryid', component: EditCategory },
   ]