import "./styles.css";
import { PEOPLE } from "./people";
import { useState } from "react";

export default function App(this: any) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="App">
        <h1>
          Deepstash Challenge{" "}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </h1>
      </div>

      <h3 className="title">
        Test for the internship
        <h4> by Antonel Gheorghe </h4>
      </h3>

      <div>
        <input
          className="search"
          type="text"
          placeholder="Search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <input
          type="checkbox"
          /* onClick= Function that filters the list by ( person.bio != null )*/
        />
        Show only people with bio
        <p>
          Reacted with:{" "}
          <span role="img" aria-label="emoji">
            "💡"
          </span>
        </p>
      </div>

      <div className="list">
        {PEOPLE.filter((person) => {
          if (searchTerm === "") {
            return person;
          } else if (
            person.firstName.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return person;
          } else if (
            person.bio != null &&
            person.bio.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return person;
          }
        }).map((person) => {
          if (person.reaction === "💡") {
            return (
              <>
                <div className="box">
                  <p className="people">
                    <img alt="" className="image" src={person.image} />
                    {"  " + person.firstName + " " + person.lastName}
                  </p>
                  <p>{person.bio}</p>
                </div>
              </>
            );
          }
        })}
        <p>
          Reacted with:
          <span role="img" aria-label="emoji">
            "🥶"
          </span>
        </p>
        {PEOPLE.filter((person) => {
          if (searchTerm === "") {
            return person;
          } else if (
            person.firstName.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return person;
          } else if (
            person.bio != null &&
            person.bio.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return person;
          }
        }).map((person) => {
          if (person.reaction === "🥶") {
            return (
              <>
                <div className="box">
                  <p className="people">
                    <img alt="" className="image" src={person.image} />
                    {"  " + person.firstName + " " + person.lastName}
                  </p>
                  <p>{person.bio}</p>
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
}
