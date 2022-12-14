import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img src='/images/simpsons.jpg' alt=''></img>
      </Background>
      <ImageTitle>
        <img src='/images/viewers-disney.png' alt=''></img>
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src='/images/play-icon-black.png' alt=''/>
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src='/images/play-icon-white.png' alt=''/>
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src='/images/group-icon.png' alt='' />
        </GroupWatchButton>
      </Controls>

      <SubTitle>
        2018 * 7m * Family, Fantansy, Kids, Animation
      </SubTitle>
      <Description>
        Nigerian-born economist and international development expert who serves as the 7th Director-General of the World Trade Organization – the woman and African to hold the position. She sits on the Boards of Standard Chartered Bank, Twitter, Global Alliance for Vaccines and Immunization (GAVI), and the African Risk Capacity (ARC).
      </Description>
    </Container>

  )
}

export default Detail

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`
const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-height: 200px;
  margin-top: 40px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const Controls = styled.div`
  display: flex;
  align-items: center; 

`
const PlayButton = styled.div`
  color: rgb(0, 0, 0);
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgba(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover{
    background: rgba(198, 198, 198);

  }

`

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  &:hover{
    background-color: rgba(198, 198, 198, 0.5);
  }

`

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 16px;

  span {
    font-size: 30px;
  }

`
const GroupWatchButton = styled(AddButton)`
  background-color: rgb(0, 0, 0);
`

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px
  color: rgb(249, 249, 249);
  max-width: 760px;

`
