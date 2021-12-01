process.on("message", message => {
    const res = isPrime(message.num);
    process.send(res);
    process.exit();
})



const isPrime = (num) => {
  prm = true;
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      prm = false;
    }
  }
  return prm;
};
