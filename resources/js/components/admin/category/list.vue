<template>
    <div>
    <section class="content">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Category-List</h3>
              <div class="card-tools">
                <button class="btn btn-primary text-right">
                    <router-link to="/add-category" style="color:#fff; text-decoration:none">
                        Add Category
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
                  <th>Category Name</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(category,index) in getallcategory":key="category.id" >
                  <td>{{index+1}}</td>
                  <td>{{ category.cat_name }}</td>
                  <td>{{ category.created_at| timeformat }}</td>
                  <td>
                      <a href="" class="btn btn-sm btn-info">Edit</a>
                      <a href="" class="btn btn-sm btn-danger">Delete</a>
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
      this.$store.dispatch("allcategory")
    },
    computed:{
      getallcategory(){
        return this.$store.getters.getcategory
      }
    },
    methods:{

    }
}
</script>
<style scoped>

</style>