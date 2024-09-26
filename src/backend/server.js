
/**
 * Server for CRUD operations with DynamoDB
 */
import express from 'express';
import { json } from 'express';
import AWS from 'aws-sdk';
import cors from 'cors';
import { config as dotenvConfig } from 'dotenv';

import environmemnt from '../environments/environment.js';

dotenvConfig();

AWS.config.update({
  region: environmemnt.REGION,
  accessKeyId: environmemnt.AWS_ACCESS_KEY_ID,
  secretAccessKey: environmemnt.AWS_SECRET_ACCESS_KEY,
});

const app = express();
app.use(json());
app.use(cors({
  origin: environmemnt.ALLOWED_DEV_FRONTEND,
  methods: 'GET,POST',
  allowedHeaders: "*",
}));


const dynamoDB = new AWS.DynamoDB.DocumentClient();


app.post(`/newSubscriber`, async (req, res) => {
  const { Name, Email } = req.body;

  if (!Name || !Email) {
    return res.status(400).json({ error: 'Name and Email are required' });
  }

  const params = {
    TableName: environmemnt.TABLE_NAME,
    Item: {
      Name,
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

const currentPort = environmemnt.PORT
app.listen(currentPort,'0.0.0.0', () => {
  console.log(`Server is running on port ${currentPort}.`);
});
