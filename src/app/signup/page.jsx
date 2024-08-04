"use client";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    console.log(userData);
    e.preventDefault();
    if (!userData.username || !userData.email || !userData.password) {
      return toast.error("Fill all fields!");
    }
    if (!emailRegex.test(userData.email)) {
      return toast.error("Please enter a valid email!");
    }
    if (userData.password.length < 8) {
      return toast.error("Password must be at least 8 characters long!");
    }
    try {
      const res = await fetch("http://localhost:5000/api/v1/auth/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      if (data.success) {
        return giveUserAccess();
      }
    } catch (error) {
     return toast.error("Server Error, Try again later!");
    }
  };

  const giveUserAccess = () => {
    Cookies.set("loggedIn", true);
    router.push("/");
    return toast.success("Account created!")
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
      <div className="py-14 w-screen max-w-[500px] flex flex-col items-center bg-[white] px-6 rounded-md">
        <img
          src={"/images/random_2.jpg"}
          className="h-[100px] w-[130px] cursor-pointer"
          alt="Blog"
        />
        <h2 className="py-4 font-bold text-primary">
          Banjo Blog - New Account
        </h2>
        <form
          className="flex flex-col gap-8 py-4 w-full max-w-[400px]"
          onSubmit={handleSubmit}
          method="POST"
        >
          <div className="flex flex-col gap-4">
            <input
              type="text"
              onChange={handleChange}
              name="username"
              placeholder="Enter Username"
              value={userData.username}
              className="h-[57px] indent-6 text-black outline-none border-[#A3AAB4] w-full border rounded-[5px]"
            />
            <input
              type="email"
              onChange={handleChange}
              name="email"
              placeholder="Enter Email"
              className="h-[57px] indent-6 text-black outline-none border-[#A3AAB4] w-full border rounded-[5px]"
            />
            <input
              type="password"
              onChange={handleChange}
              name="password"
              placeholder="Enter Password"
              className="h-[57px] indent-6 text-black outline-none border-[#A3AAB4] w-full border rounded-[5px]"
            />
          </div>
          <button
            className="h-[57px] mt-4 w-full text-[white] bg-primary rounded-md outline-none font-semibold"
          >
            Register
          </button>
          <span className="text-center text-gray">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-bold">
              Login
            </Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
