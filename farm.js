const getYieldForPlant = (input, enviroment) => {
  const noFactorYield = input.yield

  if (input.factors && enviroment !== undefined) {
    const statusArr = Object.values(enviroment);
    const factorsArr = Object.keys(input.factors);

    percentageTotal = [];
    for (let i = 0; i < factorsArr.length; i++) {
      const status = statusArr[i];
      const factors = factorsArr[i];
      const percentage = input.factors. [factors]. [status]
      percentageTotal.push(percentage)
    }
    const factorTotal = percentageTotal.reduce((a, b) => a + b, 0);
    const cropResult = noFactorYield + (noFactorYield * (factorTotal / 100))
    return cropResult
  } else {
    return noFactorYield;
  }

}

const getYieldForCrop = (input, enviroment) => {
  const yieldAmount = getYieldForPlant(input.crop, enviroment);
  return yieldAmount * input.numCrops
}

const getTotalYield = (inputArr, enviroment) => {
  // IGNORE this function | function for testing only see winc(/unit/view/id:5326)
  // getTotalYield === getYieldForCrop(X amount)
  totalYield = [];

  inputArr.forEach(object => {
    const cropTotalYield = getYieldForCrop(object, enviroment)
    totalYield.push(cropTotalYield);
  });

  return totalYield.reduce((a, b) => a + b, 0)
}

const getCostsForCrop = (inputArr) => {

  totalPrice = [];

  inputArr.forEach(object => {
    const cropPrice = object.numCrops;
    totalPrice.push(cropPrice);
  });

  return totalPrice.reduce((a, b) => a + b, 0)
}

const getRevenueForCrop = (inputArr, enviroment) => {

  totalRevenue = [];

  inputArr.forEach(object => {
    const cropTotalYield = getYieldForCrop(object, enviroment)
    const salePrice = object.crop.salePrice

    const cropRevenue = cropTotalYield * salePrice;
    console.log(object.crop.name + " has yielded " + cropTotalYield + " crops and costed $" + object.numCrops + " to plant. With a price of $" + salePrice + " each, it made a total revenue of " + cropRevenue + ". And a total profit of $" + (cropRevenue - object.numCrops));
    totalRevenue.push(cropRevenue);
  });

  return totalRevenue.reduce((a, b) => a + b, 0)

}

const getTotalProfit = (inputArr, enviroment) => {
  // Note: crop object in inputArr should always contain the same amount of factors given in environment

  if (Array.isArray(inputArr)) {

    const totalRevenue = getRevenueForCrop(inputArr, enviroment);
    const totalCost = getCostsForCrop(inputArr)
    console.log("All crops together made a total revenue of $" + totalRevenue + " and costed a total of $" + totalCost + " to plant. With this you made a profit of $" + (totalRevenue - totalCost) + " Great work!");
    return totalRevenue - totalCost;

  } else {

    console.log("Given input is invalid. Please check if given input contains array of crops")
    return undefined;

  }

}

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getTotalProfit,
};