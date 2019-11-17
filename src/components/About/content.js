import React from "react"

const Content = () => {
    return(
        <div className="container section">
            <div className="introduction section">
                <h4>
                    Introduction
                </h4>
                <p>
                    <span>Fantom is a series of technology components, </span>
                    that, when combined, form a technology stack that allow a larger ecosystem of applications to be built on top of them.
                </p>
                <p>
                    Our focus is on developing our Lachesis asynchronous Byzantine Fault Tolerance (“aBFT”) and TxFlow consensus mechanisms.
                </p>
                <p>
                    “aBFT” means that transactions are confirmed as fast as possible as they enter the network, instead of waiting for previous transactions to be confirmed. This significantly speeds up the network.
                </p>
                <p>
                    Instead of centralizing all computing power and all usage on a single decentralized ledger, users of the Fantom ecosystem deploy their own independent distributed ledgers with the consensus at its core, while being able to communicate with one another.
                </p>
            </div>
            <div className="introduction section">
                <h4>Why do we need another distributed ledger?</h4>
                <p>
                    If the majority of the enterprises in the world used a single centralized database, transactions would quickly be bottlenecked. 
                </p>
                <p>
                    With the rise of Bitcoin and decentralized smart contract platforms, we have seen an industry-wide calling for a complete migration from centralized networks to a single ledger, to achieve safely, security, and more efficiency. 
                </p>
                <p>
                    Contradictory to these expectations, decentralized networks have found to be inherently less responsive and scalable than their centralized counterparts due to the latency introduced by having multiple nodes communicate to one another.
                </p>
                <p>
                At Fantom we believe in the future of decentralized and permissionless networks, and the potential of distributed ledgers to disrupt legacy systems across a wide range of industries across Finance, supply chain management, and the sharing economy. <br/>But we do not believe that one single ledger is necessarily the solution.
                </p>
                <p>
                    The vision of Fantom is to make it easy for users to deploy and tailor their own distributed ledgers within an interoperable network, in which they can freely communicate and transact with other distributed ledgers.
                </p>
                <p>
                    Our focus isn’t on building the best distributed ledger, but on building the best possible consensus. 
                </p>
                <p>
                    A distributed ledger is considered to be a platform, and the consensus is considered to be a module. Users will be able to deploy their own distributed ledgers which will be powered by Lachesis aBFT and/or TxFlow, in combination with different types of middleware ranging from the Fantom SDK to the Ethereum Virtual Machine (EVM).
                </p>
            </div>
            <div className="introduction section">
                <h4>What are Lachesis aBFT and TxFlow?</h4>
                <p>
                    <span>Lachesis aBFT </span>is a Fantom’s core asynchronous and leaderless byzantine fault tolerant consensus protocol
                </p>
                <p>
                    It is based on principles about gossip protocols where small bits of information are propagated throughout the network rapidly. Distributed ledgers deployed on top of this technology deliver the highest grade of network security, high transaction throughputs, and low time to finality. 
                </p>
                <p>
                    In order to make it as easy as possible to build distributed ledgers tailored to the needs of the user, we designed Lachesis aBFT to be highly adaptable and compatible with existing codebases such as Cosmos SDK and Go-Ethereum.
                </p>
                <p>
                    <span>TxFlow </span>is a protocol for transaction responsiveness. <br/>It is not a new consensus mechanism, but a protocol to run concurrently to consensus wherein users submit transactions and receive confirmations in real time.
                </p>
                <p>
                    Regular consensus systems, such as BFT creating blocks and voting on them, are still required as a secondary—or perhaps rather primary—security mechanism. So if the transaction did not receive enough votes before the block proposal that would have included it, it will still be added.
                </p>
            </div>
            <div className="introduction section">
                <h4>What is finality?</h4>
                <p>
                    Before explaining what finality is and why it is important, let’s backtrack to the <span> double-spending problem.</span>
                </p>
                <p>
                    Double-spending is a problem in which the same digital currency can be spent more than once. 
                </p>
                <p>
                    This is a flaw that is unique to digital assets and currencies, as numbers on a computer are quite simple to reproduce. This problem is comparable to the gift card market, where monetary value is stored in a simple voucher code, which can be reproduced and handed out to multiple people, while it can only be redeemed once. 
                </p>
                <p>
                    To put it simply, finality is knowing that when you buy a cup of coffee, the exact same money cannot be used to buy a cup of tea. 
                </p>
                <p>
                    You transfer value to the cashier, it subtracted from your wallet and added to theirs. This is important because a merchant or service provider would like to make sure they have received the money, before providing their services or transferring the ownership of their goods.
                </p>
                <p>
                    Bitcoin and Ethereum use a consensus mechanism called Proof-of -Work (PoW); in these networks there is a decentralized group of individuals known as miners whom verify that transactions are not double spends. 
                    Transactions are grouped into blocks, which are added synchronously in a sequence like a chain.  In these networks there is a property called the longest chain of work: the chain that most of the nodes or miners support is maintained and the other chains are forked out of consensus. 
                </p>
                <p>
                    Adding blocks to a chain is immensely difficult and costs a lot of computing power, which makes it costly to go back to a previous block and double-spend. In these settings we are never 100% sure that the block a transaction is grouped in is going to be in the longest chain. What can be said however, is that the existence of a longer chain gets lower and lower as more and more blocks are added.
                </p>
                <p>
                    This leads to probabilistic finality, the chance of a double-spend becomes infinitesimally low after X amount of blocks have passed. 
                </p>
                <p>
                    In more recent consensus algorithms such as Tendermint pBFT, Lachesis aBFT, and Casper, we find <span>objective and unambiguous finality.</span>
                </p>
                <p>
                    This is the confidence of knowing that all transactions that have happened up to date are completely valid without even the slightest chance of a double spend having occurred as long as more than ⅔ of consensus partaking nodes are honest. 
                </p>
                <p>
                    These chains do not use the longest chain of work rule to decide on which blocks are added to consensus. Instead of using the longest chain rule, such protocols usually work in the following way:
                </p>
                <p>
                    <ul>
                        <li>A block is proposed by a consensus participating node</li>
                        <li>All validator nodes acknowledge the block once more than ⅔ has sent their pre-commitments.</li>
                        <li>A block is final and included in consensus once a node has received ⅔ commitments for it.</li>
                        <li>Finality is guaranteed unless ⅓ of the validator nodes or more are malicious.</li>
                    </ul>
                </p>
            </div>
            <div className="introduction section">
                <h4>So what’s the TL;DR for Fantom?</h4>
                <p>
                    In a nutshell, Fantom is a set of open-source tools to build all kinds of distributed ledger related products. 
                </p>
                <p>
                    Our focus is on building the best consensus which can be used as a module by those who wish to create a distributed ledger for their needs. 
                </p>
                <p>
                    The Foundation encourages developers and enterprises to form a community to build on top of the consensus and add their own modules to create a product, a community, and an ecosystem of enterprises and developers, whom each build on top of the consensus and add their own modules to create distributed ledger-related products.
                </p>
            </div>
        </div>
    )
}


export default Content