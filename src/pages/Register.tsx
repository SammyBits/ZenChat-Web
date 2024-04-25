import { useState } from "react";
import { Card } from "../components/common/Card";
import { useLogin } from "../hooks/useLogin";
import { UserData } from "../interfaces/UserData";
import { IUserRegister } from "../interfaces/Auth/IUserRegister";
import { registerAuthServices } from "../services/Auth/AuthServices";

export const Register = () => {
  const [user, setUser] = useState<IUserRegister>({
    name_user: "",
    lastname_user: "",
    nickname_user: "",
    email_user: "",
    phone_user: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await registerAuthServices(user);
    console.log("Form submitted");
  };
  return (
    <Card className="bg-[#373737] drop-shadow-lg rounded-lg w-[60vw] h-[60vh]">
      <div className="grid h-full grid-cols-2 place-content-center">
        <div className="login-image">
          <img src="" alt="Imagen" className="" />
        </div>
        <div>
          <h2 className="pb-5 text-5xl text-white">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-9/12 input-group">
              <label htmlFor="name_user" className="text-white">
                Your name
              </label>
              <input
                type="text"
                id="name_user"
                name="name_user"
                className="opacity-20"
                onChange={(e) =>
                  setUser({ ...user, name_user: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col w-9/12 input-group">
              <label htmlFor="lastname_user" className="text-white">
                Lastname
              </label>
              <input
                type="text"
                id="lastname_user"
                name="lastname_user"
                className="opacity-20"
                onChange={(e) =>
                  setUser({ ...user, lastname_user: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col w-9/12 input-group">
              <label htmlFor="nickname_user" className="text-white">
                Nickname
              </label>
              <input
                type="text"
                id="nickname_user"
                name="nickname_user"
                className="opacity-20"
                onChange={(e) =>
                  setUser({ ...user, nickname_user: e.target.value })
                }
              />
            </div>
             <div className="flex flex-col w-9/12 input-group">
              <label htmlFor="nickname_user" className="text-white">
                Nickname
              </label>
              <input
                type="text"
                id="nickname_user"
                name="nickname_user"
                className="opacity-20"
                onChange={(e) =>
                  setUser({ ...user, nickname_user: e.target.value })
                }
              />
            </div>
            
            
            <div className="flex flex-col w-9/12 input-group">
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="opacity-20"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-9/12 input-group">
              <label htmlFor="password" className="text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="opacity-20"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-[#909090] mt-5 py-1 rounded w-9/12 login-button"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </Card>
  );
};
