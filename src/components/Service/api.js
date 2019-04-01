import fetch from 'node-fetch';
const apikey = process.env.API_KEY;
const baseUrl = 'http://api.themoviedb.org/3/';
const searchUrl = 'search/multi';

/**
 * function getListApi
 *
 * @params fetch - passing the fetch dependency
 * @params apikey - passing the apikey fron the env to closure it
 * @params baseUrl - base movie db url
 * @params pathUrl - specify the pathUrl that you wanna call: search, top_movie, top_tv, popular_tv, popular_movie
 * */
export const getListApi = fetch => apikey => baseUrl => pathUrl => {
	const url = `${baseUrl}${pathUrl}?api_key=${apikey}`;
	return fetch(url, {
		method: 'GET',
	})
		.then(data => data.json())
		.catch(err => err);
};

/**
 * function getMovieOrTvApi
 *
 * @params fetch - passing the fetch dependency
 * @params apikey - passing the apikey fron the env to closure it
 * @params baseUrl - base movie db url
 * @params pathUrl - specify the pathUrl that you wanna call: search movie and tv
 * @params movie - it's the movie string to pass to the api to fetch the data
 * */
export const getMovieOrTvApi = fetch => apikey => baseUrl => pathUrl => movie =>{
	const url = `${baseUrl}${pathUrl}?api_key=${apikey}&query=${movie}`;
	return fetch(url, {
		method: 'GET',
	})
    	.then(data => data.json())
    	.catch(err => err);
};

export const apiFactoryList = getListApi(fetch)(apikey)(baseUrl);
export const apiFactorySearch = getMovieOrTvApi(fetch)(apikey)(baseUrl)(searchUrl);

