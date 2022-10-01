<template>
  <div>
    <Header></Header>

    <el-main>
      <div style="width: 1000px;margin: 0 auto">
        <el-card style="height: auto;min-height: 650px">
          <!--   标签页头   -->
          <el-menu class="el-menu-demo" mode="horizontal">
            <el-menu-item v-for="i in tags" @click="toCategory(i.title)">{{ i.title }}
            </el-menu-item>
          </el-menu>

          <!-- 列表 -->
          <article-list :articles="articles" :key="timer"></article-list>

          <!--  空状态  -->
          <el-empty v-show="emptyShow" description="暂无相关文章"></el-empty>
        </el-card>
      </div>

      <!--  回到顶部   -->
      <el-backtop :bottom="80">Top</el-backtop>
    </el-main>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ArticleList from "../layout/ArticleList";

export default {
  name: "Category",
  components: {
    Header,
    Footer,
    ArticleList
  },

  data() {
    return {
      timer: "",
      isRouterAlive: true,
      activeName: 'second',
      emptyShow: '',
      tags: '',
      articles: ''
    }
  },

  created() {
    this.getCategory()
  },

  methods: {
    toCategory(category) {
      this.$router.push(`/categories/${category}`)
      this.reloadAll()
    },

    reloadAll() {
      this.timer = new Date().getTime()
    },

    // 获取 category
    async getCategory() {
      const {data: res} = await this.$http.get('/category/')
      this.tags = res.data
    }
  }
}
</script>

<style scoped>

</style>
