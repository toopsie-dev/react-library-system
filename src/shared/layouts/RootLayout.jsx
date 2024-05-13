import Footer from "../partials/Footer";
import Header from "../partials/Header";

// eslint-disable-next-line react/prop-types
const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
