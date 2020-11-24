// import React, { Component } from "react";
// import { connect } from 'react-redux';// 1.{connect} is used to connect for <Header/> with HOC
// import { Link } from "react-router-dom"; 

import React, { Component } from 'react';
import { connect } from 'react-redux';// 1.{connect} is used to connect for <Header/> with HOC
import { Link } from 'react-router-dom';

class Header extends Component {

     renderContent(){ 
         switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>;
            default:
                return <li><a href="/api/logout">Logout</a></li>; 
         } 
     }

     render(){
          console.log(this.props)
     }



}
class Header extends Component {
    
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login with Google</a></li>;
            default:
                return <li><a href="/api/logout">Logout</a></li>;
        }
    }
    
    render() {

        console.log(this.props)
        return (

            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? '/main' : '/'} className="left brand-logo">
                        Trip Memo
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                        {/* {this.props.auth === null ? <div></div> : this.props.auth === false ? <li><a href="/auth/google">Login with Google</a></li> : <li><a href="/api/logout">Logout</a></li>} */}
                    </ul>
                </div>
            </nav>
    );
    }
}

// To create mapStateToProps function to props auth reducers as parameter
function mapStateToProps({ auth }) {
    return { auth };
}

// To props {auth} reducer for <Header /> using connect(mapStateToProps)(使いたい場所) 
// HOC is High Oder Components, in this case, it is used as connect()()
export default connect(mapStateToProps)(Header);
