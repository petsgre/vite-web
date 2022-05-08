<template>
  <div class="goods">
    <h1>商品列表</h1>
    <div v-for="item in list" :key="item.id">
      {{ `${item.id}:${item.name}` }}
    </div>
  </div>
</template>
<script>
import { getGoods } from "../../api/services"
export default {
  data() {
    return {
      list: [],
    }
  },
  created() {
    console.log(`the component is now created.1`)
    getGoods().then((res) => {
      this.list = res.list
    })
  },
  mounted() {
    console.log(`the component is now mounted.`)
  },
}
</script>
<style></style>
