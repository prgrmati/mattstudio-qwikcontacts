
import { component$, useSignal, useStylesScoped$ } from '@builder.io/qwik';
import { Contact } from '~/data/contacts';
import CSS from './contact-card.css?inline';
import { ContactNote } from '../contact-note/contact-note';
import { ContactCalls } from '../contact-calls/contact-calls';
import { ContactFavorite } from '../contact-favorite/contact-favorite';

export const ContactCard = component$<Contact>((props) => {
    useStylesScoped$(CSS);

    return (
        <>
            <div class="contact-card">
                <div>
                    <img src="/icons/person.png" alt="Contact" width="64" height="64" />
                </div>
                <div class="details-content">
                    <div class="single-col">
                        <div class="top-heading">
                            <ContactFavorite />
                            <h4>{props.name} ({ props.phone })</h4>
                        </div>
                        <div class="notes">
                            <ContactNote notes={props.notes} />
                        </div>
                    </div>
                    <div class="single-col">
                        <ContactCalls calls={props.calls} />
                    </div>
                </div>
            </div>
        </>
    );
});
