import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  let is = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Emma",
    "Frank",
    "Grace",
    "Hannah",
    "Isaac",
    "Julia",
    "Kevin",
    "Lily",
    "Mike",
    "Nina",
    "Oscar",
    "Paula",
    "Quinn",
    "Rachel",
    "Sam",
    "Tina",
    "Umar",
    "Vera",
    "Will",
    "Xena",
    "Yara",
    "Zane",
    "Aaron",
    "Bella",
    "Caleb",
    "Diana",
    "Ethan",
    "Fiona",
    "George",
    "Hailey",
    "Ivan",
    "Jenna",
    "Kyle",
    "Laura",
    "Mason",
    "Nora",
    "Owen",
    "Penny",
    "Quincy",
    "Rita",
    "Sean",
    "Tara",
    "Ulrich",
    "Vanessa",
    "Wade",
    "Xavier",
    "Yasmine",
    "Zach",
    "Amber",
    "Blake",
    "Cathy",
    "Derek",
    "Eve",
    "Felix",
    "Gina",
    "Harvey",
    "Isla",
    "Jake",
    "Kara",
    "Leo",
    "Maya",
    "Noah",
    "Olive",
    "Peter",
    "Queen",
    "Ron",
    "Sara",
    "Tom",
    "Uma",
    "Victor",
    "Wendy",
    "Ximena",
    "Yusuf",
    "Zoe",
    "Adrian",
    "Brielle",
    "Cody",
    "Delilah",
    "Eli",
    "Freya",
    "Gavin",
    "Hope",
    "Ian",
    "Joanna",
    "Kurt",
    "Luna",
    "Miles",
    "Naomi",
    "Orion",
    "Phoebe",
    "Reed",
    "Stella",
    "Tristan",
    "Uri",
    "Violet",
    "Willa",
  ];

  let [names, setNames] = useState(is);
  let [name, setName] = useState(null);
  let [debounceval, setDebounceval] = useState(null);
  let [filteredname, setFilterdnames] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setDebounceval(name);
    }, 3000);
  }, [name]);
  useEffect(() => {
    if (debounceval == "") {
      setFilterdnames([]);
    } else {
      let myfilterednames = names.filter((item) => {
        let newdeb = Array.from(debounceval);
        newdeb[0] = newdeb[0].toUpperCase();
        debounceval = newdeb.join("");
        return item.startsWith(debounceval);
      });
      setFilterdnames(myfilterednames);
    }
  }, [debounceval]);

  return (
    <>
      <p>This is my app component</p>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      {filteredname.map((item) => {
        return (
          <>
            <div>{item}</div>
          </>
        );
      })}
    </>
  );
}

export default App;
