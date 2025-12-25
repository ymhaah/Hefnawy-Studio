import Ballpit from "@comp/Ballpit";

function CoolThing1() {
    return (
        <section
            className="CoolThing1 | relative flex h-[60vh] w-full items-center justify-center"
            aria-label="play with my Balls"
        >
            <div className="shadow-3xl h-[90%] w-[75%] overflow-hidden rounded-[2rem] bg-white max-sm:w-[90%]">
                <Ballpit
                    count={200}
                    gravity={0.2}
                    friction={0.8}
                    wallBounce={1}
                    followCursor={false}
                    colors={[
                        "hsl(232, 79%, 59%)",
                        "hsl(231, 65%, 51%)",
                        "hsl(210, 5%, 92%)",
                        "hsl(192, 3%, 61%)",
                        "hsl(225, 7%, 12%)",
                    ]}
                    ambientColor={0xffffff}
                />
            </div>
        </section>
    );
}

export default CoolThing1;
