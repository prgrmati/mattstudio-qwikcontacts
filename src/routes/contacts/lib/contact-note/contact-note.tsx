import { component$, useSignal, useStylesScoped$ } from '@builder.io/qwik';
import { Notes } from '~/data/contacts';
import CSS from './contact-note.css?inline';
 
export const ContactNote = component$((props: { notes: Notes[] }) => {
    useStylesScoped$(CSS);
    const oldestsActive = useSignal<boolean>(false);

  return (
    <>
        <div class="contact-note">
            <div class="newest-note">
                <img src="/icons/note.png" width="32" height="32" alt="Favorite" />
                <p>
                    { props.notes.at(0)?.content}
                </p>
                <button class="btn" onClick$={() => oldestsActive.value = !oldestsActive.value}>{ oldestsActive.value ? 'Hide' : 'See more' }</button>
            </div>
            { oldestsActive.value && <div class="oldests">
                <ul>
                    {props.notes.map((note) => {
                        return (
                            <li key={note.id}><span>{ note.content }</span></li>
                        )
                    })}
                </ul>
            </div>
            }
        </div>
    </>
  )
});