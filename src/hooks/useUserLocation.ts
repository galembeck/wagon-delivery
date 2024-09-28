import { useState, useEffect } from "react";

export const useUserLocation = () => {
  const [userRegion, setUserRegion] = useState("São Paulo");
  const [userCountry, setUserCountry] = useState("BR");

  const fetchUserLocation = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      const userIP = data.ip;

      const cityResponse = await fetch(`https://ipapi.co/${userIP}/region/`);
      const regionResponse = await fetch(`https://ipapi.co/${userIP}/country/`);

      const region = await cityResponse.text();
      const country = await regionResponse.text();

      setUserRegion(region);
      setUserCountry(country);
    } catch (error) {
      console.error("Error fetching user location:", error);
    }
  };

  useEffect(() => {
    fetchUserLocation();
  }, []);

  return { userRegion, userCountry };
};
