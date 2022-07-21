<template>
  <div class="div_box">
    <el-switch
      v-model="open"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="打开"
      inactive-text="关闭"
      @change="changeValue"
    ></el-switch>
  </div>
</template>

<script>
  import { getOpen, postChange } from '@/api/switcher'
  // import Edit from './components/UserManagementEdit'

  export default {
    name: 'Switcher',
    // components: { Edit },
    data() {
      return {
        open: true,
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      async changeValue() {
        const { code, msg } = await postChange({ open: this.open })
        this.$baseMessage(msg, 'success')
        console.log(code, msg)
      },
      setSelectRows(val) {
        this.selectRows = val
      },
      handleEdit(row) {
        if (row.id) {
          this.$refs['edit'].showEdit(row)
        } else {
          this.$refs['edit'].showEdit()
        }
      },
      handleDelete(row) {
        if (row.id) {
          this.$baseConfirm('你确定要删除当前项吗', null, async () => {
            const { msg } = await doDelete({ ids: row.id })
            this.$baseMessage(msg, 'success')
            this.fetchData()
          })
        } else {
          if (this.selectRows.length > 0) {
            const ids = this.selectRows.map((item) => item.id).join()
            this.$baseConfirm('你确定要删除选中项吗', null, async () => {
              const { msg } = await doDelete({ ids })
              this.$baseMessage(msg, 'success')
              this.fetchData()
            })
          } else {
            this.$baseMessage('未选中任何行', 'error')
            return false
          }
        }
      },
      handleSizeChange(val) {
        this.queryForm.pageSize = val
        this.fetchData()
      },
      handleCurrentChange(val) {
        this.queryForm.pageNo = val
        this.fetchData()
      },
      queryData() {
        this.queryForm.pageNo = 1
        this.fetchData()
      },
      async fetchData() {
        this.listLoading = true
        const { data } = await getOpen()
        console.log(data.open)
        this.open = data.open
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
