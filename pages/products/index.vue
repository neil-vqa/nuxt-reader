<template>
  <div class="container">
    <div>
      <h1>Product List</h1>
      <br />
      <ul>
      	<li v-for="product in products" :key="product.id">{{ product.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			products: [],
		}
	},
	methods: {
		all() {
			axios.get('https://white-crema.herokuapp.com/products/?available=true')
				.then( response => {
					this.products = response.data;
					//this.loader = false;	
				});
		}
	},
	created: function() {
		this.all();
	}
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
