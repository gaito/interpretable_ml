import React from 'react'
import { Flex, Box, Button } from '@chakra-ui/react';
import DrPlant from '../images/DrPlant.png';
import Heart from '../images/Heart.png';
import { useNavigate } from "react-router-dom";


function Landing() {
    const navigate = useNavigate();

    const handleNavigate = (place) => {
        navigate(`/${place}`);
      };


  return (
    <Flex       
        justifyContent="center"
        alignItems="center"
        minHeight="100vh" 
        flexDirection="column"
        bg="#1E1E1E"
        fontFamily="Quicksand"
    >
        <Flex width="390px" height="890px" bg="white" justifyContent="center" direction="column">
            <Box as="img" src={DrPlant} alignSelf="center" justifySelf="center"></Box>
            <Box as="img" src={Heart} alignSelf="center" justifySelf="center"></Box>
            <Button width="343px" alignSelf="center" height="57px" color="white" bg="#6AC162" marginTop="30px" _hover={{ backgroundColor: "#78BCA4"}} onClick={() => handleNavigate("PlantEntry")}>enter a new plant</Button>
            <Button width="343px" alignSelf="center" height="57px" color="white" bg="#499742" marginTop="30px" _hover={{ backgroundColor: "#78BCA4"}}  onClick={() => handleNavigate("PlantLibrary")}>choose plant from library</Button>
        </Flex>
    </Flex>
  )
}

export default Landing