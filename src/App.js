import DataTable from './DataTable'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalProvider } from './context/GlobalContext';
import Paginate from './Paginate'

function App() {
  
  return (
    <GlobalProvider>
    <div className="container">
      <div className='row'>
      <DataTable />
      <Paginate />
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
