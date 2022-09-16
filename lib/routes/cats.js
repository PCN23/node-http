const cats = [
  { size: 'large', color: 'aqua'}
];

export default {
  get(req, res) {
    res.write(JSON.stringify(cats));
    res.end();
  },
  post(req, res) {
    cats.push(req.body);
    res.statusCode = 204;
    res.end();
},put(req, res) {
  const put = cats.findPut((cat) => cat.name === req.body.name);
  cats[put] = req.body;
  res.statusCode = 204;
  res.end();
},delete(req, res) {
  cats.pop();
  res.statusCode = 200;
  res.end();
}
};
