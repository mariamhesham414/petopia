// import Benifits from "./Components/Benifits/Benifits";
import Curves from "./Components/Curves/Curves";
import SectionFive from "./Components/SectionFive/SectionFive";
import SectionFour from "./Components/SectionFour/SectionFour";
import SectionNine from "./Components/SectionNine/SectionNine";
import SectionOne from "./Components/SectionOne/SectionOne";
import SectionSeven from "./Components/SectionSeven/SectionSeven";
import SectionSix from "./Components/SectionSix/SectionSix";
import SectionThree from "./Components/SectionThree/SectionThree";
import SectionTwo from "./Components/SectionTwo/SectionTwo";
import Header from "./Pages/Header";

function App() {
  return (
    <>
      <Header />
      <div style={{ paddingLeft: "12%", paddingRight: "12%" }}>
        <Curves />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
      </div>
      {/*  */}
      <div style={{ paddingLeft: "12%", paddingRight: "12%" }}>
        <SectionNine />
      </div>
      {/*  */}
    </>
  );
}

export default App;
