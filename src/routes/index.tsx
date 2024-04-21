import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <main>
      <h1>Hey There, Friend! 👋</h1>
      <p>Dive into the future of web development with <a href="https://qwik.dev/" target="_blank"><strong>Qwik</strong></a>.</p>
      <p>
        In Qwik it's all about getting you what you need, right when you need it, by smartly loading <strong>only the necessary bits of JavaScript</strong>.
        Qwik isn't just about fast loading times. It's about reshaping how you interact with web apps. <strong>It smartly loads only what's necessary</strong>, ensuring that every click, swipe, and tap is met with instant response.
      </p>
      <p>
        The contacts demo is just the start. It's a glimpse into a world where efficiency and speed harmonize.
      </p>
      <p>
        To see the magic of Qwik in action, open your browser's developer console, switch to the Network tab, and interact with the "heart" icon or any buttons on the page. </p>
      <p>
        <strong>Notice how Qwik delivers the JavaScript exactly when you need it</strong> - not a moment sooner or later. This just-in-time loading is what sets Qwik apart, ensuring your experience is as smooth and efficient as possible.
      </p>
      <nav>
        <a href="/contacts" class="start-btn">Dive into Contacts Demo</a>
        <a href="https://mattstudio.pl/" target="_blank"><strong>mattstudio.pl</strong></a>
      </nav>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik Contact Page Demo",
    }
  ]
};
