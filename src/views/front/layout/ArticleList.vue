<template>
  <div>
    <!--  文章列表  -->
    <div v-for="article in articles">
      <el-card class="bbc" style="margin-bottom: 20px">
        <!--  title  -->
        <h3 class="bbb" style="text-align: left" @click="$router.push(`/article/${article.id}`)">
          {{ article.title }}</h3>

        <!--  标签  -->
        <p style="text-align: left;color: gray">
          <i class="el-icon-user"></i>:&nbsp;{{ article.author }}&nbsp;&nbsp;&nbsp;
          <i class="el-icon-time"></i>:&nbsp;{{ article.date }}&nbsp;&nbsp;&nbsp;
          <i class="el-icon-paperclip"></i>:&nbsp;
          <el-tag size="mini">{{ article.tag }}</el-tag>
<!--       {{ article.tag }}-->
        </p>
        <!--  简介  -->
        <div style="text-align: left;color: gray">
          {{ article.content.replace(/[#]/g, "").slice(0, 60) }}...
        </div>
        <!--  阅读原文  -->
        <span style="color: #3f51b5" @click="$router.push('/article/' + article.id)">阅读原文</span>
      </el-card>
    </div>

    <!--  分页 -->
    <el-pagination
        background
        layout="prev, pager, next"
        :total="10">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "ArticleList",
  props: ['articles'],
  data() {
    return {
      articles: '',
      emptyShow: '',
      queryInfo: {
        query: '',
        pagenum: 1, // 当前页数
        pagesize: 5 // 当前每页显示的条数
      },
      total: 0,
    }
  },
  watch: {
    orderData: function (newData, oldData) {
      this.articles = newData;
    }
  },

  created() {
    if (this.$route.path === "/" || this.$route.path === "/category") {
      this.getArticle()
    } else {
      this.getArticleByCategory()
    }
  },

  methods: {
    // 获取全部文章
    async getArticle() {
      const {data: res} = await this.$http.get(`/articles/`)
      this.articles = res.data
    },

    // 根据分类获取文章
    async getArticleByCategory() {
      let category = this.$route.params.category
      const {data: res} = await this.$http.get(`/category/${category}`)
      this.articles = res.data

      if (this.articles.length === 0) {
        this.emptyShow = true
      } else {
        this.emptyShow = false
      }
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
}
</script>

<style scoped>
.bbc:hover {
  /*transform: scale(1.02); !*鼠标放上之后元素变成1.1倍大小*!*/
  box-shadow: 0px 0px 8px #9F85EC;
}

.bbb:hover {
  color: #9F85EC;
}
</style>
