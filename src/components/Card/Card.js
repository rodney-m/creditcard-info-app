import React from 'react'
import Chip from '../../assets/images/chip.png'
import Visa from '../../assets/images/visa.png'
import Map from '../../assets/images/map.png'
import Pattern from '../../assets/images/pattern.png'

function Card({cardDetails, isSubmitted}) {
   
    return (
        <div>
            <div className="virtual-card">
            <div className="shadow-lg card-inner">
                <div className="front">
                    <img src={Map} alt="map" className="map-img" />
                    <div className="card-row">
                        <img src={Chip} alt="chip" width="60px" />
                        <img src={Visa} alt="visa" width="80px" />
                    </div>
                    <div className="card-row card-no">
                        {
                         isSubmitted ?
                         <>
                            <p>{cardDetails.number}</p>
                         </> : 
                         <>
                         <p>####</p>
                         <p>####</p>
                         <p>####</p>
                         <p>####</p>
                         </>
                            
                        }
                        {/* <p>5244</p>
                        <p>2150</p>
                        <p>8250</p>
                        <p>6420</p> */}
                    </div>
                    <div className="card-row card-holder">
                        <p>CARD HOLDER</p>
                        <p>VALID TILL</p>
                    </div>
                    <div className="card-row name">
                        <p>{isSubmitted ? cardDetails.holder : ''}</p>
                        <p> {isSubmitted ? cardDetails.month : ''}/ {isSubmitted ? cardDetails.year : ''}</p>
                    </div>
                </div>
                <div className="back">
                    <img src={Map} alt="map" className="map-img" />
                    <div className="bar"></div>
                    <div className="card-row card-cvv">
                        <div>
                            <img src={Pattern} alt="pattern" />
                        </div>
                        <p>{isSubmitted ? cardDetails.cvv : ''}</p>
                    </div>

                    <div className="card-row signature">
                        <p>CUSTOMER SIGNATURE</p>
                        <img src={Visa} alt="visa" width="80px" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Card
