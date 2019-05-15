<template>
    <div class="dir_list" v-if="$store.state.dir_list">
        <table class="table">
            <tr v-for="item in $store.state.dir_list._embedded.items"
            class="dir_list__item dir_list__item--dir"
            v-if="item.type == 'dir'" 
            @click="$store.dispatch('loadDir', item.path)" :key="item.md5">
                <td>
                    <div class="icon"></span><font-awesome-icon icon="folder" /></div>
                    {{item.name}}
                </td>
            </tr>
            <tr v-else>
                <td>{{item.name}}</td>
            </tr>
        </table>
       
    </div>
</template>

<script>
export default {
    name: 'dir-list',
    data: function() {
        return {
           
        }
    },
    methods:{
        getDir(dir){
            this.$store.dispath('loadDir', dir)
        }
    }
}
</script>

<style>
    .dir_list{
        margin-top: 20px;
    }
    .dir_list__item:hover{
        background: #f4f4f4;
    }
    .dir_list__item--dir{
        cursor: pointer;
    }
    .icon{
        display: inline-block;
        margin-right: 10px;
    }
</style>
