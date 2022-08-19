export default function FormComponent(){
    return (
        <section>
            <form>
                <label>Cardholder name</label>
                <input type="text" placeholder="e.g. Oscar Anillo"/>
                <label>Card number</label>
                <input type="text" placeholder="e.g. 1234 5678 9123 0000"/>
                <label>Exp. date (mm/yy) cvv</label>
                <input type="text" placeholder="MM"/>
                <input type="text" placeholder="YY"/>
                <input type="text" placeholder="e.g. 123"/>
                <button type="submit">Confirm</button>
            </form>
        </section>
    )
}