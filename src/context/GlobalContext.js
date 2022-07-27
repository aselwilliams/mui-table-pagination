import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const url = "https://restcountries.com/v3.1/all";

  const fetchData = () => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setCountries(data))
        .catch((err) => console.log(err));
    }, 2000);
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, [currentPage]);
  console.log(countries);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = countries.slice(firstIndex, lastIndex);

  return (
    <GlobalContext.Provider
      value={{
        countries,
        setCurrentPage,
        currentItems,
        currentPage,
        setItemsPerPage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
