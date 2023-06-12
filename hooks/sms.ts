import { useEffect } from 'react';
import Twilio
const useTwilioSendMessage = (phoneNumber: string, message: string, send: boolean) => {
  useEffect(() => {
    const accountSid = ""
    const authToken = ""
    const twilioPhoneNumber = '+';

    const twilioClient = Twilio(accountSid, authToken);

    const sendMessage = async () => {
      try {
        await twilioClient.messages.create({
          body: message,
          from: twilioPhoneNumber,
          to: phoneNumber,
        });

        console.log('Message sent successfully!');
        // Handle success
      } catch (error: any) {
        console.log('Error sending message:', error.message);
        // Handle error
      }
    };

    if (send) {
      sendMessage();
    }
  }, [phoneNumber, message, send]);
};

export default useTwilioSendMessage;
