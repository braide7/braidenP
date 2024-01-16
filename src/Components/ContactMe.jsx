import { useForm, ValidationError } from '@formspree/react';

export default function ContactMe() {
    function ContactForm() {
        const [state, handleSubmit] = useForm("mqkradjl");
        if (state.succeeded) {
            return <p>Thanks for contacting me!</p>;
        }
        return (
            <form onSubmit={handleSubmit}>
                <p>
                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                </p>
                <p>
                <label htmlFor="message">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                </p>
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        );
    }
    return (
        <div id="contact-wrapper">
            <ContactForm />
            
        </div>
    );
}
