<template>
    <div>
        <table class="edit-form">
            <thead>
                <th>序号</th>
                <th>任务</th>
                <th>人员</th>
                <th>时间</th>
            </thead>
            <tbody>
                <tr v-for="(item,index) in todos" :key="item.id">
                    <td>{{index+1}}</td>
                    <td>{{item.content}}</td>
                    <td>
                        <span v-for="person in item.people" :key="person.id">{{person.name}}</span>
                    </td>
                    <td>
                        <span>{{item.time.start}}</span>
                        <span>-</span>
                        <span>{{item.time.end}}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
</template>
<script>
export default {
    data(){
        return {
            todos:[]
        }
    },
    methods:{
        initData(){
            this.todos = [{id:"123",content:"hahahha",people:[{id:"44",name:"lizhenfei"}],time:{start:"2019",end:"2020"}}]
        }
    },
    mounted(){
        this.initData();
    }
}
</script>
<style lang="scss" scoped>
.edit-form{
    text-align: center;
    th,td{
        border:1px solid #eee;
        padding:0.5em;
    }
}
</style>


