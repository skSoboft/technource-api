const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const { connectToDatabase } = require('./utils/database'); 
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const commentRoutes = require('./routes/commentRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;


connectToDatabase(); 


app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My Blog API',
      version: '1.0.0',
      description: 'API documentation for My Blog',
    },
  },
  apis: ['./routes/*.js'], 
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use('/auth', authRoutes);
app.use('/blog', blogRoutes);
app.use('/comments', commentRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to My Blog API');
});


app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Server error' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
