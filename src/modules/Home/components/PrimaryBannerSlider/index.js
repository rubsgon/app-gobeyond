import React from 'react';
import SwiperFlatList from 'react-native-swiper-flatlist'

import { Container, ContainerSlide, ImageSlide, ButtonMore, TextButtonMore } from './styles'

const Slide = ({ item }) => (
    <ContainerSlide >
        <ImageSlide source={{ uri: item.image }} />
        <ButtonMore>
            <TextButtonMore>CONFIRA</TextButtonMore>
        </ButtonMore>
    </ContainerSlide>
)

const PrimaryBannerSlider = ({ data }) => {
    console.log(data)
    
    return (
        <Container>
             <SwiperFlatList
            data={data}
            renderItem={({ item }) => (
              <Slide item={item} />
            )}
          />
        </Container>
      )
}

export default PrimaryBannerSlider