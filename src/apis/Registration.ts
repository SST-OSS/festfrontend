// use axios here to make a post request to the server to register a user
import axios from 'axios';
export const registerUser = async (data: string) => {
	try {
		const response = await axios.post('http://localhost:3001/register', data);
		return response.data;
	} catch (error) {
		console.error(error);
		return error;
	}
};
