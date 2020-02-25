<template>
<section class="content">
    <div>
        <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Edit Post</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form" enctype="multipart/form-data" @submit.prevent="updatePost()">
                <div class="card-body">

                  <div class="form-group">
                    <label for="postId">Edit Post Name</label>
                    <input type="text" class="form-control" id="postId" placeholder="Post Name" 
                    v-model="form.title" name="title":class="{ 'is-invalid': form.errors.has('title') }">
                    <has-error :form="form" field="title"></has-error>
                  </div>
                    <div class="form-group">
                    <label for="descriptionId">Edit Description</label>
                    <markdown-editor v-model="form.description"></markdown-editor>
                    <has-error :form="form" field="description"></has-error>
                  </div>

                  <div class="form-group">
                    <label for="descriptionId">Select Category</label>
                    <select class="form-control" :class="{ 'is-invalid': form.errors.has('cat_id') }" v-model="form.cat_id">
                        <option disabled value="">Select One</option>
                        <option :value="category.id" v-for="category in getallcategory">{{category.cat_name}}</option>
                    </select>
                    <has-error :form="form" field="cat_id"></has-error>
                  </div>

                  <div class="form-group">
                    <label for="descriptionId">Select Photo</label><br>
                    <input @change="changePhoto($event)" type="file" name="photo" :class="{ 'is-invalid': form.errors.has('photo') }">
                    <img :src="updateImage()" width="200px"></img>
                    <has-error :form="form" field="photo"></has-error>
                  </div>

                <!-- /.card-body -->
                </div>
                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Update</button>
                </div>
              </form>
            </div>
    </div>
    </section>
</template>
<script>
export default{
    name:"Edit",
    data(){
        return{
            form:new Form({
                title:'',
                description:'',
                cat_id:'',
                photo:'',
            })
        }
    },
    mounted(){
        this.$store.dispatch("allcategory")

    },
    created(){
        axios.get(`post/${this.$route.params.postid}`)
        .then((response)=>{
            console.log(response.data)
            this.form.fill(response.data.post)
            
        })
    },
    computed:{
        getallcategory(){
        return this.$store.getters.getcategory
      }
    },
    methods:{
        changePhoto(event){
         let file = event.target.files[0];
         if(file.size>1048576) {
          Toast.fire({
                    icon: 'error',
                    title: 'Image Size Must Be Less Than 1 Mb'
                  })
         }
         else{
          let reader = new FileReader();
          reader.onload = event=> {
           this.form.photo=event.target.result
           console.log(event.target.result)
          };
          reader.readAsDataURL(file);
         }
         
        },
        updatePost(){
          this.form.post(`update/${this.$route.params.postid}`)
          .then(()=>{
          this.$router.push('/post-list')
          Toast.fire({
  icon: 'success',
  title: 'Post Updated successfully'
})

          })
          .catch(()=>{
            
          })
        },
        updateImage(){
            let img = this.form.photo;
            if(img.length>100)
            {
                return this.form.photo
            }
            else{
                return `uploadimage/${this.form.photo}`
            }
        }
    }
    
}
</script>
<style scoped>

</style>