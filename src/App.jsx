import Count from "./components/Count";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FormComponent from "./components/FormComponent";
import { useState } from "react";

function App() {
  const username = "olayinka gbenga";
  const [openForm, setOpenForm] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");

    setIsLoggedin(true);
  };

  if (isLoggedin === false) {
    return (
      <div className="w-full h-screen flex items-center justify-center flex-col space-y-3 bg-amber-200">
        <div className="flex flex-col items-center justify-center space-y-3">
          <p>Please log in here</p>
          <button
            className="border border-black rounded-md p-2 "
            onClick={() => setOpenForm((prev) => !prev)}
          >
            Log in
          </button>
        </div>
        {/* Ternary operator */}
        {/* {openForm ? (
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="border border-black p-3 rounded-lg bg-amber-100 w-[400px]"
          >
            <h2 className="font-merriweather font-bold text-center mb-6">
              Login
            </h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white p-2 rounded-md w-full"
              >
                Login
              </button>
            </div>
          </form>
        ) : (
          ""
        )} */}

        {/* Logical AND (&&) */}
        {openForm === true && (
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="border border-black p-3 rounded-lg bg-amber-100 w-[400px]"
          >
            <h2 className="font-merriweather font-bold text-center mb-6">
              Login
            </h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white p-2 rounded-md w-full"
              >
                Login
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }
  const users = ["Alice", "Charlie", "john", "Seyi"];

  return (
    <section className="">
      {/* <ul className="">
        {users.map((user)=> (
          <li>{user}</li>
        ))}
      </ul> */}
      <Navbar setIsLoggedin={setIsLoggedin} />
      {/* <Hero name={username} YOE={24} /> */}
      {/* <FormComponent /> */}
      <Count />
    </section>
  );
}

export default App;
