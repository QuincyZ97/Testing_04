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

const apple = {
    //Note: If crop object always should contain the same amount of factors given in environmentFactors (ex: const cropsWithOneFactor)
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

const environmentFactorsMedHigh = {
    sun: "medium",
    rain: "high",
    wind: "medium"
};

const environmentFactorsOne = {
    sun: "high",
};

module.exports = {
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
  };