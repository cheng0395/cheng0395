<template>
    <Header />
    <h1>Hello User,Welcome on Add Restaurant Page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name">
        <input type="text" name="address" placeholder="Enter Adddress" v-model="restaurant.address">
        <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact">
        <button type="button" v-on:click="addRestuarant"> Add new restaurant</button>
    </form>
</template>
<script>
import Header from './Header.vue'
import axios from 'axios'
export default{
    name:'Add',
    components:{
        Header
    },
    data(){
        return{
            restaurant :{
            name:'',
            address:'',
            contact:''
        }     
        }
    },
    methods:{
        async addRestuarant(){
            console.warn(this.restaurant);
            const result=await axios.post("http://localhost:3004/restuarant",{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact,
            });
            if(result.status==201){
                this.$router.push({name:'Home'});
            }
            console.warn("result",result)
        }
    },
    mounted(){
        let user=localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:'SignUp'})
        }
    }
}
</script>