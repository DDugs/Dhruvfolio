import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './AchievementsStyle'
import AchievementsCard from '../Cards/AchievementsCard'
import { achievements } from '../../data/constants'


const Achievements = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="achievements">
      <Wrapper>
        <Title>Achievements</Title>
        <Desc>
          Throughout my journey, I have achieved significant milestones, each contributing to my growth and expertise
        </Desc>
        <CardContainer>
          {toggle === 'all' && achievements
            .map((achievement) => (
              <AchievementsCard achievement={achievement} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {achievements
            .filter((item) => item.category == toggle)
            .map((achievement) => (
              <AchievementsCard achievement={achievement} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Achievements
