import Button from "@/components/Common/Button";
import SectionHeader from "@/components/Common/SectionHeader";
import Image from "next/image";
import { contacts } from "../Data";
import ContactCard from "./ContactCard";

const Contact = () => {
    return (
        <div className="bg-background-sec section-gap">
            <div className="container space-y-12 relative">
                <SectionHeader title="GET IN TOUCH WITH US" />
                <div className="grid md:grid-cols-[7fr_5fr] xl:grid-cols-2 gap-10 lg:gap-20">
                    <div className="relative z-[1] sm:ml-12 p-8 bg-background rounded-xl shadow space-y-4">
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
                        <div>
                            <Button className="mt-2 w-full">Submit</Button>
                        </div>
                    </div>
                    <div className="divide-y">
                        {contacts.map((contact, i) => (
                            <ContactCard key={i} contact={contact} />
                        ))}
                    </div>
                </div>
                <Image src="/assets/contact.png" alt="" className="absolute inset-0 hidden sm:block" width={400} height={400} />
            </div>
        </div>
    );
};

export default Contact;
