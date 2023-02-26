import { useRouter } from "next/router";
import Link from "next/link";
import { loadPosts } from "../../lib/Fetch";
import Cardcall from "../../components/Cardcall";
import { useEffect, useState } from "react";
import Userdet from "../../components/userdet";

export default function Disp({ data }) {
  const router = useRouter();

  const [route, setRoute] = useState(router.query);
  useEffect(() => {
    setRoute(router.query);
  }, [router.query]);
  if (router.isFallback) return <h1>Loading</h1>;
  if (route.name == undefined)
    return (
      <div className="back">
        <Link href="/">
          <button className="btn btn-light m-2">Go Back!</button>
        </Link>
        <Cardcall users={data.results} />
      </div>
    );
  else return <Userdet title={route}> {console.log(route.name)}</Userdet>;
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps() {
  const data = await loadPosts();

  return { props: { data } };
}
