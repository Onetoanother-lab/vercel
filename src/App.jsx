import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar';
import Card from './components/Card';


export default function App() {
  return (
    <div>
      <Navbar/>
      <ToastContainer />
      <Card/>
    </div>
  )
}
