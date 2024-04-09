const Name = ({ name }) => {
  return (
    <h1 className="ml-1 md:ml-0 flex items-center justify-center px-2 text-2xl">
      {"<" + name + "/>"}
    </h1>
  );
};

export default Name;
