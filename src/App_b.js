import { useState } from 'react';
import styles from './App.module_b.scss'

function App() {
  const [on, setOn] = useState(false);
  console.log(styles)
  return (
    <div className={`${styles.App} ${on ? styles.on : null}`}>
      <strong className='inner' onClick={() => {
        setOn(!on)
      }}>sass test</strong>
    </div>
  );
}

export default App;