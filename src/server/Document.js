// ./src/Document.js
import React from 'react';
import serialize from 'serialize-javascript';
import { Provider } from 'react-redux';
import { ServerStyleSheet } from 'styled-components';
import { AfterRoot, AfterData } from '@jaredpalmer/after';
import { MainLayout } from '../app/views/layouts';

import { SheetsRegistry } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';
import theme from '../app/theme';

export default class Document extends React.Component {
  static async getInitialProps({ assets, data, renderPage }) {
    const sheetsRegistry = new SheetsRegistry();
    const sheetsManager = new Map();
    const generateClassName = createGenerateClassName();
    const materialTheme = createMuiTheme(theme);

    const sheet = new ServerStyleSheet();
    const page = await renderPage(App => props =>
      sheet.collectStyles(
        <JssProvider
          registry={sheetsRegistry}
          generateClassName={generateClassName}
        >
          <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
            <App {...props} />
          </MuiThemeProvider>
        </JssProvider>
      )
    );
    const css = sheetsRegistry.toString();
    const styleTags = sheet.getStyleElement();

    return { assets, data, ...page, styleTags, css };
  }

  render() {
    const { helmet, assets, data, styleTags, serverState, css } = this.props;
    // get attributes from React Helmet
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();

    return (
      <html {...htmlAttrs}>
        <head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="utf-8" />
          <title>e-Shop | World's Smallest e-commerce site</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          {/** here is where we put our Styled Components styleTags... */}
          {css}
          {styleTags}
        </head>
        <body {...bodyAttrs}>
          <MainLayout>
            <AfterRoot />
            <AfterData data={data} />
          </MainLayout>
          <script
            type="text/javascript"
            src={assets.client.js}
            defer
            crossOrigin="anonymous"
          />
          <span
            dangerouslySetInnerHTML={
              { __html: `<script>window.__PRELOADED_STATE__ = ${serialize(serverState)}</script>` } // prettier-ignore
            }
          />
        </body>
      </html>
    );
  }
}
