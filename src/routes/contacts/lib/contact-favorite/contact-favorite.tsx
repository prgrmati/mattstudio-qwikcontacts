import { component$, useSignal, useStylesScoped$ } from '@builder.io/qwik';
import CSS from './contact-favorite.css?inline';

export const ContactFavorite = component$(() => {
    useStylesScoped$(CSS);
    const favorite = useSignal<boolean>(false);

    return (
        <div role="button" class="favorite" onClick$={() => favorite.value = !favorite.value}>
            <img src={`/icons/${favorite.value ? 'heart-filled' : 'heart'}.png`} width="32" height="32" alt="Favorite" />
        </div>
    )
});