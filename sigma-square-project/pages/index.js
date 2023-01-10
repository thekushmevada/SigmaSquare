import HeaderMain from "../components/Header/HeaderMain";

import Footer from "../components/footer/Footer";
import ImgPagination from "../components/HomePage/ImgPagination";
import AboutPage from "../components/aboutPage/AboutPage";

export default function Home() {
  return (
    <>
      <HeaderMain />
      <ImgPagination />

      <AboutPage />
      <h1>
        <center>Kush was Here</center>
      </h1>

      <Footer />
    </>
  );
}
