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

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
