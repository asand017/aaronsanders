import { useEffect, useContext } from "react";
import useFetchPortfolio from "../hooks/useFetchPortfolio";
import useTransitionAnime from "../hooks/useTransitionAnime";
import PageContext from "../contexts/PageContext";
import { CONTACT_URL } from "../utils/constants";

// TODO: reconsider including page later

const Contact = ({ref}) => {
  const { currentPage, state, dispatch } = useContext(PageContext);
  const { fadeIn, fadeOut } = useTransitionAnime();
  const {contactData} = useFetchPortfolio();

  useEffect(() => {
    console.log("Contact page");
    fadeIn(
      ".contact-container",
      () => {
        dispatch({
          type: "open",
          route: CONTACT_URL,
        });
      },
      () => {},
    );
  }, []);

  useEffect(() => {
    console.log("current page: " + currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (
      (currentPage !== CONTACT_URL && currentPage !== "/") ||
      state?.status === "closing"
    ) {
      fadeOut(
        ".contact-container",
        () => {},
        () => {
          console.log("dispatching");
          dispatch({
            type: "closed",
            route: CONTACT_URL,
          });
        },
      );
    }
  }, [currentPage, state]);

  return (
    <div ref={ref} className="contact-container opacity-0 w-full h-full flex justify-center items-center bg-yellow-400">
      <div className="w-3/5 h-3/5 bg-green-900">
        <a href={contactData?.linkedinProfileUrl} ><h1 className="text-white">Connect with me on LinkedIn!</h1></a>
      </div>
    </div>
  );
}

export default Contact;