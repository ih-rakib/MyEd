import Contact from "../models/contactModel.js";

const createContact = async (req, res) => {
  const { firstName, lastName, school, city, email, phone, message } = req.body;

  try {
    const newContact = new Contact({
      firstName,
      lastName,
      school,
      city,
      email,
      phone,
      message,
    });

    if (!firstName || !school || !email || !phone || !message) {
      return res
        .status(400)
        .json({ message: "Please fill in all required fields." });
    }

    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getContact = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(201).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createContact, getContact };
