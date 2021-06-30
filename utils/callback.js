const axios = require('axios');
const winston = require('../config/winston');

const postCallback = async (url, body) => {
  const json = JSON.stringify(body);
  const response = await axios.post(url, json, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      'Content-Type': 'application/json',
    },
  });
};

module.exports = {
  postCallback,
};
