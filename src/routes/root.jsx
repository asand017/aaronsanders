import { Outlet, Link, useLoaderData, Form } from "react-router-dom";

export default function Root() {
  return (
    <div className={"flex flex-col h-dvh"}>
      <nav className={"flex justify-center h-1/6 bg-blue-500"}>
        <ul className={"flex flex-row space-x-20 justify-center"}>
          <li className={"content-center"}>
            <Link to={`about`}>about me</Link>
          </li>
          <li className={"content-center"}>
            <Link to={"projects"}>projects</Link>
          </li>
          <li className={"content-center"}>
            <Link to={`contact`}>contact me</Link>
          </li>
        </ul>
      </nav>

      <div className={"flex-1 bg-red-300 justify-center content-center"}>
        <Outlet />
      </div>
    </div>
  );
}
