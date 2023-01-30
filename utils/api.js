import axios from "axios";

export async function fetchCountryFlagFromCode(code) {
  const { data } = await axios(`https://restcountries.com/v3.1/alpha/${code}`);

  return data[0].flags.svg;
}

export async function fetchBorderingCountries(borders) {
  const allBorderingFetch = borders.map(async (country) => {
    const { data } = await axios(
      `https://restcountries.com/v3.1/alpha/${country}`
    );

    return data[0];
  });

  const bordering = await Promise.all(allBorderingFetch);

  return bordering;
}
