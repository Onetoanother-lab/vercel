import { useDispatch, useSelector } from 'react-redux'
import { inc, dec, res } from './Redux/counterSlice'
import { ToastContainer, toast } from 'react-toastify';


export default function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const max = 15
  const min = 0
  if (count >= max) {
    toast("Raqamingiz bloklangan iltimos hisobingizni toldiring (kamaytiring koroche)");
  }
  else if (count <= min) {
    toast('limitga yetip keldiz');
  } 

  return (
    <div>
      <h1>{count}</h1>
      <button disabled={count >= max} onClick={() => dispatch(inc())}>+</button> 
      <button disabled={count <= min} onClick={() => dispatch(dec())}>-</button>
      <button disabled={count <= min} onClick={() => dispatch(res())}>res</button>
      <ToastContainer />
    </div>
  )
}
