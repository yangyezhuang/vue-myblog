<template>
  <div class="edit">
    <el-card>
      <!-- 创作区域 表单 -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <!-- 输入标题 -->
        <el-form-item label="标题" prop="name">
          <el-input v-model="msg.title"></el-input>
        </el-form-item>

        <!-- 选择专栏 -->
        <el-form-item label="标签">
          <el-select v-model="msg.category" placeholder="选择文章标签" style="float: left">
            <el-option v-for="category in categories" :key="category" :label="category.title"
                       :value="category.title"></el-option>
          </el-select>
        </el-form-item>


        <!-- 选择标签 -->
        <el-form-item label="专栏">
          <el-select v-model="msg.tag" placeholder="选择文章专栏" style="float: left">
            <el-option v-for="tag in tags" :key="tag" :label="tag.tag" :value="tag.tag"></el-option>
          </el-select>
        </el-form-item>

        <!-- 嵌入 Markdown 编辑器 -->
        <el-form-item label="内容">
          <mavon-editor style="height: 100%" v-model="msg.content" @save=""></mavon-editor>
        </el-form-item>

        <!-- 提交按钮 -->
        <el-form-item>
          <el-button :plain="true" type="primary" @click.prevent="save">保存文章</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import "mavon-editor/dist/css/index.css";

export default {
  name: "Edit",
  data() {
    return {
      msg: {
        title: "",
        category: "",
        tag: "",
        content: "",
      },
      tags: '',
      categories: ''
    }
  },

  created() {
    this.getInfo()
    this.getCategories()
    this.getTags()
  },

  methods: {
    // 根据 id 进行查询
    async getInfo() {
      let id = this.$route.params.id;
      const {data: res} = await this.$http.get(`/articles/article/${id}`)
      this.msg = res.data;
    },

    // 获取标签
    async getCategories() {
      const {data: res} = await this.$http.get("/category/")
      this.categories = res.data;
    },
    // 获取标签
    async getTags() {
      const {data: res} = await this.$http.get("/tags")
      this.tags = res.data;
    },

    // 保存数据
    save() {
      let params = {
        id: this.$route.params.id,
        title: this.msg.title,
        category: this.msg.category,
        tag: this.msg.tag,
        content: this.msg.content,
      };

      this.$http.post("/articles/update", params).then((res) => {
      });
      this.$message.success('更新成功')
      this.$router.push('/mg/articleManager/article')
    }
  }
};
</script>

<style scoped>
</style>
