import React, { useState, useEffect } from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

import BananaTree from '../images/BananaTree.png'
import SnakePlant from '../images/SnakePlant.png'
import Philodendron from '../images/Philodendron.png'
import BirdofParadise from '../images/BirdofParadise.png'


function PlantLibrary() {
    const navigate = useNavigate();

    const [plantProfiles, setPlantProfiles] = useState([]);
    const plantImages = {
        'SnakePlant': SnakePlant,
        'BananaTree': BananaTree,
        'BirdofParadise': BirdofParadise,
        'Philodendron': Philodendron,
    };


    // Fetch plant profiles from the backend API
    useEffect(() => {
        fetchPlantProfiles();
    }, []);

    const fetchPlantProfiles = async () => {
        try {
            const response = await fetch('http://localhost:8080/getPlantProfiles/1'); // Assuming user_id is always 1
            if (!response.ok) {
                throw new Error('Failed to fetch plant profiles');
            }
            const data = await response.json();
            setPlantProfiles(data);
        } catch (error) {
            console.error('Error fetching plant profiles:', error.message);
        }
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
            >plant library</Box>
                {plantProfiles.map((profile, index) => (
                    <Flex key={index} alignItems="center" justifyContent="center"  marginTop="30px">
                        <Box as="img" src={plantImages[profile.plant_type]} height="100px" width="100px" marginRight="10px" />
                        <Box fontSize="20px" fontWeight="bold" color="#393838">{profile.plant_name}</Box>
                    </Flex>
                ))}
            <Button width="343px" alignSelf="center" height="57px" color="white" bg="#499742"  marginTop="auto" marginBottom="30px" _hover={{ backgroundColor: "#78BCA4"}}  onClick={() => handleNavigate("")}>back to menu</Button>
        </Flex>
    </Flex>
  )
}

export default PlantLibrary