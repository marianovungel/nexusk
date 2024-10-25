import './App.css';

function App() {

  const Links = ()=>{
    window.location.replace("/")
  }
  return (
    <div className="App">
      <h1 className="Header">Acesse o Formulário de Pesquisa de Satisfação!</h1>
      <button className="Buttom" onClick={()=>Links}>Acessar Agora...</button>
    </div>
  );
}

export default App;
