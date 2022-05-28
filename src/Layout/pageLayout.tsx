import Header from "../Components/Header/header";
import "./pageLayout.scss";

interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <>
            <Header />
            <main className="container">{children}</main>
        </>
    );
};
export default PageLayout;
