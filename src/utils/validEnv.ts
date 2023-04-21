export const validEnv = () => {
  const serviceID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID
  const templateID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL

  if (!serviceID) {
    throw Error("Email Service ID not provided in .env file")
  }
  if (!templateID) {
    throw Error("Email Template ID not provided in .env file")
  }
  if (!publicKey) {
    throw Error("Email Public Key not provided in .env file")
  }
  if (!adminEmail) {
    throw Error("Email Admin Email not provided in .env file")
  }

  return {
    serviceID,
    templateID,
    publicKey,
    adminEmail,
  }
}
