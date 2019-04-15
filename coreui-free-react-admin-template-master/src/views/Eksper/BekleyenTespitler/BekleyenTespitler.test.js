import React from 'react';
import BekleyenTespitler from './BekleyenTespitler';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<BekleyenTespitler />);
});
