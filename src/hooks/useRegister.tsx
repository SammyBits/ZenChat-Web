import { useState, useEffect } from "react";
import { UserData } from "../interfaces/UserData";

export const useRegister = () => {
  const [user, setUser] = useState<UserData>({
    name_user: "",
    email_user: "",
    phone_user: "",
    status_user: false,
    created_at: new Date(),
    lastname_user: "",
    nickname_user: "",
    uuid_user: "",
  });
};
