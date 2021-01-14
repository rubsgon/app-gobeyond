import styled from 'styled-components/native'
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window')

export const Container = styled.SafeAreaView({
    flex: 1
})

export const ContainerSlide = styled.View({
    width,
    height: 448
})

export const ImageSlide = styled.Image({
    height: '100%',
})


export const ButtonMore = styled.TouchableOpacity({
    position: 'absolute',
    top: 342,
    left: 21,
    width: 166, 
    height: 50,
    borderColor: '#FFF',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
})

export const TextButtonMore = styled.Text({
   color: '#FFF',
   fontSize: 26
})