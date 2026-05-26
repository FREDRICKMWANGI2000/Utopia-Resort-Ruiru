const express = require("express");

const {
  contactForm,
  accommodationForm,
  restaurantForm,
  meetingForm,
} = require("../controllers/formController");

const router = express.Router();

router.post("/contact", contactForm);

router.post("/book-accommodation", accommodationForm);

router.post("/book-restaurant", restaurantForm);

router.post("/book-meeting", meetingForm);

module.exports = router;