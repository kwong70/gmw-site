import { useEffect } from 'react';
import Twilio
const useTwilioSendMessage = (phoneNumber: string, message: string, send: boolean) => {
  useEffect(() => {
    const accountSid = "AC2d97f07f6af607842b539e9a88fae1bf"
    const authToken = "8533208b12eae56816cfae9f60b3865c"
    const twilioPhoneNumber = '+15673391566';

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
