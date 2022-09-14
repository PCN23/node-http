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
  post(req, res) {},
};
