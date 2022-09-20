const candies = [
  { candy: 'laffy taffy', second: 'skittles ' },
  { candy: 'small', second: 'skittles '}
];

export default {
  // name:'candies',
  get(req, res) {
    // console.log('line 8 from candies');
    res.write(JSON.stringify(candies));
    res.end();
  },
  post(req, res) {
    candies.push(req.body);
    res.statusCode = 204;
    // grabs the last candies input
    const newCandy = candies[candies.length - 1]
    res.write(JSON.stringify(newCandy))
    res.end();
  },
  put(req, res) {
    const put = candies.findIndex((candy) => candy.candy === req.body.name);
    candies[put] = req.body;
    res.statusCode = 204;
    res.end();
  },
  delete(req, res) {
    candies.pop();
    res.statusCode = 200;
    res.end();
  }
};
