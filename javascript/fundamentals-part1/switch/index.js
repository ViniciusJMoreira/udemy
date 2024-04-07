const day = 'monday';

switch (day) {
  case 'monday':
    console.log('Study Javascript');
    break;
  case 'Thursday':
  case 'Wednesday':
    console.log('Study React');
    break;
  case 'Thursday':
    console.log('Study HTMl and CSS');
    break;
  case 'friday':
    console.log('Study React and Javascript');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend!');
    break;
  default:
    console.log('Not a valid day');
}

if(day === 'monday')console.log('Study Javascript');
else if(day === 'Thursday' || day === 'Wednesday')console.log('Study React');
else if(day === 'Thursday')console.log('Study HTMl and CSS');
else if(day === 'friday')console.log('Study React and Javascript');
else if(day === 'saturday' || day === 'sunday')console.log('Enjoy the weekend!');
else console.log('Not a valid day');