import React from "react";
import Image from "next/image";
import bgImage from "@/assets/Nutrifit-About-Image.webp";

const AboutSection = () => {
  return (
    <section>
      <div className="max-w-screen-xl md:m-auto md:h-screen bg-gradient-to-b from-transparent p-4 mx-4 md:p-10 to-black/10 bg-gray-600/5 rounded-[40px]">
        <div className="relative h-full w-full p-10 rounded-[40px] bg-cover bg-center bg-no-repeat">
          {/* Background layer */}
          <div
            className="absolute inset-0  rounded-[40px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.1)), url(${bgImage.src})`,
              opacity: 0.5, // Opacity for the background only
            }}
          ></div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row gap-10">
              <button className="w-fit h-fit py-4 px-8 bg-customBlack text-white rounded-full">
                Book Now
              </button>
              <p className="w-full md:w-3/4 text-black">
                We are a group of nutrition doctors who collaborate to create a
                forum where people can consult about their nutritional needs. We
                are available in more than 50 cities in 2 countries, Indonesia
                and Australia. We also collaborate with farmers and farms to get
                high-quality food ingredients so people can get them easily.
              </p>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between gap-10 mt-10 text-customBlack">
              <div className="bg-white w-full md:w-80 p-4 rounded-3xl">
                <p className="text-2xl md:text-5xl font-medium mb-4">150+</p>
                <h3 className="text-xl md:text-3xl font-medium">
                  Nutrition Doctors Joined Us in the Last Year
                </h3>
              </div>

              <div className="bg-white w-full md:w-80 p-4 rounded-3xl">
                <p className="text-2xl md:text-5xl font-medium mb-4">50+</p>
                <h3 className="text-xl md:text-3xl font-medium">
                  We are Available in More Than 50 Cities
                </h3>
              </div>

              <div className="bg-white w-full md:w-80 p-4 rounded-3xl">
                <p className="text-2xl md:text-5xl font-medium mb-4">7M</p>
                <h3 className="text-xl md:text-3xl font-medium">
                  7 million people entrust their nutrition to us
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
