<template>
    <div>
        <div>
             <table class="table">
  <thead>
    <tr>
      <th scope="col">{{fields[0]}}</th>
      <th scope="col">{{fields[1]}}</th>
      <th scope="col">{{fields[2]}}</th>
      <th scope="col">{{fields[3]}}</th>
      <th scope="col">{{fields[4]}}</th>
    </tr>
  </thead>
  <tbody>
    <tr v-bind:key="item.id" v-for="item in items">
      <td>{{item.name}}</td>
      <td>{{item.date_created}}</td>
      <td>{{item.date_modified}}</td>
      <td>{{item.created_by}}</td>
      <td>
          <router-link :to="{path:'/editBucket/'+item.id}" > <b-button variant="outline-success" append>edit</b-button></router-link>
          <b-button :to="{path:'/PostItem/'+item.id}" variant="outline-primary">Add Item</b-button>
          <b-button variant="outline-danger"   @click="deleteBucket(item.id)">delete</b-button>
          <b-button :to="{path:'/ItemView/'+item.id}" variant="">View Items</b-button>
      </td>
    </tr>
   
  </tbody>
</table>
            <!-- <b-table sticky-header head-variant="dark" striped hover :items="items" :fields="fields"></b-table> -->
        </div>
    </div>
    
</template>

<script>
import axios from 'axios';

export default {
    name: "GetBuckets",
     components:{
    },
    
    data:function () {
        return{
            token: localStorage.getItem('token'),
            id:0,
            fields: [ 'name','date_created', 'date_modified','created_by','actions'],
            items: []
        }
    },
    methods:{
        deleteBucket(id){

            // console.log(id);
             let fd = new FormData();
             fd.append('jwt',this.token);

            axios.get('http://127.0.0.1:3000/del_bucketlists/'+id+'?jwt='+this.token)
            .then(res=>{
                console.log(res);
                this.items = this.items.filter(item => item.id !==id)
                
            })
            .catch(err=>{

            });
            
        }
    },
    created(){
        let fd = new FormData();
        fd.append('jwt',this.token);
        axios.get('http://127.0.0.1:3000/bucketlists?jwt='+this.token)
        .then(res =>{
            let data = res.data.data;
            this.items=data;
            

        })
        .catch(err => {
            console.log(err);            
        })


        
    }
}
</script>

<style scoped>

</style>