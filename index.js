import {RapidTestOrder} from "./RapidTestOrder.js";
import express from 'express';

const app = express();
const port = process.env.PORT || parseInt(process.argv.pop()) || 3002;

// Create a new express application instance

app.use(express.urlencoded({ extended: true }));
app.use(express.static("www"));
let oOrders = {};
app.post("/sms", (req, res) => {
  // turn taking SMS
  let sFrom = req.body.From || req.body.from;
  if (!oOrders.hasOwnProperty(sFrom)) {
    oOrders[sFrom] = new RapidTestOrder(sFrom);
  }
  let sMessage = req.body.Body || req.body.body;
  let aReply = oOrders[sFrom].handleInput(sMessage);
  res.setHeader('content-type', 'text/xml');
  let sResponse = "<Response>";
  for (let n = 0; n < aReply.length; n++) {
    sResponse += "<Message>";
    sResponse += aReply[n];
    sResponse += "</Message>";
  }
  res.end(sResponse + "</Response>");
  if (oOrders[sFrom].isDone) {
    delete oOrders[sFrom];
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
