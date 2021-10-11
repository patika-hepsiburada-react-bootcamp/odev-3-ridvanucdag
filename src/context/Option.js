import { createContext, useContext, useState } from "react";

const Option = createContext();

export const SeriesofvotesProvider = ({ children }) => {
  const [Seriesofvotes, setSeriesofvotes] = useState([
    {  
      name: "Breaking Bad", 
      voit: "0" 
    },
    { 
      name: "GAME OF THRONES", 
      voit: "0" 
    },
    { 
      name: "THE WIRE", 
      voit: "0" 
    },
    { 
      name: "Rick and Morty", 
      voit: "0" 
    },
    { 
      name: "The Last Dance", 
      voit: "0" 
    },
    { 
      name: "Sherlock", 
      voit: "0" 
    },
    { 
      name: "True Detective", 
      voit: "0" 
    },
    { 
      name: "The Office", 
      voit: "0" 
    },
    { 
      name: "Fargo", 
      voit: "0" 
    },
    { 
      name: "Dark", 
      voit: "0" 
    },
    { 
      name: "Westworld", 
      voit: "0" 
    },
    { 
      name: "Doktor House", 
      voit: "0" 
    },
    { 
      name: "Vikingler", 
      voit: "0" 
    },
    { 
      name: "Lost", 
      voit: "0" 
    },
    { 
      name: "Prison Break", 
      voit: "0" 
    },
    { 
      name: "The Walking Death", 
      voit: "0" 
    },
  ]);
  const [VotesSeries, setVotesSeries] = useState(0);

  const values = {
    Seriesofvotes,
    VotesSeries,
    setVotesSeries,
    setSeriesofvotes,
  };

  return (
    <Option.Provider value={values}>
      {children}
    </Option.Provider>
  );
};

export const useSeriesofvotes = () => useContext(Option);
