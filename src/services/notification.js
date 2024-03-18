import axios from 'axios'; // Or your preferred HTTP client

const apiBaseUrl = process.env.REACT_APP_API_URI;


class Notifications {

    
    
  static async getNotifications(user_id , token ) {
    try {
        const response = await axios.get(`${apiBaseUrl}/notifications/${user_id}?token=${token}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching notificatios:', error);
        throw error; // Re-throw for error handling in components
      }

      }

      static async getRecentNotificationsCount(user_id , token ) {
        try {
            const response = await axios.get(`${apiBaseUrl}/notifications/${user_id}/unread-count?token=${token}`);
            return response.data;
          } catch (error) {
            console.error('Error fetching recent notifications count:', error);
            throw error; // Re-throw for error handling in components
          }
    
          }

  }
  
  export const notificationSvc = new Notifications();
  
  export default Notifications;