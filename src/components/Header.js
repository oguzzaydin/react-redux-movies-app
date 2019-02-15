import React, {Component} from 'react';
import {Container, Image, Visibility, Menu} from "semantic-ui-react";
import {fixedMenuStyle, menuStyle} from "../helpers/styleHelper";
import {NavLink, Link} from "react-router-dom";

class Header extends Component {
    state = {
        menuFixed: null,
        overlayFixed: false,
    };
    stickTopMenu = () => this.setState({ menuFixed: null });
    unStickTopMenu = () => this.setState({ menuFixed: false });

    render() {
        const { menuFixed } = this.state;

        return (
            <div>
                <Visibility
                    onBottomPassed={this.stickTopMenu}
                    onBottomVisible={this.unStickTopMenu}
                    once={false}
                >
                    <Menu
                        borderless
                        fixed={menuFixed ? 'top' : undefined}
                        style={menuFixed ? fixedMenuStyle : menuStyle}
                    >
                        <Container text>
                            <Menu.Item as={Link} to="/" exact="true">
                                <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
                            </Menu.Item>
                            <Menu.Item header as={Link} to="/" exact="true">Movie App</Menu.Item>
                            <Menu.Item as={NavLink} to="/movies" exact>
                                Movies
                            </Menu.Item>
                            <Menu.Item as={Link} to="/movies/new" exact="true">Add New</Menu.Item>
                        </Container>
                    </Menu>
                </Visibility>
            </div>
        );
    }
}


export default Header;