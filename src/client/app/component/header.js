import React, {Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

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
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  logout() {
    if (!this.props.isLoggingOut) {
      this.props.logout();
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

	render() {
		return (
			<header>
				<div className="header-styles">
					<div className="container-fluid">
						<section className="navbar-header visible-xs">
							<Link to="/" className="navbar-brand">Unlcok The Prize</Link>
							<div className="pull-right navbar-right">
								<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} nav={true}>
		        			<DropdownToggle caret>
										<FontAwesome
									        className='social'
									        name='bars'
									        size='2x'
									        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
									    />
		        			</DropdownToggle>
					        <DropdownMenu right>
					          {!this.props.user && <DropdownItem><Link to="/login">登入<br/>Log In</Link></DropdownItem>}
					          {this.props.user && <DropdownItem><Link to="/logout" onClick={this.logout}>登出<br/>Logout</Link></DropdownItem>}
					        	<DropdownItem divider />
					        	<DropdownItem><Link to="/about">品牌介紹<br/>About</Link></DropdownItem>
					        	<DropdownItem divider />
										<DropdownItem><Link to="/products">產品介紹<br/>Product</Link></DropdownItem>
										<DropdownItem divider />
										<DropdownItem><Link to="/contact">聯絡我們<br/>Contact</Link></DropdownItem>
					        </DropdownMenu>
					      </Dropdown>
							</div>
						</section>
						<div className="hidden-xs">
							<Link to="/"><img src="https://cbchien.github.io/cover/logo-02.png" id="logo"></img></Link>
							<ul className="nav navbar-nav">
								<li className="logo">
									<Link to="/">Unlock The Prize</Link>
								</li>
								<li className="hidden-xs">
									<Link to="/">Road to Unlock</Link>
								</li>
								<li className="hidden-xs">
                  {this.props.user &&
                    <Link to="/">Upload</Link>}
								</li>
							</ul>
							<ul className="nav navbar-nav navbar-right menu-item">
								{!this.props.user && <li>
									<Link to="/login">加入活動<br/>Join</Link>
								</li>}
								{this.props.user && <li>
                  <Link to="/">闖關進度<br/>Achievement</Link>
                </li>}
                {this.props.user && <li>
                  <Link to="/" onClick={this.logout}>登出<br/>Logout</Link>
                </li>}
                <li>
									<Link to="/about">品牌介紹<br/>About</Link>
								</li>
                <li>
									<Link to="/products">產品介紹<br/>Product</Link>
								</li>
								<li>
									<Link to="/contact">聯絡我們<br/>Contact</Link>
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
