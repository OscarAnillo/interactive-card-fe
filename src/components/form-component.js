import { useState, useEffect } from 'react';
import CompleteComponent from './complete-component';

import { useDispatch } from 'react-redux';
import { setUserInfo } from '../redux/features/slice';
import 'animate.css';

export default function FormComponent(){
    const [userInput, setUserInput] = useState({
        name: '',
        number: '',
        month: '',
        year: '',
        cvv: ''
    })
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const dispatch = useDispatch();

    const changeHandler = (e) => {
         const {name, value} = e.target;
         setUserInput({
            ...userInput,
            [name] : value
        })
        dispatch(setUserInfo(e))
    }

    const validateData = (values) => {
        const errors = {};
        const numberRegex = /^[0-9]*$/

        if (!values.name) {
          errors.name = "Cardholder name is required";
        }
        if (!values.number) {
          errors.number = "Card number is required";
        } else if (!numberRegex.test(values.number)){
          errors.number = "Wrong format, numbers only";
        }
        if (!values.month) {
          errors.month = "Can't be blank";
        } 
        if (!values.year) {
            errors.year = "Can't be blank";
        } 
        if (!values.cvv) {
            errors.cvv = "Can't be blank";
        } 
        return errors;
      };

    const submitHandler = (e) => {
        e.preventDefault();
        setFormErrors(validateData(userInput))
        if(userInput.name && userInput.number && userInput.month && userInput.year && userInput.cvv) setIsSubmitted(true);
        
    }
    
    useEffect(() => {
        if(Object.keys(userInput).length === 0 && isSubmitted){
            console.log(isSubmitted)
        }
    },  [userInput, isSubmitted])

    const {name, number, month, year, cvv} = userInput;

    return (
        <section className="section-text animate__animated animate__bounceInRight">
        {!isSubmitted ? 
            <form onSubmit={submitHandler} autoComplete="off">
                <label>Cardholder name</label>
                <input type="text" placeholder="e.g. Oscar Anillo" name="name" value={name} onChange={changeHandler}/>
                <div className="error-style"><span>{formErrors.name}</span></div>
                <label>Card number</label>
                <input type="text" placeholder="e.g. 1234 5678 9123 0000" name="number" value={number} onChange={changeHandler} maxLength={16} />
                <div className="error-style"><span>{formErrors.number}</span></div>
                    <div>
                        <label>Exp. date (mm/yy)</label>
                        <label className="label-cvv">cvv</label>
                        <div className="form-row">
                            <input type="text" placeholder="MM" className="mm" name="month" value={month} onChange={changeHandler} maxLength={2} />
                            <div className="error-style-row-month"><span>{formErrors.month}</span></div>
                            <input type="text" placeholder="YY" className="yy" name="year" value={year} onChange={changeHandler} maxLength={2} />
                            <div className="error-style-row-year"><span>{formErrors.year}</span></div>
                        <div>
                            <input type="text" placeholder="e.g. 123" className="cvv" name="cvv" value={cvv} onChange={changeHandler} maxLength={3} />
                            <div className="error-style-row-cvv"><span>{formErrors.cvv}</span></div>
                        </div>
                        </div>
                    </div>
                <button type="submit">Confirm</button>
            </form>
            :  <CompleteComponent /> }
        </section>
    )
}