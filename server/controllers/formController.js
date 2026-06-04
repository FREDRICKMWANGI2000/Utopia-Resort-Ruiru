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
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,sans-serif;">

<div style="max-width:700px;margin:30px auto;background:#ffffff;border-radius:12px;overflow:hidden;">

  <div style="background:#0d1b3e;padding:40px;text-align:center;">
    <h1 style="color:#ffffff;margin:0;">
      UTOPIA RESORT
    </h1>

    <div style="
      display:inline-block;
      background:#d4af37;
      color:white;
      padding:12px 24px;
      border-radius:6px;
      margin-top:15px;
      font-weight:bold;
    ">
      New Contact Form Submission
    </div>
  </div>

  <div style="padding:35px;">

    <h2 style="color:#0d1b3e;">
      You have received a new enquiry
    </h2>

    <table width="100%" cellspacing="0" cellpadding="14"
      style="border-collapse:collapse;border:1px solid #e5e5e5;">

      <tr>
        <td style="background:#f8f8f8;font-weight:bold;width:35%;">
          Full Name
        </td>
        <td>${name}</td>
      </tr>

      <tr>
        <td style="background:#f8f8f8;font-weight:bold;">
          Email
        </td>
        <td>${email}</td>
      </tr>

      <tr>
        <td style="background:#f8f8f8;font-weight:bold;">
          Phone
        </td>
        <td>${phone}</td>
      </tr>

    </table>

    <h3 style="margin-top:30px;color:#555;">
      Message
    </h3>

    <div style="
      background:#fafafa;
      padding:20px;
      border-left:4px solid #ebb60b;
      border-radius:6px;
    ">
      ${message}
    </div>

    <div style="text-align:center;margin-top:35px;">
      <a href="mailto:${email}"
         style="
          background:#0d1b3e;
          color:#ffffff;
          text-decoration:none;
          padding:14px 28px;
          border-radius:6px;
          display:inline-block;
          font-weight:bold;
         ">
         Reply to ${name} →
      </a>
    </div>

  </div>

  <div style="
    background:#fafafa;
    padding:20px;
    text-align:center;
    color:#777;
    font-size:12px;
  ">
    Automatically generated from the Utopia Resort website.
  </div>

</div>

</body>
</html>
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

exports.meetingForm = async (req, res) => {
  try {

    const {
      eventType,
      name,
      email,
      phone,
      date,
      guests,
      message,
    } = req.body;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "mwangifr123@gmail.com",
      subject: `New Event Booking - ${name}`,

      html: `
      <!DOCTYPE html>
      <html>
      <body style="
        margin:0;
        padding:20px;
        background:#f5f5f5;
        font-family:Arial,sans-serif;
      ">

      <div style="
        max-width:750px;
        margin:auto;
        background:#ffffff;
        border-radius:12px;
        overflow:hidden;
        box-shadow:0 5px 20px rgba(0,0,0,0.08);
      ">

        <div style="
          background:#0d1b3e;
          padding:40px;
          text-align:center;
        ">
          <h1 style="
            color:#ffffff;
            margin:0;
          ">
            UTOPIA RESORT
          </h1>

          <p style="
            color:#D4AF37;
            margin-top:10px;
          ">
            Event & Conference Enquiry
          </p>
        </div>

        <div style="padding:30px;">

          <h2 style="color:#0d1b3e;">
            New Event Booking Request
          </h2>

          <table
            width="100%"
            cellpadding="12"
            cellspacing="0"
            style="border-collapse:collapse;"
          >

            <tr>
              <td style="background:#f8f8f8;font-weight:bold;">
                Event Type
              </td>
              <td>${eventType}</td>
            </tr>

            <tr>
              <td style="background:#f8f8f8;font-weight:bold;">
                Full Name
              </td>
              <td>${name}</td>
            </tr>

            <tr>
              <td style="background:#f8f8f8;font-weight:bold;">
                Email Address
              </td>
              <td>${email}</td>
            </tr>

            <tr>
              <td style="background:#f8f8f8;font-weight:bold;">
                Phone Number
              </td>
              <td>${phone}</td>
            </tr>

            <tr>
              <td style="background:#f8f8f8;font-weight:bold;">
                Event Date
              </td>
              <td>${date}</td>
            </tr>

            <tr>
              <td style="background:#f8f8f8;font-weight:bold;">
                Number of Guests
              </td>
              <td>${guests}</td>
            </tr>

          </table>

          <h3 style="
            margin-top:30px;
            color:#0d1b3e;
          ">
            Additional Details
          </h3>

          <div style="
            background:#fafafa;
            border-left:5px solid #D4AF37;
            padding:20px;
            border-radius:8px;
            line-height:1.8;
            color:#555;
          ">
            ${message || "No additional details provided"}
          </div>

          <div style="
            text-align:center;
            margin-top:30px;
          ">

            <a
              href="mailto:${email}"
              style="
                background:#D4AF37;
                color:#0d1b3e;
                text-decoration:none;
                padding:14px 24px;
                border-radius:6px;
                font-weight:bold;
                display:inline-block;
                margin-right:10px;
              "
            >
              Reply to Guest
            </a>

            <a
              href="tel:${phone}"
              style="
                background:#0d1b3e;
                color:#ffffff;
                text-decoration:none;
                padding:14px 24px;
                border-radius:6px;
                font-weight:bold;
                display:inline-block;
              "
            >
              Call Guest
            </a>

          </div>

        </div>

        <div style="
          background:#fafafa;
          padding:20px;
          text-align:center;
          color:#777;
          font-size:12px;
          border-top:1px solid #eee;
        ">
          Event enquiry generated automatically from the Utopia Resort website.
        </div>

      </div>

      </body>
      </html>
      `,
    });

    res.json({
      success: true,
      message: "Event enquiry sent successfully",
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to send enquiry",
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
<!DOCTYPE html>
<html>
<body style="
margin:0;
padding:0;
background:#f5f5f5;
font-family:Arial,sans-serif;
">

<div style="
max-width:750px;
margin:30px auto;
background:#ffffff;
border-radius:16px;
overflow:hidden;
box-shadow:0 6px 25px rgba(0,0,0,0.08);
">

<div style="
background:#0d1b3e;
padding:40px;
text-align:center;
">

<h1 style="
margin:0;
color:#ffffff;
letter-spacing:2px;
">
UTOPIA RESORT
</h1>

<p style="
margin-top:10px;
color:#D4AF37;
font-size:15px;
">
Luxury Accommodation Reservation
</p>

</div>

<div style="padding:35px;">

<h2 style="
margin-top:0;
color:#0d1b3e;
">
New Accommodation Booking
</h2>

<table
width="100%"
cellpadding="12"
cellspacing="0"
style="border-collapse:collapse;"
>

<tr>
<td style="background:#f8f8f8;font-weight:bold;">
Guest Name
</td>
<td>${fullName}</td>
</tr>

<tr>
<td style="background:#f8f8f8;font-weight:bold;">
Accommodation Type
</td>
<td>${accommodationType}</td>
</tr>

<tr>
<td style="background:#f8f8f8;font-weight:bold;">
Check-In Date
</td>
<td>${checkInDate}</td>
</tr>

<tr>
<td style="background:#f8f8f8;font-weight:bold;">
Check-Out Date
</td>
<td>${checkOutDate}</td>
</tr>

<tr>
<td style="background:#f8f8f8;font-weight:bold;">
Adults
</td>
<td>${adults}</td>
</tr>

<tr>
<td style="background:#f8f8f8;font-weight:bold;">
Children
</td>
<td>${children}</td>
</tr>

<tr>
<td style="background:#f8f8f8;font-weight:bold;">
Phone Number
</td>
<td>${phone}</td>
</tr>

<tr>
<td style="background:#f8f8f8;font-weight:bold;">
Email Address
</td>
<td>${email}</td>
</tr>

</table>

<div style="
text-align:center;
margin-top:35px;
">

<a
href="mailto:${email}"
style="
background:linear-gradient(135deg,#D4AF37,#F7DC6F);
color:#0d1b3e;
text-decoration:none;
padding:14px 28px;
border-radius:8px;
font-weight:bold;
display:inline-block;
margin-right:10px;
box-shadow:0 4px 15px rgba(231, 180, 11, 0.35);
"
>
Reply to Guest
</a>

<a
href="tel:${phone}"
style="
background:#0d1b3e;
color:#ffffff;
text-decoration:none;
padding:14px 28px;
border-radius:8px;
font-weight:bold;
display:inline-block;
"
>
Call Guest
</a>

</div>

</div>

<div style="
background:#fafafa;
padding:20px;
text-align:center;
color:#777;
font-size:12px;
border-top:1px solid #eeeeee;
">
Reservation request generated automatically from the Utopia Resort website.
</div>

</div>

</body>
</html>
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

await resend.emails.send({
  from: "onboarding@resend.dev",
  to: "mwangifr123@gmail.com",
  subject: `New Reservation from ${fullName}`,
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto; border: 1px solid #e5e5e5; border-radius: 10px; overflow: hidden;">

      <div style="background: #0f172a; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">New Restaurant Reservation</h1>
      </div>

      <div style="padding: 25px;">

        <p>A new restaurant reservation has been submitted through the website.</p>

        <table style="width: 100%; border-collapse: collapse;">

          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Full Name</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${fullName}</td>
          </tr>

          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Date</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${date}</td>
          </tr>

          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Time</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${time}</td>
          </tr>

          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Guests</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${guests}</td>
          </tr>

          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Occasion</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${occasion}</td>
          </tr>

          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Phone Number</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${phone}</td>
          </tr>

          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email Address</td>
            <td style="padding: 12px; border: 1px solid #ddd;">
              <a href="mailto:${email}">${email}</a>
            </td>
          </tr>

        </table>

        <div style="text-align: center; margin-top: 25px;">
          <a
            href="mailto:${email}"
            style="
              display: inline-block;
              background: #d4af37;
              color: #ffffff;
              padding: 12px 24px;
              border-radius: 6px;
              text-decoration: none;
              font-weight: bold;
              font-size: 15px;
            "
          >
            Reply to Guest
          </a>
        </div>

      </div>

      <div style="
        background: #f8f9fa;
        padding: 15px;
        text-align: center;
        font-size: 12px;
        color: #666;
      ">
        This reservation was submitted via your website booking form.
      </div>

    </div>
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
