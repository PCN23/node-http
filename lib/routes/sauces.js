const sauces = [
    { name: 'GG sauce', flavor: 'BBQ', spicy: 'aqua'}
  ];
  
  export default {
    get(req, res) {
      res.write(JSON.stringify(sauces));
      res.end();
    },
    post(req, res) {
      sauces.push(req.body);
      res.statusCode = 204;
      res.end();
  },
  put(req, res) {
    const put = sauces.findIndex((sauce) => sauce.name === req.body.name);
    sauces[put] = req.body;
    res.statusCode = 204;
    res.end();
  },
  delete(req, res) {
    sauces.pop();
    res.statusCode = 200;
    res.end();
  }
  };
  