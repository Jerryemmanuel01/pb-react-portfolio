import axios from "axios";
import { useState, useEffect } from "react";
import { PiSpinner } from "react-icons/pi";
import { toast } from "react-toastify";

const Count = () => {
  const [count, setCount] = useState(0);
  const [retry, setRetry] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("Tick...");
  //   }, 1000);

  //   return () => clearInterval(timer); // cleanup when component unmounts
  // }, []);
  console.log( typeof users);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(typeof data)
    //     toast.success("User fetch successfully");
    //     setUsers(data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     toast.error("Error getting users");
    //     setLoading(false);
    //   });

    // USING AXIOS FOR API REQUESTS
    //HTTP 
    //GET
    //POST
    //PUT
    //PATCH
    //DELETE

    axios.post("https://jsonplaceholder.typicode.com/posts/1", "").then((res) => {
      console.log(res.data);
      toast.success("User fetch successfully");
      setUsers(res.data);
      setLoading(false);
    });
  }, []);

  console.log(users);

  if (loading) {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <PiSpinner className="animate-spin text-2xl" />
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="my-10 px-6">
      <p>{count}</p>
      <button
        className="border-2 border-black p-2 rounded-xl"
        onClick={() => setCount((prev) => prev + 1)}
        onDoubleClick={() => {
          alert("double click function executed");
        }}
      >
        Increase count +1
      </button>
      <br />
      <br />
      <button
        onClick={() => setRetry((prev) => !prev)}
        className="border-2 border-black p-2 rounded-xl"
      >
        Retry
      </button>
      <div className="border border-black">
        <table className=" mt-4 w-full">
          <thead className="">
            <tr>
              <th className="px-4">#</th>
              <th className="px-4">Name</th>
              <th className="px-4">Email</th>
              <th className="px-4">Phone</th>
              <th className="px-4">City</th>
              <th className="px-4">Zipcode</th>
              <th className="px-4">Company</th>
            </tr>
          </thead>
          <tbody>
            {users instanceof Array &&
              users?.map((user, i) => (
                <tr>
                  <td className="px-4">{user?.id}</td>
                  <td className="px-4">{user?.name || user?.title}</td>
                  <td className="px-4">{user?.email}</td>
                  <td className="px-4">{user?.phone}</td>
                  <td className="px-4">{user?.address?.city}</td>
                  <td className="px-4">{user?.address?.zipcode}</td>
                  <td className="px-4">{user?.company?.name}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {users.length < 1 && (
          <p className="text-center mt-3 font-bold">No user found</p>
        )}
      </div>
    </div>
  );
};

export default Count;
