const axios = require("axios");

exports.handler = async (event, context) => {
  const url = process.env.VITE_API_URL;

  try {
    const { data } = await axios.get(url);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    const { status, statusText, headers, data } = err.respose;
    return {
      statusCode: status,
      body: JSON.stringify({ status, statusText, headers, data }),
    };
  }
};
