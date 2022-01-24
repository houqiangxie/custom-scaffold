<template>
    <div>
        <div>应用1</div>
        <micro-app 
        name="microappchild1"
        url="http://localhost:8080/microappchild1/" 
        inline
        disableSandbox
        @mounted="mountedFunc"
        @error="errorFunc"
           ></micro-app>
    </div>
</template>

<script lang="ts" setup>
    const mountedFunc = (e)=>{

    }
    const errorFunc = (e)=>{
        console.log('error: ', e);

    }
</script>