import Link from "next/link";

import Layout from "components/Layout/Layout";
import Button from "components/Button/Button";

export default function Custom404() {
  return (
    <Layout>
      <h2>404</h2>
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </Layout>
  );
}
