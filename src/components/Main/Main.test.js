import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Main from './Main';
import { MovieButton } from './../Button/Button.js';
import MovieCard from './../MovieCard/MovieCard.js';
import MoviePage from './../MoviePage/MoviePage.js';

describe('Main Component', () => {
	const wrapper = shallow(<Main />);
  const mainComponent = wrapper.instance();
  const movies = [
            {
                id: 1,
                title: 'Batman',
                vote_average: '9',
                poster_path: 'url'
            },
            {
                id: 2,
                title: 'Superman',
                vote_average: '9',
                poster_path: 'url'
            }
    ];

	it('should have a title', () => {
        expect(wrapper.contains('The Movie DB')).toEqual(true);
	});

	it('should have a state with a movie array', () => {
		expect(wrapper.state().movies).toEqual([]);
	});

	it('should have a list of buttons', () => {
        expect(wrapper.find(MovieButton)).toHaveLength(4);
	});

	it('should have a list of Movies', () => {
        wrapper.setState({movies: movies});
        expect(wrapper.find(MovieCard)).toHaveLength(2);
	});

    it('should reset the state', () => {
        mainComponent.resetState();
        expect(mainComponent.state).toEqual(mainComponent.initialState);
    });

    it('should get moviePage component ', () => {
        mainComponent.getSelectedMovie({title: 'Batman', id: 1})
        wrapper.update();
        expect(wrapper.find(MoviePage)).toHaveLength(1);
    });
});
