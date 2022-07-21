<template>
  <div class="div_box">
    <el-tag type="primary">输入网站名字：</el-tag>
    <el-input v-model="name" style="width: 500px; margin-left: 10px"></el-input>
    <el-button style="margin-left: 10px" @click="submit">提交</el-button>
  </div>
</template>

<script>
  import { changeName, getName } from '@/api/userManagement'

  export default {
    name: 'Name',
    // components: { Edit },
    data() {
      return {
        name: '胜利888',
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      submit() {
        const { msg } = changeName({ value: this.name })
        this.$baseMessage('ok', 'success')
      },
      async fetchData() {
        this.listLoading = true
        const { data } = await getName({})
        console.log(data.name)
        this.name = data.name
        setTimeout(() => {
          this.listLoading = false
        }, 300)
      },
    },
  }
</script>
<style>
  .div_box {
    margin-left: 20px;
    margin-top: 20px;
  }
</style>
