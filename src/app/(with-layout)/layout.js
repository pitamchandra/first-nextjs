import Navbar from "@/component/Navbar";


const WithLayout = ({ children }) => {
    return (
        <>
            <Navbar></Navbar>
            {children}
            <footer>footer area</footer>
        </>
    );
};

export default WithLayout;