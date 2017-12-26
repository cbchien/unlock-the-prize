import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './product-styles.global.css';
import Header from '../header';
import Footer from '../footer';

import dunkel from '../../../../../assets/images/dunkel.png';
import munichlager from '../../../../../assets/images/munichlager.png';
import naturtrub from '../../../../../assets/images/naturtrub.png';
import oktoberfest from '../../../../../assets/images/oktoberfest.png';

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
						<p className="clear"></p>
					</div>

					<div className="product-detail-frame-odd">
						<div className="product-content">
							<span>
							“檨”仔讀音為“奢”仔，是台灣話芒果的意思，芒果是最具代表性的台灣水果，
							台灣艾爾運用最複雜的發酵工藝，採用多種酵母菌，複製出比利時酸啤酒(lambic)的發酵環境，
							同時加入芒果原汁及青芒果肉，以酸啤酒的形式，與眾不同的將“檨仔”這個最有台灣味的水果完美的表現出來，
							這種酸溜溜的滋味真的就像“情人果”般，令人忍不住一口接一口。
							</span>
						</div>
					</div>

					<div className="product-detail-frame-even">
						<div className="product-content">
							<span>
							“檨”仔讀音為“奢”仔，是台灣話芒果的意思，芒果是最具代表性的台灣水果，
							台灣艾爾運用最複雜的發酵工藝，採用多種酵母菌，複製出比利時酸啤酒(lambic)的發酵環境，
							同時加入芒果原汁及青芒果肉，以酸啤酒的形式，與眾不同的將“檨仔”這個最有台灣味的水果完美的表現出來，
							這種酸溜溜的滋味真的就像“情人果”般，令人忍不住一口接一口。
							</span>
						</div>
					</div>

					<div className="product-detail-frame-odd">
						<div className="product-content">
							<span>
							“檨”仔讀音為“奢”仔，是台灣話芒果的意思，芒果是最具代表性的台灣水果，
							台灣艾爾運用最複雜的發酵工藝，採用多種酵母菌，複製出比利時酸啤酒(lambic)的發酵環境，
							同時加入芒果原汁及青芒果肉，以酸啤酒的形式，與眾不同的將“檨仔”這個最有台灣味的水果完美的表現出來，
							這種酸溜溜的滋味真的就像“情人果”般，令人忍不住一口接一口。
							</span>
						</div>
					</div>

					<div className="product-detail-frame-even">
						<div className="product-content">
							<span>
							“檨”仔讀音為“奢”仔，是台灣話芒果的意思，芒果是最具代表性的台灣水果，
							台灣艾爾運用最複雜的發酵工藝，採用多種酵母菌，複製出比利時酸啤酒(lambic)的發酵環境，
							同時加入芒果原汁及青芒果肉，以酸啤酒的形式，與眾不同的將“檨仔”這個最有台灣味的水果完美的表現出來，
							這種酸溜溜的滋味真的就像“情人果”般，令人忍不住一口接一口。
							</span>
						</div>
					</div>

				</div>
				<Footer/>
			</section>
		)
	}
}

export default Products;