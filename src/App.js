import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./Components/ProductList";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

function App() {
  const porducts = [
    {
      id: Math.random(),
      name: "Infinix Smartwatch XW2 - Bleu",
      price: 69,
      pic: "https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/82/9387/1.jpg?9049",
    },
    {
      id: Math.random(),
      name: "Korkmaz Hachoir électrique korkmaz - a460-05 900w - Rose gold",
      price: 89,
      pic: "https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/00/5327/1.jpg?8322",
    },
    {
      id: Math.random(),
      name: "Tefal Friteuse - Maxi-Fry - Blanc",
      price: 199,
      pic: "https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/98/4327/1.jpg?9357",
    },
    {
      id: Math.random(),
      name: "Infinix HOT 30 Free Fire - 8GB RAM (up to 16GB) + 128GB - RACING BLACK",
      price: 559,
      pic: "https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/13/6887/1.jpg?7896",
    }
  ];
  const handleAlert = (item) => {
    
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        {alert(

          `The price of ${item.name} is ${item.price}`
        )
        }
      </Alert>
  
  };
  
 

  return <div className="App">
    <ProductList list={porducts} alertFunction={handleAlert} />
  </div>;
}

export default App;
