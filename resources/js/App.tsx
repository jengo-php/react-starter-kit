import { createInertiaApp } from "@inertiajs/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const pages = (require as any).context("./Pages", true, /\.tsx$/);

createInertiaApp({
  resolve: (name) => {
    const pagePath = `./${name}.tsx`;
    if (!pages.keys().includes(pagePath)) {
      return pages("./NotFound.tsx").default;
    }
    return pages(pagePath).default;
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <StrictMode>
        <App {...props} />
      </StrictMode>
    );
  },

  title: (title) => `Jengo React Starter Kit - ${title}`,
});
