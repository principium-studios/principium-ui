async function redirects() {
  return [
    {
      source: '/docs',
      destination: '/docs/guide/introduction',
      permanent: true,
    },
  ];
}

export default redirects;
