export default {
    state:{
        category:[],
        post:[],
        blogpost:[],
        singlepost:[],
        allcategories:[],
    },
    getters:{
        getcategory(state){
            return state.category
        },
        getAllPost(state){
            return state.post
        },
        getblogPost(state){
            return state.blogpost
        },
        singlepost(state){
            return state.singlepost
        },
        allcategories(state){
            return state.allcategories
        }
    },
    actions:{
        allcategory(context){
            axios.get('/category')
            .then((response)=>{
                context.commit('categories',response.data.categories)
            })
        },
        getAllPost(context){
            axios.get('/post')
            .then((response)=>{
                
                context.commit('allpost',response.data.posts)
            })
        },
        getblogPost(context){
            axios.get('/blogpost')
            .then((response)=>{
                context.commit('getblogPost',response.data.posts)
            })
        },
        getPostById(context,payload){
            axios.get('/singlepost/'+payload)
            .then((response)=>{
                context.commit('singlePost',response.data.post)
            })
        },
        allcategories(context){
            axios.get('/categories')
            .then((response)=>{
                context.commit('allcategories',response.data.categories)
            })
        },
        getPostByCatId(context,data){
            axios.get('/categorypost/'+data)
            .then((response)=>{
                console.log(response.data.posts)
                context.commit('getPostByCatId',response.data.posts)
            })
        },
        SearchPost(context,data){
            axios.get('/search?s='+data)
            .then((response)=>{
                context.commit('getSearchPost',response.data.posts)
            })
        }

    },
    mutations:{
        categories(state,data){
        return state.category=data
        },
        allpost(state,data){
            return state.post=data
        },
        getblogPost(state,data){
            return state.blogpost=data
        },
        singlePost(state,data){
            return state.singlepost=data
        },
        allcategories(state,data){
            return state.allcategories=data
        },
        getPostByCatId(state,data){
             state.blogpost=data
        },
        getSearchPost(state,data){
            state.blogpost=data
        }
        
    }

}