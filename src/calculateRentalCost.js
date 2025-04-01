/**
 * @param {number} days
 *
 * @return {number}
 */
const dailyRate = 40;

function calculateRentalCost(days) {
  // write code here
  if (days >= 7) {
    return dailyRate * days - 50;
  }

  if (days >= 3) {
    return dailyRate * days - 20;
  }

  return dailyRate * days;
}

module.exports = calculateRentalCost;
