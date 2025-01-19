import { connect } from 'mongoose';

const connectDB= async ()=> {
  try {
    await connect('mongodb+srv://Birat12:Heyman44@cluster0.qa1lc.mongodb.net/food-del');
      console.log('MongoDB connected...');
}
catch (err) {
  console.error(err);
  process.exit(1);
}
}


export default connectDB;