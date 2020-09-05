<template>
    <div class="content">
        <br>
        <span> Seja bem-vinda(o) {{user.name}}</span>
        <ul>
            <li v-for="nome in nomes"> {{nome}} <button @click="remover(nomes)"> X </button> </li>
        </ul>
    </div>
</template>

<style scoped>
    span{
        color:red
    }

    .content{
        max-width:300px;
    }

    h3,h4{
        margin:0;
    }

</style>

<script>
    export default{
        name:'PropsList',
        // Propriedades que esperamos receber
        props:{
            nomes:{
                type:Array,
                required:true
            },
            user:{
                type:Object,
                required:true
            }
        },
    
        data(){
            return {}
        },
        methods:{
            remover(nome){
                let indexNome = this.nomes.indexOf(nome);
                this.nomes.splice(indexNome,1);

                this.$emit("remove",nome);
            }
        }
    }
</script>
