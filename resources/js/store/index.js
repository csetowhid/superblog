export default {
    state:{
        category:[],
        post:[],
        blogpost:[]
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
        }
    }

}