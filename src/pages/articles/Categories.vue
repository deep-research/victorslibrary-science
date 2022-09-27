<template>
  <Layout>
    <!-- <p><g-link to="/articles">Articles</g-link> / Categories</p> -->
    <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>

    <h1 class="my-4">Categories</h1>

    <div style="max-width: 400px">
      <b-input-group size="md">
        <b-input-group-prepend is-text>
          <b-icon icon="search"></b-icon>
        </b-input-group-prepend>
        <b-form-input type="search" name="search" id="search" placeholder="Search" v-model="search"></b-form-input>
      </b-input-group>
    </div>
    <div class="mt-2">
      <b-button @click="resetData">Clear</b-button>
      <b-button  variant="primary" g-link to="/articles/tags" class="ml-2">Search by Tag</b-button>
      <!-- <b-button  variant="primary" g-link to="/articles/" class="ml-2">Search by Article</b-button> -->
    </div>

    <b-form-radio-group
      v-model="selected"
      :options="options"
      class="mt-4"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
      stacked
    ></b-form-radio-group>

    <div v-if="searchResults.length > 0">
      <div v-if="$page.categories.edges.length == 1">
        <p class="mt-4 mb-0">1 category found.</p>
      </div>
      <div v-else>
        <p class="mt-4 mb-0">{{searchResults.length}} categories found.</p>
      </div>

      <div
        v-for="item in lists"
        :key="item.node.id"
      >

      <div class="media mt-5">
        <div class="media-body">
          <g-link :to="item.node.path">
            <h3 class="my-0">{{item.node.title}} ({{item.node.belongsTo.totalCount}})</h3>
          </g-link>
        </div>
      </div>

      </div>

      <b-pagination
        v-if="searchResults.length > perPage"
        :total-rows="totalRows" 
        v-model="currentPage"
        :per-page="perPage"
        class="mb-0 mt-5"
      />
    </div>

    <div class="my-4" v-else>
        <p>Your search didn't return any results. Please try again.</p>
    </div>
  </Layout>
</template>

<page-query>
query Categories {
	categories: allCategory {
    edges {
      node {
        id
        path
        title
        belongsTo {
          totalCount
          pageInfo {
            totalPages
            currentPage
          }
          edges {
            node {
              ...on Article {
                id
                title
                path
                excerpt
              }
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Categories'
  },
  data() {
    return {
      search: '',
      currentPage: 1,
      perPage: 2,
      selected: 'A',
      options: [
        { item: 'A', name: 'Sort By Count' },
        { item: 'B', name: 'Sort Alphabetically' },
      ],
      breadcrumbs: [
        {
          text: 'Articles',
          to: '/articles'
        },
        {
          text: 'Categories',
          active: true
        }
      ]
    }
  },
  methods: {
    resetData () {
      Object.assign(this.$data, this.$options.data.apply(this))
      this.mounted = true
    }
  },
  computed: {
    searchResults() {
      return this.$page.categories.edges.filter(post => {
        let search = this.search.toLowerCase().trim()


        if (post.node.title.toLowerCase().includes(search)) {
          return post.node.title.toLowerCase().includes(search)
        }
      })
    },
    lists() {
      const items = this.searchResults

      // < ? 1 : -1 > to reverse
      if (this.selected == "A") {
        items.sort((a, b) => (a.node.belongsTo.totalCount > b.node.belongsTo.totalCount) ? -1 : 0)
      } else if (this.selected == "B") {
        items.sort((a, b) => (a.node.title > b.node.title) ? 1 : -1)
      }

      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
    },
    totalRows() {
      return this.searchResults.length
    }
  }
}
</script>
