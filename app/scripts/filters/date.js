angular.module('opAppApp')
  .filter('myDate', 
['$filter',
function($filter) {
  'use strict';
  
  return function(input) {
    var day = new Date(input + 'Z'),
        zeros = ['00', '0', ''],
        dayString = new String(day.getDate()),
        monthString = new String(day.getMonth()),
        year = day.getFullYear(),
        time = new Date(input + 'Z').toLocaleTimeString()
    
    
    
    if (new Date().setHours(0, 0, 0, 0) === new Date(input).setHours(0, 0, 0, 0)) {
      day = 'Сегодня';
      return day + ' в ' + time; 
    } else if (day === null) {
      return '';
    } else {return zeros[dayString.length] + dayString + '.' + zeros[monthString.length] + monthString + '.' + year + ' в ' + time;}
    
    
  };

}])
  .filter('myDateTool', 
['$filter',
function($filter) {
  'use strict';
  
  return function(input) {
    var day = new Date(input + 'Z'),
        zeros = ['00', '0', ''],
        dayString = new String(day.getDate()),
        monthString = new String(day.getMonth()),
        year = day.getFullYear(),
        time = new Date(input + 'Z').toLocaleTimeString()
    
    if (day === null) { return ''; }
    
    
    return zeros[dayString.length] + dayString + '.' + zeros[monthString.length] + monthString + '.' + year + ' в ' + time;
  };

}]);