<template>
    <div>
        <Header />
          <div class="container">
             <div class="col-lg-12 border">
            <div class="col-lg-12">
                    <div class="col-8 float-center border pr-5 pl-5 pb-5  pt-0"> 
                <h3>Post Bucket</h3>
                <hr>
                <b-form action="" >
                    <div>
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
      

    >
      {{msg}}
    </b-alert>
  
    <!-- <b-button @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-button> -->
  </div>
                    <div class="form-group d-flex col-lg-2 col-lg-12">
                        <!-- <label for="name">Name:</label> -->
                        <!-- <input type="text" class="form-control ml-1" name="" id=""> -->
                         <b-form-input v-model="name" placeholder="Enter bucket name"></b-form-input>
                    </div>
                    <div class="col-lg-2 col-lg-12">
                        <div></div>
                        <b-button class="float-right form-control" @click="postBucket" variant="outline-primary">Add</b-button>
                        <!-- <input type="submit" class="btn-sm form-control btn btn-primary"  value="Submit"> -->
                    </div>
                </b-form>
            </div>
            </div>
            </div>
       </div>
         
    </div>    
</template>

<script>
import Header from '../components/layout/Header.vue';
import axios from "axios";

export default {
    name:'PostBucket',
     components:{
        Header,
        
    },  
    data(){
        return{
            name:"",
            token:localStorage.getItem('token'),
            success_status:false,
            success_msg:"",
            err_status:false,
            msg:"",
            dismissSecs: 5,
            dismissCountDown: 0
        }   
    },    
    methods:{
        postBucket(){
            let name = this.name; 
            let fd = new FormData();

            fd.append('name',name);
            let url = 'http://127.0.0.1:3000/bucketlists?jwt='+this.token;
            axios.post(url,fd)
            .then(res => {
                let data = res.data;
                if (data.status===true) {
                    this.msg=data.message;
                    this.showAlert();
                    this.name="";
                }else if (data.status===false) {
                    this.msg=data.message;
                    this.showAlert();   
                }
                // console.log(res.data);   
            })
            .catch(err => {
                console.log(res);
                
            });
            // console.log(this.name);
                      

        },
        countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      }
},

}
</script>

<style scoped>

</style>>

