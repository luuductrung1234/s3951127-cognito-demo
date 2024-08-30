const get404 = (req, res, next) => {
  res.status(404).render("error", {
    pageTitle: "Page Not Found",
    errorMessage: "Page Not Found!",
    path: "/404",
  });
};

const get400 = (req, res, next) => {
  res.status(404).render("error", {
    pageTitle: "Invalid Input",
    errorMessage: "Input is not valid!",
    path: "/400",
  });
};

const get500 = (req, res, next) => {
  res.status(404).render("error", {
    pageTitle: "Internal Error",
    errorMessage: "Something went wrong! Please try again later.",
    path: "/500",
  });
};

module.exports = { get404, get400, get500 };
