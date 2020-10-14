<template>
  <div class="flex justify-center items-center h-screen">
    <div>
      <Logo />
      <h1 class="text-6xl text-center">
        nuxt-reader
      </h1>
      <h1 class="text-xl text-center">
        Demo site of a blog + mini e-commerce integration.
      </h1>
      <div class="flex justify-center space-x-10 mt-4">
      	<nuxt-link to="/articles" class="text-blue-700 hover:underline">Articles</nuxt-link>
      	<nuxt-link to="/products" class="text-blue-700 hover:underline">Products</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	head() {
		return {
			title: 'Welcome to nuxt-reader!',
			meta: [
				{
				hid: 'description',
				name: 'description',
				content: 'Awesome articles curated for you daily.'
				}
			]
		}
	}
}
</script>


