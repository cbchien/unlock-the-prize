import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './product-styles.global.css';
import Header from '../header';
import Footer from '../footer';

import dunkel from '../../../../../assets/images/dunkel.png';
import munichlager from '../../../../../assets/images/munichlager.png';
import naturtrub from '../../../../../assets/images/naturtrub.png';
import oktoberfest from '../../../../../assets/images/oktoberfest.png';
import beanbag from '../../../../../assets/images/beanbag.png';
import coffeebean from '../../../../../assets/images/coffeebean.png';

class Products extends Component {
	render() {
		return(
			<section>
				<Header/>
				<div className="product-main">
					<span className="product-main-block">
						<img src={dunkel} className="beer-bottle"></img>
						<img src={dunkel} className="beer-bottle-flipped"></img>
					</span>
					<span className="product-main-block">
						<img src={munichlager} className="beer-bottle"></img>
						<img src={munichlager} className="beer-bottle-flipped"></img>
					</span>
					<span className="product-main-block">
						<img src={naturtrub} className="beer-bottle"></img>
						<img src={naturtrub} className="beer-bottle-flipped"></img>
					</span>
					<span className="product-main-block">						
						<img src={oktoberfest} className="beer-bottle"></img>
						<img src={oktoberfest} className="beer-bottle-flipped"></img>
					</span>
					<span className="product-main-block">
						<img src={oktoberfest} className="beer-bottle"></img>
						<img src={oktoberfest} className="beer-bottle-flipped"></img>
					</span>
					<span className="product-main-block">	
						<img src={oktoberfest} className="beer-bottle"></img>
						<img src={oktoberfest} className="beer-bottle-flipped"></img>
					</span>	
				</div>

				<div className="product-beer-list">
					<div className="product-brief">
						<div className="product-brief-text">
							德國慕尼黑啤酒德國慕尼黑啤酒德國慕尼黑啤酒德國慕尼黑啤酒德國慕尼黑啤酒
							<br/>德國慕尼黑啤酒德國慕尼黑啤酒德國慕尼黑啤酒德國慕尼黑啤酒德國慕尼黑
							<br/>beerbeerbeerbeerbeerbeerbeerbeerbeerbeerbeerbeerbeerbeer
							<br/>beerbeerbeerbeerbeer
						</div>
						<div className="product-brief-img">
							<img src={beanbag} className="product-brief-beanbag"></img>
						</div>
					</div>

					<div className="product-detail-frame-odd">
						<img src={dunkel} className="beer-bottle-left"></img>
						<div className="product-content">
							
							<div>
								<h3>保拉納 德國慕尼黑大麥啤酒</h3>
								<span>
								“檨”仔讀音為“奢”仔，是台灣話芒果的意思，芒果是最具代表性的台灣水果，
								台灣艾爾運用最複雜的發酵工藝，採用多種酵母菌，複製出比利時酸啤酒(lambic)的發酵環境，
								同時加入芒果原汁及青芒果肉，以酸啤酒的形式，與眾不同的將“檨仔”這個最有台灣味的水果完美的表現出來，
								這種酸溜溜的滋味真的就像“情人果”般，令人忍不住一口接一口。
								</span>
							</div>
						</div>
						<div className="product-facts">
							<div className="beer-facts">
								種類：啤酒 <br />
								酒精度：４％ <br />
								容量：330毫升 <br />
								原料：芒果汁、青芒果、大麥芽、酵母菌、乳酸菌、啤酒花 <br />
								保存期限：一年
							</div>
							<img src={coffeebean} className="image-filler"></img>
						</div>
					</div>

					<div className="product-detail-frame-even">
						<img src={munichlager} className="beer-bottle-right"></img>
						<div className="product-content">
							<span>
							“檨”仔讀音為“奢”仔，是台灣話芒果的意思，芒果是最具代表性的台灣水果，
							台灣艾爾運用最複雜的發酵工藝，採用多種酵母菌，複製出比利時酸啤酒(lambic)的發酵環境，
							同時加入芒果原汁及青芒果肉，以酸啤酒的形式，與眾不同的將“檨仔”這個最有台灣味的水果完美的表現出來，
							這種酸溜溜的滋味真的就像“情人果”般，令人忍不住一口接一口。
							</span>
						</div>
						<div className="product-facts">
							<div className="beer-facts">
								種類：啤酒 <br />
								酒精度：４％ <br />
								容量：330毫升 <br />
								原料：芒果汁、青芒果、大麥芽、酵母菌、乳酸菌、啤酒花 <br />
								保存期限：一年
							</div>
							<img src={coffeebean} className="image-filler"></img>
						</div>
					</div>

					<div className="product-detail-frame-odd">
						<img src={dunkel} className="beer-bottle-left"></img>
						<div className="product-content">
							
							<div>
								<h3>保拉納 德國慕尼黑大麥啤酒</h3>
								<span>
								“檨”仔讀音為“奢”仔，是台灣話芒果的意思，芒果是最具代表性的台灣水果，
								台灣艾爾運用最複雜的發酵工藝，採用多種酵母菌，複製出比利時酸啤酒(lambic)的發酵環境，
								同時加入芒果原汁及青芒果肉，以酸啤酒的形式，與眾不同的將“檨仔”這個最有台灣味的水果完美的表現出來，
								這種酸溜溜的滋味真的就像“情人果”般，令人忍不住一口接一口。
								</span>
							</div>
						</div>
						<div className="product-facts">
							<div className="beer-facts">
								種類：啤酒 <br />
								酒精度：４％ <br />
								容量：330毫升 <br />
								原料：芒果汁、青芒果、大麥芽、酵母菌、乳酸菌、啤酒花 <br />
								保存期限：一年
							</div>
							<img src={coffeebean} className="image-filler"></img>
						</div>
					</div>

					<div className="product-detail-frame-even">
						<img src={munichlager} className="beer-bottle-right"></img>
						<div className="product-content">
							<span>
							“檨”仔讀音為“奢”仔，是台灣話芒果的意思，芒果是最具代表性的台灣水果，
							台灣艾爾運用最複雜的發酵工藝，採用多種酵母菌，複製出比利時酸啤酒(lambic)的發酵環境，
							同時加入芒果原汁及青芒果肉，以酸啤酒的形式，與眾不同的將“檨仔”這個最有台灣味的水果完美的表現出來，
							這種酸溜溜的滋味真的就像“情人果”般，令人忍不住一口接一口。
							</span>
						</div>
						<div className="product-facts">
							<div className="beer-facts">
								種類：啤酒 <br />
								酒精度：４％ <br />
								容量：330毫升 <br />
								原料：芒果汁、青芒果、大麥芽、酵母菌、乳酸菌、啤酒花 <br />
								保存期限：一年
							</div>
							<img src={coffeebean} className="image-filler"></img>
						</div>
					</div>

					<div className="product-detail-frame-odd">
						<img src={dunkel} className="beer-bottle-left"></img>
						<div className="product-content">
							
							<div>
								<h3>保拉納 德國慕尼黑大麥啤酒</h3>
								<span>
								“檨”仔讀音為“奢”仔，是台灣話芒果的意思，芒果是最具代表性的台灣水果，
								台灣艾爾運用最複雜的發酵工藝，採用多種酵母菌，複製出比利時酸啤酒(lambic)的發酵環境，
								同時加入芒果原汁及青芒果肉，以酸啤酒的形式，與眾不同的將“檨仔”這個最有台灣味的水果完美的表現出來，
								這種酸溜溜的滋味真的就像“情人果”般，令人忍不住一口接一口。
								</span>
							</div>
						</div>
						<div className="product-facts">
							<div className="beer-facts">
								種類：啤酒 <br />
								酒精度：４％ <br />
								容量：330毫升 <br />
								原料：芒果汁、青芒果、大麥芽、酵母菌、乳酸菌、啤酒花 <br />
								保存期限：一年
							</div>
							<img src={coffeebean} className="image-filler"></img>
						</div>
					</div>

					<div className="product-detail-frame-even">
						<img src={munichlager} className="beer-bottle-right"></img>
						<div className="product-content">
							<span>
							“檨”仔讀音為“奢”仔，是台灣話芒果的意思，芒果是最具代表性的台灣水果，
							台灣艾爾運用最複雜的發酵工藝，採用多種酵母菌，複製出比利時酸啤酒(lambic)的發酵環境，
							同時加入芒果原汁及青芒果肉，以酸啤酒的形式，與眾不同的將“檨仔”這個最有台灣味的水果完美的表現出來，
							這種酸溜溜的滋味真的就像“情人果”般，令人忍不住一口接一口。
							</span>
						</div>
						<div className="product-facts">
							<div className="beer-facts">
								種類：啤酒 <br />
								酒精度：４％ <br />
								容量：330毫升 <br />
								原料：芒果汁、青芒果、大麥芽、酵母菌、乳酸菌、啤酒花 <br />
								保存期限：一年
							</div>
							<img src={coffeebean} className="image-filler"></img>
						</div>
					</div>

				</div>
				<Footer/>
			</section>
		)
	}
}

export default Products;