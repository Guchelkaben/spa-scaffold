import {CONTACT_SERVICE, MM_API_KEY} from '@/customer.config.js';

const sendContactForm = async (contactPayload) => {
  try {
    console.log(contactPayload);
    const response = await fetch(`${CONTACT_SERVICE}/api/private/contact`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MM_API_KEY}`,
        'X-MM-ORIGIN': 'axel-beta'
      },
      body: JSON.stringify(contactPayload)
    });

    if (response.ok) {
      return {valid: response.ok};
    }

    return {valid: response.ok, message: 'client error', status: response.status};
  } catch (err) {
    throw {message: 'network error', error: err}
  }
};


const sendCaptchaChallenge = async (userResponse) => {
  try {
    const response = await fetch(`${CONTACT_SERVICE}/api/private/captcha`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MM_API_KEY}`
      },
      body: JSON.stringify({userResponse})
    });

    return response.ok;
  } catch (err) {
    throw {message: 'network error', error: err}
  }
};

export default {
  sendContactForm,
  sendCaptchaChallenge
};
