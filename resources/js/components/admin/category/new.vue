<template>
<section class="content">
    <div>
        <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Add New Category</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form" @click.prevent="addCategory()">
                <div class="card-body">
                  <div class="form-group">
                    <label for="categoryid">New Category</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Category Name" 
                    v-model="form.cat_name" name="cat_name":class="{ 'is-invalid': form.errors.has('cat_name') }">
                    <has-error :form="form" field="cat_name"></has-error>
                  </div>

                <!-- /.card-body -->
                </div>
                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Save</button>
                </div>
              </form>
            </div>
    </div>
    </section>
</template>
<script>
export default{
    name:"New",
    data(){
      return {
        form: new Form ({
          cat_name:'',
        })
      }
    },
    methods:{
      addCategory(){
        this.form.post('/add-category')
        .then((response)=>{
          this.$router.push('/category-list')
          Toast.fire({
  icon: 'success',
  title: 'Category added successfully'
})
        })
        .catch(()=>{

        })
      }
    }
}
</script>
<style scoped>

</style>