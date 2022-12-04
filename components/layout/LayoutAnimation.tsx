import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const LayoutAnimation: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default LayoutAnimation;
