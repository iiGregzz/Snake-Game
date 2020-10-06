function randomGeneratorForFood(min, max) {
    return Math.round((Math.random() * (max-min) + min) / 10) * 10;
}

module.exports = randomGeneratorForFood