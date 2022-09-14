import cats from './routes/cats.js';
import candies from './routes/candies.js';
import notFound from './not-found.js';
import bodyParser from './bodyParser.js';

const routes = {
  cats,
  candies,
};

export default async function (req, res) {
  const parts = req.url.split('/');
  // console.log(parts);
  if (parts.length && parts[1] === 'api') {
    req.body = await bodyParser(req);
    // const resourceName = parts[parts.length - 1];
    // console.log(req.body, 'from req body');
    const resource = routes[parts[parts.length - 1]];
    // console.log(resource, 'resource');
    const route = resource[req.method.toLowerCase()];
    // console.log(route, 'route');
    route(req, res);
    // console.log('hello from here');
    return;
  }

  notFound(req, res);
}
