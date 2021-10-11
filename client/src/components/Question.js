import React from "react";
import { useSeriesofvotes } from "../context/Option";
import Vote from "./Vote";
import { sendSurvey } from "../socketApi";

function Question() {

  const { Seriesofvotes } = useSeriesofvotes();

  const { VotesSeries } = useSeriesofvotes();

  const [disable, setDisable] = React.useState(false);

  const setVoit = (Seriesofvotes) => 
  {
    Seriesofvotes = parseInt(Seriesofvotes);

    setDisable(true);

    sendSurvey("new-option", Seriesofvotes);

  };
  console.log(VotesSeries);

  return (
    <div >
      <h1>En sevdiğin yabancı dizi hangisi ?</h1>
      <br />
      <div >
        <ul>

          {Seriesofvotes.map((select, i) => 
          (
            <Vote key={i} select={select} />

          ))}
        </ul>
      </div>
      <button
      
        disabled={disable}
        
        onClick={() => setVoit(VotesSeries)}
      >
        {" "}
        VOTE{" "}
      </button>
    </div>
  );
}

export default Question;
