import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  deadline: Date,
});

export default mongoose.model('Form', formSchema);
