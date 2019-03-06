import React from 'react';
import { asyncComponent } from '@jaredpalmer/after';
import { withAuthentication } from './helpers';

export default [
  {
    path: '/',
    exact: true,
    component: asyncComponent({
      loader: () => Promise.resolve(require('./views/home')), // required
      Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
    }),
  },
];
