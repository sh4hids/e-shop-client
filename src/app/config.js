const config = {
  development: {
    metaData: {
      siteName: 'e-Shop',
      siteUrl: 'http://localhost:3000/',
      title: "World's smallest e-commerce site",
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam laboriosam, accusamus quod.',
      keywords: 'e-commerce, business, t-shirt, online shop',
      image: '',
    },
    server: 'http://localhost:8000/',
    api: 'api/v1',
  },
  production: {
    metaData: {
      siteName: 'e-Shop',
      siteUrl: 'https://e-shop.com/',
      title: "World's smallest e-commerce site",
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam laboriosam, accusamus quod.',
      keywords: 'e-commerce, business, t-shirt, online shop',
      image: '',
    },
    server: 'https://e-shop.com/',
    api: 'api/v1',
  },
};

export default config;
