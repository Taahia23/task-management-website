import Banner from "./Banner";
import ExtraSection from "./ExtraSection";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <ExtraSection></ExtraSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;