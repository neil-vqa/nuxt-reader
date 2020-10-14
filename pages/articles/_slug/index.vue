<template>
  <div class="container">
    <div>
      <h1>{{ articler.title }}</h1>
      <br />
      <div>
		<span>{{ articler.date_posted }}</span><br />
		<span>{{ articler.author }}</span><br />
		<div v-for="post in articler.postContent">
			<div v-if="post.text">{{ post.text }}</div>
			<div v-if="post.picture"><img :src="post.picture.url"/></div>
			<div v-if="post.embed" v-html="post.embed"></div>
		</div>
	</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
	head() {
		return {
			title: this.articler.title,
			meta: [
				{ hid: 'description', name: 'description', content: 'Article | Nuxt Reader' },
				{ hid: 'og:title', name: 'og:title', content: this.articler.title },
				{ hid: 'og:description', name: 'og:description', content: 'Read an artcile in Nuxt Reader' },
				{ hid: 'og:image', name: 'og:image', content: '/nuxt-shot.png' },
			]
		}
	},
	data() {
		return {
			id: '',
		}
	},
	methods: {
		retrieveArticle() {
			let raw_str = this.$route.params.slug
			let split_str = raw_str.split("-");
			let id = split_str[split_str.length - 1];
			this.id = id;
		}
	},
	computed: {
		...mapState(['articles']),
		articler() {
			return this.articles.find(el => el.id === this.id);
		},
	},
	created: function() {
		this.retrieveArticle();
	},
}
</script>

