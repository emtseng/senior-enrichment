export const httpErrorCreator = (statusCode, message) => {
  const newError = new Error(message)
  newError.status = statusCode
  return newError
}
