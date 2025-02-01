import "../../../../styles/global.scss";
import "./serviceSection.scss";

const ServiceSection = () => {
	return (
		<div>
			<section className="service" id="service">
				<div className="section__container service__container">
					<div className="service__content">
						<p className="section__subheader">BENEFITS OF ADVANCE ROTC</p>
						<h2 className="section__header">Strive For The Best.</h2>
						<ul className="service__list">
							<li>
								<span>
									<i className="ri-shake-hands-fill"></i>
								</span>
								Potential commissioned in the AFP
							</li>
							<li>
								<span>
									<i className="ri-percent-line"></i>
								</span>
								50% discount of tuition when you reach 2nd class
							</li>
							<li>
								<span>
									<i className="ri-cash-line"></i>
								</span>
								cash incentives per semester amounting to PHP 2,000.00
							</li>
							<li>
								<span>
									<i className="ri-file-list-line"></i>
								</span>
								Enlisted into reserve force of the Philippine army under the
								standby reserve
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="section__container banner__container">
				<div className="banner__content">
					<div className="banner__card">
						<h4>300+</h4>
						<p>Cadets per year</p>
					</div>
					<div className="banner__card">
						<h4>30+</h4>
						<p>Advance ROTC Gradute's yearly</p>
					</div>
					<div className="banner__card">
						<h4>300+</h4>
						<p>ROTC Gradute's yearly</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ServiceSection;
