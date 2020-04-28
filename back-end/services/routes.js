module.exports = (app) => {
  app.use("/api/company", require("../routes/api/company-routes"));
  app.use("/api/office", require("../routes/api/office-routes"));
};
