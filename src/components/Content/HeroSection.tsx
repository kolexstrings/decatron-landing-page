import {
  GitHubLogo,
  LinearLogo,
  FigmaLogo,
  MainChimpLogo,
  NotionLogo,
} from "./HeroLogos";

export const HeroSection = () => {
  return (
    <>
      <section className="pt-12 pb-24 bg-gray-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="px-6 text-lg text-gray-600 text-poppins">
              Setting New Standards in Real Estate Marketing.{" "}
            </h1>
            <h2 className="mt-5 text-6xl leading-2 text-gray-900 sm:leading-tight md:text-6xl lg:text-6xl  font-poppins font-bold">
            Eliminating The Hassles and Inefficiencies Of {" "}
              <span className="bg-gradient-to-r from-primary via-primary-500 to-primary-600 inline-block text-transparent bg-clip-text">
              Traditional 
              </span>{" "} 
              Real Estate Transactions 
            </h2>

            <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <a
                href="#"
                title=""
                className="px-5 py-2 text-white bg-primary rounded-md"
                role="button"
              >
               Join Waiting list
              </a>

              <a
                href="#"
                title=""
                className="mt-0 max-sm:mt-5 md:mt-0 lg:mt-0 inline-flex items-center justify-center px-6 py-2 fpx-5 text-white bg-black rounded-md"
                role="button"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
