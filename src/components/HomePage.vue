<template>
    <div>
        <el-button @click="msg">这是一个按钮</el-button>
    </div>
</template>

<script>
export default {
    name:"homepage",
    data(){
        return{
            
        }
    },
    methods: {
        msg:function(){
            this.$message('这是一条消息提示');
        }
    },
}
</script>
<style scoped>

</style>