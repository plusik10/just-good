import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import Loading from './Loading.js';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [isButtonShown, setIsButtonShown] = useState(true);
  const [isNewComponentShown, setIsNewComponentShown] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);
    // Здесь можно добавить логику для запуска бесконечной загрузки
    // Например, можно использовать setInterval для имитации бесконечной загрузки
    // Но помни, что бесконечная загрузка - это плохая практика и может привести к проблемам с производительностью и пользовательским опытом
  };

  useEffect(() => {
    if (isLoading) {
      setIsButtonShown(false);
      setIsNewComponentShown(true);
    }
  }, [isLoading]);


  return (
    <div className="App">
      {isButtonShown && (
        <button className='btn btn-1' onClick={handleButtonClick}>Сделать хорошо</button>
      )}
      {isNewComponentShown && (
        <Loading />
      )}
    </div>
  );
}

export default App;
