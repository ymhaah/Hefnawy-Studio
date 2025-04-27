import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

import WorldMap from "@ui/WorldMap";

type Testimonial = {
    name: string;
    role: string;
    image: string;
    quote: string;
    location: {
        lat: number;
        lng: number;
        label: string;
    };
};

const testimonials: Testimonial[] = [
    {
        name: "Jonathan Yombo",
        role: "Software Engineer",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        quote: "Tailus is really extraordinary and very practical, no need to break your head. A real gold mine.",
        location: {
            lat: 38.9072,
            lng: -77.0369,
            label: "Washington, DC",
        },
    },
    {
        name: "Yves Kalume",
        role: "GDE - Android",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
        quote: "With no experience in webdesign I just redesigned my entire website in a few minutes with tailwindcss thanks to Tailus.",
        location: {
            lat: -1.9403,
            lng: 29.8739,
            label: "Rwanda",
        },
    },
    {
        name: "Yucel Faruksahan",
        role: "Tailkits Creator",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
        quote: "Great work on tailfolio template. This is one of the best personal website that I have seen so far :)",
        location: {
            lat: 26.2389,
            lng: 73.0243,
            label: "Jodhpur, India",
        },
    },
    {
        name: "Jonathan Yombo",
        role: "Software Engineer",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        quote: "Tailus is really extraordinary and very practical, no need to break your head. A real gold mine.",
        location: {
            lat: 38.9072,
            lng: -77.0369,
            label: "Washington, DC",
        },
    },
    {
        name: "Yves Kalume",
        role: "GDE - Android",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
        quote: "With no experience in webdesign I just redesigned my entire website in a few minutes with tailwindcss thanks to Tailus.",
        location: {
            lat: -1.9403,
            lng: 29.8739,
            label: "Rwanda",
        },
    },
    {
        name: "Yucel Faruksahan",
        role: "Tailkits Creator",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
        quote: "Great work on tailfolio template. This is one of the best personal website that I have seen so far :)",
        location: {
            lat: 26.2389,
            lng: 73.0243,
            label: "Jodhpur, India",
        },
    },
    {
        name: "Jonathan Yombo",
        role: "Software Engineer",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        quote: "Tailus is really extraordinary and very practical, no need to break your head. A real gold mine.",
        location: {
            lat: 38.9072,
            lng: -77.0369,
            label: "Washington, DC",
        },
    },
    {
        name: "Yves Kalume",
        role: "GDE - Android",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
        quote: "With no experience in webdesign I just redesigned my entire website in a few minutes with tailwindcss thanks to Tailus.",
        location: {
            lat: -1.9403,
            lng: 29.8739,
            label: "Rwanda",
        },
    },
    {
        name: "Yucel Faruksahan",
        role: "Tailkits Creator",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
        quote: "Great work on tailfolio template. This is one of the best personal website that I have seen so far :)",
        location: {
            lat: 26.2389,
            lng: 73.0243,
            label: "Jodhpur, India",
        },
    },
];

const chunkArray = (
    array: Testimonial[],
    chunkSize: number
): Testimonial[][] => {
    const result: Testimonial[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
};

const testimonialChunks = chunkArray(
    testimonials,
    Math.ceil(testimonials.length / 3)
);

export default function WallOfLoveSection() {
    return (
        <section className="Testimonials w-full" aria-label="Testimonials">
            <div className="Container relative flex flex-col items-center justify-between py-5">
                <div className="text-center">
                    <h2 className="h2 fs-lg capitalize">
                        Loved by the community
                    </h2>
                    <p className="p fs-bass md:max-w-[50ch]">
                        Harum quae dolore orrupti aut temporibus ariatur. Harum
                        quae dolore orrupti aut temporibus ariatur.
                    </p>
                </div>
                <WorldMap
                    dots={testimonials.map((testimonial) => ({
                        start: {
                            lat: 13.7563,
                            lng: 31.4913182,
                            label: "Cairo, Egypt",
                        },
                        end: {
                            lat: testimonial.location.lat,
                            lng: testimonial.location.lng,
                            label: testimonial.location.label,
                        },
                    }))}
                    className="max-md:w-[200%]"
                />
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonialChunks.map((chunk, chunkIndex) => (
                        <div key={chunkIndex} className="space-y-3">
                            {chunk.map(
                                ({ name, role, quote, image }, index) => (
                                    <Card key={index}>
                                        <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                                            <Avatar className="size-9">
                                                <AvatarImage
                                                    alt={name}
                                                    src={image}
                                                    loading="lazy"
                                                    width="120"
                                                    height="120"
                                                />
                                                <AvatarFallback>
                                                    ST
                                                </AvatarFallback>
                                            </Avatar>

                                            <div>
                                                <h3 className="h4 fs-base m-0">
                                                    {name}
                                                </h3>

                                                <span className="p fs-base m-0 block">
                                                    {role}
                                                </span>

                                                <blockquote className="mt-3 max-md:mx-1">
                                                    <p className="p fs-base">
                                                        {quote}
                                                    </p>
                                                </blockquote>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// TODO: fix the card design
// TODO: make the map look cool
// TODO: add some fake data to the testimonials array
