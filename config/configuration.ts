
export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    client_api: process.env.CLIENT_API,
    client_portafolio_api: process.env.CLIENT_PORTAFOLIO_API,
  });
  