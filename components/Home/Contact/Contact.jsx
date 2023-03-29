import Arrow from "@/components/Common/Arrow";
import Image from "next/image";
import React from "react";
import ContactCard from "./ContactCard";
import { contacts } from "./Data";

const Contact = () => {
    return (
        <div className="bg-background-sec section-gap">
            <div className="container space-y-12 relative">
                <h1 className="text-center">
                    GET IN TOUCH WITH US <Arrow />
                </h1>
                <div className="grid grid-cols-2 gap-20">
                    <div className="relative z-[1] ml-12 p-8 bg-background rounded-xl shadow space-y-4">
                        <h3>Tell us about your inquiry and we’ll get back to you shortly.</h3>
                        <div className="flex flex-col gap-1">
                            <label>Complete Name</label>
                            <input type="text" placeholder="Complete Name" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label>Email Address</label>
                            <input type="email" placeholder="Email Address" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label>Message</label>
                            <textarea rows={3} placeholder="Brief info about your inquiry"></textarea>
                        </div>
                    </div>
                    <div className="divide-y">
                        {contacts.map((contact, i) => (
                            <ContactCard key={i} contact={contact} />
                        ))}
                    </div>
                </div>
                <Image src="/assets/contact.png" alt="" className="absolute inset-0" width={400} height={400} />
            </div>
        </div>
    );
};

export default Contact;
