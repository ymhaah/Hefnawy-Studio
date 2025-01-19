function Loader() {
    let logo1 = "حَفْناوِيٍّ";
    // let logo1 = "حَ";
    let logo2 = "studio";
    return (
        <div
            className="Loader fixed w-full h-svh inset-0  z-[1000]"
            aria-live="assertive"
        >
            <div className="Container flex items-center justify-center">
                <div className="Logo logo_stage-1">
                    <h1 className="glitch" data-text={logo1}>
                        {logo1}
                    </h1>
                </div>
                {/* <div className="Logo logo_stage-2">
                    <h1 className="glitch" data-text={logo2}>
                        {logo2}
                    </h1>
                </div> */}
            </div>
        </div>
    );
}

// sْtُuْdِiُo | حَ

export default Loader;
