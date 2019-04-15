import React from 'react';
import Sirketler from './Sirketler';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Sirketler />);
});
