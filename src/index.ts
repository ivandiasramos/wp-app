import * as _ from 'lodash';
import './style.scss';
import { l2 } from './app/app.module';

const appElement: HTMLElement = document.getElementById('app');
appElement.innerHTML = `<h1>Webpack Application</h1>`;

var array = [1, 2, 3, 4];
var evens = l2.remove(array, function(n) {
  return n % 2 == 0;
});
 
console.log(array);
// => [1, 3]
 
console.log(evens);
// => [2, 4]