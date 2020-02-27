export default {
    state:{
        category:[],
        post:[],
        blogpost:[],
        singlepost:[]
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
        }
    }

}