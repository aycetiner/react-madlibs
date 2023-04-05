function addCommas(num) {
    if (Number.isFinite(num)){
        // Convert number to string
        let numStr = num.toString();
        // Split the string into whole and decimal parts
        let parts = numStr.split('.');
        // Add commas to the whole part of the number
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        // Join the whole and decimal parts back together
        return parts.join('.');
    }
    else {return '' }
  }
module.exports = addCommas;