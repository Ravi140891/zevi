import React from 'react'
import './SideBar.scss'
import Checkbox from '../Checkbox/Checkbox'
import Container from '../Container/Container'
import StarRating from '../StarRating/StarRating'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <Container title='Brand'>
            <Checkbox label='Mango' name='Mango'/>
            <Checkbox label='H&M' name='H&M'/>
            <Checkbox label='Zara' name='Zara'/>
            <Checkbox label='Nike' name='Nike'/>
        </Container>
        <Container title='PRICE RANGE'>
            <Checkbox label='under500' name='Under 500'/>
            <Checkbox label='1000to3000' name='1000 To 3000'/>
        </Container>
        <Container title='Ratings'>
            <StarRating rating={5}/>
            <StarRating rating={4}/>
            <StarRating rating={3}/>
            <StarRating rating={2}/>
            <StarRating rating={1}/>
        </Container>
    </div>
  )
}

export default SideBar