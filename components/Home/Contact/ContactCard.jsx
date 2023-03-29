const ContactCard = ({ contact }) => {
    const { icon, title, details } = contact;
    return (
        <div className="py-5 flex gap-4">
            {icon}
            <div className="space-y-0.5">
                <h2>{title}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default ContactCard;
