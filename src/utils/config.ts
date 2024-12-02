/* NEXT_PUBLIC if for both fe and be, without it env variables are only for the server */
const Config = {
  BACKEND_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000",
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || 'some_secret_key',
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || 'google_client_id',
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || 'google_client_secret'
};

export default Config;
