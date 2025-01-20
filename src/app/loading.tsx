function LoadingScreen() {
    return (
        <div
            className="Loading fixed w-full h-svh inset-0 z-[1000]"
            role="status"
            aria-live="polite"
        >
            <div className="Container relative">
                <div className="Logo logo_main w-full py-3 flex justify-start items-center">
                    <h1 aria-hidden="true">حَفْناوِيٍّ</h1>
                    <span className="sr-only">hefnawy studio</span>
                </div>
                <div className="Logo logo_studio absolute inset-0 w-full h-full flex justify-center items-center">
                    <h1
                        className="glitch"
                        data-text="studio"
                        aria-hidden="true"
                    >
                        studio
                    </h1>
                </div>
            </div>
            <p className="sr-only">Loading, please wait</p>
        </div>
    );
}

export default LoadingScreen;
