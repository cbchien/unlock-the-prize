import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  fetchUserStart,
  fetchUserRequest,
  logoutUserStart,
  logoutUserRequest,
} from '../action';

class Heading extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser();
  }

  logout() {
    if (!this.props.isLoggingOut) {
      this.props.logout();
    }
  }

	render() {
		return (
			<header>
				<div className="header-styles">
					<div className="container-fluid">
						<section className="navbar-header visible-xs">
							<Link to="/" className="navbar-brand">JobsOnTheGo</Link>
							<div className="pull-right navbar-right">
								{!this.props.user && <Link to="/login">Log In</Link>}
								{!this.props.user && <Link to="/signup">加入活動 <br/>Join</Link>}
                {this.props.user &&
                  <Link to="/logout" onClick={this.logout}>Logout</Link>}
							</div>
						</section>
						<div className="hidden-xs">
							<img src="https://cbchien.github.io/cover/logo-02.png" id="logo"></img>
							<ul className="nav navbar-nav">
								<li className="logo">
									<Link to="/">Unlock The Prize</Link>
								</li>
								<li className="hidden-xs">
									<Link to="/">Road to Unlock</Link>
								</li>
								<li className="hidden-xs">
                  {this.props.user &&
                    <Link to="/">Achievement</Link>}
								</li>
								<li className="hidden-xs">
                  {this.props.user &&
                    <Link to="/">Upload</Link>}
								</li>
							</ul>
							<ul className="nav navbar-nav navbar-right menu-item">
								{!this.props.user && <li>
									<Link to="/login">登入<br/>Log In</Link>
								</li>}
								{!this.props.user && <li>
									<Link to="/signup">加入活動<br/>Join</Link>
								</li>}
								{this.props.user && <li>
                  <Link to="/">Achievement</Link>
                </li>}
                {this.props.user && <li>
                  <Link to="/" onClick={this.logout}>Logout</Link>
                </li>}
                <li>
									<Link to="/about">品牌介紹<br/>About</Link>
								</li>
                <li>
									<Link to="/about">產品介紹<br/>Product</Link>
								</li>
								<li>
									<Link to="/about">聯絡我們<br/>Contact</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		)
	}
}

const mapStateToProps = state => ({
  user: state.user,
  isLoggingOut: state.isLoggingOut,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => {
    dispatch(fetchUserStart());
    return dispatch(fetchUserRequest());
  },
  logout: () => {
    dispatch(logoutUserStart());
    return dispatch(logoutUserRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Heading);
