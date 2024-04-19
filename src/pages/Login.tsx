import { Card } from "../components/common/Card";
import { useLogin } from "../hooks/useLogin";
import "../styles/login.css";
export const Login = () => {
  const { setEmail, setPassword } = useLogin();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    
  };

  return (
    <div>
      <Card className="bg-[#373737] drop-shadow-lg rounded-lg w-[60vw] h-[60vh]">
        <div className="grid h-full grid-cols-2 place-content-center">
          <div className="login-image">
            <img src="" alt="Imagen" className="" />
          </div>
          <div>
            <h2 className="pb-5 text-5xl text-white">Login</h2>
            <form onSubmit={handleSubmit}>
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
    </div>
  );
};
