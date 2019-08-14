<template>

<div id="nav">
        <!-- Navigation -->
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <div class="container">
                <router-link class="navbar-brand logo"  to="dashboard">Bucket</router-link>
                <!-- <a class="navbar-brand logo" href="#/dashboard">Bucket</a> -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                
                    <div class="navbar-nav mr-auto">
                     
                             <!-- <b-form-select v-model="selected" :options="options" @change="processSelected"></b-form-select> -->
                           <!-- http://idealhealthcare.wilsonjohnsonlawgroup.org/api/v1/ -->
                         
                     
                    </div>
                                        <form class="form-inline mt-2 mt-md-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" v-model="search" aria-label="Search" required>
                    <button class="btn btn-outline-success my-2 my-sm-0" @click="serchFunction" type="submit">Search</button>
                    </form>
                </div>
                </div>
               
                <!-- <b-form-select v-model="selected" :options="options"></b-form-select> -->
            </nav>
            <div class="container"> 
                <div class="row-lg-12 ">
                    <router-link class="p-3 " to="/Dashboard">Buckets</router-link>|
                    <router-link class="p-3 "  to="/PostBucket">Add Bucket</router-link>|
                    <span @click="deleteToken"  ><router-link class="p-3 "  to="/" >Logout</router-link>|</span>
                    <!-- <router-link class="p-3 "  to="/PostItem">Add Items</router-link> -->
                </div>
            </div>
              
    </div>
 
</template>

<script>
import { axios } from "axios";

export default {
      name: "Header",
      data :function () {
        return{
            selected: '1',
        options: [
          { value: '0', text: 'Bucket List' },
          { value: '1', text: 'Post Bucket' },
          { value: '2', text: 'Item List' },
          { value: '3', text: 'Add Item' },
      //     { value: { C: '3PO' }, text: 'This is an option with object value' },
      //     { value: 'd', text: 'This one is disabled', disabled: true }
        ],
        selectedPage:null,
        search:"",
        }
    },
    methods:{
        processSelected(){
            let index = this.selected;
            let url=[
                {1: "bucketlists"},
                {2: "Post Bucket"},
            ]
            this.selectedPage = url[index];
            // console.log(url[index]);
            // console.log(index);
            this.$emit('selpage', index);

        },
        deleteToken(){
            localStorage.setItem('token',"");
        },
        serchFunction(){
            console.log(123);
            let searchMsg = this.search;
            // searchMsg===""?alert("Enter the bucket name"):"";
            // if (searchMsg==="") {
            //     alert("Enter the bucket name");
            //     return;
            // }
            axios.get()
            .then(ress =>{
                
            })
            .catch(err=>{

            });

            console.log(searchMsg);
            
            
        }
    },
    created(){

        // this.$emit('selpage', this.selectedPage);
        var token = localStorage.getItem('token');
        if (token==null || token==undefined || token==="" ) {
            this.$router.replace('/');
        }

        
    }
}
</script>

<style scoped>
.link{
    border-left: 3pt black solid;
    height: 4pt;
}
</style>