import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';

import speedSvg from '../.././assets/speed.svg';
import accelerationSvg from '../.././assets/acceleration.svg';
import forceSvg from '../.././assets/force.svg';
import gasolineSvg from '../.././assets/gasoline.svg';
import exchangeSvg from '../.././assets/exchange.svg';
import peopleSvg from '../.././assets/people.svg';

import { 
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About,
    Acessories,
    Footer
 } from './styles';

export function CarDetails() {
  const navigation = useNavigation();

  function handleConfirmRental(){
    navigation.navigate('Scheduling');
  }

  return (
    <Container>
        <Header>
            <BackButton onPress={() => {}} />
        </Header>

        <CarImages>
          <ImageSlider 
            imagesUrl={['https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png']}
          />
        </CarImages>

        <Content>
          <Details>
            <Description>
              <Brand>Lamborghini</Brand>
              <Name>Huracan</Name>
            </Description>

            <Rent>
              <Period>Ao dia</Period>
              <Price>R$ 580</Price>
            </Rent>
          </Details>

          <Acessories>
            <Acessory name="380Km/h" icon={speedSvg}/>
            <Acessory name="3.2s" icon={accelerationSvg}/>
            <Acessory name="800 HP" icon={forceSvg}/>
            <Acessory name="Gasolina" icon={gasolineSvg}/>
            <Acessory name="Auto" icon={exchangeSvg}/>
            <Acessory name="2 pessoas" icon={peopleSvg}/>
          </Acessories>

          <About>
            Este automóvel é desportivo. Surgiu do ledário
            touro de lide indultado na praça Real Maestranza de Sevilla.
            É um belíssimo carro para quem gosta de acelerar.
          </About>
        </Content>

        <Footer>
          <Button title='Escolher período do aluguel' onPress={handleConfirmRental}/>
        </Footer>

    </Container>
  );
}