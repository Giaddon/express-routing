function validateNumbers(req, res, next) {

  if (req.query["nums"] === undefined) {
    return next("nums are required");
  }

  let nums = req.query["nums"]
                .split(',')
                .map(num => Number(num));

  for (let num of nums) {
    if (Number.isNaN(num)) {
      return next(`${num} is not a number`)
      // todo: return actual value of num rather than NaN
    }
  }

  return next();
}


module.exports = validateNumbers;