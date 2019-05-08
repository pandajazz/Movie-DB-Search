import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { MovieButton, SelectMovieButton } from './Button';

describe('Button Component', () => {
    const movie = {
        link: 'Top Movie',
        type: 'Top Movie Type'
    };

    const wrapper = shallow(<MovieButton onClick='method' movie={movie}/>);

    it('should render a button with Top Movie', () => {
        expect(wrapper.contains('Top Movie Type')).toBe(true);
    });

    it('should have a name', () => {
        expect(wrapper.name()).toEqual('button');
    });

    it('should have props', () => {
        expect(wrapper.props().children).toEqual('Top Movie Type');
    });
});

describe('Select Movie Button:', () => {
    const movie = {
        title: 'Batman'
    };

    const wrapper = shallow(<SelectMovieButton onClick='method' movie={movie}/>);

    it('should render a list of two movies', () => {
        expect(wrapper.contains('Batman')).toBe(true);
    });
});
