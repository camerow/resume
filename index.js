const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');

const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'build')
      }
    }
  }
});
server.connection({ port: process.env.PORT || 3000 });

server.register(Inert, () => {});

// server.route({
//   method: 'GET',
//   path: '/{param*}',
//   handler: {
//     directory: {
//         path: '.',
//         redirectToSlash: true,
//         index: true
//     }
//   }
// });
server.route([{
        method: 'GET',
        path: '/',
        handler: function (request, reply) {

            reply('Welcome home!');
        }
    }, {
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '.',
                redirectToSlash: false,
                index: true
            }
        }
    }
]);
server.ext('onPreResponse', function (request, reply) {

    if (request.response.isBoom) {
        // Inspect the response here, perhaps see if it's a 404?
        return reply.redirect('/');
    }

    return reply.continue();
});
server.start((err) => {
  if (err) {
    throw err;
  }

  console.log('Server running at:', server.info.uri);
});
