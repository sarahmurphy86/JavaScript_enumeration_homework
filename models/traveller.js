const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocation = this.journeys.map((journey) => {
    return journey.startLocation;
  });

  return startLocation;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocation = this.journeys.map((journey) => {
    return journey.endLocation;
  });

  return endLocation;
};

Traveller.prototype.getModesOfTransport = function () {
    const modesofTransport = this.journeys.map((journey) => {
      return journey.transport;
  });
  return modesofTransport;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const transportArray = this.journeys.filter((journey) => {
    return journey.transport == transport;
  });
  return transportArray;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysOverDistance = this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
  return journeysOverDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistance = this.journeys.reduce((total, journey) => {
    return total + journey.distance;
  }, 0);

  return totalDistance;
};
//
// I want to create a unique transport Array
// I want to add a transport to the unique transport array if that transport is not already in there - I need some form of check to do this.
// I then want to return the unique transport array

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   const uniqueTransport = this.journeys.filter((journey) => {
//     return journey.transport
//
//      // uniqueTransport
//
//   })
//   return uniqueTransport;
// };



module.exports = Traveller;
