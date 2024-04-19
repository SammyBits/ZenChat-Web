import { UserData } from "../interfaces/UserData";
import { ManagerAxios } from "../utils/ManagerAxios";

export const userRegisterController = async (user: UserData) => {
  ManagerAxios.post("/user", user).then((response) => {
    console.log(response.data);
  });
};
