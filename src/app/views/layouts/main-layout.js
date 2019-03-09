import React from 'react';
import { MainMenu } from '../components';

const MainLayout = props => (
  <div>
    <MainMenu />
    {props.children}
  </div>
);

export default MainLayout;
