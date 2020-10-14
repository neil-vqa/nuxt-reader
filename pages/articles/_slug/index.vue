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
import axios from 'axios';

export default {
	head() {
		return {
			title: this.articler.title,
			meta: [
				{ hid: 'description', name: 'description', content: this.articler.title },
				{ hid: 'og:title', name: 'og:title', content: 'Article | Nuxt Reader' },
				{ hid: 'og:description', name: 'og:description', content: 'Read an artcile in Nuxt Reader' },
				{ hid: 'og:image', name: 'og:image', content: '/nuxt-shot.png' },
			]
		}
	},
	data() {
		return {
			articler:'',
		}
	},
	methods: {
		all() {
			let raw_str = this.$route.params.slug
			let split_str = raw_str.split("-");
			let id = split_str[split_str.length - 1];

			axios.get('https://white-crema.herokuapp.com/articles/' + id)
				.then( response => {
					this.articler = response.data;
				});
		}
	},
	created: function() {
		this.all();
	},
}
</script>

