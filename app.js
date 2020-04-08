const express = require("express");

const app = express();


app.get("/mean", function (request, response) {

  let nums = request.query["nums"]
  nums = nums.split(",");

  let sum = nums.reduce((sum, num) => sum + Number(num), 0)


  return response.send(`${sum / nums.length}`);
});


app.get("/median", function (request, response) {

  let nums = request.query["nums"]
  nums = nums.split(",").map( num => Number(num))

  //nums.forEach((num, i) => { num[i] = Number(num)});

  nums.sort();

  console.log(nums);

  if (nums.length % 2 !== 0) {
    return response.send(`${nums[Math.floor(nums.length/2)]}`)
  } else {
    let median = (Number(nums[nums.length/2]) + 
    Number(nums[nums.length/2 - 1])) /
    2;
    return response.send(`${median}`);
  }



  let sum = nums.reduce((sum, num) => sum + Number(num), 0)


  return response.send(`${sum / nums.length}`);
});


app.get("/mode", function (request, response) {

  let nums = request.query["nums"]
  nums = nums.split(",");

  let sum = nums.reduce((sum, num) => sum + Number(num), 0)


  return response.send(`${sum / nums.length}`);
});





app.listen(3000, function () {
  console.log("App on port 3000");
});

