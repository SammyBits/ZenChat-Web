import { IUserLogin } from "../../interfaces/Auth/IUserLogin";
import { IUserRegister } from "../../interfaces/Auth/IUserRegister";
import { UserData } from "../../interfaces/UserData";
import { ManagerAxios } from "../../utils/ManagerAxios";
/**
 * Login authentication services
 * @param username email or username or phone number of the user
 * @param password password of the user
 * @returns
 */
export const loginAuthServices = async (username: string, password: string) => {
  try {
    const response = await ManagerAxios.post("/auth", {
      username,
      password,
    });
    const data: IUserLogin = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const registerAuthServices = async (data: IUserRegister) => {
  try {
    const response = await ManagerAxios.post("/auth", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
