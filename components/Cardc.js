import React from "react";
import Card from "react-bootstrap/Card";
import Link from "next/link";
export default function Cardc(props) {
  return (
    <div>
      <Card className="indcard">
        <Card.Body>
          <Card.Title className="Name">
            {props.user.name.first} {props.user.name.last}
          </Card.Title>
          <Card.Text>Click on the button below for more details.</Card.Text>
          <Link
            href={{
              pathname: `/stat/users/${props.user.id.value}`,
              query: {
                name: `${props.user.name.first} ${props.user.name.last}`,
                id: `${props.user.id.name} ${props.user.id.value}`,
                email: `${props.user.email}`,
                phone: `${props.user.phone}`,
                cell: `${props.user.cell}`,
                pic: `${props.user.picture.large}`,
                country: `${props.user.location.country}`,
                city: `${props.user.location.city}`,
                age: `${props.user.dob.age}`,
                dob: `${props.user.dob.date}`,
                uname: `${props.user.login.username}`,
                uuid: `${props.user.login.uuid}`,
                reg: `${props.user.registered.date}`,
              },
            }}
            as={`/stat/users/${props.user.id.value}`}
          >
            <button className="btn btn-light">See Details</button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
