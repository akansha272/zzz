//lets see how browser event work with Node js together
//Browser generates the events, which trigger Http request. Node js server then proccesses these request and send responses back to the browser

const express = required('express');
const bodyparser = require('body-parser');
const app = express();
const port = 3000;
