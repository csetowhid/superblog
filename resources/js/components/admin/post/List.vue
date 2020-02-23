<template>
    <div>
    <section class="content">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Post List</h3>
              <div class="card-tools">
                <button class="btn btn-primary text-right">
                    <router-link to="/add-post" style="color:#fff; text-decoration:none">
                        Add Post
                    </router-link>
                </button>
            </div>
            </div>
            
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example2" class="table table-bordered table-hover">
                <thead>
                <tr>
                  
                  <th>Sl</th>
                  <th>User</th>
                  <th>Category</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Photo</th>
                  <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(post,index) in allpost">
                  <td>{{index+1}}</td>
                  <td v-if="post.user">{{post.user.name}}</td>
                  <td v-if="post.category">{{post.category.cat_name}}</td>
                  <td>{{ post.title|shortlength(20,"---") }}</td>
                  <td>{{ post.description|shortlength(30,"...") }}</td>
                  <td><img :src="ourImage(post.photo)" width="80px"></td>
                  <td>
                      <!-- <router-link :to="`/edit-category/${category.id}`" class="btn btn-sm btn-info">Edit</router-link> -->
                      <router-link :to="`edit-post/${post.id}`" class="btn btn-sm btn-info">Edit</router-link>
                      <a href="" class="btn btn-sm btn-danger" @click.prevent="deletePost(post.id)">Delete</a>
                  </td>
                </tr>
                </tbody>
                


              </table>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    </div>
</template>
<script>
export default{
    name:"List",
    mounted(){
      this.$store.dispatch("getAllPost")
    },
    computed:{
     allpost(){
       return this.$store.getters.getAllPost
     }
    },
    methods:{
      ourImage(img){
        return "uploadimage/"+img;
      },
      deletePost(id){
        axios.get('/delete/'+id)
        
        .then((response) => {
          this.$store.dispatch("getAllPost")
          Toast.fire({
          icon: 'success',
          title: 'Post Deleted successfully'
        })
        }).catch(() => {
          Toast.fire({
          icon: 'error',
          title: 'Something Went Wrong'
        })
        });
      }
    }
    
}
</script>
<style scoped>

</style>