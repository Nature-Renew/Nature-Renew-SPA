
/**
 * Server for CRUD operations with DynamoDB
 */
const express = require('express');
const AWS = require('aws-sdk');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());

AWS.config.update({
  region: process.env.REGION, 
  accessKeyId: process.env.AWS_ACCESS_KEY_ID, 
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, 
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_NAME; 

app.post(process.env.LOCAL_BASE_URL + '/newSubscriber', async (req, res) => {
  const { userName, userEmail } = req.body;

  if (!userName || !userEmail) {
    return res.status(400).json({ error: 'Name and Email are required' });
  }

  const params = {
    TableName: TABLE_NAME,
    Item: {
      userName,
      userEmail,
    },
  };

  try {
    await dynamoDB.put(params).promise();
    res.status(200).json({ message: 'Subscriber info uploaded successfully' });
  } catch (error) {
    console.error('Error adding subscriber to DynamoDB:', error);
    res.status(500).json({ error: 'Could not add subscriber to DynamoDB' });
  }
});

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
