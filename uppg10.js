function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];
  
    // skapa tre arrayer - bigEven, smallOdd, other
    // loopa igenom numbers och placera talen i respektive array
    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
    // smallOdd ska innehålla tal mindre än 10 och udda
    // other ska innehålla alla andra tal
    // returnera ett objekt med de tre arrayerna
function uppg10(){
  const numbers = [5, 12, 7, 10, 20, 9, 11];

  const bigEven = [];
  const smallOdd = [];
  const other = [];

  for (let number of numbers) {
    if (number > 10 && number % 2 === 0) {
      bigEven.push(number);
    } else if (number < 10 && number % 2 !== 0) {
      smallOdd.push(number);
    } else {
      other.push(number);
    }
  }

  return {
    bigEven,
    smallOdd,
    other
  };
}

module.exports = { uppg10 };
}