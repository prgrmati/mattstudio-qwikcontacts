import { component$, useSignal, useStylesScoped$ } from '@builder.io/qwik';
import { Call } from '~/data/contacts';
import CSS from './contact-calls.css?inline';

export const ContactCalls = component$((props: { calls: Call[] }) => {
    useStylesScoped$(CSS);
    const previousActive = useSignal<boolean>(false);

    return (
        <div class="contact-calls">
            <h4>Recent calls</h4>
            {
                props.calls.slice(0, 2).map((call) => {
                    return <div class="single-call" key={call.id}>
                        <div>
                            <span>{call.time}</span>
                        </div>
                        <div class="call-type">
                            <span>{call.type}</span>
                            <span>{call.duration}</span>
                        </div>
                    </div>
                })
            }
            {
                previousActive.value && props.calls.slice(2).map((call, id) => {
                    return <div class="single-call" key={call.id}>
                        <div>
                            <span>{call.time}</span>
                        </div>
                        <div class="call-type">
                            <span>{call.type}</span>
                            <span>{call.duration}</span>
                        </div>
                    </div>
                })
            }

            <button class="btn" onClick$={() => previousActive.value = !previousActive.value}>{previousActive.value ? 'Hide' : 'Previous'}</button>
        </div>
    )
});