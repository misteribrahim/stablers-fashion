import { useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import TopHeader from "../../components/top-header";
import Seo from "../../Seo/Seo";
import ReviewsBar from "../../components/reviews";

const MainLayout = ({ children }) => {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen((prevState) => !prevState);
  };
  return (
    <div className={`wrapper ${isNavOpen ? 'nav-active' : ''}`}>
      <Seo />
      <TopHeader />
      <Header onNavToggle={handleNavToggle} current={isNavOpen}/>
      <main>{children}</main>
      <ReviewsBar/>
      <Footer />
    </div>
  );
};

export default MainLayout;
