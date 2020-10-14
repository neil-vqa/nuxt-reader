<template>
  <div class="flex flex-col m-5 space-y-10 items-center">
    <div class="p-10">
      <h1 class="text-2xl">Articles</h1>
      <br />
      <h2 class="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Except</h2>
    </div>
    <div class="w-5/6">
    	<div class="grid grid-cols-3 gap-10 mb-20">
    	 <div v-for="article in allArticles" :key="article.id">
    	  <nuxt-link :to="`/articles/${article.slug}-${article.id}`">
    	   <div class="flex flex-col overflow-hidden text-black hover:underline">
    	     <div class="h-64 overflow-hidden">
    	      <img v-if="article.cover" :src="article.cover.url" class="h-64 object-cover hover:opacity-75"/>
    	     </div>
    	   	<div class="flex flex-col justify-between h-32 p-5">
    	   	 <h2 class="text-2xl">{{ article.title }}</h2>
    	   	 <p class="text-sm text-gray-700">{{ article.date_posted }}</p>
    	   	</div>
    	   </div>
    	  </nuxt-link>
    	 </div>
    	</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {mapGetters, mapActions} from 'vuex';

export default {
	layout: 'nav',
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


