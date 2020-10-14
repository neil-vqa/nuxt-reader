<template>
  <div class="flex flex-col m-5 space-y-10 items-center">
    <div class="p-10">
      <h1 class="text-2xl">Articles</h1>
      <br />
      <h2 class="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Except</h2>
    </div>
    <div class="flex bg-gray-100 justify-center w-1/2 p-5">
    	<ul class="space-y-5">
      	<li v-for="article in allArticles" :key="article.id"><nuxt-link :to="`/articles/${article.id}`" class="font-semibold">{{ article.title }}</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {mapGetters, mapActions} from 'vuex';

export default {
	methods: {
		...mapActions(['fetchArticles']),
	},
	created: function() {
		this.fetchArticles();
	},
	computed: {
		...mapGetters(['allArticles']),
	}
}
</script>


