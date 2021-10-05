import React, {useState} from "react";
import Card from "../Card/Card";

function Form() {
    let months = ['01','02', '03', '04', '05', '06', '07', '08', '09', '10', '12' ];

    let currentYear = new Date().getFullYear();
    let years = [currentYear]
    for (let i = 1; i < 6; i++){
        years.push(currentYear + i)
    }

    const [cardNumber, setCardNumber] = useState("");
    const [cardHolder, setCardHolder] = useState("");
    const [expMonth, setExpMonth] = useState("");
    const [expYear, setExpYear] = useState("");
    const [cvv, setCVV] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    // let cardDetails;
    const [cardDetails, setCardDetails] = useState({});
    const onSubmit = (e) => {
        e.preventDefault();
        setCardDetails({
            number: cardNumber,
            holder: cardHolder.toUpperCase(),
            month :expMonth,
            year: expYear,
            cvv: cvv
        });
        console.log(cardDetails);      
        setIsSubmitted(true);
        
        console.log(isSubmitted);
    }

    // const creditCardFormat = (e) => {
    //   e.preventDefault();
    //   let val = e.target.value
    //   for (let i = 0; i < val.length; i++){
    //     if (i%4 === 0 && i !== 0){
    //       var newVal = val.concat("  ");
    //     }
    //   }
    //   e.target.value = newVal
    // }
  return (
    <div className="outer-container">
      <div className="p-4 rounded Form">
        <form className="row needs-validation" noValidate>
          <div className="row">
            <div className="col-12">
              <label for="cardNumber" className="form-label">
                Card Number
              </label>
              <input
               type="text" 
               className="form-control" 
               id="cardNumber" 
               placeholder="---- ---- ---- ----"
               onChange={(e) => setCardNumber(e.target.value)} 
               maxlength="19"
               required
               onKeyUp={(e) => e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()}/>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label for="cardName" className="form-label">
                Card Name
              </label>
              <input
               type="text" 
               className="form-control" 
               id="cardName" 
               onChange={(e) => setCardHolder(e.target.value)}
               required/>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="row">
                <label for="expdate" className="form-label">
                  Expiration Date
                </label>
                <div className="col-4">
                  <select
                    className="form-select"
                    onChange={(e) => setExpMonth(e.target.value)}
                    required
                  >
                      <option defaultValue>Month</option>
                      {months.map((month, index) => {
                          return (
                              <option key={index} value={month}>{month}</option>
                          )
                      } )}
                  </select>
                </div>
                <div className="col-4">
                  <select
                    className="form-select"
                    onChange={(e) => setExpYear(e.target.value)}
                    required
                  >
                    <option defaultValue>Year</option>
                    {
                        years.map((year, index) => {
                            return (
                                <option key={index} value={year.toString().slice(2,4)}>{year}</option>
                            )
                        })
                    }
                  </select>
                </div>
              </div>
            </div>
            <div className="col-4">
              <label for="cvv" className="form-label">
                CVV
              </label>
              <input
               type="text"
                className="form-control"
                 id="cvv"
                 placeholder="---"
                 onChange={(e)=> setCVV(e.target.value)}
                 maxlength="3"
                 required/>
            </div>
          </div>

          <div className="row">
            <div className="mt-4 d-grid">
              <button type="submit" className="p-2 btn btn-primary d-block" onClick={onSubmit}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <Card cardDetails={cardDetails} isSubmitted={isSubmitted} />
    </div>
  );
}

export default Form;
