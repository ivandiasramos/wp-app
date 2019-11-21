import './style.scss';
import { appNamePresentation } from './app/app.module';

const appElement: HTMLElement = document.getElementById('app');
appElement.innerHTML = `<h1>${ appNamePresentation('Webpack') }</h1>`;