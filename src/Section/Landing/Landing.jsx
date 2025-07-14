import React from 'react'
import Hero from '../Hero/Hero'
import MaxWidthWrapper from '../../Components/Wrapper/MaxWidthWrapper'
import Separator from '../../Components/Seprator.jsx/Separator'
import CustomHeading from '../../Components/CustomHeading/CustomHeading'
import Category from '../Category/Category'
import Products from '../Products/Products'
import SliderWith from '../../Components/Slider/SliderWith'
import SliderDeep from '../../Components/Slider/SliderDeep'
import BorderLine from '../../Components/StaticInfo/BorderLine'

const Landing = () => {
     return (
          <div>
               <Hero />
               <MaxWidthWrapper>

                    <Separator />

                    <CustomHeading isReverse={false} Heading={"Browse The Range"} SubHeading={"Dive into the world of our new collection."} />
                    <Category />

                    <Separator />

                    <CustomHeading isReverse={false} Heading={"Our Products"} SubHeading={"Updated daily, discover our latest products."} />
                    <Products />

                    <Separator />

                    <SliderDeep />

                    <Separator />



               </MaxWidthWrapper>
               <CustomHeading isReverse={true} Heading={"#FuniroFurniture"} SubHeading={"Share your setup with"} />

               <img
                    src="/img/grid.png"
                    alt="Shop Banner"
                    className="w-full h-auto object-cover "
               />

               <Separator />
               <BorderLine />

          </div>
     )
}

export default Landing
