const express = require("express");
const validateNumbers = require("./middleware")

const app = express();


app.use(validateNumbers);

app.get("/mean", function (request, response) {

  let nums = request.query["nums"]
  nums = nums.split(",");

  let sum = nums.reduce((sum, num) => sum + Number(num), 0)

  return response.json({
    response: {
      operation: "mean",
      value: (sum / nums.length)
    }
  });
});


app.get("/median", function (request, response) {

  let nums = request.query["nums"]
  nums = nums.split(",").map( num => Number(num));
  nums.sort((a, b) => a - b);

  let median;

  if (nums.length % 2 !== 0) {
    median = nums[Math.floor(nums.length/2)]
  } else {
    median = (Number(nums[nums.length/2]) + 
      Number(nums[nums.length/2 - 1])) /
      2;
  }

  return response.json({
    response: {
      operation: "median",
      value: median
    }
  });
});


app.get("/mode", function (request, response) {

  let nums = request.query["nums"];
  nums = nums.split(",").map( num => Number(num));

  // frequency counter
  let frequency = {};
  for (let num of nums) {
    frequency[num] = frequency[num] + 1 || 1
  }

  // find the highest frequency key
  let highestCount = 0;
  let highestKey;

  for (let key in frequency) {
    if (frequency[key] > highestCount) {
      highestCount = frequency[key];
      highestKey = key;
    }
  }

  return response.json({
    response: {
      operation: "mode",
      value: highestKey
    }
  });
});


app.use(function (err, req, res, next) {
  return res.json(err);
})


app.listen(3000, function () {
  console.log("App on port 3000");
});

