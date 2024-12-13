import HeroImage from "../assets/image/hero.png";
import AboutImage from "../assets/image/Aboutt.png";
import DownloadImage from "../assets/image/nlk.jpg";
import GooglePlay from "../assets/image/googleplay.png";

import Balgis from "../assets/image/balgis.jpg";
import Mujadid from "../assets/image/adid.jpg";
import Carmen from "../assets/image/carmenL.jpg";
import Ardani from "../assets/image/Mrifqi ardani.jpg";
import Kayyis from "../assets/image/kyiss.jpg";
import Jalu from "../assets/image/trijalu.jpg";

const HomePage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              LensaKulitku:{" "}
              <span className="font-bold text-sky-400 underline">
                Your Skin's Health, Just a Snap away
              </span>
            </h1>
            <p className="text-base/8 mb-7">
              Find your true friend to breaking barriers in skin health equal
              care for everyone, anytime, anywhere!
            </p>
          </div>
          <div className="box">
            <img
              src={HeroImage}
              alt="Hero Image"
              className="md:w-full w-[400px] mx-auto md:0"
            />
          </div>
        </div>
        {/* About */}
        <div
          className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap:10 md:pt-20 pt-32"
          id="about"
        >
          <div className="box md:order-1 order-2">
            <img
              src={AboutImage}
              alt="About Image"
              className="lg:[500px] w=[400px] md:w-full w-[400px] mx-auto md:0" //md:m-0 mx-auto
            />
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              What Is{" "}
              <span className="font-bold text-sky-400 underline">
                LensaKulitku?
              </span>
            </h1>
            <p className="text-base/loose">
              LensaKulitku is an innovative application designed to help you
              better understand your skin health. Powered by advanced artificial
              intelligence, LensaKulitku allows users to detect various skin
              conditions only by their smartphone camera. Additionally, the app
              offers a progress-tracking feature, enabling users to monitor
              their skin's condition over time through a history of analyzed
              images. We are committed to providing a practical, accurate, and
              reliable solution for your skin health, anytime and anywhere.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="features pt-32" id="features">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
            Features
          </h1>
          <p className="text-center">The feature services we provide :</p>
          <div className="features-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-1 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                Skin Detection
              </h3>
              <p className="text-white text-base/loose">
                Self-analyze skin diseases using machine learning technology.
              </p>
            </div>

            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-2 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                Skin’s Progress Tracking
              </h3>
              <p className="text-white text-base/loose">
                Provide skin condition progress based on historical data during
                disease detection.
              </p>
            </div>

            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-3 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                Consultation
              </h3>
              <p className="text-white text-base/loose">
                Direct consultation with professional dermatologists.
              </p>
            </div>
          </div>
        </div>

        {/* Download */}
        <div
          className="download grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32"
          id="download"
        >
          <div className="box md:order-1 order-2">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7 pt:20">
              Check your skin problems independently with :{" "}
              <span className="font-bold text-sky-400 underline">
                LensaKulitku!
              </span>
            </h1>
            <h3 className="text-xl font-bold mt-6 mb-2">Step 1 : Download</h3>
            <p className="text-base/loose">
              Start your journey by downloading the LensaKulitku app from Google
              Play Store. Search for 'LensaKulitku' and install the app. <br />
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2">
              Step 2: Begin Detection
            </h3>
            <p className="text-base/loose">
              Open the LensaKulitku app and follow the instructions to take a
              photo of the affected skin. LensaKulitku will detect your skin
              problems. <br />
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2">
              Step 3: Track Your Progress
            </h3>
            <p className="text-base/loose">
              Repeat facial analysis regularly to monitor changes in your skin.
              <br />
            </p>
            <a
              href="https://drive.google.com/drive/folders/1iszgJ9vCupuO0Bd0wLtEcMtssJ_z0e9q?usp=sharing"
              target="_blank"
            >
              <img
                src={GooglePlay}
                alt="Google Play"
                class="hover:opacity-75 transition duration-300"
              />
            </a>
          </div>
          <div className="box box md:order-2 order-1">
            <img
              src={DownloadImage}
              alt="Download Image"
              className="md:w-full w-[400px] mx-auto md:0"
            />
          </div>
        </div>

        {/* Our Team */}
        <div className="ourteam pt-32" id="ourteam">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
            Our Team
          </h1>
          <p className="text-center">Let's Meet Our Team :</p>
          <div className="ourteam-box pt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            <div className="box p-2 bg-white shadow">
              <img
                src={Balgis}
                alt="Balgis Photo"
                className="w-full h-[500px]"
              />
              <h3 className="text-xl font-bold mt-6 mb-2">
                Balgis Putri Prioni
              </h3>
              <p className="text-base/loose">
                Machine Learning Engineer <br /> Information System student at
                Surabaya University. <br />
                <a
                  href="https://www.linkedin.com/in/balgisputri/"
                  target="_blank"
                >
                  Contact : Linkedin
                </a>
              </p>
            </div>

            <div className="box p-2 bg-white shadow">
              <img
                src={Mujadid}
                alt="Mujadid Photo"
                className="w-full h-[500px]"
              />
              <h3 className="text-xl font-bold mt-6 mb-2">
                Mujadid Choirus Surya
              </h3>
              <p className="text-base/loose">
                Machine Learning Engineer <br /> Data Science student at
                Semarang Institute of Technology. <br />
                <a
                  href="https://www.linkedin.com/in/mujadidchoirussurya/"
                  target="_blank"
                >
                  Contact : Linkedin
                </a>
              </p>
            </div>

            <div className="box p-2 bg-white shadow">
              <img
                src={Carmen}
                alt="Carmen Photo"
                className="w-full h-[500px]"
              />
              <h3 className="text-xl font-bold mt-6 mb-2">Carmenita Lamba</h3>
              <p className="text-base/loose">
                Machine Learning Engineer <br /> Informatics Engineering student
                at Sam Ratulangi University. <br />
                <a
                  href="https://www.linkedin.com/in/carmenita-lamba-6a7555220/"
                  target="_blank"
                >
                  Contact : Linkedin
                </a>
                &
                <a
                  href="https://www.instagram.com/carmenitalamba_/profilecard/?igsh=Y2Z6cWppbWtzcWd3"
                  target="_blank"
                >
                  Instagram
                </a>
                .
              </p>
            </div>

            <div className="box p-2 bg-white shadow">
              <img
                src={Ardani}
                alt="Ardani Photo"
                className="w-full h-[500px]"
              />
              <h3 className="text-xl font-bold mt-6 mb-2">
                Muhammad Rifqi Ardani
              </h3>
              <p className="text-base/loose">
                Cloud Computing <br /> Information System student at Surabaya
                University. <br />
                <a
                  href="https://www.linkedin.com/in/muhammad-rifqi-ardani-362a7630b/"
                  target="_blank"
                >
                  Contact : Linkedin
                </a>
              </p>
            </div>

            <div className="box p-2 bg-white shadow">
              <img
                src={Kayyis}
                alt="Kayyis Photo"
                className="w-full h-[500px]"
              />
              <h3 className="text-xl font-bold mt-6 mb-2">Ibrahim Kayyis</h3>
              <p className="text-base/loose">
                Mobile Developer <br /> Information System student at Surabaya
                University. <br />
                <a
                  href="https://www.linkedin.com/in/ibrahim-kayyis-43b362311/"
                  target="_blank"
                >
                  Contact : Linkedin
                </a>
              </p>
            </div>

            <div className="box p-2 bg-white shadow">
              <img src={Jalu} alt="Jalu Photo" className="w-full h-[500px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">Jalu Tri Atmaja</h3>
              <p className="text-base/loose">
                Cloud Computing <br /> Information System student at Surabaya
                University. <br />
                <a
                  href="https://www.linkedin.com/in/jalutriatmaja/"
                  target="_blank"
                >
                  Contact : Linkedin
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
