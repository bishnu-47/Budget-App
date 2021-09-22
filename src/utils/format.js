export const convertToCommaSeperatedCurrency = (curr) => {
  // let x = curr.toString();
  // var lastThree = x.substring(x.length - 3);
  // var otherNumbers = x.substring(0, x.length - 3);
  // if (otherNumbers != "") lastThree = "," + lastThree;
  // var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  // return res;
  return curr.toFixed(2).replace(/(\d)(?=(\d{2})+\d\.)/g, "$1,");
};
