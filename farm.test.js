//==================================== CROP INPUTS &  FACTORS ============================================

const {
    corn,
    pumpkin,
    tomato,
    cucumber,
    apple,
    environmentFactorsLow,
    environmentFactorsMed,
    environmentFactorhigh,
    environmentFactorsMedHigh,
    environmentFactorsOne
} = require("./cropDB");

//==================================================TEST====================================================
const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop
} = require("./farm");


describe("getYieldForPlant", () => {

    test("Get yield for plant WITH [LOW] environment factors", () => {
        expect(getYieldForPlant(corn, environmentFactorsLow)).toBe(9);
    });

    test("Get yield for plant WITH [MEDIUM] environment factors", () => {
        expect(getYieldForPlant(corn, environmentFactorsMed)).toBe(52.5);
    });

    test("Get yield for plant WITH [HIGH] environment factors", () => {
        expect(getYieldForPlant(corn, environmentFactorhigh)).toBe(66);
    });

    test("Get yield for plant with NO environment factors given", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
    test("Calculate total yield for a SINGLE crop WITH [LOW] environment factors", () => {
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input, environmentFactorsLow)).toBe(90);
    });

    test("Calculate total yield for a SINGLE crop with NO environment Factors", () => {

        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(300);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield for MULTIPLE crops WITH [LOW] environment factors", () => {
        const crops = [{
                crop: corn,
                numCrops: 10
            },
            {
                crop: pumpkin,
                numCrops: 10
            },
        ];
        expect(getTotalYield(crops, environmentFactorsLow)).toBe(180);
    });

    test("Calculate total yield for MULTIPLE crops with NO Factors", () => {
        const crops = [{
                crop: corn,
                numCrops: 10
            },
            {
                crop: pumpkin,
                numCrops: 10
            },
        ];
        expect(getTotalYield(crops)).toBe(600);
    });
});

describe("getCostsForCrop", () => {
    test("Get the total cost price for MULTIPLE crops", () => {
        const crops = [{
                crop: corn,
                numCrops: 115
            },
            {
                crop: pumpkin,
                numCrops: 115
            },
        ];
        expect(getCostsForCrop(crops)).toBe(230);
    });

    test("Get the total cost price for a SINGLE crop", () => {
        const crops = [{
            crop: corn,
            numCrops: 115
        }, ];
        expect(getCostsForCrop(crops)).toBe(115);
    });
});

describe("getRevenueForCrop", () => {
    test("Get revenue for MULTIPLE crops WITH [LOW] environment factors and [Sale price: 2]", () => {
        const crops = [{
                crop: corn,
                numCrops: 50
            },
            {
                crop: pumpkin,
                numCrops: 50
            },
        ];
        //50(numcrop) * 9(yield with factor) * 2(corn+pumpkin)
        expect(getRevenueForCrop(crops, environmentFactorsLow)).toBe(1800);
    });

    test("Get revenue for a SINGLE crop WITH [LOW] environment factors and [Sale price: 2]", () => {
        const crops = [{
            crop: corn,
            numCrops: 50
        }, ];
        expect(getRevenueForCrop(crops, environmentFactorsLow)).toBe(900);
    });

    test("Get revenue for MULTIPLE crops WITH NO environment Factors and [Sale price: 2]", () => {
        const crops = [{
                crop: corn,
                numCrops: 50
            },
            {
                crop: pumpkin,
                numCrops: 50
            },
        ];
        expect(getRevenueForCrop(crops)).toBe(6000);
    });

    test("Get revenue for a SINGLE crop WITH NO environment Factors and [Sale price: 2]", () => {
        const crops = [{
            crop: corn,
            numCrops: 50
        }, ];
        expect(getRevenueForCrop(crops)).toBe(3000);
    });
});

describe("getProfitForCrop", () => {
    const crops = [{
            crop: corn,
            numCrops: 50
        },
        {
            crop: pumpkin,
            numCrops: 50
        },
    ];

    const cropsWithOneFactor = [{
        crop: apple,
        numCrops: 50
    }];

    const cropsOne = [{
        crop: cucumber,
        numCrops: 15
    }, ];

    const cropsFour = [{
            crop: corn,
            numCrops: 20
        },
        {
            crop: pumpkin,
            numCrops: 10
        },
        {
            crop: tomato,
            numCrops: 50
        },
        {
            crop: cucumber,
            numCrops: 20
        },
    ];

    test("Get the total profit for MULTIPLE(2) CROPS with [LOW] environment factors", () => {
        expect(getProfitForCrop(crops, environmentFactorsLow)).toBe(1700);
    });

    test("Get the total profit for MULTIPLE(2) CROPS with [MEDIUM + HIGH] environment factors", () => {
        expect(getProfitForCrop(crops, environmentFactorsMedHigh)).toBe(8600);
    });

    test("Get the total profit for MULTIPLE(4) CROPS with [LOW] environment factors", () => {
        expect(getProfitForCrop(cropsFour, environmentFactorsLow)).toBe(8040);
    });

    test("Get the total profit for a SINGLE crop with [LOW] environment factors", () => {
        expect(getProfitForCrop(cropsOne, environmentFactorsLow)).toBe(1785);
    });

    // Crop object in cropsArray should always contain the same amount of factors given in environmentObject | ex: cropsWithOneFactor # environmentFactorsOne
    test("Get the total profit for crops that only contain 1 single environment factor", () => {
        expect(getProfitForCrop(cropsWithOneFactor, environmentFactorsOne)).toBe(5200);
    });

    test("Get the total profit for crops that have NO environment factors", () => {
        expect(getProfitForCrop(crops)).toBe(5900);
    });

    test("Return undefined if given an input that doesn't contain crops / incorrect array", () => {
        expect(getProfitForCrop(environmentFactorsMedHigh)).toBeUndefined();
    });
});