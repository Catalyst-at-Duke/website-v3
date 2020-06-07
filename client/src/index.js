import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home';
import Members from './MembersComponent';
import Faq from './FaqComponent';
import Recruitment from './RecruitmentComponent';
import * as serviceWorker from './serviceWorker';
import {Router} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import NavBarComponent from './NavBarComponent';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <React.StrictMode>
      <NavBarComponent />
      <Router>
        <Home path='/'/>
        <Members path='members'/>
        <Recruitment path='recruitment'/>
        <Faq path='faq'/>
      </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
