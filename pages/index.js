import HeaderMain from "../components/Header/HeaderMain";

import Footer from "../components/footer/Footer";
import ImgPagination from "../components/HomePage/ImgPagination";
import AboutPage from "../components/aboutPage/AboutPage";
import Card from "../components/Card/Card";

export default function Home() {

 // const data = fetch("/api/hello").then((res)=>res.json).then((data)=>data);

 // console.log(data);
  return (
    <>
    
      <HeaderMain />
      <ImgPagination />
      <AboutPage />
      <Card />
      {/* <div>
      
      <form action="/api/adminRegister" method="post">
      
        <center>
        <h1> Registraion </h1>
        <label>
          EMail Address
        </label>
        <br></br>
        <input type='text' name='username' placeholder='Type your email'></input>
        <br></br>
        <label>
          Pasword
        </label>
        <br></br>
        <input type='password' name='password' placeholder='Type your password'></input>
        <br></br>
        <input type='submit' value='Register'></input>
        </center>

      </form>
      </div> */}
      <Footer />
    </>
  );
}
