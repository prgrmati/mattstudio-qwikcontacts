import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead, RequestHandler, routeLoader$ } from "@builder.io/qwik-city";
import { CONTACTS, Contact } from "~/data/contacts";
import { ContactCard } from './lib/contact-card/contact-card';
import CSS from './contacts.css?inline';

// export const onGet: RequestHandler = async ({ json }) => {
//     json(200, { CONTACTS });
//   };

export const useContactsList = routeLoader$(async (requestEvent) => {
    // This code runs only on the server, after every navigation
    return CONTACTS as Contact[];
  });

export default component$(() => {
    useStylesScoped$(CSS);
const singalContacts = useContactsList();

  return (
    <>
      <div class="contacts-wrapper">
        <h2>Contact List</h2>
        { singalContacts.value.map((contact) => {
            return <ContactCard key={contact.id} {...contact} />
        })}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Contacts List",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
