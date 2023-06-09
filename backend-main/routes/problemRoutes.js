const express = require("express");
const problemsController = require("../controllers/problemController");
const authController = require("../controllers/authController");
const router = express.Router();

router
  .route("/")
  .get(problemsController.getAllProblems)
  .post(problemsController.createProblem);

router
  .route("/:id")
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    problemsController.updateProblem
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin", "team-leader"),
    problemsController.deleteProblem
  );

module.exports = router;
