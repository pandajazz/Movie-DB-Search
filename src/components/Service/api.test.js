import { getListApi, getMovieOrTvApi } from './api';
import { body, batmanObj, topMovies, fakeFetch, fakeFetchMovie } from './api.utils.js';

describe('API: ', () => {
	it('should retrieve a list of top movies', () => {
		getListApi(fakeFetch)('apikey')('baseUrl/')('movie/top_rated')
			.then(data => {
				expect(data).toEqual(topMovies);
			});
	});

  it('should have been called with movie/top_rated', () => {
        const url = 'baseUrl/movie/top_rated?api_key=apikey';
		getListApi(fakeFetch)('apikey')('baseUrl/')('movie/top_rated')
			.then(data => {
				expect(fakeFetch).toBeCalledWith(url, body);
			});
  });

	it('should retrieve Batman Movie', () => {
		getMovieOrTvApi(fakeFetchMovie)('apikey')('baseUrl/')('search/movie')('Batman')
			.then(data => {
				expect(data).toEqual(batman)
				expect(data.results).toHaveLength(2);
			});
	});

	it('should have been called with query=Batman', () => {
        const url = 'baseUrl/search/movie?api_key=apikey&query=Batman';
		getMovieOrTvApi(fakeFetchMovie)('apikey')('baseUrl/')('search/movie')('Batman')
			.then(data => {
				expect(fakeFetchMovie).toBeCalledWith(url, body);
			});
	});

});
