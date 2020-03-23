<template>
  <Layout>
    <h1>Welcome to my blog :)</h1>
    <ul class="post-list">
      <h2>From Wordpress</h2>
      <li v-for="edge in $page.allWordPressPost.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </li>
      <h2>From Mark Down Files</h2>
      <li v-for="edge in $page.allPost.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </li>
      <h2>From Custom API</h2>
      <li v-for="edge in $page.allDenver.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </li>
    </ul>
    {{ $page.allWordPressPost.pageInfo }}
  </Layout>
</template>

<page-query>
query Home {
  allWordPressPost (perPage: 10) {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        excerpt
      }
    }
  }
  allPost {
  edges {
    node {
      path
      title
      content
    }
  }
}
allDenver {
  edges {
    node {
      title
      info
      path
    }
  }
}

}
</page-query>

<script>
export default {
  components: {},
  metaInfo: {
    title: "Welcome to my blog :)"
  }
};
</script>
