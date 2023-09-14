import { useState } from "react";
const emailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function App() {
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);
  const [emailError, setEmailError] = useState("");

  const resetValidation = (e) => {
    e.target.setCustomValidity("");
    setShowError(false);
    setEmailError("");
  };
  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setEmail(value);
    if (value.length === 0) {
      resetValidation(e);
      return;
    }
    if (!emailRegex.test(value)) {
      e.target.setCustomValidity("Debe ser mayor a 5 caracteres");
      setEmailError("Please verify your email");
      setShowError(true);
    } else {
      resetValidation(e);
    }
  };
  return (
    <main className="font-secondary bg-charcoal flex justify-between flex-col min-h-screen items-center ">
      <header></header>
      <section className="bg-white flex lg:gap-x-10 gap-x-6 p-7 rounded-3xl justify-center mx-10">
        <div className="my-auto px-8">
          <h1 className="font-primary text-5xl text-dark mb-5">
            Stay updated!
          </h1>
          <h4>Join 60,000+ product managers receiving monthly updates on:</h4>
          <ul className="flex flex-col gap-y-3 list-inside list-image-[url(../assets/images/icon-list.svg)] mb-10">
            <li className="mt-5">
              Product discovery and building what matters
            </li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more! </li>
          </ul>
          <div className="flex justify-between items-center">
            <h3 className="font-primary">Email address</h3>
            {showError ? (
              <span className="text-primary font-bold text-sm">
                {emailError}
              </span>
            ) : (
              ""
            )}
          </div>
          <form>
            <input
              value={email}
              onChange={handleChange}
              className="border-gray-300 border px-3 py-4 w-full rounded-md mt-2 mb-8 text-sm shadow-sm placeholder-gray-400 placeholder:px-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 invalid:border-primary invalid:text-pink-600 focus:invalid:ring-primary focus:invalid:border-primary invalid:bg-primary/20"
              type="text"
              name="subscribe"
              placeholder="email@company.com "
            />
            <div className="group w-full relative">
              <button
                className="rounded-lg bg-dark text-white px-4 py-4 w-full"
                type="submit"
              >
                Subscribe to a monthly newsletter
              </button>
              <span className="absolute left-0 w-0 bottom-0 h-2 bg-primary group-hover:w-full transition-all"></span>
            </div>
          </form>
        </div>
        <div>
          <img
            className="w-full object-cover h-full rounded-2xl"
            src="../assets/images/illustration-sign-up-desktop.svg"
            alt="Ilustraction of signup"
          />
        </div>
      </section>
      <footer className="bg-gray-600 text-primary w-full flex justify-center h-8 items-center  ">
        Challenge by
        <span>
          <a
            className="ms-2"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
        </span>
        . Coded by
        <a className="font-bold ms-2" href="#">
          Dario Mansilla
        </a>
        .
      </footer>
    </main>
  );
}

export default App;
