export const API_URL = import.meta.env.VITE_BACKEND_URL;

export const ApiConfig = {
  // User APIs
  USER_LOGIN: `/api/user/login`,
  USER_REGISTER: `/api/user/register`,
  USER_GET_PROFILE: `/api/user/get-profile`,
  USER_UPDATE_PROFILE: `/api/user/update-profile`,
  USER_BOOK_APPOINTMENT: `api/user/book-appointment`,
  USER_APPOINTMENTS: `/api/user/appointments`,
  USER_CANCEL_APPOINTMENT: `/api/user/cancel-appointment`,
  USER_PAYMENT_RAZORPAY: `${API_URL}/api/user/payment-razorpay`,
  USER_VERIFY_RAZORPAY: `${API_URL}/api/user/verifyRazorpay`,
  USER_PAYMENT_STRIPE: `${API_URL}/api/user/payment-stripe`,
  USER_VERIFY_STRIPE: `${API_URL}/api/user/verifyStripe`,
  DOCTORS_CHAT_LIST: "api/user/appointment-completed-doctors",
  GET_ROOM_ID: "api/user/get-room-id",
  GET_ROOM_MESSAGES : "api/user/get-room-messages",

  // Doctor APIs
  DOCTOR_LOGIN: `${API_URL}/api/doctor/login`,
  DOCTOR_CANCEL_APPOINTMENT: `${API_URL}/api/doctor/cancel-appointment`,
  DOCTOR_APPOINTMENTS: `${API_URL}/api/doctor/appointments`,
  DOCTOR_LIST: `${API_URL}/api/doctor/list`,
  DOCTOR_CHANGE_AVAILABILITY: `${API_URL}/api/doctor/change-availability`,
  DOCTOR_COMPLETE_APPOINTMENT: `${API_URL}/api/doctor/complete-appointment`,
  DOCTOR_DASHBOARD: `${API_URL}/api/doctor/dashboard`,
  DOCTOR_PROFILE: `${API_URL}/api/doctor/profile`,
  DOCTOR_UPDATE_PROFILE: `${API_URL}/api/doctor/update-profile`,

  // Admin APIs
  ADMIN_LOGIN: `${API_URL}/api/admin/login`,
  ADMIN_ADD_DOCTOR: `${API_URL}/api/admin/add-doctor`,
  ADMIN_APPOINTMENTS: `${API_URL}/api/admin/appointments`,
  ADMIN_CANCEL_APPOINTMENT: `${API_URL}/api/admin/cancel-appointment`,
  ADMIN_ALL_DOCTOR_LIST: `${API_URL}/api/admin/all-doctors`,
  ADMIN_CHANGE_AVAILABILITY: `${API_URL}/api/admin/change-availability`,
  ADMIN_DASHBOARD: `${API_URL}/api/admin/dashboard`,
};
