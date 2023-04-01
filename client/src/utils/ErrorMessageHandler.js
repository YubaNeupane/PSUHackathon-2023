function errorMessageHandler(error) {
  if (error.response !== undefined) {
    if (error.response.data.error !== undefined) {
      return error.response.data.error;
    } else {
      return error.response.data.message;
    }
  } else {
    return "Something went wrong!";
  }
}

export default errorMessageHandler;
