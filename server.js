const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors')

const app = express();

// Connect Database
connectDB();

const corsOptions = {
  origin: 'https://60bb9ab2d7c460000799ffa9--distracted-sinoussi-8e54ab.netlify.app',
  optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));

//Init Middleware
app.use(express.json({ extended: false }));            //this is express's inbuilt body parser, it allows us to get 'data' into req.body 

app.get('/', (req, res) => res.send('API Running'));     //endpoint;   () is a callback function

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

