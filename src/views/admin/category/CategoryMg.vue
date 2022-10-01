<template>
  <div class="main" style="height: auto;">
    <el-card style="height: auto">
      <!--  添加专栏  -->
      <el-row :gutter="10">
        <el-col :span="4">
          <el-button @click="addcategory">新建专栏</el-button>
        </el-col>
      </el-row>

      <!-- 专栏列表 -->
      <el-table :data="category.slice((queryInfo.pagenum-1)*queryInfo.pagesize,queryInfo.pagenum*queryInfo.pagesize)"
                border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="专栏" prop="title" width="150px"></el-table-column>
        <el-table-column label="操作" width="80px">
          <template v-slot="scope">
            <el-button type="danger" icon="el-icon-delete" @click="delcategory(scope.row.title)"></el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="queryInfo.pagenum"
          :page-sizes="[3, 5, 7, 9]"
          :page-size="queryInfo.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalSize">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import {Message} from "element-ui";

export default {
  name: "CategoryMg",
  data() {
    return {
      queryInfo: {
        query: '',
        pagenum: 1, // 当前页数
        pagesize: 8 // 当前每页显示的条数
      },
      totalSize: '',
      category: [],
      total: 0
    };
  },


  created() {
    this.getcategory()
  },

  methods: {
    // 获取全部专栏
    async getcategory() {
      const {data: res} = await this.$http.get("/category/")
      this.category = res.data;
      this.total = res.data.length
    },

    // 添加专栏
    addcategory() {
      this.$prompt('请输入专栏', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputErrorMessage: '格式不正确'
      }).then(({value}) => {
        this.$http.post(`/category/add/${value}`)
        this.$message.success('创建成功');
        location.reload()
      }).catch(() => {
        this.$message.info('取消输入');
      });
    },

    // 删除专栏
    delcategory(category) {
      this.$confirm('此操作将永久删除该专栏, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.delete(`/category/del/${category}`).then((res) => {
          // if (res.code === 1)
          //   location.reload()
          Message.success("删除成功")
          location.reload()
        })
      })
    },

    // 监听pagesize改变的事件
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize
    },

    // 监听页码值改变的事件
    handleCurrentChange(pageNum) {
      this.queryInfo.pagenum = pageNum
    }
  }
};
</script>

<style lang="scss" scoped>

</style>

