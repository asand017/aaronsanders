import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Name = ({ name }) => {
  const navigate = useNavigate();

  return (
    <h1 className="flex items-center justify-center px-2 text-2xl hover:cursor-pointer" onClick={() => {
      navigate("/"+BASE_URL);
    }}>
      {"<" + name + "/>"}
    </h1>
  );
};

export default Name;
