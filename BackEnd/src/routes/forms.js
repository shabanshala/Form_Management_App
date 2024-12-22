import { Router } from 'express'; // Import Express Router
import formController from '../controllers/formController.js'; // Import the controller

const router = Router();

// Define routes
router.get('/', formController.getAllForms); // GET all forms
router.get('/:id', formController.getFormById); // GET form by ID
router.post('/', formController.createForm); // POST a new form
router.put('/:id', formController.updateForm); // PUT (update) a form
router.delete('/:id', formController.deleteForm); // DELETE a form

export default router;
