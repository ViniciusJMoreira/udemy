const vinicius = {
  birthday : 1993,
  calcAge: function() {
    const year = new Date().getFullYear();
    this.age = year - this.birthday;
    console.log(this.age);
    console.log(this);
  }
}

const maria = {
  birthday: 1998
}

vinicius.calcAge();
maria.calcAge = vinicius.calcAge;
maria.calcAge();
// console.log(this);