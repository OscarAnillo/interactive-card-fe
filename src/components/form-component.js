export default function FormComponent(){
    return (
        <section className="section-text">
            <form>
                <label>Cardholder name</label>
                <input type="text" placeholder="e.g. Oscar Anillo"/>
                <label>Card number</label>
                <input type="number" placeholder="e.g. 1234 5678 9123 0000"/>
                    <div>
                        <label>Exp. date (mm/yy)</label>
                        <label className="label-cvv">cvv</label>
                        <div className="form-row">
                            <input type="number" placeholder="MM" className="mm"/>
                            <input type="number" placeholder="YY" className="yy"/>
                        <div>
                            <input type="number" placeholder="e.g. 123" className="cvv"/>
                        </div>
                        </div>
                    </div>
                <button type="submit">Confirm</button>
            </form>
        </section>
    )
}