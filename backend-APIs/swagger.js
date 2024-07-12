import swaggerAutogen from 'swagger-autogen';
const doc = {
    info: {
      title: 'Inphamed API',
      description: 'It has all the APIs for US & Europe origin for inphamed.'
    },
    host: 'localhost:3000/inphamed/api/v1'
  };
  
  const outputFile = './swagger-output.json';
  const routes = ['./routes/Routes.js'];
  
  /* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
  root file where the route starts, such as index.js, app.js, routes.js, etc ... */
  
  swaggerAutogen(outputFile, routes, doc);