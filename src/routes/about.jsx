import { Form } from "react-router-dom";

export default function About() {
    // read from json
    const aboutMe = {
        first: "Your",
        last: "Name",
        avatar: "https://upload.wikimedia.org/wikipedia/en/1/1d/Kayako_Saeki_%28_Takako_Fuji%29.jpg",
        twitter: "aaron",
        notes: "Some notes",
        favorite: true,
      };
    
      return (
        <div>About me</div>
      );
}