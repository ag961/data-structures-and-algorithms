'use strict';

function businessTrip(graph, arrCityNames) {

  let departure;
  let arrival;
  let totalCost = 0;
  let possiblity = false;

  for (let i = 0; i < arrCityNames.length - 1; i++) {
    departure = arrCityNames[i];
    arrival = arrCityNames[i + 1];
    let { routeExist, cost } = findDirectRoute(departure, arrival);
    if (routeExist) {
      possiblity = true;
      totalCost += cost;
    } else {
      return [false, `$${0}`]
    }
  }

  function findDirectRoute(departure, arrival) {

    let neighbors = graph.getNeighbors(departure);
    for (let i = 0; i < neighbors.length; i++) {
      if (neighbors[i].vertex === arrival) {
        return {
          cost: neighbors[i].weight,
          routeExist: true
        }
      }
    }

    return {
      cost: 0,
      routeExist: false
    }
  }

  return [possiblity, `$${totalCost}`]
}

module.exports = businessTrip;



