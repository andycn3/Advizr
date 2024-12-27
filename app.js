function App() {
    const { currentPath } = useRouter();

    const getPage = () => {
        try {
            switch (currentPath) {
                case '/learn-more':
                    return <LearnMore />;
                case '/':
                    return <Home />;
                default:
                    return <Home />;
            }
        } catch (error) {
            reportError(error);
            return <Home />;
        }
    };

    return (
        <div data-name="app-container">
            <Header />
            <main>
                {getPage()}
            </main>
            <Footer />
        </div>
    );
}

try {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
} catch (error) {
    reportError(error);
}
