import React from 'react';
import Kullanicilar from './Kullanici_Listesi';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Kullanicilar />);
});
