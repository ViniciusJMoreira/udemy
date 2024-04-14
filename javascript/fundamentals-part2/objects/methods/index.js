const user = {
  firstName: 'Vinicius',
  lastName: 'Junqueira',
  birthday: 1993,
  job: 'Developer',
  friends: ['Michael', 'Jonas', 'Jay'],
  hasLicenseDriver: true,

  calcAge: function() {return this.age = new Date().getFullYear() - this.birthday},
  getSummary: function() {return `${this.firstName} is a ${this.calcAge()} years old, ${this.job}, and he has ${this.hasLicenseDriver?'a':'no'} driver's license.`}
};
user.calcAge();
console.log(user);
console.log(user.getSummary());