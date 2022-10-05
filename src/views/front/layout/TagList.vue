<template>
  <!--  Tag模块  -->
  <div style="width:100%;height:auto;float: left">
    <el-tag class="taggg"
            style="margin-right: 10px;margin-bottom: 5px;" size="medium"
            v-for="tag in tagList"
            :type="typeList[Math.floor((Math.random()*typeList.length))]"
            @click="toTag(tag.tag)">
      {{ tag.tag }}
    </el-tag>
  </div>
</template>

<script>
export default {
  name: "TagInfo",
  data() {
    return {
      typeList: ['primary', 'warning', 'success', 'info', 'danger'],
      tagList: []
    }
  },

  created() {
    this.getTagList()
  },

  methods: {
    async getTagList() {
      const {data: res} = await this.$http.get(`/tags/`);
      this.tagList = res.data
    },

    toTag(tag) {
      this.$router.push(`/tag/${tag}`)
      location.reload()
    }
  }
}
</script>

<style scoped>
.taggg:hover {
  transform: scale(1.1);
}
</style>
