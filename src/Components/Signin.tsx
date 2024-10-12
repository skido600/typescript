import React, { useState } from "react";
import { FiUsers } from "react-icons/fi";
import { RiKey2Line } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoEyeOff } from "react-icons/io5";
import { validate } from "./Validation/validte.ts";

const Signin: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [errors, setErrors] = useState<{
    email: string;
    password: string;
    name: string;
  }>({
    email: "",
    password: "",
    name: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validate(email, password, name, setErrors);

    if (isValid) {
      console.log("Form submitted successfully");
    }
  };

  return (
    <>
      <main className="bg-slate-500 flex fixed top-0 bottom-0 right-0 left-0 justify-center items-center">
        <section className="overflow-y-auto h-[80vh] sm:overflow-hidden sm:h-auto">
          <article className="bg-white w-[90vw] sm:w-[400px] p-6 rounded-lg shadow-lg">
            <h1 className="text-center font-bold text-2xl mb-4">Signup</h1>
            <form onSubmit={handleSubmit}>
              {/* Username Field */}
              <div className="relative mb-6">
                <label htmlFor="username" className="font-semibold">
                  Username
                </label>
                <div className="flex flex-col">
                  <input
                    type="text"
                    id="username"
                    className="w-full outline-none border-b-2 px-7 border-gray-300 focus:border-blue-500 placeholder:text-[12px] mt-2"
                    placeholder="Type your username"
                    aria-label="Username"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <FiUsers size={20} className="relative top-[-25px] left-1 " />
                  <p className="text-red-600 top-[-1rem] text-[10px] relative">
                    {errors.name}
                  </p>
                </div>
              </div>

              {/* Email Field */}
              <div className="relative mb-6">
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <div className="flex flex-col">
                  <input
                    type="email"
                    id="email"
                    className="w-full outline-none border-b-2 px-7 border-gray-300 focus:border-blue-500 placeholder:text-[12px] mt-2"
                    placeholder="Type your email"
                    aria-label="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <MdOutlineMail
                    size={20}
                    className="relative top-[-25px] left-1 "
                  />
                  <p className="text-red-600 top-[-1rem] text-[10px] relative">
                    {errors.email}
                  </p>
                </div>
              </div>

              {/* Password Field */}
              <div className="relative mb-6">
                <label htmlFor="password" className="font-semibold">
                  Create password
                </label>
                <div className="flex flex-col">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full outline-none border-b-2 px-7 border-gray-300 focus:border-blue-500 placeholder:text-[12px] mt-2"
                    placeholder="Type your password"
                    aria-label="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-[30px] right-2 w-6 h-6 cursor-pointer"
                  >
                    {showPassword ? <FaEye /> : <IoEyeOff />}
                  </div>
                  <RiKey2Line className="relative top-[-25px] left-1 w-6 h-6" />
                  <p className="text-red-600 top-[-1rem] text-[10px] relative">
                    {errors.password}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <button
                  onClick={handleSubmit}
                  id="submit"
                  type="submit"
                  className="w-full font-bold text-white bg-slate-900 p-2 rounded-full"
                >
                  SIGNUP
                </button>
                <div className="flex gap-2 justify-center mt-4">
                  <p className="text-center text-[12px]">
                    Already have an account?
                  </p>
                  <span className="text-[12px] text-blue-600">
                    <Link to="/login">Login</Link>
                  </span>
                </div>
              </div>
            </form>
          </article>
        </section>
      </main>
    </>
  );
};

export default Signin;
