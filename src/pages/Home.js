//import {useContext} from 'react';

//import {CounterContext} from '../context/CounterContext';
import ChangeCounter from '../components/ChangeCounter';

// 4 - Refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext';

// 5 - Context complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext';

const Home = () => {
  //const {counter} = useContext(CounterContext);
  const {counter} = useCounterContext();

  // 5 - Contexto mais complexo
  const {color, dispatch} = useTitleColorContext();

  // 6 - Alterando contexto complexo
  const setTitleColor = (color) => {
    dispatch({type: color});
  }

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - Alterando valor contexto */}
      <ChangeCounter />
      {/* 6 - Alterando contexto complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
      </div>
      <div>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
      <div>
        <button onClick={() => setTitleColor("YELLOW")}>Amarelo</button>
      </div>
    </div>
  )
}

export default Home;