import axios from "axios";


export const state = () => ({
	articles: [],
});


export const getters = {
	allArticles: (state) => state.articles
};


export const actions = {
	async fetchArticles({commit}) {
		const response = await axios.get('https://white-crema.herokuapp.com/articles');
		
		commit('setArticles', response.data);
	}
};


export const mutations = {
	setArticles: (state, payload) => { state.articles = payload }
};



































