import useFetchPortfolio from "../hooks/useFetchPortfolio";

export default function Contact({ref}) {
  const {contactData} = useFetchPortfolio();

  return (
    <div id="contact" ref={ref} className="w-full h-full flex justify-center items-center bg-yellow-400">
      <div className="w-3/5 h-3/5 bg-green-900">
        <a href={contactData?.linkedinProfileUrl} ><h1 className="text-white">Connect with me on LinkedIn!</h1></a>
      </div>
    </div>
  );
}
