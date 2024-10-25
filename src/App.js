import './App.css';

function App() {

  const Links = ()=>{
    window.location.replace("https://docs.google.com/forms/d/e/1FAIpQLSeyGvho7Xn1118_gJ4Bx3sLpRp5veHkGKp9SoeRb8IF9pD_eg/viewform?usp=sf_link")
  }
  return (
    <div className="App">
      <h1 className="Header">Acesse o Formulário de Pesquisa de Satisfação!</h1>
      <button className="Buttom" onClick={()=>Links}>Acessar Agora...</button>
    </div>
  );
}

export default App;
