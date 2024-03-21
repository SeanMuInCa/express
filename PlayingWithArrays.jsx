import {useState} from 'react';
const PlayingWithArrays = ()=>{

    const [myArr, setMyArr] = useState([1,2,3]);
    const [item, setItem] = useState();
    const [index, setIndex] = useState();



    const addItem = (arrItem, arrIndex)=>{
        const newArr = [...myArr.slice(0, arrIndex), arrItem, ...myArr.slice(arrIndex)];
        setMyArr(newArr);
    }

    const updateArr = ()=>{
        const newArr = [...myArr.slice(0, index), item, ...myArr.slice(index + 1)]
        setMyArr(newArr)
    }

    const deleteArr = ()=>{
        const newArr = [...myArr.slice(0, index), ...myArr.slice(index + 1)]
        setMyArr(newArr)
    }

    return (
        <>
        <p>Data array: {myArr.toString()}</p>
        <label htmlFor="item">Item: </label>
        <input type="text" id="item" name="item" onChange={e=>setItem(e.target.value)}/>

        <label htmlFor="index">Index: </label>
        <input type="number" name="index" id="index" onChange={e=>setIndex(parseInt(e.target.value))}/>
        <br />
        {/* have to change it to this type to run */}
        <input type="button" value="Add" onClick={()=>addItem(item,index)}/>
        <input type="button" value="Update" onClick= {updateArr}/>
        <input type="button" value="Delete" onClick={deleteArr}/>
        </>
    )
}

export default PlayingWithArrays;