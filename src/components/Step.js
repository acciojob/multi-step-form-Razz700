import React, { useState } from 'react'

const Step = (props) => {
    const handlenext=(step)=>{
        if (step==0) {
            props.setcurrentstep([false,true,false]);
        }else if(step==1){
            props.setcurrentstep([false,false,true]); 
        }
         }
    const handleprevious=(step)=>{
        step==1?props.setcurrentstep([true,false,false]):props.setcurrentstep([false,true,false]);
        }
  const [error,seterror]=useState('');
  const [error1,seterror1]=useState('');
        const handlecardnumber=(e)=>{
        if (e.target.value.length!=12) {
            seterror1('Credit card number should be exactly 12 digit long.');
        }else{
            seterror1('');
        }
        }
        const handleexpiry=(e)=>{
            const val=e.target.value;
            const check=/^[0-9][0-9][/][0-9][0-9]$/.test(val);
            console.log(check);
            if (!check) {
                seterror('Expiration date must be in the format MM/YY.');
            }else{
                seterror('');
            }
        }
  return (
    <div>
        {props.currentstep[0] && <div className='form'>
            <h3>Customer Details</h3>
            <label for='first_name' >First Name:</label><br/>
            <input type='text' id='first_name' placeholder='First Name' /><br/>
            <label for='last_name' >Last Name:</label><br/>
            <input type='text' id='last_name' placeholder='Last Name' /><br/>
            <button onClick={()=>handlenext(0)}>Next</button>
        </div>}
        {props.currentstep[1] && <div className='form'>
            <h3>Car Details</h3>
            <label for='model'>Brand:</label><br/>
            <input type='text' id='model' placeholder='Brand' /><br/>
            <label for='car_price' >Model:</label><br/>
            <input type='text' id='car_price' placeholder='Last Name' /><br/>
            <button onClick={()=>handleprevious(1)}>Previous</button>
            <button onClick={()=>handlenext(1)}>Next</button>
        </div>}
        {props.currentstep[2] && <div className='form'>
            <h3>Payment Details</h3>
            <label for='card_info' >Credit card Number:</label><br/>
            <input onChange={handlecardnumber} type='number' id='card_info' placeholder='123456789012' /><br/>
            <p id='error1' style={{color:'red'}}>{error1}</p>
            <label  for='expiry_date' >Expiration Date:</label><br/>
            <input onChange={handleexpiry} type='text' id='expiry_date' placeholder='MM/YY' /><br/>
            <p id='error' style={{color:'red'}}>{error}</p>
            <button onClick={()=>handleprevious(2)}>Previous</button>
            <button>Submit</button>
        </div>}
    </div>
  )
}

export default Step