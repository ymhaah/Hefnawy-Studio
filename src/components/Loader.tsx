function Loader() {
    let logo1 = "حَفْناوِيٍّ";
    let logo2 = "Studio";
    return (
        <div
            className="Loader fixed w-full h-svh inset-0  z-[1000]"
            aria-live="assertive"
        >
            <div className="Container flex items-center justify-center">
                <div className="loader_logo--1">
                    <h1 className="glitch" data-text={logo1}>
                        {logo1}
                    </h1>
                </div>
                {/* <div className="loader_logo--2" data-text={logo2}>
                    {logo2}
                </div> */}
            </div>
        </div>
    );
}

// sْtُuْdِiُo | حَ

export default Loader;
