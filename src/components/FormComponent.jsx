import { useState } from "react";

const FormComponent = () => {
    const [newsletter, setNewsletter] = useState("")
  return (
    <div className="my-6 px-6">
      <form className="">
        <label htmlFor="newsletter">News letter</label><br />
        <input
          type="text"
          name="newsletter"
          id="newsletter"
          placeholder="Please enter you newletter"
          className="border border-black py-2 px-4 rounded-md"
          onChange={(e)=>setNewsletter(e.target.value)}
        />
      </form>
    </div>
  );
};

export default FormComponent;
