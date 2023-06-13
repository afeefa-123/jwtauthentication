// const mongoose = require('mongoose');

// async function connectToDatabase() {
//   try {
//     await mongoose.connect('mongodb://localhost:27017/tokenauthentication', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to the database');
//     // Additional code after successful connection
//   } catch (error) {
//     console.error('Error connecting to the database:', error.message);
//   }
// }

// connectToDatabase();
// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   }

// });

// module.exports = mongoose.model('User', userSchema);
   