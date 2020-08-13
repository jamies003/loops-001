let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

for ( let i = 0; i < days.length; i++ ) {
  
  days[i] = days[i].charAt(0).toUpperCase() + days[i].slice(1);;
  console.log(days[i]);
}