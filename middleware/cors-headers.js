module.exports = function (rea, res, next) {
  // // Open Configuration (good for public APIs)
  // res.setHeader('Access-Control-Allow-Origin', '*');

  // res.setHeader('Access-Control-Allow-Methods', '*');

  // res.setHeader('Access-Control-Allow-Headers', '*');

  // // Closed Configuration (should be default set up)
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

  // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  next();
};
