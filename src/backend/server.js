
/**
 * Server for CRUD operations with DynamoDB
 */
const express = require('express');
const AWS = require('aws-sdk');
const dotenv = require('dotenv');
const cors = require('cors'); // Import the CORS package
const environment = require('./../environments/environment.ts');

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4200',
  methods: 'GET,POST',
}));


AWS.config.update({
  region: environment.REGION, 
  accessKeyId: environment.AWS_ACCESS_KEY_ID,
  secretAccessKey: environment.AWS_SECRET_ACCESS_KEY
});


const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = environment.TABLE_NAME

app.get("/newSubscriber", async (req, res) => {
  return res.status(200).json({Message: "Works"});
})

app.post(`/newSubscriber`, async (req, res) => {
  const { userName, Email } = req.body;

  if (!userName || !Email) {
    return res.status(400).json({ error: 'Name and Email are required' });
  }

  const params = {
    TableName: TABLE_NAME,
    Item: {
      userName,
      Email,
    },
  };

  try {
    await dynamoDB.put(params).promise();
    res.status(200).json({ message: 'Subscriber info uploaded successfully' });
  } catch (error) {
    console.error('Error adding subscriber to DynamoDB:', error.stack || error);
    res.status(500).json({ error: 'Could not add subscriber to DynamoDB' });
  }
  
});

// Start the server
const port = environment.PORT;
app.listen(port,'0.0.0.0', () => {
  console.log(`Server is running on port: ` + port);
});
