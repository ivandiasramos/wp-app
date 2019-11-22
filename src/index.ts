import * as _ from 'lodash';
import './style.scss';
import { l2 } from './app/app.module';

const appElement: HTMLElement = document.getElementById('app');
appElement.innerHTML = `<h1>Webpack Application</h1>`;

var array = [1, 2, 3, 4];

const result = l2.remove(array, item => item === 3);
