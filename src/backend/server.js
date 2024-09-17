
/**
 * Server for CRUD operations with DynamoDB
 */
const express = require('express');
const { json } = require('express');
const AWS = require('aws-sdk');
const cors = require('cors');
const dotenv = require('dotenv');

// Importing environment variables from a TypeScript environment file
const { 
  REGION, 
  AWS_ACCESS_KEY_ID, 
  AWS_SECRET_ACCESS_KEY, 
  TABLE_NAME, 
  PORT, 
  LOCAL_BASE_URL 
} = require('./../environments/environment.ts');

// Configure dotenv to load environment variables
dotenv.config();

// AWS SDK configuration
AWS.config.update({
  region: REGION,
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
});

const app = express();
app.use(json());
app.use(cors({
  origin: LOCAL_BASE_URL,
  methods: 'GET,POST',
}));


config.update({
  region: REGION, 
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY
});


const dynamoDB = new DynamoDB.DocumentClient();
const TABLE_NAME = TABLE_NAME

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

const port = PORT;
app.listen(port,'0.0.0.0', () => {
  console.log(`Server is running on port: ` + port);
});
