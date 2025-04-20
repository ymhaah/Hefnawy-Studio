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
            className="Loading fixed inset-0 z-[1000] h-svh w-full"
            role="status"
            aria-live="polite"
            aria-label="Hefnawy Studio Loading Screen"
        >
            <div className="Container relative py-5">
                <div className="flex w-full items-center justify-start">
                    <h1 aria-hidden="true" className="Logo logo_main">
                        حَفْناوِيٍّ
                    </h1>
                    <span className="sr-only">hefnawy studio</span>
                </div>
                <div className="absolute inset-0 flex h-full w-full items-center justify-center">
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
