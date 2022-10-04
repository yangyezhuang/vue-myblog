<template>
  <div>
    <Header></Header>

    <el-main>
      <div class="block" style="width: 1000px;height:auto;margin: 0 auto">

        <!-- 标签  -->
        <tag-info></tag-info>

        <div style="min-height: 640px;height: auto">
          <!--  列表 -->
          <article-list :tagg="tagg" :key="timer"></article-list>
        </div>

      </div>
    </el-main>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ArticleList from "../layout/ArticleList";
import TagInfo from "../layout/TagList";

export default {
  name: "TagPage",
  components: {
    Header, Footer, ArticleList, TagInfo
  },
  data() {
    return {
      tag: '',
      tagg: this.$route.params.tag,
      articles: ''
    }
  }
}
</script>

<style scoped>

</style>
