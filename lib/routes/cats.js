const cats = [
  { size: 'large', color: 'aqua'}
];

export default {
  get(req, res) {
    res.write(JSON.stringify(cats));
    res.end();
  },
  post(req, res) {},
};
