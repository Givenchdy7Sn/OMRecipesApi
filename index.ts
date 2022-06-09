import express from 'express';
import cors from 'cors';
import { router } from './routes';

const { 
  createConnection
 } = require("typeorm");

const app = express();
const routes = router;
const PORT = 3000;

var corsOptions = {
  origin: '*',
  methods: '*',
  'Access-Control-Allow-Headers:': 'Content-Type'
}

app.use(express.json());
app.use(cors(corsOptions));

router.get('/health', (req,res) => {
  res.send({
      status: 200,
      message: "api passed health check 2"
  })
});

app.use('/api/om/recipe', routes);

createConnection().then(async (connection: any) => {

  app.listen(PORT, () => {
     console.log('Api running on port :  ' + PORT);
  });

});
