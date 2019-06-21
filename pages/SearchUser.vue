<template>
    <div>
        <form @submit.prevent="onSubmit">
            <input type="text" v-model="text" placeholder="BG Username">
            <input type="submit" value="Search">
        </form>
        <DisplayUserInfo/>
    </div>
</template>

<script>
  import DisplayUserInfo from '../components/DisplayUserInfo.vue';

export default {
  components: {
    DisplayUserInfo
  },
    data()
    {
        return{
            "user":{
                "username":"",
                "firstname":"",
                "lastname":""
            }
        }
    },

    methods:{
        onSubmit()
        {
            //this.$emit('search-text',this.text);
            this.user.text="";
        }
    }  
}
</script>

<style>

</style>
