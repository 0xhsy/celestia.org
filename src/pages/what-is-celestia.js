import * as React from "react";
import Layout from "../components/layout";
import { FooterBoxes } from "../datas/technology/content";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import ArrowIcon from "../components/modules/arrow-icon";

const WhatIsCelestia = () => {
	return (
		<Layout footerBoxes={FooterBoxes}>
			<Helmet>
				<title>Celestia - What is Celestia?</title>
			</Helmet>
			<div className={"what-is-celestia"}>
				<main>
					<div className={"container"}>
						<h1 className={"mb-3 mb-md-5"}>What is Celestia</h1>
						<p className={"lead-text"}>
							A complete beginner's guide to how Celestia works, its key benefits, and how anyone in the world will be able to create
							their own blockchain in minutes.
						</p>

						<section className={"card-section"}>
							<div className={"row justify-content-between"}>
								<div className={"order-2 order-lg-1 text-box col-12 col-lg-6"}>
									<p>
										Celestia is a new technology that powers, scales and secures Web3 applications. To achieve this, Celestia
										introduces a new modular blockchain architecture that solves the core scaling problems of today’s blockchains.
									</p>
									<h2 className='subtitle'>Confused?</h2>
									<p>Let’s walk through the basics, step-by-step.</p>
								</div>
								<div className={"image-box--cover order-1 order-lg-2 col-12 col-lg-6"}></div>
							</div>
						</section>

						<section className={"modular-blockchain-section"}>
							<div className={"row justify-content-between align-items-center"}>
								<div className={"text-box col-12 col-lg-6"}>
									<h2 className='title'>But what’s a modular blockchain?</h2>
									<p>
										Modular blockchains are a new paradigm in blockchain design. Instead of one blockchain doing everything,
										modular blockchains specialize and optimize to perform a given function. This specialization provides
										breakthroughs in scalability, flexibility, and interoperability, enabling developers to build blockchain
										applications for mass adoption.
									</p>
								</div>
								<div className={"image-box--modular col-12 col-lg-6"}>
									<StaticImage
										quality={100}
										placeholder={"none"}
										src='../images/what-is-celestia/celestia-monolithic-modular-diagram.png'
									/>
								</div>
							</div>
						</section>

						<section className={"how-different-section"}>
							<div className={"row justify-content-between align-items-center"}>
								<div className={"order-2 order-lg-1 image-box--different col-12 col-lg-6"}>
									<StaticImage quality={100} placeholder={"none"} src='../images/what-is-celestia/celestia-what-is-diagram.png' />
								</div>
								<div className={"order-1 order-lg-2 text-box col-12 col-lg-6"}>
									<h2 className='title'>How is Celestia different from Bitcoin and Ethereum?</h2>
									<p>
										<strong>If Bitcoin is a calculator and Ethereum is a computer, then Celestia is a cloud computer.</strong>
									</p>
									<p>
										Bitcoin showed that it was possible to build a decentralized application but was very limited in what it could
										be used to build.
									</p>
									<p>
										Ethereum showed that it was possible to build a programmable blockchain that anyone could use to launch a
										decentralized application. Celestia will show that it is possible to build a network that enables anyone
										to launch their own blockchain.
									</p>
								</div>
							</div>
						</section>

						<section className={"good-analogy-section"}>
							<div className={"row justify-content-between align-items-center"}>
								<div className={"text-box col-12 col-lg-6"}>
									<h2 className='title'>What’s a good analogy of Celestia?</h2>
									<p>
										Think of Celestia as a power grid, except instead of providing electricity, Celestia provides the essential
										resource to power a blockchain: consensus and data availability. Similar to how anyone can plug into an
										electricity grid to power their appliance, anyone can plug into Celestia’s network to power their own
										blockchain. The Celestia token is the currency you use to pay for electricity.
									</p>
								</div>
								<div className={"image-box--analogy col-12 col-lg-6"}>
									<StaticImage quality={100} placeholder={"none"} src='../images/what-is-celestia/web-celestia-diagram.png' />
								</div>
							</div>
						</section>
					</div>

					<section className={"why-use-section"}>
						<div className={"container text-box"}>
							<div className={"row mb-5 justify-content-center"}>
								<h2 className={"title"}>Why would I use Celestia?</h2>
							</div>
							<div className="row">
								<div className="col-z-index order-2 order-md-1 col-sm-12 col-md-5 col-lg-6 col-xl-4">
									<div className={"row align-items-center gy-3"}>
										<div className={"col-12"}>
											<div className={"why-use-card"}>
												<h3 className={"why-use-title"}>Build blockchains easily</h3>
												<p className={"why-use-text"}>Celestia reduces the cost of deploying and maintaining your own blockchain.</p>
											</div>
										</div>
										<div className={"col-12"}>
											<div className={"why-use-card"}>
												<h3 className={"why-use-title"}>Provides flexibility</h3>
												<p className={"why-use-text"}>Customize your application in a way that suits your needs.</p>
											</div>
										</div>
										<div className={"col-12"}>
											<div className={"why-use-card"}>
												<h3 className={"why-use-title"}>Lowers fees</h3>
												<p className={"why-use-text"}>Celestia reduces the cost of deploying and maintaining your own blockchain.</p>
											</div>
										</div>
									</div>
								</div>
								<div className={"image-box--why order-1 order-md-2 col-sm-12 col-md-7 col-lg-6 col-xl-8"}>
									<StaticImage
										className={"d-md-none d-block"}
										quality={100}
										placeholder={"none"}
										src='../images/what-is-celestia/celestia-infographics-paths-mobile.png'
									/>
									<StaticImage
										className={"d-none d-md-block"}
										quality={100}
										placeholder={"none"}
										src='../images/what-is-celestia/celestia-infographics-paths.png'
									/>
								</div>
							</div>
						</div>
					</section>

					<div className={"container"}>
						<section className={"data-availability-section"}>
							<div className={"row justify-content-between align-items-center"}>
								<div className={"text-box col-12 col-lg-6"}>
									<h2 className='title'>What is data availability and why does it matter?</h2>
									<p>
										Data availability is critical to the security of any blockchain because it ensures that anyone can inspect the
										ledger of transactions and verify it. Data availability answers the question, has the data for this blockchain
										been published?
									</p>
									<p>Users of a monolithic blockchain download all the data to check that it is available.</p>
									<p>
										As blocks get bigger, it becomes impractical for normal users to download all the data meaning that they can’t
										verify the chain. Modular chains solve this problem by making it possible for users to verify very large
										blocks using a technology called data availability sampling.
									</p>
								</div>
								<div className={"image-box--availability col-12 col-lg-6"}>
									<StaticImage
										quality={100}
										placeholder={"none"}
										src='../images/what-is-celestia/celestia-monolithic-modular-approach.png'
									/>
								</div>
							</div>
						</section>

						<section className={"rollups-section"}>
							<div className={"row justify-content-between align-items-center"}>
								<div className={"order-2 order-lg-1 image-box--rollups col-12 col-lg-6"}>
									<StaticImage quality={100} placeholder={"none"} src='../images/what-is-celestia/celestia-transactions.png' />
								</div>
								<div className={"order-1 order-lg-2 text-box col-12 col-lg-6"}>
									<h2 className='title'>What are rollups and how do they work with Celestia?</h2>
									<p>
										Rollups are a type of blockchain that offload some work to a layer 1 like Celestia. Rollups host apps and
										process user transactions. By hosting apps across many different rollups, apps do not have to compete for
										computational resources with each other.
									</p>
									<p>
										Once rollup transactions get processed, they are then published to Celestia. Celestia’s job is to order those
										transactions and check that they are available to download.
									</p>
								</div>
							</div>
						</section>

						<section className={"modularism-section"}>
							<div className={"row justify-content-between align-items-center"}>
								<div className={"text-box col-12 col-lg-6"}>
									<h2 className='title'>Modularism, not Maximalism</h2>
									<p>
										For years, crypto has endured a monolithic blockchain loop. Each new L1 has built a walled-off system, where
										competition is fierce and zero-sum. This leads to maximalism as they all fight over users in their ecosystems.
									</p>
									<p>
										Modular blockchains create a collaborative environment with many connected chains. Each new user that a
										modular blockchain brings in creates value for the whole modular ecosystem, not just a single L1. Modular
										blockchains collaborate while monolithic L1s compete.
									</p>
									<p>Modularism, not maximalism.</p>
								</div>
								<div className={"image-box--modularism col-12 col-lg-6"}>
									<StaticImage quality={100} placeholder={"none"} src='../images/what-is-celestia/monolithic-modular-aproach.png' />
								</div>
							</div>
						</section>

						<section className={"rollups-section"}>
							<div className={"row justify-content-between align-items-center"}>
								<div className={"order-2 order-lg-1 image-box--rollups col-12 col-lg-6"}>
									<StaticImage quality={100} placeholder={"none"} src='../images/what-is-celestia/celestia-connections.png' />
								</div>
								<div className={"order-1 order-lg-2 text-box col-12 col-lg-6"}>
									<h2 className='title'>Layer 0 is social consensus</h2>
									<p>
										To us, the most important layer in blockchains is social consensus. Blockchains are a tool to allow
										communities of people to socially coordinate in a sovereign way. Thus, our vision stems from a deeply held
										core belief: communities have an inalienable right to independently self-organize.
									</p>
									<p>Modular blockchains for sovereign communities.</p>
								</div>
							</div>
						</section>
					</div>

					<section className={"resources-section"}>
						<div className={"container"}>
							<div className={"row mb-5 justify-content-center text-box text-start text-md-center"}>
								<h2 className={"title"}>Additional Resources</h2>
								<p>If you enjoyed this and want to learn more, here are some more resources we suggest you take a look at</p>
							</div>
							<div className={"row gx-3 gy-3 align-items-md-stretch"}>
								<div className={"col-12 col-md-4"}>
									<div className={"d-flex flex-column justify-content-between resource-card"}>
										<div className='mb-4'>
											<h3 className={"card-title"}>FAQ</h3>
											<p className={"card-text"}>Read more about common questions</p>
										</div>
										<Link to={"/faq"} className={"card-link"} type='button'>
											Read now
											<ArrowIcon classList={"ms-3 mb-1"} />
										</Link>
									</div>
								</div>
								<div className={"col-12 col-md-4"}>
									<div className={"d-flex flex-column justify-content-between resource-card"}>
										<div className='mb-4'>
											<h3 className={"card-title"}>Learn Modular</h3>
											<p className={"card-text"}>Dive deeper into Celestia and modular blockchains</p>
										</div>
										<Link to={"/learn"} className={"card-link"} type='button'>
											Read now
											<ArrowIcon classList={"ms-3 mb-1"} />
										</Link>
									</div>
								</div>
								<div className={"col-12 col-md-4"}>
									<div className={"d-flex flex-column justify-content-between resource-card"}>
										<div className='mb-4'>
											<h3 className={"card-title"}>Documentation</h3>
											<p className={"card-text"}>Explore how to build on Celestia</p>
										</div>
										<a href="https://docs.celestia.org/" className={"card-link"} type='button'>
											Read now
											<ArrowIcon classList={"ms-3 mb-1"} />
										</a>
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>
			</div>
		</Layout>
	);
};

export default WhatIsCelestia;