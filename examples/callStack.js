function outerFunction() {
  console.log("Outer function starts");

  function innerFunction() {
    console.log("Inner function starts");
    console.log("Inner function ends");
  }

  innerFunction();
  console.log("Outer function ends");
}

outerFunction();

//JS WORKS ON THE BASIS OF A SINGLE STACK FRAME