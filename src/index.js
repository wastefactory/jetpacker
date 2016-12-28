// Import modules
import React from 'react';
import ReactDOM from 'react-dom';

// Notice that we've organized all of our routes into a separate file.
import AppRouter from './router';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

require("../style/main.scss");
require("../style/header.scss");

// Now we can attach the router to the 'root' element like this:
ReactDOM.render( <AppRouter />, document.getElementById('container'));
