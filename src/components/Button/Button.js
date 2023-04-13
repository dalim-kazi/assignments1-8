import React from 'react';
import './Button.css'
const Button = () => {
    const button1 = () => {
        const field1 = document.getElementById('field-1').innerText;
        const recevad = document.getElementById('recevid');
        recevad.innerText =field1
        console.log(field1)
        return field1
    }
   
    const button2 = () => {
        const field2 = document.getElementById('field-2').innerText;
        const recevad = document.getElementById('recevid');
        recevad.innerText =field2
        console.log(field2)
        return field2
    }
    const button3= () => {
        const field3 = document.getElementById('field-3').innerText;
        const recevad = document.getElementById('recevid');
        recevad.innerText = field3;
        console.log(field3)
        return field3
    }
    const button4 = () => {
        const field4 = document.getElementById('field-4').innerText;
        const recevad = document.getElementById('recevid');
        recevad.innerText =field4
        console.log(field4)
        return field4
    }
    const button5 = () => {
        const field5 = document.getElementById('field-5').innerText;
        const recevad = document.getElementById('recevid');
        recevad.innerText =field5
        console.log(field5)
        return field5
    }
    return (
        <div>
            <div className='button-container'>
            <div>
                <button onClick={button1} className='button1'>
                    <p><span id='field-1' style={{fontSize:"20px"}}>10</span>s</p>  
                </button>
            </div>
            <div>
                <button onClick={button2} className='button1'>
                    <p><span id='field-2' style={{fontSize:"20px"}}>20</span>s</p>  
                </button>
            </div>
            <div>
                <button onClick={button3} className='button1'>
                    <p><span id='field-3' style={{fontSize:"20px"}}>30</span>s</p>  
                </button>
            </div>
            <div>
                <button onClick={button4} className='button1'>
                    <p><span id='field-4' style={{fontSize:"20px"}}>40</span>s</p>  
                </button>
            </div>
            <div>
                <button onClick={button5} className='button1'>
                    <p><span id='field-5' style={{fontSize:"20px"}}>50</span>s</p>  
                </button>
             </div>
            </div>
            <div>
                <p>Exercise Details</p>
                <div className='exercise-time'>
                    <p style={{ paddingLeft:"10px", fontSize:"22px"}}>Break time<span style={{marginLeft:"130px", fontSize:"16px"}} id='recevid'>0</span> <small style={{ }}>seconds</small></p>
                </div>
           </div>
        </div>
    );
};

export default Button;