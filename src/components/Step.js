import React, { useState } from 'react'

const Step = (props) => {
    const handlenext=(step)=>{
        if (step==0) {
            props.setcurrentstep(['hide','','hide']);
        }else if(step==1){
            props.setcurrentstep(['hide','hide','']); 
        }
         }
    const handleprevious=(step)=>{
        step==1?props.setcurrentstep(['','hide','hide']):props.setcurrentstep(['hide','','hide']);
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
        {/* {props.currentstep[0] && */}
         <div id='step1' className={'form '+props.currentstep[0]}>
            <h3>Customer Details</h3>
            <label for='first_name' >First Name:</label><br/>
            <input type='text' id='first_name' placeholder='First Name' /><br/>
            <label for='last_name' >Last Name:</label><br/>
            <input type='text' id='last_name' placeholder='Last Name' /><br/>
            <input type='button' value='Next' onClick={()=>handlenext(0)}/>
        </div>
        
        {/* {props.currentstep[1] &&  */}
        <div id='step2' className={'form '+props.currentstep[1]}>
            <h3>Car Details</h3>
            <label for='model'>Brand:</label><br/>
            <input type='text' id='model' placeholder='Brand' /><br/>
            <label for='car_price' >Model:</label><br/>
            <input type='text' id='car_price' placeholder='Last Name' /><br/>
            <input type='button' value='Previous' onClick={()=>handleprevious(1)}/>
            <input type='button' value='Next' onClick={()=>handlenext(1)}/>
        </div>
        {/* {props.currentstep[2] && */}
         <div id='step3' className={'form '+props.currentstep[2]}>
            <h3>Payment Details</h3>
            <label for='card_info' >Credit card Number:</label><br/>
            <input onChange={handlecardnumber} type='number' id='card_info' placeholder='123456789012' /><br/>
            <p id='error1' style={{color:'red'}}>{error1}</p>
            <label  for='expiry_date' >Expiration Date:</label><br/>
            <input onChange={handleexpiry} type='text' id='expiry_date' placeholder='MM/YY' /><br/>
            <p id='error' style={{color:'red'}}>{error}</p>
            <input type='button' value='Previous' onClick={()=>handleprevious(2)} />
            <button type='submit'>Submit</button>
        </div>
    </div>
  )
}

export default Step