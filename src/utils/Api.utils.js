import { ApiConfig } from "./Api.config";
import axiosclient from "./Axios-client";

const { USER_LOGIN } = ApiConfig;

export const loginUser = async (credentials) => {
  try {
    const result = await axiosclient.post(USER_LOGIN, credentials);
    return result.data;
  } catch (error) {
    throw error;
  }
};
