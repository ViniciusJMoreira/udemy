const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    return this.bmi = this.mass / (this.height * this.height)
  }
};
const mark = {
  fullName: 'Marks MIller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    return this.bmi = this.mass / (this.height * this.height);
  }
};
const higherBMI = (john,mark) => {
  john.calcBMI();
  mark.calcBMI();
  if(john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
  }else {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
  }
}
higherBMI(john,mark);