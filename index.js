// Code your solution in this file!

//return a new array containing the first two drivers
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }

  // Slice the last two drivers
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2); 
  }

//return First Two Drivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//returns a functio
function createFareMultiplier(multiplier){
    return function(fare) {
        return multiplier * fare;
    };
  }

  //doubles fare
  function fareDoubler(fare) {
    return fare * 2;
  }

   //triples fare
   function fareTripler(fare) {
    return fare * 3;
  }
  
  //select Different Drivers in an array
  function selectDifferentDrivers(arrayOfDrivers, selectingFunction) {
    return selectingFunction(arrayOfDrivers);
  }