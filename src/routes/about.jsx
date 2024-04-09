import useFetchPortfolio from "../hooks/useFetchPortfolio";
// import profilePic from "../assets/portfolio_pic.jpg";

export default function About({ ref }) {
  const { aboutMeData } = useFetchPortfolio();
  const imgSrc = aboutMeData?.profilePic || "assets/portfolio_pic.jpg";
  const bio = aboutMeData?.bio;

  return (
    <div
      ref={ref}
      id="about"
      className="flex h-full w-full flex-col bg-pink-400 px-8 py-16 md:flex-row"
    >
      <div className="w-full md:h-1/2 bg-indigo-400 p-4 md:w-1/2">
        <img src={imgSrc} />
      </div>
      <div className="w-full md:h-1/2 bg-orange-500 p-4 md:w-1/2">{bio}</div>
    </div>
  );
}
