var app = express();
//mongoose db
var mongoose = require('mongoose');
mongoose.connect(' mongodb://127.0.0.1:27017/sample', (err) => {
  console.log(err ? err : 'connected to Database');
});
//404 error
app.use((req, res, next) => {
  res.send('page not found');
});
//custom error
app.use((err, req, res, next) => {
  res.send(err);
});
app.listen(4000, () => {
  console.log('server is listening on port:4000');
});
