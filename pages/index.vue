<template>
  <div class="flex justify-center items-center h-screen">
    <div>
      <Logo />
      <h1 class="text-6xl main-head">
        nuxt-reader
      </h1>
      <div class="flex justify-center">
      	<nuxt-link to="/articles" class="text-blue-700">Articles</nuxt-link>
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


