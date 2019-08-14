<template>
  <div>
      <div>
       <Header v-on:selpage="processSelected"/>
       <div class="container">
             <div class="col-lg-12 border">
            <div class="col-lg-12">
                <h2 class="mt-2 text-left">Welcome</h2>
                <div>
                    <table>
                        
                    </table>
                </div>
            </div>
            </div>
        <GetBuckets />
       </div>
         
        <!-- Page Content -->
        <div class="container d-flex border">
            
         
        </div>
      </div>
  </div>
</template>
 


<script>
import Header from '../components/layout/Header.vue';
import GetBuckets from '../components/GetBuckets.vue';

export default {
   
    name:'Dashboard',
    components:{
        Header,
        GetBuckets
    },
    
    methods:{
        triggerAction(e){
            console.log(e);
            

        },
        processSelected(selected){
            console.log(selected);
            
        }

    },
    created(){
        // var token = localStorage.getItem('token');
        // if (token==null || token==undefined || token==="" ) {
        //     this.$router.replace('/');
        // }

        
    }
}
</script>

<style scoped>
.lol{
    border-left: 5pt black groove;
    /* height: 20pt ; */
    font-size: 15pt
}
.logo{
    font-size: 15pt
}

</style>>
