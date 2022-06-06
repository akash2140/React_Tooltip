import './style/App.css';
import ToolTip from './ToolTip';


function App() {
  return (
    <div className="App">
      <ToolTip position='top' />
      <ToolTip position='bottom' />
      <ToolTip position='left' />
      <ToolTip position='right' />
    </div>
  );
}

export default App;
