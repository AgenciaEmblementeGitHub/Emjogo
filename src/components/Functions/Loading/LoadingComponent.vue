<template>
    <div id="carregando" v-if="isLoading == true">
        <img src="/src/assets/assets/spinner.gif" alt="Logo Uniformes LA" style="width: 5%;">
    </div>  
</template>

<script>
export default {
    name:'LoadingComponent',
    props: {
        isLoading: Boolean
    },
    data(){
        return{

        }
    }
}
</script>

<style>
    #carregando{
        left: 0;
        top:0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.262);
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: ease-in-out 250ms;
    }
</style>