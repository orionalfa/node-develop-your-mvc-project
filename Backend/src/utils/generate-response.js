function generateResponse({ data = null, error = null }) {
  if (error) {
    return {
      isSuccessful: false,
      errorData: error,
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
