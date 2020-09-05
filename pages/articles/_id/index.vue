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
				{ hid: 'og:title', name: 'og:title', content: this.articler.title },
				{ hid: 'og:description', name: 'og:description', content: this.articler.author },
				{ hid: 'og:url', name: 'og:url', content: this.pageUrl },
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
			axios.get('https://white-crema.herokuapp.com/articles/' + this.$route.params.id)
				.then( response => {
					this.articler = response.data;
				});
		}
	},
	created: function() {
		this.all();
	},
	computed: {
		pageUrl() {
			let domain = `https://nuxtreader.netlify.app/articles/` + this.$route.params.id
			return domain
		}
	},
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
