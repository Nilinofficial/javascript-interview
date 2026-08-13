const arr = [4,5,6,7];

 const total =  arr.reduce((accumulator,currentValue) => {
    return accumulator+currentValue
  },0);


  console.log(total);
  