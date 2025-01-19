import express from "express"
import cors from 'cors';
import connectDB from './config/db.js';
import foodRouter from './routes/foodRoutes.js';
import userRouter from "./routes/userRoutes.js";
import cartRouter from "./routes/cartRoute.js";
import 'dotenv/config';

const app = express();
const port = 3000;



app.use(express.json());
app.use(cors(
  {
    origin: "*"
  }
))

connectDB();

app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)


app.get('/', (req,res)=>{
  res.send('Hello World')
})
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})


