<template>
  <Layout>
    <!-- <g-image immediate class="blogImage mb-4" :src="$page.post.image" /> -->
    <article class="blogPost">
      
      <!-- Breadcrumbs -->
      <!-- <p><g-link to="/articles">Articles</g-link> / {{slug()}}</p> -->
      <b-breadcrumb :items="breadcrumbs()"></b-breadcrumb>

      <h1 v-html="$page.post.title" class="my-4" />
      <div class="mb-2">
        <span style="font-size: 20.5px">By {{$page.post.author}} - {{$page.post.date | luxon}}</span>
      </div>

      <p v-if="$page.post.category" class="mb-0 mt-1">
        <span style="font-weight: 500">
          <g-link to="/articles/categories" v-b-tooltip.hover title="Search By Category">Category</g-link>:
        </span> <g-link :to="$page.post.category.path">{{$page.post.category.title}}</g-link>
      </p>
      <p v-if="$page.post.tags.length > 0" class="mb-0 mt-1">
        <span style="font-weight: 500">
          <g-link to="/articles/tags" v-b-tooltip.hover title="Search By Tag">Tags</g-link>:
        </span>
        <span v-for="(tag, index) in $page.post.tags" :key="index">
          <g-link :to="tag.path">{{tag.title}}</g-link>
          <span v-if="index+1 < $page.post.tags.length">, </span>
        </span>
      </p>
      <!-- <div><b>Time:</b> {{ $page.post.timeToRead }} min read</div> -->
      <!-- <BlogContent class="mt-5" :content="$page.post.content"/> -->
      <VueRemarkContent class="article-text mt-5" />

      <div style="margin-top: 38px;">
        <ClientOnly>
          <span v-b-tooltip.hover title="Share on Facebook" class="d-inline-block mr-3 social-span">
            <facebook class="social-btn" :url="getUrl()" scale="3"></facebook>
          </span>
          <span v-b-tooltip.hover title="Share on Twitter" class="d-inline-block mr-3 social-span">
            <twitter class="social-btn" :url="getUrl()" :title="$page.post.title" scale="3"></twitter>
          </span>
          <span v-b-tooltip.hover title="Share on WhatsApp" class="d-inline-block mr-3 social-span">
            <whats-app  class="social-btn" :url="getUrl()" :title="$page.post.title" scale="3"></whats-app>
          </span>
          <span v-b-tooltip.hover title="Share on Telegram" class="d-inline-block mr-3 social-span">
            <telegram class="social-btn" :url="getUrl()" scale="3"></telegram>
          </span>
          <span v-b-tooltip.hover title="Share by Email" class="d-inline-block mr-3 social-span">
            <email class="social-btn" :url="getUrl()" :subject="$page.post.title" scale="3"></email>
          </span>
          <span class="d-inline-block mr-3 social-span" v-b-tooltip.hover title="Copy Link" @click="showAlert" v-clipboard="clipboard()">
            <div style="height: 3px; cursor: pointer;" @mouseover="urlHoverTrue()" @mouseleave="urlHoverFalse()"></div>
            <b-button variant="secondary" style="height: 42px; width: 42px; padding: 0" class="url-btn"  v-bind:class="{ urlHoverCss: urlHover }">
              <b-icon icon="link45deg" style="width: 40px; height: 40px;"></b-icon>
            </b-button>
            <div style="height: 3px; cursor: pointer;" @mouseover="urlHoverTrue()" @mouseleave="urlHoverFalse()"></div>
          </span>
        </ClientOnly>
      </div>

      <b-alert
        variant="success"
        dismissible
        fade
        :show="dismissCountDown"
        @dismiss-count-down="countDownChanged"
        class="mt-3"
      >
        The link has been copied.
      </b-alert>

      <Disqus shortname="victorslibrary" :identifier="$page.post.title" class="mt-5" />
    </article>
  </Layout>
</template>

<page-query>
# query Article ($id: ID!) {
#   post: article (id: $id) {
query Article ($path: String!) {
  post: article (path: $path) {
    title
    author
    date
    # timeToRead
    content
    image
    path
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
</page-query>

<script>
// import BlogContent from '@/components/BlogContent'

export default {
  // components: {
  //   BlogContent,
  // },
  data() {
    return {
      urlHover: false,
      dismissSecs: 5,
      dismissCountDown: 0
    }
  },
  components: {
    Facebook: () =>
      import ('vue-socialmedia-share')
      .then(m => m.Facebook)
      .catch(),
    Twitter: () =>
      import ('vue-socialmedia-share')
      .then(m => m.Twitter)
      .catch(),
    WhatsApp: () =>
      import ('vue-socialmedia-share')
      .then(m => m.WhatsApp)
      .catch(),
    Telegram: () =>
      import ('vue-socialmedia-share')
      .then(m => m.Telegram)
      .catch(),
    Email: () =>
      import ('vue-socialmedia-share')
      .then(m => m.Email)
      .catch(),
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
    }
  },
  methods: {
    urlHoverTrue() {
      this.urlHover = true
    },
    urlHoverFalse() {
      this.urlHover = false
    },
    slug() {
      let slug = this.$page.post.path.slice(10, -1).split("-").join(" ").replace(/\w\S*/g,
        function (txt) {
          return txt.charAt(0).toUpperCase() +
          txt.substr(1).toLowerCase()
        }).split(" ").join("-")
      return slug
    },
    getUrl() {
      return 'https://liquidcrystalmembrane.com' + this.$page.post.path
    },
    clipboard() {
      return this.getUrl()
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
    breadcrumbs() {
      let array = [
        {
          text: 'Articles',
          to: '/articles'
        },
        {
          text: this.slug(),
          active: true
        }
      ]
      return array
    }
    // getTags () {
    //   let tags = []
    //   this.$page.post.tags.forEach(tag => {
    //     tags.push(tag.title)
    //   })
        
    //   return(tags)
    // }
  }
}
</script>

<style lang="scss" scoped>
.meta {
  display: flex;
}

.box {
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 0;
  
  .label {
    font-weight: bold;
  }
}

.blogImage {
  max-height: 400px;
  width: 100%;
}

.social-btn:hover, .urlHoverCss {
  opacity: .7;
}

.social-btn {
  cursor: pointer;
}

.social-span {
  margin-top: 10px;
}

.url-btn:hover {
  opacity: .7;
  background-color: #6c757d;
  border-color: #6c757d;
}
</style>
