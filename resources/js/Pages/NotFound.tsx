import Layout from "@/Shared/Layout";
import { Head } from "@inertiajs/react";

export default function NotFound() {
  return (
    <Layout>
      <Head title="404 Not Found" />
      <div>Could not find the page you looking for</div>
    </Layout>
  );
}
