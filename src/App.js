import styles from './index.css';
import AppContainer from './containers/AppContainer';

function App() {
  return (
    <div className='grid h-full w-full min-h-screen p-2' style={{ ...styles }}>
      <AppContainer />
    </div>
  );
}

export default App;
