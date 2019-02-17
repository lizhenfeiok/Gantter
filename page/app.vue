<template>
    <div class="panel">
        <edit-table></edit-table>
    </div>
    
    
</template>
<script>
import editTable from "./edit.vue"
export default {
    data:{
        haha:"hello world"
    },
    components:{
        "edit-table":editTable
    }
}
</script>


<style lang="scss">
@import './style/global';
</style>


