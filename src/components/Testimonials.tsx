import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Testimonial = {
    name: string;
    role: string;
    image: string;
    quote: string;
};

const testimonials: Testimonial[] = [
    {
        name: "Shubham Rakhecha",
        role: "CEO @Skyrekon | Blockchain & AI Solutions",
        image: "https://media.licdn.com/dms/image/v2/D5603AQHokULVyoz5zA/profile-displayphoto-scale_200_200/B56ZfneZ49GQAY-/0/1751935198529?e=1769040000&v=beta&t=SopnEm7lI7yFy0NiWV2OPoAo0V1L57s4hrQawMzf1iE",
        quote: "I had the pleasure of working with Youssef Hefnawy, a highly talented and reliable developer. He excels at understanding complex challenges and delivering clean, scalable, and efficient solutions. His technical expertise, attention to detail, and collaborative mindset made him a valuable asset to our project. I highly recommend him for any development role.",
    },
    {
        name: "Rukundo Aimé",
        role: "Software Engineer",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQH5mVPAHX0mCg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699876610431?e=1769040000&v=beta&t=ZjncAPGezuYdIgJeyP5IhoP8U9hIZYMolPozjmoZh_k",
        quote: "I had an excellent experience working with Youssef on my website. He was professional, communicative, and clearly understood my requirements. The project was delivered on time, within budget, and exceeded my expectations in both design and functionality. I highly recommend him.",
    },
    {
        name: "Pamela Jackson",
        role: "digital product designer",
        image: "https://media.licdn.com/dms/image/v2/C5103AQFUKLf3IUBdWw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516279675930?e=1769040000&v=beta&t=NHTebJm7aUHarTXQNGR50FV9roG-6x-R7eYpV49wbi4",
        quote: "I had the pleasure of working with Yusuf on a microsite project and was thoroughly impressed. He exceeded our performance standards, delivered a visually stunning and highly functional result, and met all deadlines. His professionalism, communication, and attention to detail made the entire process seamless.",
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
