import React, {Component} from 'react';
import {Container, Image, Visibility, Menu} from "semantic-ui-react";
import {fixedMenuStyle, menuStyle} from "../helpers/styleHelper";
import {Link} from "react-router-dom";

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
                            <Menu.Item>
                                <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
                            </Menu.Item>
                            <Menu.Item header>Movie App</Menu.Item>
                            <Menu.Item as={Link} to="/movies">
                                Movies
                            </Menu.Item>
                            <Menu.Item as='a'>Add New</Menu.Item>
                        </Container>
                    </Menu>
                </Visibility>
            </div>
        );
    }
}


export default Header;