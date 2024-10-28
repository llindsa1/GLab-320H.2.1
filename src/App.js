import logo from './logo.svg';
import './App.css';


function Header (){
  return (<h1>Linda Lindsay Makes A Simple React Application</h1>);
}
function Content() {
  return (<p> This is so cool and easy </p>);
}
function Footer() {
  return (<h1> I will make more if this turns out this easy. </h1>)
}
function App () {
  return (
    <>
    <Header/>
    <Content />
    <Footer />
    </>
  );
}
export default App;
