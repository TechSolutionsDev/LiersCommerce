/* "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = process.env.APP_PORT || 3001;
new app_1.App().start(PORT);
//# sourceMappingURL=server.js.map */


import Express from 'express';

const app = Express();

app.use(Express.json());
const PORT = 5000;

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});