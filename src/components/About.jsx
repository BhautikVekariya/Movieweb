import { useNavigate, Link } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-fit pt-5 px-8">
      {/* Header */}
      <div className="flex items-center gap-5 text-2xl">
        <i
          onClick={() => navigate(-1)}
          className="text-[#6556CD] ri-arrow-left-line active:text-[#503ecb] cursor-pointer"
        ></i>
        <h1 className="text-xl font-semibold text-zinc-400">
          <i className="text-[#6556CD] ri-tv-fill"></i>
          <span className="ml-3 sm:text-xl text-lg">About SCSDB-Movies</span>
        </h1>
      </div>

      {/* Content */}
      <div className="py-10">
        <h2 className="text-2xl font-semibold text-zinc-200">What is this ?</h2>
        <p className="text-lg font-light mt-2">
          SCSBD Movie Web App is your ultimate destination for discovering and
          exploring movies and TV shows from around the globe.
        </p>

        <hr className="border-none h-[1px] bg-zinc-500 my-10" />

        <h2 className="text-2xl font-semibold text-zinc-200">My Mission</h2>
        <p className="text-lg font-light mt-2">
          My mission is to simplify the way you connect with the movies and
          shows you love.
        </p>

        <ul className="font-light pl-5 list-disc marker:text-customBullet mt-3">
          <li className="mb-3">Explore trending and classic titles.</li>
          <li className="mb-3">Get detailed insights about movies and shows.</li>
          <li className="mb-3">Share your favorites with friends.</li>
        </ul>

        <hr className="border-none h-[1px] bg-zinc-500 my-10" />

        <div className="w-full grid grid-cols-2 gap-10">
          {/* What I Offer */}
          <div>
            <h2 className="text-2xl font-semibold text-zinc-200">
              What I Offer
            </h2>

            <ul className="font-light pl-5 list-disc marker:text-customBullet mt-2">
              <li className="mb-3">
                <h3 className="text-lg">Comprehensive Movie Details:</h3>
                <span className="text-zinc-300 text-base">
                  Synopses, ratings, reviews, and more.
                </span>
              </li>
              <li className="mb-3">
                <h3 className="text-lg">Personalized Recommendations:</h3>
                <span className="text-zinc-300 text-base">
                  Content tailored to your taste.
                </span>
              </li>
            </ul>
          </div>

          {/* Why Choose */}
          <div>
            <h2 className="text-2xl font-semibold text-zinc-200">
              Why Choose SCSBD?
            </h2>

            <ul className="font-light pl-5 list-disc marker:text-customBullet mt-2">
              <li className="mb-3">
                <h3 className="text-lg">Rich Data:</h3>
                <span className="text-zinc-300 text-base">
                  Powered by TMDb API.
                </span>
              </li>
              <li className="mb-3">
                <h3 className="text-lg">Clean UI:</h3>
                <span className="text-zinc-300 text-base">
                  Fast and responsive.
                </span>
              </li>
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h2 className="text-2xl font-semibold text-zinc-200">Technology</h2>

            <ul className="font-light pl-5 list-disc marker:text-customBullet mt-2">
              <li className="mb-3">
                <h3 className="text-lg">Frontend:</h3>
                <span className="text-zinc-300 text-base">React.js</span>
              </li>
              <li className="mb-3">
                <h3 className="text-lg">Backend:</h3>
                <span className="text-zinc-300 text-base">Node.js</span>
              </li>
            </ul>
          </div>

          {/* Get in Touch (NO anchor, NO li) */}
          <div>
            <h2 className="text-2xl font-semibold text-zinc-200">
              Get in Touch
            </h2>
            <p className="text-lg font-light mt-2">
              I value your feedback and suggestions.
            </p>

            <div className="mt-4 space-y-3">
              <div>
                <h3 className="text-lg">Email:</h3>
                <span className="text-zinc-300 text-base">
                  vekariyabhavtik3209@gmail.com
                </span>
              </div>

              <div>
                <h3 className="text-lg">Follow Me:</h3>
                <Link
                  to="/linkedin"
                  className="text-zinc-300 text-base underline hover:text-[#6556CD]"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-none h-[1px] bg-zinc-500 my-5" />

        <p className="text-zinc-400">
          Thank you for choosing SCSBD Movie Web App.
        </p>
      </div>
    </div>
  );
}

export default About;
