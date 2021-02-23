import Navbar from '../Navbar';

type LayoutProps = {
    children?: React.ReactChild;

}
export default function Layout({children}: LayoutProps) {
    return (
        <div className="container">
            <Navbar />
            <main>{children}</main>
            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                }
                main {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }
            `}</style>
        </div>
    );
}
