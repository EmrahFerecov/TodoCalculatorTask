
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { topla,incrementByUser,cix,vur,bol,updateInp1,updateInp2 } from './Redux/counterSlice';


const Calculator = () =>{
const  { inp1, inp2, value } = useSelector(state=>state.counter)
const dispatch=useDispatch()

const handleToplama=()=>{
  dispatch(topla())
}

const handleCixma=()=>{
  dispatch(cix())
}

const handleIncrementByUser=()=>{
  dispatch(incrementByUser());
}



const handleVurma=()=>{
  dispatch(vur());
}

const handleBolme=()=>{
  dispatch(bol());
}

const handleInp1Change = (e) => {
  dispatch(updateInp1(e.target.value));
}

const handleInp2Change = (e) => {
  dispatch(updateInp2(e.target.value));
};







  return (
    <>
    
     <input type="text" value={inp1} onChange={handleInp1Change} />
     <input type="text" value={inp2} onChange={handleInp2Change} />
     <button onClick={handleToplama}>+</button>
     <button onClick={handleCixma}>-</button>
     <button onClick={handleVurma}>*</button>
     <button onClick={handleBolme}>/</button>
     <button onClick={handleIncrementByUser}>IncrementByUser</button>
     <div>{value}</div>

    
    </> 
    
 
  );
}

export default Calculator;