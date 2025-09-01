import { ApiConfig } from "./Api.config";
import axiosclient from "./Axios-client";

const {
  USER_LOGIN,
  USER_REGISTER,
  DOCTOR_LIST,
  USER_GET_PROFILE,
  USER_UPDATE_PROFILE,
  USER_APPOINTMENTS,
  USER_BOOK_APPOINTMENT,
  USER_CANCEL_APPOINTMENT
} = ApiConfig;

export const loginUser = async (credentials) => {
  try {
    const result = await axiosclient.post(USER_LOGIN, credentials);
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const signupUser = async (credentials) => {
  try {
    const result = await axiosclient.post(USER_REGISTER, credentials);
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const getDoctors = async () => {
  try {
    const result = await axiosclient.get(DOCTOR_LIST);
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const userProfileData = async () => {
  try {
    const result = await axiosclient.get(USER_GET_PROFILE);
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const updateUserProfileData = async (formdata) => {
  try {
    const result = await axiosclient.post(USER_UPDATE_PROFILE, formdata);
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const getUserAppointments = async () => {
  try {
    const result = await axiosclient.get(USER_APPOINTMENTS);
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const bookAppointment = async (appointmentData) => {
  try {
    const result = await axiosclient.post(
      USER_BOOK_APPOINTMENT,
      appointmentData
    );
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const cancelAppointment = async (appointmentId) => {
  try {
    const result = await axiosclient.post(USER_CANCEL_APPOINTMENT, {
      appointmentId,
    });
    return result.data;
  } catch (error) {
    throw error;
  }
};
