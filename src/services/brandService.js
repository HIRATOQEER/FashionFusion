import axios from 'axios'; // Or your preferred HTTP client

const apiBaseUrl = process.env.REACT_APP_API_URI;


class Brands {

    
  static async getBrandsDetails() {
    try {
        const response = await axios.get(`${apiBaseUrl}/brands/`);
        return response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
        throw error; // Re-throw for error handling in components
      }

      }
  }
  
  export const notificationSvc = new Brands();
  
  export default Brands;