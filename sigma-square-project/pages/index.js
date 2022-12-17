import HeaderMain from "../components/Header/HeaderMain";

import Footer from "../components/footer/Footer";
import ImgPagination from "../components/HomePage/ImgPagination";
import AboutPage from "../components/aboutPage/AboutPage";
const Home = () => {
  return (
    <>
      <HeaderMain />
      <ImgPagination />
      <div className="-mt-10">
        <AboutPage />
      </div>
      <h1 className="text-9xl">Team Section vatsal mavani</h1>
      <Footer />
    </>
  );
};

export default Home;
