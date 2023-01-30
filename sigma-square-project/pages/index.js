import HeaderMain from "../components/Header/HeaderMain";

import Footer from "../components/footer/Footer";
import ImgPagination from "../components/HomePage/ImgPagination";
import AboutPage from "../components/aboutPage/AboutPage";
import Card from "../components/Card/Card";

export default function Home() {
  return (
    <>
      <HeaderMain />
      <ImgPagination />
      <AboutPage />
      <Card />
      <Footer />
    </>
  );
}
