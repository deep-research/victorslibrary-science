<template>
  <Layout>
    <!-- <p><g-link to="/articles">Articles</g-link> / <g-link to="/articles/categories">Categories</g-link> / {{$page.category.title}}</p> -->
    <b-breadcrumb :items="breadcrumbs()"></b-breadcrumb>

    <h1 class="my-4">Category: {{$page.category.title}}</h1>

    <div style="max-width: 400px">
      <b-input-group size="md">
        <b-input-group-prepend is-text>
          <b-icon icon="search"></b-icon>
        </b-input-group-prepend>
        <b-form-input type="search" name="search" id="search" placeholder="Search" v-model="search"></b-form-input>
      </b-input-group>
      <v-select :options="tagsFound()" v-model="tagFilter" :clearable="false" class="mt-2"></v-select>
      <v-select :options="getMonthsArray($page.category.belongsTo.edges)" v-model="dateFilter" :clearable="false" class="mt-2"></v-select>
    </div>
    <b-button @click="resetData" class="mt-2">Clear</b-button>

    <div v-if="searchResults.length > 0">
      <div v-if="searchResults.length == 1">
        <p class="mt-4 mb-0">1 article found.</p>
      </div>
      <div v-else>
        <p class="mt-4 mb-0">{{searchResults.length}} articles found.</p>
      </div>
      <article v-for="item in lists" :key="item.node.id">
        <div class="media my-5">
          <div class="media-body">
            <g-link :to="item.node.path">
              <h3 class="mt-0">{{item.node.title}}</h3>
            </g-link>
            <div class="mb-2">
              <span style="font-size: 20.5px">By {{item.node.author}} - {{item.node.date | luxon}}</span>
            </div>

            <p class="mb-0">{{item.node.excerpt}}</p>
            <p v-if="item.node.category" class="mb-0 mt-1">
              <span style="font-weight: 500">
                  <g-link to="/articles/categories" v-b-tooltip.hover title="Search By Category">Category</g-link>:
              </span>
              <g-link :to="item.node.category.path">{{item.node.category.title}}</g-link>
            </p>
            <p v-if="item.node.tags.length > 0" class="mb-0 mt-1">
              <span style="font-weight: 500">
                <g-link to="/articles/tags" v-b-tooltip.hover title="Search By Tag">Tags</g-link>:
              </span>
              <span v-for="(tag, index) in item.node.tags" :key="index">
                <g-link :to="tag.path">{{tag.title}}</g-link>
                <span v-if="index+1 < item.node.tags.length">, </span>
              </span>
            </p>
          </div>
        </div>
      </article>
      <b-pagination
        v-if="searchResults.length > perPage"
        :total-rows="totalRows" 
        v-model="currentPage"
        :per-page="perPage"
        class="mb-0"
      />
    </div>

    <div class="my-4" v-else>
        <p>Your search didn't return any results. Please try again.</p>
    </div>
  </Layout>
</template>

<page-query>
query Categories ($id: ID!) {
  category (id: $id) {
    title
    path
    belongsTo(sortBy: "date", order: DESC) {
      edges {
        node {
          ...on Article {
            id
            title
            path
            excerpt
            author
            date
            content
            image
            category {
              title
              path
            }
            tags {
              title
              path
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome';

export default {
  metaInfo() {
    return {
      title: this.$page.category.title,
    }
  },
  components: {
    Pager
  },
  data() {
    return {
      search: '',
      currentPage: 1,
      perPage: 2,
      tagFilter: "All Tags",
      dateFilter: "All Dates"
    }
  },
  methods: {
    getTagsLowercaseArray(data) {
      let tags = []
      data.forEach(tag => {
        tags.push(tag.title.toLowerCase())
      })
        
      return(tags)
    },
    resetData () {
      Object.assign(this.$data, this.$options.data.apply(this))
      this.mounted = true
    },
    tagsFound() {
      let array = []
      this.$page.category.belongsTo.edges.forEach(article => {
        article.node.tags.forEach(tag => {
          array.push(tag.title)
        })
      })
      for (let i in array) {
        array = [...new Set(array)]
      }
      array.unshift("All Tags")
      return array.sort()
    },
    getMonthsArray(data) {
      let array = []
      data.forEach(element => {
        array.push(
          this.$luxon(element.node.date, "MMMM yyyy")
        )
      })
      array.unshift("All Dates")
      return(array = [...new Set(array)])
    },
    breadcrumbs() {
      let array = [
        {
          text: 'Articles',
          to: '/articles'
        },
        {
          text: 'Categories',
          to: '/articles/categories'
        },
        {
          text: this.$page.category.title,
          active: true
        }
      ]
      return array
    }
  },
  computed: {
    searchResults() {
      return this.$page.category.belongsTo.edges.filter(article => {
          let search = this.search.toLowerCase().trim()

          let tagMatch = false
          let dateMatch = false

          if (
            this.tagFilter == "" ||
            this.tagFilter == "All Tags" ||
            article.node.tags.find(element => element.title.toLowerCase().includes(this.tagFilter.toLowerCase()))
          ) {
            tagMatch = true
          }

          if (
            this.dateFilter == "All Dates" ||
            this.$luxon(article.node.date, "MMMM yyyy").includes(this.dateFilter)
          ) {
            dateMatch = true
          }

          if (tagMatch && dateMatch) {
            if (article.node.title.toLowerCase().includes(search)) {
              return article.node.title.toLowerCase().includes(search)
            } else if (article.node.excerpt.toLowerCase().includes(search)) {
              return article.node.excerpt.toLowerCase().includes(search)
            } else if (article.node.author.toLowerCase().includes(search)) {
              return article.node.author.toLowerCase().includes(search)
            } else if (article.node.content.toLowerCase().includes(search)) {
              return article.node.content.toLowerCase().includes(search)
            } else if (article.node.category.title.toLowerCase().includes(search)) {
              return article.node.category.title.toLowerCase().includes(search)
            } else if (this.getTagsLowercaseArray(article.node.tags).find(element => element.includes(search))) {
              return this.getTagsLowercaseArray(article.node.tags).find(element => element.includes(search))
            } else if (this.$luxon(article.node.date).toLowerCase().includes(search)) {
              return (this.$luxon(article.node.date)).toLowerCase().includes(search)
            }
          }
      })
    },
    lists() {
      const items = this.searchResults

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

<style lang="scss" scoped>
.media {
  img {
    width: 120px;
    height: 120px;
  }
}

.media-body {
  margin: auto;
}

.pager-container {
  display: inline-block;
  font-size: 1.2rem;
  text-align: center;
  width: 100%;
  color: black;

  &__link {
    text-align: center;
    padding: 0.6rem 1.2rem;
    color: white;
    text-decoration: none;
  }
}

.pager-container .active {
  background-color:  #224C98;
}

.pager-container :not(.active) {
  background-color: rgb(134, 136, 158);  
}

.pager-container__link {
  margin-right: 4px;
}

@media (hover: hover) and (pointer: fine) {
  .pager-container__link {
    transition: all 0.3s ease 0s;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    opacity: 1;
  }

  .pager-container__link:hover{
    opacity: 0.75;
  }
}
</style>
