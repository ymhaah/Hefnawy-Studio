import { ReactNode } from "react";

/**
 * LoadingScreen Component
 *
 * A full-screen loading indicator for Hefnawy Studio.
 * It includes an animated glitch effect on the word "studio".
 *
 * @returns {ReactNode} The main loading screen component.
 */
function LoadingScreen(): ReactNode {
    return (
        <section
            className="Loading fixed w-full h-svh inset-0 z-[1000]"
            role="status"
            aria-live="polite"
            aria-label="Hefnawy Studio Loading Screen"
        >
            <div className="Container py-5 relative">
                <div className="w-full flex justify-start items-center">
                    <h1 aria-hidden="true" className="Logo logo_main">
                        حَفْناوِيٍّ
                    </h1>
                    <span className="sr-only">hefnawy studio</span>
                </div>
                <div className="absolute inset-0 w-full h-full flex justify-center items-center">
                    <h1
                        className="glitch Logo logo_studio"
                        data-text="studio"
                        aria-hidden="true"
                    >
                        studio
                    </h1>
                </div>
            </div>
            <p className="sr-only">Loading, please wait</p>
        </section>
    );
}

export default LoadingScreen;
