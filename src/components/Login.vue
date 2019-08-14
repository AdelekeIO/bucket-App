<template>
  <div class="app flex-row align-items-center mt-5" >
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form>
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <div class="alert  msgs" v-bind:class="[msgs['status']=='true' ? 'alert-success' :'', msgs['status']=='false' ? 'alert-danger':'']" id="msgs">{{msgs['message']}}</div>
                  <!-- <div class="alert  msgs" v-bind:class="[msgs['status']=='true' ? 'alert-success' :'', msgs['status']=='false' ? 'alert-danger':'']" id="msgs">{{msgs['message']}}</div> -->
                  <!-- <div class="alert d-none  msgs" v-bind:class="{'alert-danger':this.error_msg}" id="msgs">{{error_msg}}</div> -->
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="text" v-model="email" required="" name="email" class="form-control" placeholder="Username" autocomplete="username email" />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="password" v-model="password" required="" name="password" class="form-control" placeholder="Password" autocomplete="current-password" />
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button variant="primary" @click="processLogin" class="px-4">Login</b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <!-- <b-button variant="link" class="px-0">Forgot password?</b-button> -->
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
            <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>Bucket Is an application that models real life bucket where by users can create bucket, add item to it, manage and delete items in the bucket and even the bucket.</p>
                  <router-link to="/register"><b-button variant="primary" class="active mt-3">Register Now!</b-button></router-link>
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

export default {
  name: 'Login',
  props: {
    msg: String
  },
  data(){
    return{
      email:'',
      password: '',
      msgs:[{
        message:"",
        status:""
      }]
      
    }
  },
  methods:{
    processLogin(){
      
      if (this.email.length<=0 || this.email.trim==="") {
        // alert("babu");
        this.msgs.message="User email is required";
        this.msgs.status="false";
        // console.log(this.msgs);
        
      return;
      }else

      if (this.password.length<=0 || this.email.trim==="") {
        this.msgs.message="User password is required";
        this.msgs.status="false";
        // console.log(this.msgs);
        
      return;
      }else{

        const loginDeatails = {
        email: this.email,
        password: this.password
        }
        var fd = new FormData();
        fd.append('email', loginDeatails.email);
        fd.append('password', loginDeatails.password);

        axios.post('http://127.0.0.1:3000/auth/login?',fd,config)
        .then(res =>{
          // console.log(res.data);
          var status=res.data.status;
          var token=res.data.data;
          var message=res.data.message;
        
          
          if(status===true){
              localStorage.setItem('token',token);
              this.msgs.message=message;
              this.msgs.status=status;
              this.$router.replace('/Dashboard');
          }                 
        })
        .catch(err =>{
          alert(err);
        });
        
      }
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
