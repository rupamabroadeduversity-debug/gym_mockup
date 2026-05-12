const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(req, res, next) {
  const { name, email, phone, interest, message } = req.body;
  if (!name || !email || !phone || !interest || !message) {
    return res.status(400).json({ message: "All contact fields are required." });
  }
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Please provide a valid email address." });
  }
  if (String(message).length < 8) {
    return res.status(400).json({ message: "Please share a little more about your goal." });
  }
  next();
}

export function validateNewsletter(req, res, next) {
  const { email } = req.body;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ message: "Please provide a valid email address." });
  }
  next();
}
