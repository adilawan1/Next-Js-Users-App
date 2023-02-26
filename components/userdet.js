import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Userdet({ title }) {
  return (
    <div className="d-flex justify-content-center pad-5 back">
      <div className="row">
        <div className="col">
          <div className="pad-5 text-left det">
            <h1>
              DETAILS OF THE REQUESTED <span className="blue">USER</span>
            </h1>
            <h6 className="ptop-5">
              The name of the requested user is {title.name}.
            </h6>
            <h6>
              {" "}
              He lives in the city of {title.city} in {title.country}.
            </h6>
            <h6> This user currently is {title.age} years old.</h6>

            <h2 className="ptop-5 yellow"> Account Details:</h2>
            <h6 className="ptop-5">User Name: {title.uname}</h6>
            <h6>User Id: {title.uuid} </h6>
            <h6>Registration date: {title.reg}</h6>
          </div>
        </div>
        <div className="col-sm-5">
          <Card className="indcard">
            <Card.Body>
              <Image
                src={title.pic}
                alt="Image"
                layout="responsive"
                width={"100%"}
                height={"100%"}
              ></Image>
              <Card.Title> {title.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {title.id}
              </Card.Subtitle>
              <Card.Text>Cell: {title.cell}</Card.Text>
              <Card.Text>Phone: {title.phone}</Card.Text>
              <Card.Text>email: {title.email}</Card.Text>
              <Link href="/">
                <Button className="btn btn-light">Go to home</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
