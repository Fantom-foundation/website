import React from "react"

const OffersSection = () => {
    return(
        <div className="offers-section container section">
            <div className="offer">
                <h2>Built with the future in mind</h2>
                <p>Fantom offers the most powerful foundations for decentralized ledgers. </p>
            </div>
            <div className="offer-group">
                <div className="Scalable offer-item">
                    <div className="offer-text">
                        <h4>Scalable</h4>
                        <p>Our consensus mechanisms — Lachesis and TxFlow — can scale where others cannot.</p>
                    </div>
                    <div className="offer-icon">
                        <img src="/images/offer-icon/scalable.svg" alt="" />
                    </div>
                </div>
                <div className="Secure offer-item">
                    <div className="offer-text">
                        <h4>Secure</h4>
                        <p>Asynchronous Byzantine Fault Tolerant consensus mechanisms provide bank-grade security for any distributed ledger application.</p>
                    </div>
                    <div className="offer-icon">
                        <img src="/images/offer-icon/secure.svg" alt="" />
                    </div>
                </div>
                <div className="Fast offer-item">
                    <div className="offer-text">
                        <h4>Fast</h4>
                        <p>Fantom consensus is designed to support high throughput, while maintaining security, responsivity, and quick settlements.</p>
                    </div>
                    <div className="offer-icon">
                        <img src="/images/offer-icon/fast.svg" alt="" />
                    </div>
                </div>
                <div className="Connected offer-item">
                    <div className="offer-text">
                        <h4>Connected</h4>
                        <p>Products and blockchains using Fantom SDK can interact with each other through non-custodial bridges and bonded tokens.</p>
                    </div>
                    <div className="offer-icon">
                        <img src="/images/offer-icon/Connected.svg" alt="" />
                    </div>
                </div>
                <div className="Permissionless offer-item">
                    <div className="offer-text">
                        <h4>Permissionless</h4>
                        <p>We designed Fantom SDK to be used with networks that are secured through Proof-of-Stake, with on-chain governance for maximum network participation.</p>
                    </div>
                    <div className="offer-icon">
                        <img src="/images/offer-icon/Permissionless.svg" alt="" />
                    </div>
                </div>
                <div className="Open-source offer-item">
                    <div className="offer-text"> 
                        <h4>Open-source</h4>
                        <p>All code, research, and repositories created by the Fantom core development team are available publicly for peer review and improvements.</p>
                    </div>
                    <div className="offer-icon">
                        <img src="/images/offer-icon/open source.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OffersSection