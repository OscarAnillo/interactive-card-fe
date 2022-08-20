import { useState } from 'react';

export default function FormComponent(){
    const [userInput, setUserInput] = useState({
        name: '',
        number: '',
        month: '',
        year: '',
        cvv: ''
    })

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setUserInput({
            ...userInput,
            [name] : value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }

    const {name, number, month, year, cvv} = userInput;
    return (
        <section className="section-text">
            <form onSubmit={submitHandler}>
                <label>Cardholder name</label>
                <input type="text" placeholder="e.g. Oscar Anillo" name="name" value={name} onChange={changeHandler}/>
                <label>Card number</label>
                <input type="number" placeholder="e.g. 1234 5678 9123 0000" name="number" value={number} onChange={changeHandler}/>
                    <div>
                        <label>Exp. date (mm/yy)</label>
                        <label className="label-cvv">cvv</label>
                        <div className="form-row">
                            <input type="number" placeholder="MM" className="mm" name="month" value={month} onChange={changeHandler}/>
                            <input type="number" placeholder="YY" className="yy" name="year" value={year} onChange={changeHandler}/>
                        <div>
                            <input type="number" placeholder="e.g. 123" className="cvv" name="cvv" value={cvv} onChange={changeHandler}/>
                        </div>
                        </div>
                    </div>
                <button type="submit">Confirm</button>
            </form>
        </section>
    )
}