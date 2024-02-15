import React, { useEffect } from 'react'
import { Flex, Box, Button } from '@chakra-ui/react';
import { useNavigate, useLocation } from "react-router-dom";

import BananaTree from '../images/BananaTree.png'
import SnakePlant from '../images/SnakePlant.png'
import Philodendron from '../images/Philodendron.png'
import BirdofParadise from '../images/BirdofParadise.png'



function CaptureScreen() {
    const navigate = useNavigate();
    const location = useLocation();

    const { plantName, plantType } = location.state || {}; 

    const plantImages = {
        'SnakePlant': SnakePlant,
        'BananaTree': BananaTree,
        'BirdofParadise': BirdofParadise,
        'Philodendron': Philodendron,
    };
    

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
        <Flex width="390px" height="890px" bg="white"  direction="column" alignContent="center">
            <Box bg="#B0D9AC" 
                fontFamily="Quicksand" 
                width="100%" 
                alignSelf="center" 
                textAlign="center" 
                paddingTop="45px"  
                fontWeight="bold" 
                fontSize="50px"
                height="136px"
                borderBottomRadius="12px" 
                color="#348E2B"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            >photo entry</Box>
            <Box alignSelf="center" color="#348E2B" fontWeight="bold" fontSize="20px" marginTop="30px">selected plant:</Box>
            <Box alignSelf="center" color="#575757" fontWeight="bold" fontSize="40px" >{plantName}</Box>
            <Box marginTop="30px" alignSelf="center" height="247px" width="267px" as="img" src={plantImages[plantType]}></Box>
            <Button width="343px" alignSelf="center" height="57px" color="white" bg="#7DE075"  marginTop="auto" _hover={{ backgroundColor: "#78BCA4"}}  onClick={() => navigate("/CapturePhoto", { state: { plantName: plantName, plantType: plantType }} )}>take photo</Button>
            <Button width="343px" alignSelf="center" height="57px" color="white" bg="#6AC162"  marginTop="20px"  _hover={{ backgroundColor: "#78BCA4"}}  onClick={() => handleNavigate("")}>upload photo</Button>
            <Button width="343px" alignSelf="center" height="57px" color="white" bg="#499742"  marginTop="20px" marginBottom="30px" _hover={{ backgroundColor: "#78BCA4"}}  onClick={() => handleNavigate("")}>back to menu</Button>
        </Flex>
    </Flex>
  )
}

export default CaptureScreen