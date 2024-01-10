import { useState } from "react";
// import useNavigate from "react-router-dom";
function Login() {
  const [data, setData] = useState({
    name: "",
    number: "",
  });
  function handleInput(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
   console.log(data);
  }
  return (
    <>

        <div className="w-full  grid justify-items-center  pt-20 pl-30">
        <h1 className="text-4xl font-extrabold pb-6">SignIn Form</h1>
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleInput}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                value={data.email}
                onInput={handleInput}
                placeholder="Enter Your name"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="number"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="number"
                type="number"
                name="number"
                value={data.password}
                onInput={handleInput}
                placeholder="Enter number"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="subnit"
                onClick={handleSubmit}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
    </>
  );
}
export default Login;
