import * as Sentry from '@sentry/browser';
import Enzyme, { mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

// Globalise common imports to make them available in all test files
global.mount = mount;
global.React = React;
global.render = render;
global.Sentry = Sentry;
global.shallow = shallow;
global.graphql = jest.fn();
