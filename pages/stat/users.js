import { useRouter } from "next/router";
import Link from "next/link";
import { loadPosts } from "../../lib/Fetch";
import Cardcall from "../../components/Cardcall";
export default function Disp({ data }) {
  return (
    <div className="back">
      <Link href="/">
        <button class="btn btn-light m-2">Go Back!</button>
      </Link>
      <Cardcall users={data.results} />
    </div>
  );
}

export async function getStaticProps() {
  // Fetch data from external API

  const data = await loadPosts();

  // Pass data to the page via props
  return { props: { data } };
}
