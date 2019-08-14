<template>
    <div>
        <Header />
        <div class="container">
             <div class="col-lg-12 border">
            <div class="col-lg-12">
                <h2 class="mt-2 text-left">Bucket's id {{this.$route.params.id}} Items</h2>
                <div>
                    
                </div>
            </div>
            </div>
        <!-- here -->
          <div>
                         <b-alert
                                :show="dismissCountDown"
                                dismissible
                                variant="warning"
                                @dismissed="dismissCountDown=0"
                                

                                >
                                {{msg}}
                                </b-alert>
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
      <!-- <td>
          <router-link :to="{path:'/editBucket/'+item.id}" > <b-button variant="outline-success" append>edit</b-button></router-link>
          <b-button :to="{path:'/PostItem/'+item.id}" variant="outline-primary">Add Item</b-button>
          <b-button variant="outline-danger"   @click="deleteBucket(item.id)">delete</b-button>
          <b-button :to="{path:'/ItemView/'+item.id}" variant="">View Items</b-button>
      </td> -->
    </tr>
   
  </tbody>
</table>
        </div>
       </div>
    </div>    
</template>

<script>
import Header from '../components/layout/Header.vue';
import  axios  from "axios";

export default {
    name:'ItemView',
     components:{
        Header,
        
    },data:function () {
        return{
            token: localStorage.getItem('token'),
            bid:this.$route.params.id,
                msg:"",
            dismissSecs: 5,
            dismissCountDown: 0,
            fields: [ 'name','date_created', 'date_modified','done'],
            items: [
        //   { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        //   { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        //   { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        //   { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
        }
    },
    methods:{
showAlert() {
        this.dismissCountDown = this.dismissSecs
      },
    },
    created(){
        let fd = new FormData();
        fd.append('jwt',this.token);
        axios.get('http://127.0.0.1:3000/bucketlists/'+this.bid+'/items/?jwt='+this.token)
        .then(res =>{
            let data = res.data;
           
            // console.log(data);
            if (data.status===true) {
                    this.msg=data.message;

                    this.showAlert();
                     this.items=data.data;
                    //  console.log(this.items);
                        

                }else if (data.status===false) {
                    this.msg=data.message;
                    this.showAlert();   
                }
        })
        .catch(err => {
            // console.log(err);            
        })

}
}
</script>

<style scoped>

</style>>

