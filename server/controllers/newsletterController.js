export function subscribeNewsletter(req, res) {
  const { email } = req.body;
  console.log("Newsletter signup:", { email, submittedAt: new Date().toISOString() });
  res.status(201).json({ message: "You are subscribed to ApexFit training updates." });
}
