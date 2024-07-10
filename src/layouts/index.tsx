import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

interface childProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: childProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
