import { Form } from "react-router-dom";

export default function About({ref}) {
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
        <div ref={ref} className="flex flex-col py-16 px-8 w-full h-full bg-pink-400">
          <div>1.about</div>
          <div>2.profile pic + bio</div>
          <div>3.work experience</div>

        </div>
      );
}