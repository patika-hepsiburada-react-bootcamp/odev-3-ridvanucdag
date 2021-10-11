import { useState } from "react";
import { useSeriesofvotes } from "../context/Option";

function Vote({ select }) {

  const { setVotesSeries } = useSeriesofvotes();

  const handleChange = ({ target }) => setVotesSeries(target.value);

  return (
    <div >
      <input

        type="radio"

        value={select.Seriesofvotes}

        name="Vote"

        onChange={handleChange}

      />

      <span>{select.name}</span>
      
    </div>
  );
}

export default Vote;
