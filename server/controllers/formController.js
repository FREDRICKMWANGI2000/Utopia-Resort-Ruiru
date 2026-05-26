const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

exports.contactForm = async (req, res) => {

  try {

    const {
      name,
      phone,
      email,
      message,
    } = req.body;

    await resend.emails.send({

      from: "onboarding@resend.dev",

      to: "mwangifr123@gmail.com",

      subject: "New Contact Message",

      html: `
        <h2>New Contact Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
};

exports.accommodationForm = async (req, res) => {

  try {

    const {
      fullName,
      accommodationType,
      checkInDate,
      checkOutDate,
      adults,
      children,
      phone,
      email,
    } = req.body;

    await resend.emails.send({

      from: "onboarding@resend.dev",

      to: "mwangifr123@gmail.com",

      subject: "New Accommodation Booking",

      html: `
        <h2>Accommodation Reservation</h2>

        <p><strong>Guest Name:</strong> ${fullName}</p>

        <p><strong>Accommodation Type:</strong> ${accommodationType}</p>

        <p><strong>Check-In Date:</strong> ${checkInDate}</p>

        <p><strong>Check-Out Date:</strong> ${checkOutDate}</p>

        <p><strong>Adults:</strong> ${adults}</p>

        <p><strong>Children:</strong> ${children}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    res.json({
      success: true,
      message: "Reservation request sent successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to send reservation",
    });
  }
};
exports.restaurantForm = async (req, res) => {

  try {

    const {
      fullName,
      date,
      time,
      guests,
      occasion,
      phone,
      email,
    } = req.body;

    console.log(req.body);

    await resend.emails.send({

      from: "onboarding@resend.dev",

      to: "mwangifr123@gmail.com",

      subject: "New Restaurant Reservation",

      html: `
        <h2>Restaurant Reservation</h2>

        <p><strong>Name:</strong> ${fullName}</p>

        <p><strong>Date:</strong> ${date}</p>

        <p><strong>Time:</strong> ${time}</p>

        <p><strong>Guests:</strong> ${guests}</p>

        <p><strong>Occasion:</strong> ${occasion}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    res.json({
      success: true,
      message: "Restaurant reservation sent successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to send reservation",
    });
  }
};

exports.meetingForm = async (req, res) => {

  try {

    const {
      eventType,
      fullName,
      email,
      phone,
      eventDate,
      guests,
      details,
    } = req.body;

    console.log(req.body);

    await resend.emails.send({

      from: "onboarding@resend.dev",

      to: "mwangifr123@gmail.com",

      subject: "New Event Enquiry",

      html: `
        <h2>Event Enquiry</h2>

        <p><strong>Event Type:</strong> ${eventType}</p>

        <p><strong>Name:</strong> ${fullName}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Event Date:</strong> ${eventDate}</p>

        <p><strong>Guests:</strong> ${guests}</p>

        <p><strong>Details:</strong> ${details}</p>
      `,
    });

    res.json({
      success: true,
      message: "Event enquiry sent successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to send enquiry",
    });
  }
};

exports.subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "mwangifr123@gmail.com",
      subject: "New Subscriber",
      html: `
        <h2>New Subscription</h2>
        <p>Email: ${email}</p>
      `,
    });

    res.status(200).json({
      message: "Subscribed successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
};


