import Layout from "@/Shared/Layout";
import { Head } from "@inertiajs/react";

export default function Home() {
  return (
    <Layout>
      <Head title="Welcome" />

      <div className="max-w-3xl mx-auto mt-10">
        <div className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body space-y-4">
            <h2 className="card-title text-3xl">
              🎉 Welcome to{" "}
              <span className="text-primary">Jengo React Starter Kit</span>
            </h2>

            <p>
              You're now running a modern full-stack app powered by{" "}
              <span className="badge badge-primary">CodeIgniter 4</span>,{" "}
              <span className="badge badge-accent">React</span>, and{" "}
              <span className="badge badge-secondary">Inertia.js</span>.
            </p>

            <div className="alert alert-info">
              <span>Ready to start building? Here’s where to look:</span>
            </div>

            <ul className="list-disc list-inside pl-2 space-y-1">
              <li>
                <code className="text-sm text-success">
                  resources/js/Pages/Home.tsx
                </code>{" "}
                – this page
              </li>
              <li>
                <code className="text-sm text-success">
                  app/Controllers/HomeController.php
                </code>{" "}
                – backend controller
              </li>
            </ul>

            <p>
              Everything's wired up. Tailwind and DaisyUI are pre-installed, so
              you're ready to go! 🚀
            </p>

            <div className="card-actions justify-end pt-4">
              <a
                href="https://github.com/gilads-otiannoh24/jengo-core"
                target="_blank"
                className="btn btn-sm btn-outline"
              >
                Visit Jengo on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
