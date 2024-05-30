(function(){
  const title = document.querySelector('h1');
  title.addEventListener('click', (() => {title.style.color = 'blue';console.log('success');}))
})();


const user = {
  fullname: 'Vinicius Junqueira Moreira',
  showName() {
    const thisName = this.fullname;
    const title = document.querySelector('h1');
    title.addEventListener('click',function() {title.textContent = thisName;
    console.log("success again");})
  }
}

user.showName();
setTimeout(() => {
  user.fullname = 'Joao Coelho';
  user.showName();
}, 3
 * 1000);
