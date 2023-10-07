import express from 'express'
import mongoose,{ConnectOptions} from "mongoose";
import cors from 'cors'; 
import ProductRoute from "./routes/ProductRouter";
import UserRoutes from './routes/UserRoutes';
import  PartnersRouter  from './routes/PartnersRouter';
import  SuppliersRouter  from './routes/SuppliersRouter';
import  PartnerRequestsRouter  from './routes/PartnerRequestsRouter';
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3200;

app.use(express.json());
app.use('/', ProductRoute);
app.use('/user', UserRoutes);
app.use('/partners', PartnersRouter);
app.use('/suppliers', SuppliersRouter);
app.use('/partner-requests', PartnerRequestsRouter);
// Подключение к MongoDB Atlas

mongoose.connect("mongodb+srv://Nikita:123234345Nik@atlascluster.p0la65z.mongodb.net/marketplaca?retryWrites=true&w=majority&appName=AtlasApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  }as ConnectOptions)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });



