import React from 'react'

const RoadMap = () => {
    return (
        <div className="container privacy-page roadmap">
            <div className="introduction">
                <div className="section">
                    <p> <strong>With the launch of our mainnet, Fantom is looking forward to working with our prospective partners, institutions and service providers. In order to envision the project’s scope, this 2020 Roadmap aims to provide our strong and supportive community and long-term investors with an outline of our business, technical, and marketing goals. The document will be updated in real-time showing our progress.</strong></p>
                    <br />
                    <p>
                        In 2020, and beyond, Fantom believes the following will add monumental value to the community, the organisations we work with, and the technology we have developed:
                    </p>
                </div>
                <div className="section">
                    <h4>Develop a suite of Decentralised Finance (“Defi”) tools: </h4>
                    <ul>
                        <li>FTM (both unlocked and locked) as a collateral to generate stablecoins (such as fUSD, and fEUR, to begin with) and different Synthetics</li>
                        <li>Allow users to access these assets across a variety of different applications (ranging from finance and payment services) while utilising fast confirmation times</li>
                    </ul>
                </div>
                <div className="section">
                    <h4>Transform Go-lachesis Consensus to have Tendermint-like ABCI-compatibility:</h4>
                    <ul>
                        <li>Increase compatibility with a variety of different technologies</li>
                        <li>Expand interoperability with different chains</li>
                    </ul>
                </div>
                <div className="section">
                    <h4>Utilise network speed for solving real-world problems: </h4>
                    <p>We use personal information that we collect about you for the following purposes:</p>
                    <ul>
                        <li>Leverage Fantom’s technology to solve a wide range of real-world problems, ranging from supply chain management, record keeping, to the certification of digital documents	</li>
                        <li>Work with governments and organisations, such as in Afghanistan, to help solve many of the problems they are facing on a day-to-day basis</li>
                    </ul>
                </div>
                <div className="section">
                    <h4>Keep improving the consensus engine:</h4>
                    <p>We have already built a scalable and fast aBFT consensus engine, with considerable effort. We want to take it several steps forward with cutting-edge research and development</p>
                </div>
                <div className="section">
                    <h4>Keep improving the middleware stack:</h4>
                    <p>The current integration with the Ethereum Virtual Machine (EVM) has been incredibly useful. However, there are shortcomings:
                </p>
                    <ul>
                        <li>We have identified several scalability and security concerns due to limitations of the EVM.</li>
                        <li>Working with universities, we aim to research and develop a new middleware stack to replace the EVM, such as a new database and interpreter, while maintaining compatibility with Solidity</li>
                    </ul>
                </div>

                <div className="section decimal-number">
                    <h4>We have structured our roadmap into the following categories:</h4>
                    <ul>
                        <li>Go-lachesis</li>
                        <li>Smart contracts and the Special-fee contract</li>
                        <li>Ecosystem tools</li>
                        <li>Middleware</li>
                        <li>Fantom Expansion and Business Development</li>
                    </ul>
                </div>
                <div className="section">
                    <h4>Go-lachesis</h4>
                    <p>Lachesis is the underlying aBFT consensus engine of Fantom, written in Go. We are working to improve our consensus engine and our Fantom mainnet.</p>
                    <ul>
                        <li>Make Go-lachesis consensus ABCI-compatible:&nbsp;</li>
                        <ul>
                            <li>Implement a Tendermint-like module, which manages blocks database, p2p protocol, and tx pool (more than just consensus). This module may be made closely compatible with Tendermint (Q2)</li>
                            <li>Make Lachesis technology interoperable with different ledgers and services (Q3)</li>
                        </ul>
                        <li>Improve Downtime measurements:&nbsp;&nbsp;</li>
                        <ul>
                            <li>Change "Downtime" to be a measurement for the total amount of time in (mili)seconds that the node was offline since they first started validating (Q1)</li>
                        </ul>
                        <li>Show more data on validator scores:&nbsp;</li>
                        <ul>
                            <li>Remove Proof of Importance metric (Q1)&nbsp;</li>
                            <li>Add Return on rewards metric (accumulated for last N epochs that validator has participated in) (Q2)</li>
                        </ul>


                        <li>Optimise BFT processing and block transactions execution:
                            <ul>
                                <li>Create a parallel pipeline. (Q2)</li>
                                <ul>
                                    <li>The optimization will be effectively evaluated for the network, in which the number of validators exceeds 30, hence the BFT overhead is higher. The total overhead is approximated by <em>max(transactions execution time, BFT algorithm overhead)</em>. (Q2)</li>
                                </ul>
                            </ul>
                        </li>
                        <li>Add monikers to stakers:&nbsp;
                            <ul>
                                <li>Adding names to stakers as immutable strings on the network (Q1)</li>
                            </ul>
                            <ul>
                                <li>Add API call to retrieve validator by name (Q2)</li>
                            </ul>
                        </li>

                        <li>Increase number of validators to 50 (Q4)</li>
                        <li>Implement &ldquo;Fast Stochastic peer selection&rdquo; based on randomised selection of peers when propagating event blocks between nodes: <a target="_blank" href="https://arxiv.org/abs/1911.04629">https://arxiv.org/abs/1911.04629</a> (Q3)</li>
                        <li>Off-chain snapshots for backups, replays and deployments: Currently, for nodes to be fully-synced, they must download each event block one at a time.&nbsp;</li>
                        <ul>
                            <li>Allow nodes to create snapshots (Q2)</li>
                            <li>Nodes will be able to download, load and validate snapshots (Q3)</li>
                            <li>Allow new nodes joining the network to download snapshots and then sync the latest events in realtime (Q3)</li>
                        </ul>
                        <li>Investigate new approaches to predict and identify potential Byzantine faults:</li>
                        <ul>
                            <li>Implement our model on probabilistic BFT <a target="_blank" href="https://arxiv.org/abs/2002.03087">https://arxiv.org/abs/2002.03087</a>, creating superior methods to identify potential cheaters and malicious nodes on the network to maintain high network security (Q3)</li>
                            <li>Add a new validator metric showing trust indicator (Q3)</li>
                        </ul>
                        <li>Optimising txpool:&nbsp;</li>
                        <ul>
                            <li>Simplify the current implementation of txpool to allow transactions to be packed directly into event blocks. This will likely improve event emission rate and speed up consensus (Q3)</li>
                        </ul>
                        <li>Add network capacity metrics transactions/epoch and operations/epoch (Q3)</li>
                        <li>Create a dashboard for monitoring a single validator&rsquo;s overall health (Q2)</li>
                        <li>Eliminate advertising of unreachable peers from the network (Q3)</li>
                        <li>Prune unreachable peers from node&rsquo;s local record (Q3)</li>
                        <li>Increase Lachesis&rsquo;s performance to 20 blocks/second, 40 txns/block on a single test network with a quorum of 30 validators (Q4) &nbsp;&nbsp;&nbsp; </li>
                        <li>Modularize into modules: consensus, gossip and smart contracts (Q3) &nbsp;&nbsp;&nbsp; </li>
                        <li>Add new metrics for validators including Saga points (root/atropos events validated/originated by a node), and number of active epoches (Q3)</li>
                        <li>Enable batching and prefetching off-chain snapshots from Lachesis database for increased performance (Q4)</li>
                        <li>Establish plan for supporting hundreds of watcher nodes (Q4) &nbsp;&nbsp;&nbsp; </li>
                        <li>Create a moderator node to replay and revalidate the blockchain snapshot (Q4)</li>
                        <li>Enable a daily report of the moderator node about Lachesis&rsquo;s operational integrity (Q4) &nbsp;&nbsp;&nbsp; </li>
                        <li>Provide a measurement of peer quality to administrators (Q4)</li>
                        <li>Add fee estimate for transactions (Q2) &nbsp;&nbsp;&nbsp; </li>
                        <li>Show current status of submitted transactions in real-time and notification of users if transactions fail (Q2) &nbsp;&nbsp;&nbsp; </li>
                        <li>Establish deprecation and versioning policy for nodes on the Fantom mainnet (Q2) </li>
                        <li>Versioning of config files (Q1)</li>
                        <li>5 minor Releases a year</li>
                        <ul>
                            <li>April</li>
                            <li>June</li>
                            <li>August</li>
                            <li>October</li>
                            <li>December</li>
                        </ul>
                        <li>3 Protocol upgrades a year</li>
                        <ul>
                            <li>Q2</li>
                            <li>Q3</li>
                            <li>Q4</li>
                        </ul>
                    </ul>
                    <p>&nbsp;</p>
                </div>
                <div className="section">
                    <h4>Lachesis API</h4>
                    <p>Lachesis API is a client-facing API server for the Fantom ecosystem. The API service allows developers to connect their applications to the Fantom mainnet. The Fantom team is working to ensure that the Lachesis API service is up-to-date, accurate and efficient while making the system easy to install and maintain an API instance.</p>
                    <ul>
                        <li >Add transactions that fail in consensus to Lachesis API (Q2)</li>
                        <li >Create technical specification for Lachesis and Lachesis API (Q2)</li>
                        <li >Build new Go SDK for Lachesis API &nbsp;&nbsp;&nbsp; (Q3)</li>
                        <li >Add request mirroring system for load testing (Q4)</li>
                        <li >Establish deprecation, long term support, and versioning policy (Q4)</li>
                        <li >Launch archive system for transaction history, allowing Lachesis API to ingest full history without putting load on Fantom mainnet (Q3)</li>
                        <li >Create an archive server (Q4)</li>
                    </ul>
                    <p>&nbsp;</p>
                    <h4>Smart contracts and the Special-fee Contract</h4>
                    <p>The Special-fee contract (&ldquo;SFC&rdquo;) is a smart contract that governs the distributions of rewards, and maintains a list of validator and delegator addresses.</p>
                    <p>Fantom is also working hard to add a variety of different tools for smart contract developers.</p>
                    <ul>
                        <li >Allow users to use locked rewards to mint fUSD (the USD pegged stable coin) using locked rewards (Q2)</li>
                        <li >Distinguish between rewards, self staked tokens and delegation fees collected from delegators (Q1)</li>
                        <li >Allow users to use locked rewards to mint Synths (Q2)</li>
                        <li >Implement governance contract as the owner of SFC, where Fantom token holders and validators can vote on changes to the SFC (Q3)</li>
                        <li >Implement different penalties to validators and delegators who are labelled as &ldquo;cheaters&rdquo; based validator&rsquo;s prior behaviour (Q2)</li>
                        <li >Implement the ability to vote on proposals and implement them, e.g. improvements to the consensus that require a hardfork (Q3-Q4)</li>
                        <li >Integrate Oracle providers for Synths, Stablecoins, and for developers to use (Q2)</li>
                        <li >ETC added as collateral on Xar Network (Q2)</li>
                        <li >Explore additional assets to be added as collateral on Xar (on-going)</li>
                    </ul>
                    <p>&nbsp;</p>
                    <h4>Ecosystem tools</h4>
                    <p>Ecosystem tools include applications built around Fantom, including the Explorer, Lachesis API service and Fantom wallets (Desktop and Mobile).</p>
                    <ul>
                        <li >Infrastructure</li>
                        <ul>
                            <li >Block explorer (explorer.fantom.network)</li>
                            <li >API service (api.fantom.network)</li>
                            <li >Fantom Web wallet (wallet.fantom.network)</li>
                            <li >RPC service (rpc.fantom.network)</li>
                        </ul>
                        <li >Fantom 2FA (FtmShield - Q4)</li>
                        <li >SDKs (Java, Python) (Q4 2020, Q1-2021)</li>
                    </ul>
                    <p>&nbsp;</p>
                    <h4>Further enhancements to our ecosystem tools</h4>

                    <ul>
                        <li >Add smart contract details on explorer (Q3) including:&nbsp;</li>
                        <ul>
                            <li >Validating Solidity code against contract bytecode</li>
                            <li >List of functions</li>
                            <li >List of data stored</li>
                            <li >Display contract bytecode</li>
                            <li >Functions called per transactions made to it</li>
                        </ul>
                        <li >Add page on current and previous votes (Q3)</li>
                        <li >Add &ldquo;ftrade&rdquo; and &ldquo;flend&rdquo; functionality to web and desktop wallets (Q2)</li>
                        <li >Add ability to generate stablecoins and Synths with web and desktop wallets (Q2)</li>
                        <li >Add additional languages to mobile apps, desktop wallets, and websites (Q2)</li>
                        <li >Revamp current website structure and branding (Q2)</li>
                        <ul>
                            <li >Home</li>
                            <li >Intro to Fantom</li>
                            <li >Staking</li>
                            <li >DeFi</li>
                            <li >What is Opera</li>
                            <li >What is XAR</li>
                            <li >Team</li>
                            <li >Community</li>
                            <li >Blog</li>
                            <li >Revamp developer documentation</li>
                            <li >Revise design</li>
                            <ul>
                                <li >Illustrations</li>
                                <li >Header image</li>
                                <li >Fonts</li>
                                <li >Design system</li>
                                <li >Style guide</li>
                            </ul>
                        </ul>
                        <li >List Desktop wallet build on Mac App Store and Windows Store (Q1)</li>
                        <li >Allow user to send wallet transactions to different validators (Q2)</li>
                        <li >Release branding / press kit (Q1)</li>
                        <li >Launch fantom.finance website (Q1)</li>
                        <li >Collaborating closely with community developers and users to launch community-based applications, such as <a target="_blank" href="https://fantom.rocks/speedtx/">https://fantom.rocks</a> and <a target="_blank" href="https://fantomscan.ovh/dashboard">https://fantomscan.ovh/</a> (Q1-Q4)</li>
                        <li >Add passcodes for locking/unlocking of wallets for increased security (Q2)</li>
                        <li >Change mnemonics from 12 to 24 words for increased security (Q1)</li>
                        <li >Allow users to define custom API queries (e.g., using GraphQL) to query specific data (Q2)</li>
                        <li >Complete Metamask integration guide with Web3JS and Lachesis (Q1)</li>
                        <li >Ledger and Trezor hardware wallets integration for Fantom (Q2)</li>
                        <li >Add push notifications for wallets (Q2)</li>
                        <li >Add bridge support between different FTM tokens directly into the desktop and web wallets (Q2)</li>
                    </ul>
                    <p>&nbsp;</p>
                    <h4>Middleware</h4>
                    <p>In collaboration with the Programming Languages and Compiler Group - University of Sydney, and the Embedded System Languages and Compilers Lab - Yonsei University, Fantom is also focused on researching and developing significantly improved middleware technologies. We have addressed some of the shortcomings of Ethereum in terms of their database, virtual machine, and smart contract security.</p>
                    <ul>
                        <li >Develop new middleware that is compatible with Solidity. Developers should be able to write, compile, and deploy contracts on Fantom, just like with Ethereum. The new middleware is anticipated to be faster and more secure (Q4)</li>
                    </ul>
                    <ul>
                        <li >Publish specifications on new interpreter that interfaces with the database (Q2-Q3)</li>
                        <li >Publish specifications on new database to significantly improve performance of smart contracts (for example, as SLOAD and SSTORE commands increase, the performance of the network degrades) (Q2-Q3)</li>
                        <li >Publish specifications on new Register-based Virtual Machine (RBVM) (Q3-Q4)</li>
                    </ul>
                    <p>&nbsp;</p>
                    <h4>Fantom Expansion and Business Development</h4>
                    <p>We are working to expand Fantom&rsquo;s technologies into real-world adoption across the globe. Using Fantom blockchains can help modernizing and improving out-dated practices while increasing transparency and trust between P2P or B2B interactions, utilising both private and public network solutions.</p>
                    <ul>
                        <li >Launch initial blockchain project:</li>
                        <ul>
                            <li >with Chekkit, Ministry of Health, and 1-2 private companies in Afghanistan (Q1)</li>
                        </ul>
                        <li >Complete initial blockchain project:</li>
                        <ul>
                            <li >with Chekkit, Ministry of Health, and 1-2 private companies in Afghanistan (Q2)</li>
                        </ul>
                    </ul>
                    <ul>
                        <li >Announce additional partnerships in Afghanistan:&nbsp;</li>
                        <ul>
                            <li >With the government and private companies (Q1-Q2)</li>
                        </ul>
                        <li >Expand Fantom technologies into Education, Industry and Health Solutions:&nbsp;</li>
                        <ul>
                            <li >Looking to be developed into various countries such as: Australia, Afghanistan, India, South Africa, England, Zimbabwe, United Arab Emirates and the United States of America (ongoing)</li>
                        </ul>
                        <li >Innovation technological grants:&nbsp;</li>
                        <ul>
                            <li >Competing for government tenders (ongoing)&nbsp;</li>
                        </ul>
                        <li >Progression of token liquidity:&nbsp;</li>
                        <ul>
                            <li >Exposing more countries to Fantom through further listings and utility (ongoing)</li>
                        </ul>
                        <li >Search for talented team members:&nbsp;</li>
                        <ul>
                            <li >To join us as we expand to become a leading blockchain platform (ongoing)</li>
                        </ul>
                        <li >Continue to educate:&nbsp;</li>
                        <ul>
                            <li >The public on Fantom&rsquo;s open-source technology to promote the adoption of blockchain technology and help innovative individuals/companies take advantage of our consensus platform (ongoing)&nbsp;</li>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RoadMap