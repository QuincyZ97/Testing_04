const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getTotalProfit
} = require("./farm");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            rain: {
                low: -20,
                medium: 50,
                high: 20,
            },
            wind: {
                low: 0,
                medium: 25,
                high: 50,
            },
        },
    };

    const environmentFactorsLow = {
        sun: "low",
        rain: "low",
        wind: "low"
    };
    const environmentFactorsMed = {
        sun: "medium",
        rain: "medium",
        wind: "medium"
    };
    const environmentFactorhigh = {
        sun: "high",
        rain: "high",
        wind: "high"
    };

    const environmentFactorOne = {
        sun: "high",
        rain: "high",
    };

    test("Get yield for plant with environment Factors {low sun [-50%]}", () => {
        expect(getYieldForPlant(corn, environmentFactorsLow)).toBe(9);
    });

    test("Get yield for plant with environment Factors {medium sun [0]}", () => {
        expect(getYieldForPlant(corn, environmentFactorsMed)).toBe(52.5);
    });
    test("Get yield for plant with environment Factors {high sub [50%]}", () => {
        expect(getYieldForPlant(corn, environmentFactorhigh)).toBe(66);
    });

    test("Get yield for plant with no environment Factor given", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });

});

describe("getYieldForCrop", () => {
    test("Calculate total yield for one crop", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                rain: {
                    low: -20,
                    medium: 50,
                    high: 20,
                },
                wind: {
                    low: 0,
                    medium: 25,
                    high: 50,
                },
            },
        };

        const environmentFactorsLow = {
            sun: "low",
            rain: "low",
            wind: "low"
        };

        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input, environmentFactorsLow)).toBe(90);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                rain: {
                    low: -20,
                    medium: 50,
                    high: 20,
                },
                wind: {
                    low: 0,
                    medium: 25,
                    high: 50,
                },
            },
        };

        const pumpkin = {
            name: "pumpkin",
            yield: 30,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                rain: {
                    low: -20,
                    medium: 50,
                    high: 20,
                },
                wind: {
                    low: 0,
                    medium: 25,
                    high: 50,
                },
            },
        };

        const environmentFactorsLow = {
            sun: "low",
            rain: "low",
            wind: "low"
        };

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
});

describe("getCostsForCrop", () => {
    test("Get payment for crop", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                rain: {
                    low: -20,
                    medium: 50,
                    high: 20,
                },
                wind: {
                    low: 0,
                    medium: 25,
                    high: 50,
                },
            },
        };

        const pumpkin = {
            name: "pumpkin",
            yield: 30,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                rain: {
                    low: -20,
                    medium: 50,
                    high: 20,
                },
                wind: {
                    low: 0,
                    medium: 25,
                    high: 50,
                },
            },
        };

        const environmentFactorsLow = {
            sun: "low",
            rain: "low",
            wind: "low"
        };

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
});

describe("getRevenueForCrop", () => {
    test("Get revenue for crop with factors and [Sale price: 2]", () => {
        const corn = {
            name: "corn",
            yield: 30,
            salePrice: 2,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                rain: {
                    low: -20,
                    medium: 50,
                    high: 20,
                },
                wind: {
                    low: 0,
                    medium: 25,
                    high: 50,
                },
            },
        };

        const pumpkin = {
            name: "pumpkin",
            yield: 30,
            salePrice: 2,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                rain: {
                    low: -20,
                    medium: 50,
                    high: 20,
                },
                wind: {
                    low: 0,
                    medium: 25,
                    high: 50,
                },
            },
        };

        const environmentFactorsLow = {
            sun: "low",
            rain: "low",
            wind: "low"
        };

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
});

describe("getTotalProfit", () => {
    const corn = {
        name: "corn",
        yield: 30,
        salePrice: 2,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            rain: {
                low: -20,
                medium: 50,
                high: 20,
            },
            wind: {
                low: 0,
                medium: 25,
                high: 50,
            },
        },
    };

    const pumpkin = {
        name: "pumpkin",
        yield: 30,
        salePrice: 2,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            rain: {
                low: -20,
                medium: 50,
                high: 20,
            },
            wind: {
                low: 0,
                medium: 25,
                high: 50,
            },
        },
    };

    const tomato = {
        name: "tomato",
        yield: 20,
        salePrice: 4,
        factors: {
            sun: {
                low: -20,
                medium: 50,
                high: 0,
            },
            rain: {
                low: 20,
                medium: 60,
                high: 20,
            },
            wind: {
                low: 30,
                medium: 20,
                high: 0,
            },
        },
    };

    const cucumber = {
        name: "cucumber",
        yield: 50,
        salePrice: 3,
        factors: {
            sun: {
                low: 0,
                medium: 0,
                high: -30,
            },
            rain: {
                low: -20,
                medium: 50,
                high: 20,
            },
            wind: {
                low: 0,
                medium: 0,
                high: 0,
            },
        },
    };

    //Note: If crop object always should contain the same amount of factors given in environmentFactors (ex: const cropsWithOneFactor)
    const apple = {
        name: "apple",
        yield: 50,
        salePrice: 3,
        factors: {
            sun: {
                low: 0,
                medium: 0,
                high: -30,
            },

        },
    };

    const environmentFactorsLow = {
        sun: "low",
        rain: "low",
        wind: "low"
    };

    const environmentFactorsMedHigh = {
        sun: "medium",
        rain: "high",
        wind: "medium"
    };

    const environmentFactorsOne = {
        sun: "high",
    };

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

    test("Same crop stats = 1800 (revenue) - 100 (num crops)", () => {
        expect(getTotalProfit(crops, environmentFactorsLow)).toBe(1700);
    });

    test("Testing with different environmentFactors", () => {
        expect(getTotalProfit(crops, environmentFactorsMedHigh)).toBe(8600);
    });

    test("Testing with bigger(4) object array + environmentFactors", () => {
        expect(getTotalProfit(cropsFour, environmentFactorsLow)).toBe(8040);
    });

    test("1 crop given + environmentFactor", () => {
        expect(getTotalProfit(cropsOne, environmentFactorsLow)).toBe(1785);
    });

    //Note: If crop object always should contain the same amount of factors given in environmentFactors
    test("1 factor given", () => {
        expect(getTotalProfit(cropsWithOneFactor, environmentFactorsOne)).toBe(5200);
    });

    test("No factors given", () => {
        expect(getTotalProfit(crops)).toBe(5900);
    });

    //=================================== TODO

    test("No crop given, error catch", () => {
        expect(getTotalProfit(environmentFactorsMedHigh)).toBeUndefined();
    });
});