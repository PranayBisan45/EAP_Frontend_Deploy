/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'login-image': "url('/Login.jpg')",
      'regis-image': "url('/Registration.jpg')",
      'update-image': "url('/Update_Appointment.jpg')",
      'add-image': "url('/Add_Appointment.jpg')",
      'forgot-password' : "url('/Forgot_Password.jfif')"
    },
  },
  plugins: [],
}