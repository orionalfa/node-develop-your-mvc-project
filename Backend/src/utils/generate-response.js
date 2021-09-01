function generateResponse({ data = null, error = null }) {
  if (error) {
    return {
      isSuccessful: false,
      data: data,
      error: error,
    };
  } else {
    return {
      isSuccessful: true,
      data: data,
    };
  }
}

module.exports = {
  generateResponse: generateResponse,
};
