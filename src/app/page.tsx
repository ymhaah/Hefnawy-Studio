// import Image from "next/image";
import Loader from "../components/Loader";
import { Button } from "@ui/Button";

export default function Home() {
    return (
        <main className="h-[500vh] w-full">
            <Loader />
            <div className="Container">
                <Button>test</Button>
            </div>
        </main>
    );
}

// TODO: loader
