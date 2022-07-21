<template>
  <div class="userManagement-container">
    <vab-query-form>
      <vab-query-form-left-panel :span="12">
        <el-button
          icon="el-icon-plus"
          type="primary"
          disabled
          @click="handleEdit"
        >
          添加
        </el-button>
        <el-button
          icon="el-icon-delete"
          type="danger"
          disabled
          @click="handleDelete"
        >
          批量删除
        </el-button>
      </vab-query-form-left-panel>
      <vab-query-form-right-panel :span="12">
        <el-form :inline="true" :model="queryForm" @submit.native.prevent>
          <el-form-item>
            <el-input
              v-model.trim="queryForm.username"
              placeholder="请输入用户名"
              clearable
            />
          </el-form-item>
          <el-form-item>
            <el-button icon="el-icon-search" type="primary" @click="queryData">
              查询
            </el-button>
          </el-form-item>
        </el-form>
      </vab-query-form-right-panel>
    </vab-query-form>

    <el-table
      v-loading="listLoading"
      :data="list"
      :element-loading-text="elementLoadingText"
      @selection-change="setSelectRows"
    >
      <el-table-column show-overflow-tooltip type="selection"></el-table-column>
      <el-table-column
        show-overflow-tooltip
        prop="ID"
        label="id"
      ></el-table-column>
      <el-table-column
        show-overflow-tooltip
        prop="username"
        label="用户名"
      ></el-table-column>
      <el-table-column
        show-overflow-tooltip
        prop="money"
        label="余额"
      ></el-table-column>
      <el-table-column
        show-overflow-tooltip
        prop="wanted_money"
        label="篡改余额"
      ></el-table-column>
      <el-table-column show-overflow-tooltip prop="intercept" label="是否拦截">
        <template #default="{ row }">
          <el-switch
            v-model="row.intercept"
            disable-transitions
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="changeIntercept(row)"
          ></el-switch>
        </template>
      </el-table-column>

      <!--      <el-table-column show-overflow-tooltip label="权限">-->
      <!--        <template #default="{ row }">-->
      <!--          <el-tag v-for="(item, index) in row.permissions" :key="index">-->
      <!--            {{ item }}-->
      <!--          </el-tag>-->
      <!--        </template>-->
      <!--      </el-table-column>-->

      <!--      <el-table-column-->
      <!--        show-overflow-tooltip-->
      <!--        prop="datatime"-->
      <!--        label="修改时间"-->
      <!--      ></el-table-column>-->
      <el-table-column show-overflow-tooltip label="操作" width="200">
        <template #default="{ row }">
          <el-button type="text" @click="handleEdit(row)">编辑</el-button>
          <!--          <el-button type="text" @click="handleDelete(row)">删除</el-button>-->
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      :current-page="queryForm.pageNo"
      :page-size="queryForm.pageSize"
      :layout="layout"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
    <edit ref="edit" @fetch-data="fetchData"></edit>
  </div>
</template>

<script>
  import { usergetList, doDelete, updateIntercept } from '@/api/userManagement'
  import Edit from './components/UserManagementEdit'

  export default {
    name: 'UserManagement',
    components: { Edit },
    data() {
      return {
        list: null,
        listLoading: true,
        layout: 'total, sizes, prev, pager, next, jumper',
        total: 0,
        selectRows: '',
        elementLoadingText: '正在加载...',
        queryForm: {
          pageNo: 1,
          pageSize: 10,
          username: '',
        },
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      dochange(value) {},
      async changeIntercept(row) {
        console.log('row->', row)
        const postVal = Object.assign({}, row)
        if (row.intercept) {
          postVal.intercept = 1
        } else {
          postVal.intercept = 0
        }
        const { msg } = await updateIntercept(postVal)
        this.$baseMessage(msg, 'success')
      },
      setSelectRows(val) {
        this.selectRows = val
      },
      handleEdit(row) {
        console.log('handleEdit->', row)
        if (row.ID) {
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
        const { data, totalCount } = await usergetList(this.queryForm)
        this.list = data
        this.list.forEach((e) => {
          e.intercept = e.intercept === 1
        })
        this.total = totalCount
        setTimeout(() => {
          this.listLoading = false
        }, 300)
      },
    },
  }
</script>
