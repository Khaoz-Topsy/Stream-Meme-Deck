import ReactDOM from 'react-dom';

import { App } from './app';

import './scss/index.scss';
import 'react-edit-text/dist/index.css';
import 'react-quill/dist/quill.snow.css';

ReactDOM.render(
  <App />,
  document.getElementById('deck')
);
