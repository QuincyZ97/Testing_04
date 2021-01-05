const getYieldForPlant = (input, enviroment) => {
  const noFactorYield = input.yield;
  const withFactorYield = () => {
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
  }

  if (input.factors && enviroment !== undefined) {
    return withFactorYield();
  } else {
    return noFactorYield;
  }
}

const getYieldForCrop = (input, enviroment) => {
  //-IGNORE- function for testing only see winc(/unit/view/id:5326)
  //function does the same as getYieldForCrop(X amount)
  const yieldAmount = getYieldForPlant(input.crop, enviroment);
  return yieldAmount * input.numCrops
}

const getTotalYield = (inputArr, enviroment) => {
  const totalYield = inputArr.map(object => {
    return getYieldForCrop(object, enviroment);
  })
  return totalYield.reduce((a, b) => a + b, 0)
}

const getCostsForCrop = (inputArr) => {
  const totalPrice = inputArr.map(object => {
    return object.numCrops;
  })

  return totalPrice.reduce((a, b) => a + b, 0)
}

const getRevenueForCrop = (inputArr, enviroment) => {
  const totalRevenue = inputArr.map(object => {
    const cropTotalYield = getYieldForCrop(object, enviroment)
    const salePrice = object.crop.salePrice
    return cropTotalYield * salePrice;
  })

  return totalRevenue.reduce((a, b) => a + b, 0)
}

const getProfitForCrop = (inputArr, enviroment) => {
  //crop object in inputArr should always contain the same amount of factors given in environment
  if (Array.isArray(inputArr)) {
    const totalRevenue = getRevenueForCrop(inputArr, enviroment);
    const totalCost = getCostsForCrop(inputArr)
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
  getProfitForCrop,
};