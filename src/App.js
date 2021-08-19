import Header from "./components/header/Header";
import Content from "./components/content/Content";
import "./App.css";
import Counter from "./components/counter/Counter";
import Prompter from "./components/prompter/Prompter";
import Apidata from "./components/apidata/Apidata";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div>
      <Header />
      <Content
        titlePrimit="Tipuri Masina"
        textPrimit="Sectiunea 1" 
        img="https://robohash.org/ID_PRIMIT_DIN_PROPS"
      ></Content>
      <Content
        titlePrimit="Tipuri Accesorii Masina"
        textPrimit=" Sectiunea 2"
        img="https://robohash.org/id_hggfg"
      ></Content>
      <Content
        titlePrimit="Tipuri jante"
        textPrimit="Sectiunea 3"
      ></Content>
   <Counter></Counter>
   <Prompter></Prompter>
   <Apidata></Apidata>
   <Footer>
     
   </Footer>
    </div>
  );
}

export default App;
