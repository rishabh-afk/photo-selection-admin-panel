// pages/index.tsx
import { FC } from "react";
import Image from "next/image";


const Home: FC = () => {
 

  return (
    <div className="space-y-10">
      {/* CRM Stats */}
      <section className="">
        <div className="grid grid-cols-2 gap-5 mt-6 md:grid-cols-4">
          <div className="container">
            <div className="grid-container">
              {/* Left Side (70%) */}
              <div className="left-side">
                {/* Current Bookings Text */}
                <h3 className="current-bookings-text">Current Bookings</h3>

                {/* Number of Bookings */}
                <h2 className="number-of-bookings">40,546</h2>
              </div>

              {/* Right Side (30%) with SVG */}
              <div className="right-side">
               <Image src={"/assets/icons/GRPmain.svg"} alt={""} width={34} height={34} className="" />
              </div>
            </div>

            <div className="percentage-container">
            <Image src={"/assets/icons/VectorMain.svg"} alt={""} width={20} height={11} className="" />

              <div className="percentage-text">
                <span className="percentage">8.5%</span>
                <span className="up-from-text">Up From Yesterday</span>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="grid-container">
              {/* Left Side (70%) */}
              <div className="left-side">
                {/* Current Bookings Text */}
                <h3 className="current-bookings-text">Pending Bookings</h3>

                {/* Number of Bookings */}
                <h2 className="number-of-bookings">40,546</h2>
              </div>

              {/* Right Side (30%) with SVG */}
              <div className="right-side">
              <Image src={"/assets/icons/GRPmain.svg"} alt={""} width={34} height={34} className="" />
              </div>
            </div>

            <div className="percentage-container">
            <Image src={"/assets/icons/VectorMain.svg"} alt={""} width={20} height={11} className="" />
              <div className="percentage-text">
                <span className="percentage">8.5%</span>
                <span className="up-from-text">Up From Yesterday</span>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="grid-container">
              {/* Left Side (70%) */}
              <div className="left-side">
                {/* Current Bookings Text */}
                <h3 className="current-bookings-text">Completed Bookings</h3>

                {/* Number of Bookings */}
                <h2 className="number-of-bookings">40,546</h2>
              </div>

              {/* Right Side (30%) with SVG */}
              <div className="right-side">
              <Image src={"/assets/icons/GRPmain.svg"} alt={""} width={34} height={34} className="" />
              </div>
            </div>

            <div className="percentage-container">
            <Image src={"/assets/icons/VectorMain.svg"} alt={""} width={20} height={11} className="" />
              <div className="percentage-text">
                <span className="percentage">8.5%</span>
                <span className="up-from-text">Up From Yesterday</span>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="grid-container">
              {/* Left Side (70%) */}
              <div className="left-side">
                {/* Current Bookings Text */}
                <h3 className="current-bookings-text">Cancelled Bookings</h3>

                {/* Number of Bookings */}
                <h2 className="number-of-bookings">40,546</h2>
              </div>

              {/* Right Side (30%) with SVG */}
              <div className="right-side">
              <Image src={"/assets/icons/GRPred.svg"} alt={""} width={34} height={34} className="" />
              </div>
            </div>

            <div className="percentage-container">
            <Image src={"/assets/icons/VectorRed.svg"} alt={""} width={20} height={11} className="" />
              <div className="percentage-text">
                <span style={{ color: "#EA4335" }} className="percentage">
                  8.5%
                </span>
                <span className="up-from-text">Down From Yesterday</span>
              </div>
            </div>
          </div>

          <style jsx>{`
            .container {
              gap: 2px;
              border-radius: 10px;
              background-color: #fcf8f8;
              box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
              height: 195px;
            }

            .grid-container {
              display: grid;
              grid-template-columns: 70% 30%;
              height: 70%;
              width: 100%;
            }

            .left-side {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              padding: 1rem;
            }

            .current-bookings-text {
              color: #000;
              font-family: "Inter", sans-serif;
              font-size: 13px;
              font-weight: 600;
              line-height: normal;
              margin-bottom: 2px;
              padding-top: 1rem;
              text-align: center;
            }

            .number-of-bookings {
              color: #000;
              font-family: "Inter", sans-serif;
              font-size: 32px;
              font-weight: 700;
              line-height: normal;
              padding-top: 1rem;
              text-align: center;
            }

            .right-side {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 20%;
              padding-top: 2rem;
            }

            .percentage-container {
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bolder;
            }

            .percentage-icon {
              fill: #00897b;
              width: 20px;
              height: 11px;
              flex-shrink: 0;
            }

            .percentage-text {
              margin-left: 8px;
              display: flex;
              align-items: center;
            }

            .percentage {
              color: #00897b;
              font-family: "Inter", sans-serif;
              font-size: 1rem;
              font-weight: bolder;
            }

            .up-from-text {
              color: #000;
              font-family: "Inter", sans-serif;
              font-size: 0.8rem;
              padding: 3px;
              // font-weight: bolder;
            }
          `}</style>

          {/* second */}
        </div>
      </section>
    </div>
  );
};

export default Home;
