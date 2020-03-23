<template>
  <Layout>
    <div class="markdown-body">
      <h1>{{ $page.denver.title }}</h1>
      <div v-html="$page.denver.info" />
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  denver (path: $path) {
    title
    info
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.denver.title
    };
  }
};
</script>
