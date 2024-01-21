"use client";

import React from "react";
import { useParams } from "next/navigation";

import { allGuidesData } from "@/app/all-guides/allGuidesData";

import GuidesSlider from "@/components/all-guides/GuidesSlider";
import CityInformation from "@/components/locationCityWise/CityInformation";
import CityStateSelector from "@/components/locationCityWise/CityStateSelector";
import AboutCity from "@/components/locationCityWise/AboutCity";
import ExploreLocalitiesOfCities from "@/components/locationCityWise/ExploreLocalitiesOfCities";
import HotspotOfCities from "@/components/locationCityWise/HotspotOfCity";
import TopPropertyOfCity from "@/components/locationCityWise/TopPropertyOfCity";
import InterestingReads from "@/components/exploreLocality/ViewAllComponents/InterestingReads";
import Faq from "@/components/LocationCityWise/FNQ";

const LocationByCity = () => {
  const [state, city] = useParams().slug;

  return (
    <div className="px-[5rem] py-[2rem] max-lg:px-[2rem]">
      <CityStateSelector />

      <CityInformation />

      <AboutCity />

      <ExploreLocalitiesOfCities />

      <HotspotOfCities />

      <TopPropertyOfCity />

      <Faq />

      <div>
        <h2 className="text-3xl font-bold mt-5 max-lg:text-2xl">
          Start with these guides{" "}
        </h2>
        <p className="mt-2 text-gray-600">
          Know all that you need to know before you start
        </p>
        <div className="max-w-screen-xl mx-auto px-8 py-8 my-4">
          <GuidesSlider allGuides={allGuidesData} />
        </div>
      </div>

      <InterestingReads />
    </div>
  );
};

export default LocationByCity;
