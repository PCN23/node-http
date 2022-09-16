const candies = [
  { candy: 'laffy taffy', second: 'skittles '}
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
    res.end();
  },
  put(req, res) {
    const put = candies.findPut((candy) => candy.name === req.body.name);
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
