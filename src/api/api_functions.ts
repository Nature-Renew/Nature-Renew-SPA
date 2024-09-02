/**
 * Common API endpoints for the app
 * @author Gregory Vincent Jr
 */
// import axios from 'axios';

const BASE_URL = process.env['LOCAL_BASE_URL'];

/**
 * Create Endpoint
 * takes in a name and email and sends a POST request to db
 */
export async function addNewSubscriber(userName: string, userEmail: string): Promise<void> {
  if (!BASE_URL) {
    console.error("Base URL is not defined in environment variables.");
    return;
  }

  try {
    const response = await fetch(`${BASE_URL}/newSubscriber`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName,   
        userEmail,  
      }),
    });
    
    console.log({
      status: response.status,
      message: "Successfully added subscriber",
    });
  } catch (error) {
    // if (axios.isAxiosError(error)) {
    //   console.error("Failed to add subscriber:", error.response?.data || error.message);
    // } else {
    //   console.error("An unexpected error occurred:", error);
    // }
  }
}
