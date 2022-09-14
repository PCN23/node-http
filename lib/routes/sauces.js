const sauces = [
    { flavor: 'BBQ', spicy: 'aqua'}
  ];
  
  export default {
    get(req, res) {
      res.write(JSON.stringify(sauces));
      res.end();
    },
    post(req, res) {},
  };
  