const vinicius = {
  birthday: 1993,
  calcAge: function () {
    const year = new Date().getFullYear();
    const thisObj = this;
    this.age = year - this.birthday;
    console.log(this.age);
    console.table(this);
    // Solution 1
    // const millenium = function () {
    //   console.table(thisObj);
    //   console.log(thisObj.birthday >= 1980 && thisObj.birthday <= 1998);
    // }
    //Solution 2
    const millenium = () => {
      console.table(this);
      console.log(this.birthday >= 1980 && this.birthday <= 1998);
    }
    millenium();
  }
}

vinicius.calcAge();

// Arguments Keyword
const addExp = function (a,b) {
  console.log(arguments);
  return a + b;
}
const addArrow = (a,b) => {
  // arguments is not defined with arrow functions
  // console.log(arguments);
  return a + b;
}
addExp(2,2);