// import Image from "next/image";
import Loader from "../components/Loader/Loader";

export default function Home() {
    return (
        <main className="h-[500vh] w-full">
            <Loader />
            <div className="Container"></div>
        </main>
    );
}

// TODO: loader
