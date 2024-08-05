"use client"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";


const Login = () => {
  const router = useRouter();
  const [token, setToken] = useState("")
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      return toast.error("Email and password are required fields!");
    }
    if (!emailRegex.test(userData.email)) {
      return toast.error("Please enter a valid email!");
    }
    try {
      const res = await fetch("http://localhost:5000/api/v1/auth/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      if (data.success) {
        // Using callback to ensure state is updated before using it
        setToken(data.token);
        toast.success(data.message);
      } else {
        return toast.error(data.message);
      }
    } catch (error) {
      return toast.error("Server Error, Try again later!");
    }
  };

  useEffect(() => {
    if (token) {
      giveUserAccess();
    }
  }, [token]);

  const giveUserAccess = () => {
    console.log("here", token);
     Cookies.set("token", token)
     Cookies.set("loggedIn", true);
     router.push("/");
     return toast.success("Logging In")
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((prevUserData) => {
      return {
        ...prevUserData,
        [name]: value,
      };
    });
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen p-2 bg-primary">
      <div className="py-[2rem] w-screen max-w-[500px] flex flex-col gap-8 items-center bg-[white] px-6 rounded-md">
        <div className="flex flex-col items-center relative h-[100px] w-[130px]">
          <Image
            src={"/images/blog.png"}
            className="h-[100px] w-[130px] cursor-pointer"
            alt="Blog Logo"
            fill
          />
          <h2 className="py-4 font-bold text-primary">Banjo Blog - Login</h2>
        </div>
        <form
          className="flex flex-col gap-10 py-4 w-full max-w-[380px]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-6">
            <input
              type="email"
              onChange={handleChange}
              name="email"
              placeholder="Enter Email"
              value={userData.email}
              className="h-[58px] indent-6 text-black outline-none border-[#A3AAB4] w-full border rounded-[5px]"
            />
            <input
              type="password"
              onChange={handleChange}
              name="password"
              placeholder="Enter Password"
              className="h-[58px] indent-6 text-black outline-none border-[#A3AAB4] w-full border rounded-[5px]"
            />
          </div>
          <div className="flex flex-col items-center gap-6 py-10">
            <button className="h-[55px] w-full text-[white] bg-primary rounded-md outline-none font-semibold">
              Login
            </button>
            <span className="text-center text-gray">
              Don't have an account?{" "}
              <Link href="/signup" className="text-primary font-bold">
                Signup
              </Link>
            </span>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
