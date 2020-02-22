export default {
    state:{
        category:[],
        post:[]
    },
    getters:{
        getcategory(state){
            return state.category
        },
        getAllPost(state){
            return state.post
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
        }
    },
    mutations:{
        categories(state,data){
        return state.category=data
        },
        allpost(state,data){
            return state.post=data
        }
    }

}