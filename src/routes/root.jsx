import { Outlet, Link, useLoaderData, Form } from "react-router-dom";

export default function Root() {
  return (
    <div className={"flex h-dvh flex-col"}>
      {/* header */}
      <nav className={"flex h-1/6 justify-center bg-blue-500"}>
        <ul className={"flex flex-row justify-center space-x-40"}>
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

      {/* body content */}
      <div className={"flex-1 content-center justify-center bg-red-300"}>
        <Outlet />
      </div>

      {/* footer */}
      <nav className={"h-1/8 flex justify-center bg-green-500"}>
        <ul className={"flex flex-row justify-center space-x-20"}>
          <li className={"content-center"}>
            <a>linkedin</a>
          </li>
          <li className={"content-center"}>
            <a>resume</a>
          </li>
          <li className={"content-center"}>
            <a>github</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
