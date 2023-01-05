import './App.css';
import UsuarioAvatar from './Componentes/UsuarioAvatar/UsuarioAvatar';
import BotaoPadrao from './Componentes/BotaoPadrao/BotaoPadrao';
import EntradaPadrao from './Componentes/EntradaPadrao/EntradaPadrao';

function App() {
  return (
    <div className='App'>
      <UsuarioAvatar
        name='Gabrielle Silva'
        src='https://avatars.githubusercontent.com/u/99265156?v=4'
      />
      <BotaoPadrao>Entrar</BotaoPadrao>
      <EntradaPadrao
        placeholder='Digite seu texto aqui...'
        type='email'
      ></EntradaPadrao>
    </div>
  );
}

export default App;
