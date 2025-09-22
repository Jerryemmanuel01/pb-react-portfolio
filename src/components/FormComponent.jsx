import { useState } from "react";

const FormComponent = () => {
  const [newsletter, setNewsletter] = useState("");
  const [toggleBg, setToggleBg] = useState(false);
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="my-6 px-6">
      <form className="">
        <label htmlFor="newsletter">News letter</label>
        <br />
        <input
          type="text"
          name="newsletter"
          id="newsletter"
          placeholder="Please enter you newletter"
          className="border border-black py-2 px-4 rounded-md"
          onChange={(e) => setNewsletter(e.target.value)}
        />
        <div>
          <label htmlFor="email">email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Please enter you newletter"
            className="border border-black py-2 px-4 rounded-md"
            onChange={(e) =>
              setFormInputs({
                ...FormComponent,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <p>{formInputs.email}</p>
      </form>

      <div
        style={{
          marginTop: "10px",
          // backgroundColor: toggleBg? "green":"red",
          padding: "20px",
          borderRadius: toggleBg? "30px": "80px",
        }}
        className="testing-bg"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui earum
        veritatis iusto quisquam id neque ullam veniam ut vero perspiciatis
        sapiente dolores, blanditiis eos doloribus eligendi illo? Id, est unde.
      </div>
      <button
        className="border border-black p-2 rounded-md mt-4"
        onClick={() => setToggleBg((prev) => !prev)}
      >
        Togggle background{" "}
      </button>
    </div>
  );
};

export default FormComponent;
