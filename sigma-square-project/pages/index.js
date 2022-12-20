import HeaderMain from "../components/Header/HeaderMain";

import Footer from "../components/footer/Footer";
import ImgPagination from "../components/HomePage/ImgPagination";
import AboutPage from "../components/aboutPage/AboutPage";

const Home = () => {
  return (
    <>
      <HeaderMain />
      <ImgPagination />
      <AboutPage />
      <h1 className="text-5xl">New</h1>
      <Footer />
    </>
  );
};

export default Home;
