import Form from '../models/Form.js'; // Import the Form model

// Get all forms
const getAllForms = async (req, res) => {
  try {
    const forms = await Form.find(); // Fetch all forms from the database
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching forms', error });
  }
};

// Get form by ID
const getFormById = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id); // Find a form by ID
    if (!form) return res.status(404).json({ message: 'Form not found' });
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching form', error });
  }
};

// Create a new form
const createForm = async (req, res) => {
    try {
        const newForm = new Form(req.body); // Create a new form from request body
        await newForm.save(); // Save the form to the database
        res.status(201).json(newForm); // Respond with the saved form
      } catch (error) {
        res.status(500).json({ message: 'Error creating form', error });
  }
};

// Update a form
const updateForm = async (req, res) => {
  try {
    const updatedForm = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedForm) return res.status(404).json({ message: 'Form not found' });
    res.status(200).json(updatedForm);
  } catch (error) {
    res.status(500).json({ message: 'Error updating form', error });
  }
};

// Delete a form
const deleteForm = async (req, res) => {
  try {
    const deletedForm = await Form.findByIdAndDelete(req.params.id);
    if (!deletedForm) return res.status(404).json({ message: 'Form not found' });
    res.status(200).json({ message: 'Form deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting form', error });
  }
};

// Export controller functions
export default {
  getAllForms,
  getFormById,
  createForm,
  updateForm,
  deleteForm,
};
