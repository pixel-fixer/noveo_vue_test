<template>
    <div class="dir_list" v-if="list">
        <div class="dir_list__item" v-for="item in list._embedded.items">{{item.name}}</div>
    </div>
</template>

<script>
export default {
    name: 'dir-list',
    data: function() {
        return {
            list: this.$store.state.dir_list
        }
    },
}
</script>

<style>

</style>
