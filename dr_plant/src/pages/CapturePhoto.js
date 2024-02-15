import React from 'react'
import { Flex, Box, Button } from '@chakra-ui/react';
import { useNavigate, useLocation } from "react-router-dom";

import BananaTree from '../images/BananaTree.png'
import SnakePlant from '../images/SnakePlant.png'
import Philodendron from '../images/Philodendron.png'
import BirdofParadise from '../images/BirdofParadise.png'

import Photo from '../images/photo.png'
import Snap from '../images/Snap.png'


function CapturePhoto() {
    const navigate = useNavigate();
    const location = useLocation();

    const plantImages = {
        'SnakePlant': SnakePlant,
        'BananaTree': BananaTree,
        'BirdofParadise': BirdofParadise,
        'Philodendron': Philodendron,
    };

    const { plantName, plantType } = location.state || {}; 
    console.log(location.state)

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
            <Box bg="#393838" 
                fontFamily="Quicksand" 
                width="100%" 
                alignSelf="center" 
                textAlign="center" 
                paddingTop="80px"  
                fontWeight="semibold" 
                fontSize="25px"
                height="163px"
                color="white"
            >center the plant in the frame</Box>
            <Box as="img" src={Photo}></Box>
            <Flex bg="#393838" height="100%" justifyContent="center" width="100%" alignItems="center">
                <Box as="img" src={Snap} _hover={{ cursor: "pointer"}} onClick={() => navigate("/Results", { state: { plantName: plantName, plantType: plantType }} )}></Box>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default CapturePhoto