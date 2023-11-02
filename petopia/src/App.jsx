// import Benifits from "./Components/Benifits/Benifits";
import Curves from "./Components/Curves/Curves";
import OrangeDog from "./Components/OrangeDog/orangeDog";
import SectionOne from "./Components/SectionOne/SectionOne";
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
        {/* <Benifits /> */}
        {/* <OrangeDog /> */}
      </div>
    </>
  );
}

export default App;
