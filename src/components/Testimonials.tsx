import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Testimonial = {
    name: string;
    role: string;
    image: string;
    quote: string;
};

const testimonials: Testimonial[] = [
    {
        name: "Jonathan Yombo",
        role: "Software Engineer",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        quote: "Tailus is really extraordinary and very practical, no need to break your head. A real gold mine.",
    },
    {
        name: "Yves Kalume",
        role: "GDE - Android",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
        quote: "With no experience in webdesign I just redesigned my entire website in a few minutes with tailwindcss thanks to Tailus.",
    },
    {
        name: "Yucel Faruksahan",
        role: "Tailkits Creator",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
        quote: "Great work on tailfolio template. This is one of the best personal website that I have seen so far :)",
    },
    {
        name: "Anonymous author",
        role: "Doing something",
        image: "https://randomuser.me/api/portraits/men/8.jpg",
        quote: "I am really new to Tailwind and I want to give a go to make some page on my own. I searched a lot of hero pages and blocks online. However, most of them are not giving me a clear view or needed some HTML/CSS coding background to make some changes from the original or too expensive to have. I downloaded the one of Tailus template which is very clear to understand at the start and you could modify the codes/blocks to fit perfectly on your purpose of the page.",
    },
];

function Testimonials() {
    return (
        <section className="Testimonials w-full" aria-label="Testimonials">
            <div className="Container relative flex flex-col items-center justify-between gap-5">
                <div className="flex flex-col items-center text-center">
                    <h2 className="h2 fs-lg capitalize">
                        What people probably said about me
                    </h2>
                    <p className="p fs-bass md:max-w-[50ch]">
                        100% organic, hand-picked words from actual humans, Read
                        at your own risk — extreme kindness ahead.
                    </p>
                </div>
                <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <article
                            key={index}
                            className="rounded-lg border-8 border-border p-2"
                        >
                            <header className="mb-4 flex items-center justify-start gap-3">
                                <Avatar className="size-12">
                                    <AvatarImage
                                        alt={testimonial.name}
                                        src={testimonial.image}
                                        loading="lazy"
                                        width="150"
                                        height="150"
                                    />
                                    <AvatarFallback>ST</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <h3 className="font-medium">
                                        {testimonial.name}
                                    </h3>
                                    <small>{testimonial.role}</small>
                                </div>
                            </header>
                            <blockquote className="m-0">
                                <p className="p">{testimonial.quote}</p>
                            </blockquote>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;

// TODO: add the data to the testimonials array with some fake ones
