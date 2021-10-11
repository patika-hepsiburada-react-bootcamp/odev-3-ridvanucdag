
import Question from "./Question";
import { connectSocket, subscribeToNewSurvey } from "../socketApi";
import { useEffect } from "react";
import { useSeriesofvotes } from "../context/Option";

function Container() 
{
  const { setSeriesofvotes } = useSeriesofvotes();

  useEffect(() => 
  {
    connectSocket();

    subscribeToNewSurvey((data) => {

      console.log(data);

      setSeriesofvotes([...data]);

    });

    connectSocket();

  }, [setSeriesofvotes]);

  return (
    <div >
      <Question />
      <br />
      <br />
      
    </div>
  );
}

export default Container;
