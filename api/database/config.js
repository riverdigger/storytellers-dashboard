const server = "storytellersdashboardserver.database.windows.net";
const database = "storytellers-dashboard-db";
const port = parseInt(1433);
const type = "azure-active-directory-default";

var config = {
  server,
  port,
  database,
  authentication: {
    type,
  },
  options: {
    encrypt: true,
  },
};
module.exports = config;
