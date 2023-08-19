const { createContext, useContext } = require("react");

const SampleContextFunction = createContext("");

const SampleContext = () => {
  const contextVal = useContext(SampleContextFunction);
  return contextVal;
};
export  {SampleContext,SampleContextFunction};