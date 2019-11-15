// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");


module.exports = function (app) {

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userType: req.body.userType
    }).then(function () {
      res.redirect(307, "/api/login");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
    });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.post("/api/user_data", function (req, res) {
    // console.log(res)
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
        firstName: req.user.firstName,
        userType: req.user.userType
      });
    }
  });

  app.post("/api/photographers", (req, res) => {

    db.Photographer.create({
      firstName: req.user.firstName,
      specialty: req.body.specialty,
      about: req.body.about,
      UserId: req.user.id,
      isReady: req.body.isReady
    }).then(function (data) {
      return res.json(data);
    }).catch(function (error) {
      console.log(error);
    });
  });

  app.post("/api/photographers/info", (req, res) => {

    db.Photographer.findAll({
      where: {
        UserId: req.user.id
      }
    }).then(function (data) {
      return res.json(data);
    }).catch(function (error) {
      console.log(error);
    });
  });

  app.put("/api/photographers/update", (req, res) => {

    console.log(req.body);
    db.Photographer.update({
        specialty: req.body.specialty,
        about: req.body.about,
        isReady: req.body.isReady
      },
      {
        where: {
          UserId: req.user.id
        }
      }).then( (data) => {
      return res.json(data);
    })
    
  })

  app.post("/api/save-profile-image", (req, res) => {

    db.Image.create({
      firstName: req.user.firstName,
      profileImage: req.body.profileImage,
      binImage: req.body.binImage,
      UserId: req.user.id,
      isProfile: req.body.isProfile
    }).then(function () {
      return res;
    })
    .catch(function (error) {
      console.log(error);
    });
  });

  app.post("/api/profile-image", function (req, res) {

    // console.log(req.body);

    db.Image.findAll({
      where: {
        UserId: req.user.id
      }
    }).then(function (data) {
      return res.json(data);
    }).catch(function (error) {
      console.log(error);
    });
  });

  app.post("/api/customers", function (req, res) {
    console.log(req.body);
    db.Customer.create({
      firstName: req.user.firstName,
      UserId: req.user.id
    }).then(function (data) {
      return res.json(data);
    }).catch(function (error) {
      console.log(error);
    });
  });

  app.delete("/api/delete-image/:id", function(req, res) {
    // Delete the Author with the id available to us in req.params.id
    db.Image.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.json(data);
    });
  });

};
