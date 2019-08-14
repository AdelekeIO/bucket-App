<template>
    <div class="">
        <Header />
        <div class="container">
            

            <div class="col-8 float-center border pr-5 pl-5 pb-5  pt-0"> 
                <h3>Post Items</h3>
                <hr>
                <b-form action="" @submit="postItem">     
                             <b-alert
                                :show="dismissCountDown"
                                dismissible
                                variant="warning"
                                @dismissed="dismissCountDown=0"
                                

                                >
                                {{msg}}
                                </b-alert>
                    <!-- <div>{{msg}}</div> -->
                    <div class="form-group d-flex col-lg-2 col-lg-12">
                        
                        <!-- <label for="name">Name:</label> -->
                        <input type="text" class="form-control ml-1" v-model="itemName" placeholder="Enter item name" name="itemName" id="" required>
                        <b-select v-model="selected"  required>
                            <option value="">Done Status</option>
                            <option value="True">True</option>
                            <option value="False">False</option>
                        </b-select>
                    </div>
                    <div class="col-lg-2 col-lg-12">
                        <div></div>
                        <input type="submit" class="btn-sm form-control btn btn-primary"  value="Submit">
                    </div>
                </b-form>
            </div>
        </div>

        
    </div>    
</template>

<script>
import Header from '../components/layout/Header.vue';
import axios from "axios";

export default {
    name:'PostItem',
     components:{
        Header,
        
    },
    data(){
        return{
            token:localStorage.getItem('token'),
            itemName:"",
            selected:"",
            msg:"",
            dismissSecs: 5,
            dismissCountDown: 0
        }
    },    
    methods:{
         showAlert() {
        this.dismissCountDown = this.dismissSecs
      },
        postItem(e){
            e.preventDefault();
            let bucketId=this.$route.params.id;
            // /bucketlists/{id}/items/
            let fd = new FormData();
           

            fd.append('name', this.itemName);
            fd.append('done', this.selected);

             let url = 'http://127.0.0.1:3000/bucketlists/'+bucketId+'/items/?jwt='+this.token;
            axios.post(url,fd)
            .then( res => {
                let data = res.data;
                if (data.status===true) {
                    this.msg=data.message;
                    this.showAlert();   

                }else if (data.status===false) {
                    this.msg=data.message;
                    this.showAlert();   
                }
                // console.log(res.data);
                this.itemName="";   
                this.selected="";
            })
            .catch(err => {
                console.log(err);
                
            });
        }
},
created(){
    console.log(123);
    
    console.log(this.$route.params.id);
}
}
</script>

<style scoped>

</style>>

