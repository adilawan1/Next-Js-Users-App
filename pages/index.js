import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Cor from "../components/cor";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Get Users</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Row className="back">
          <Col className="left pad-5">
            <h1 className="mainheading">
              WELCOME TO <span className="yellow">RANDOM</span>{" "}
              <span className="blue">USER</span> GENERATOR!
            </h1>
            <p className="mainp">
              Want to know about different people and cultures? You have come to
              the right place. Click on the button below to generate 50 random
              users and see their details
            </p>
            <Link href="/stat/users">
              <div>
                <button className="btn btn-light">See our Users!</button>
              </div>
            </Link>
          </Col>
          <Col xs={5} md={7}>
            <Cor />
          </Col>
        </Row>
      </main>
    </div>
  );
}
