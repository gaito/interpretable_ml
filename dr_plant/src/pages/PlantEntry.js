import React, {useState} from 'react';
import { Flex, Box, Button, FormControl, Input, FormLabel, Select, FormErrorMessage } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

import BananaTree from '../images/BananaTree.png'
import SnakePlant from '../images/SnakePlant.png'
import Philodendron from '../images/Philodendron.png'
import BirdofParadise from '../images/BirdofParadise.png'


function PlantEntry() {

    const navigate = useNavigate();
    const [selectedPlant, setSelectedPlant] = useState('SnakePlant');
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleAddPlant = async () => {
        setSubmitted(true);
        try {
          const response = await fetch('http://localhost:8080/addPlantProfile', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              plant_name: name,
              plant_type: selectedPlant,
            }),
          });
          
          if (!response.ok) {
            throw new Error('Failed to add plant profile');
          }
          console.log('Plant profile added successfully');
          navigate('/CaptureScreen', { state: { plantName: name, plantType: selectedPlant } })
        } catch (error) {
          console.error('Error adding plant profile:', error.message);
        }
      };
    


    const handleNavigate = (place) => {
        navigate(`/${place}`);
        };

    const handleNameChange = (e) => setName(e.target.value)

    const isError = name === ''


    const plantImages = {
        'SnakePlant': SnakePlant,
        'BananaTree': BananaTree,
        'BirdofParadise': BirdofParadise,
        'Philodendron': Philodendron,
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
            >plant entry</Box>

            <FormControl marginTop="30px" width="90%" alignSelf="center" isInvalid={isError && submitted}>
                <FormLabel fontSize="25px" color="#575757" fontWeight="bold">plant name</FormLabel>
                <Input  value={name} onChange={handleNameChange} fontSize="20px" fontWeight="semibold"  color="#575757" placeholder='what did you name it?' />
                {isError && submitted && <FormErrorMessage fontWeight='bold'>Name is required.</FormErrorMessage>}

                <FormLabel marginTop="30px"  fontSize="25px" color="#575757" fontWeight="bold">plant type</FormLabel>
                <Select  color="#575757" fontSize="20px" fontWeight="semibold"  onChange={(e) => setSelectedPlant(e.target.value)}>
                    <option value='SnakePlant'>Snake Plant</option>
                    <option value='BananaTree'>Banana Tree</option>
                    <option value='BirdofParadise'>Bird of Paradise</option>
                    <option value='Philodendron'>Philodendron</option>
                </Select>
            </FormControl>
            <Box  color="#575757" fontSize="25px" marginTop="30px" width="90%" alignSelf="center">
                <Box fontWeight="bold">picture of your plant:</Box>
                <Box style={{ marginLeft: "auto", marginRight: "auto" }} as="img" src={plantImages[selectedPlant]} height="222" width="155"></Box>
                <Box fontWeight="semibold" fontSize="15px">prepopulated for the sake of the demo</Box>
            </Box>
            <Button width="343px" alignSelf="center" height="57px" color="white" bg="#6AC162"  marginTop="auto" _hover={{ backgroundColor: "#78BCA4"}}  onClick={() => handleAddPlant()}>enter plant</Button>
            <Button width="343px" alignSelf="center" height="57px" color="white" bg="#499742"  marginTop="30px" marginBottom="30px" _hover={{ backgroundColor: "#78BCA4"}}  onClick={() => handleNavigate("")}>cancel entry</Button>
        </Flex>
    </Flex>
  )
}

export default PlantEntry