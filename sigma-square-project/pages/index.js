import HeaderMain from "../components/Header/HeaderMain";

import Footer from "../components/footer/Footer";
import ImgPagination from "../components/HomePage/ImgPagination";
import AboutPage from "../components/aboutPage/AboutPage";

export default function Home()  {
  return (
    <>
      <HeaderMain />
      <ImgPagination />

      
      <AboutPage />
      <div>
      <h1> Registraion </h1>
      <form action="/api/register" method="post">
        <label>
          EMail Address
        </label>
        <input type='email' name='email' placeholder='Type your email'></input>
        <label>
          Pasword
        </label>
        <input type='password' name='password' placeholder='Type your password'></input>
        <input type='submit' value='Register'></input>

      </form>

      <h1>Login</h1>
      <form action="/api/login" method="post">
        <label>
          EMail Address
        </label>
        <input type='email' name='email' placeholder='Type your email'></input>
        <label>
          Pasword
        </label>
        <input type='password' name='password' placeholder='Type your password'></input>
        <input type='submit' value='Login'></input>

      </form>
    </div>

      <Footer />
    </>
  );
};


