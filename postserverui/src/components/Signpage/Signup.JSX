// /* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Signup = () => {
  return (
    <div className="flex">
      <div className="text-3xl">
        <p>DigitalPlatform for the Scale of Posts </p>
      </div>
      <form>
        <p className="text-3xl font-bold ">SignUp</p>
        <div className="mb-6 flex flex-col justify-start items-center">
          <label htmlFor="large-input" className="text-black">
            User Name
          </label>
          <input
            type="text"
            id="large-input"
            className=" border-2 border-black"
          />
        </div>

        <div className="mb-6 flex flex-col justify-start items-center">
          <label htmlFor="large-input" className="text-black">
            Email
          </label>
          <input
            type="email"
            id="large-input"
            className=" border-2 border-black"
          />
        </div>
        <button> Sighup </button>
      </form>
    </div>
  );
};

export default Signup;
