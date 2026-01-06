"use client";
import { useRef, FormEvent, useState } from "react";
import Button from "./ui/Button";

// import { Rocket } from "lucide-react";

import { toast } from "react-hot-toast";

const URL = "";

function Contact() {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const [submitMessage, setSubmitMessage] = useState<{
        message: string;
        error: boolean | undefined;
    }>({
        message: "Please enter your information to submit.",
        error: undefined,
    });

    function resetInput() {
        window.setTimeout(() => {
            if (nameRef.current) nameRef.current.value = "";
            if (emailRef.current) emailRef.current.value = "";
            if (messageRef.current) messageRef.current.value = "";
            setSubmitMessage({
                message: "Please enter your information to submit.",
                error: undefined,
            });
        }, 2000);
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const name = nameRef.current?.value.trim();
        const email = emailRef.current?.value.trim();
        const message = messageRef.current?.value.trim();

        if (!name && !email && !message) return;

        const formData = {
            Name: name,
            Email: email,
            Message: message,
        };

        // ? Convert form data to URL-encoded string
        const formDataString = new URLSearchParams(formData as any).toString();

        try {
            const response = await fetch(URL, {
                method: "POST",
                body: formDataString,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            if (response.ok) {
                resetInput();
                setSubmitMessage({
                    message: "Form submitted successfully.",
                    error: false,
                });
                toast.success("Form submitted successfully.", {
                    position: "bottom-right",
                    iconTheme: {
                        primary: "#000",
                        secondary: "#fff",
                    },
                });
            } else {
                toast.error(
                    "There was an error submitting the form. Please try again later."
                );
                throw new Error("Failed to submit the form.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitMessage({
                message:
                    "There was an error submitting the form. Please try again later.",
                error: true,
            });
        }
    }

    return (
        <section
            aria-labelledby="contact"
            className="Contact | my-32 w-full max-sm:mt-12"
        >
            {/* <div className="Container mb-10 flex flex-col items-center justify-center">
                <h1 className="h1 fs-xl mb-4 text-center">
                    Ready to elevate your online presence?
                </h1>
                <p className="p max-w-[57ch] text-center">
                    Clean design, smooth interactions, and scalable code —
                    crafted to turn your online presence into a powerful brand
                    asset.
                </p>
                <div className="mt-6 flex w-full justify-center gap-4 max-sm:flex-col">
                    <Button
                        className="btn-mono-dark"
                        as="a"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://freelancerprofilenuxt.mesh.prod.platform.usw2.upwork/freelancers/~01acd8e5370e5646aa?mp_source=share"
                    >
                        Start Bulding
                        <span className="ml-2 flex items-center">
                            <Rocket size={18} />
                        </span>
                    </Button>
                    <Button
                        className="btn-skeleton"
                        target="_blank"
                        rel="noopener noreferrer"
                        as="a"
                        href="https://calendly.com/ymhaah250/website-planning-consultation"
                    >
                        Book a Call
                    </Button>
                </div>
            </div> */}
            <h2 className="h1 fs-xl my-10 text-center">Contact Me</h2>
            <div className="mx-auto w-[20%] max-lg:w-[50%] max-sm:w-[90%]">
                <form id="main-htmlForm" method="POST" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label
                            htmlFor="input-name"
                            className="form-label required"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="Name"
                            id="input-name"
                            className="form-input focus"
                            placeholder="Name"
                            minLength={2}
                            maxLength={50}
                            autoComplete="given-name"
                            required
                            ref={nameRef}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label
                            htmlFor="input-email"
                            className="form-label required"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="Email"
                            id="input-email"
                            className="form-input focus"
                            placeholder="Email"
                            autoComplete="email"
                            required
                            minLength={6}
                            maxLength={80}
                            ref={emailRef}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label
                            htmlFor="Message"
                            className="form-label required"
                        >
                            Message
                        </label>
                        <textarea
                            name="Message"
                            id="Message"
                            className="form-input focus"
                            placeholder="Message"
                            required
                            maxLength={5000}
                            ref={messageRef}
                        />
                    </div>
                    <p
                        id="submit-message"
                        className={`small mt-2 ${
                            submitMessage.error === true
                                ? "error"
                                : submitMessage.error === false
                                  ? "success"
                                  : "waiting"
                        }`}
                    >
                        {submitMessage.message}
                    </p>
                    <Button
                        type="submit"
                        className="btn-mono-dark w-full"
                        id="form-submit-btn"
                    >
                        SUBMIT
                    </Button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
