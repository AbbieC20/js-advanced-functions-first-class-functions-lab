const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
}

const fareDoubler = function (multipliedFare) {
    return multipliedFare * 2;
}

const fareTripler = function (multipliedFare) {
    return multipliedFare * 3;
}

const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
};