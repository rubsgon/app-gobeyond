import React from 'react';
import { Container, Logo } from './styles'

import corebizLogo from '../../../../images/corebizLogo.png'


const HeaderBar = () => (
    <Container>
        <Logo source={corebizLogo}/>
    </Container>
)

export default HeaderBar