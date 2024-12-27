function useRouter() {
    const [currentPath, setCurrentPath] = React.useState(window.location.hash.replace('#', '') || '/');

    React.useEffect(() => {
        try {
            const handleHashChange = () => {
                setCurrentPath(window.location.hash.replace('#', '') || '/');
            };

            window.addEventListener('hashchange', handleHashChange);
            if (!window.location.hash) {
                window.location.hash = '#/';
            }

            return () => window.removeEventListener('hashchange', handleHashChange);
        } catch (error) {
            reportError(error);
        }
    }, []);

    const navigate = (to) => {
        try {
            window.location.hash = to;
            setCurrentPath(to);
        } catch (error) {
            reportError(error);
        }
    };

    return { currentPath, navigate };
}
