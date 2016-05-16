const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
const fs = require('fs');

const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.resolve(Path.join(__dirname, 'build'))
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
//       path: '.',
//       redirectToSlash: true,
//       index: true
//     }
//   }
// });
server.route([{
        method: 'GET',
        path: '/404',
        handler: function (request, reply) {

            reply("Will's sad error page.");
        }
    }, {
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '.',
                redirectToSlash: true,
                index: true
            }
        }
    }
]);

server.ext('onPreResponse', function (request, reply) {

    if (request.response.isBoom) {
      console.log("Resp:", request.response);
        // Inspect the response here, perhaps see if it's a 404?
        return reply.redirect('/404');
    }

    return reply.continue();
});

server.start((err) => {
  if (err) {
    console.error("ERROR: ", err);
    throw err;
  }

  console.log('Server running at:', server.info.uri);
});
