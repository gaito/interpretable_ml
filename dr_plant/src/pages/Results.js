import React, {useState} from 'react';
import { Flex, Box, Button, PopoverTrigger, Popover, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody } from '@chakra-ui/react';
import { useLocation, useNavigate } from "react-router-dom";

import BananaTree from '../images/BananaTree.png'
import SnakePlant from '../images/SnakePlant.png'
import Philodendron from '../images/Philodendron.png'
import BirdofParadise from '../images/BirdofParadise.png'

import BugScreen from '../images/bugscreen.png'
import Arrow from '../images/arrow.png'



function Results() {

    const navigate = useNavigate();
    const location = useLocation();

    const [isPopover1Open, setIsPopover1Open] = useState(false);
    const [isPopover2Open, setIsPopover2Open] = useState(false);
    const [diseasePopUp, setDiseasePopUp] = useState(false);
    const [bugPopUp, setBugPopUp] = useState(false);

    const { plantName, plantType } = location.state || {}; 

    const handleNavigate = (place) => {
        navigate(`/${place}`);
        };

    const handleEllipse2 = () => {
        setIsPopover2Open(true);
    };

    const handleDiseasePopup = () => {
        setDiseasePopUp(true);
    };

    const handleBugPopup = () => {
        setBugPopUp(true);
    };

    const handleEllipse1= (event) => {
        setIsPopover1Open(true);
    };



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
                fontSize="40px"
                height="136px"
                borderBottomRadius="12px" 
                color="#348E2B"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            >ailment detected!</Box>
            <Flex width="90%" alignSelf="center" justifyContent="space-between">
                <Box color="#348E2B" fontWeight="bold" fontSize="20px" marginTop="30px">selected plant:</Box>
                <Box color="#393838" fontWeight="bold" fontSize="20px" marginTop="30px">{plantName}</Box>
            </Flex>
            <Box color="#393838" alignSelf="center" fontWeight="bold" fontSize="15px" marginTop="30px">click on hotspots to learn more:</Box>
            <Popover isOpen={isPopover2Open} onClose={() => setIsPopover2Open(false)}>
                <PopoverTrigger>
                <Box
                    position="absolute"
                    top="405px"
                    left="924px"
                    width="100px"
                    height="100px"
                    borderRadius="50%"
                    border="4px solid transparent"
                    borderColor="white"
                    zIndex="1"
                    cursor="pointer"
                    onClick={() => handleEllipse2()}
                />
                </PopoverTrigger>
                <PopoverContent padding="7px"  width="173px" height="100px" fontFamily="Quicksand" fontWeight="bold" fontSize="14px" bg="#B0D9AC" color="#393838" zIndex="3">
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                        {"Phylium root rot can cause dark, shriveled leaves."}
                    </PopoverBody>
                </PopoverContent>
            </Popover>

            <Popover isOpen={isPopover1Open} onClose={() => setIsPopover1Open(false)}>
                <PopoverTrigger>
                    <Box
                        position="absolute"
                        top="500px"
                        left="1000px"
                        width="100px"
                        height="100px"
                        borderRadius="50%"
                        border="4px solid transparent"
                        borderColor="white"
                        zIndex="1"
                        cursor="pointer"
                        onClick={() => handleEllipse1()}
                    />
                </PopoverTrigger>
                <PopoverContent width="173px" height="110px" fontFamily="Quicksand" fontWeight="bold" fontSize="14px" bg="#B0D9AC" color="#393838" zIndex="3">
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                        {"Thrips are narrow 1/20 in. long insects that often leave black speckles."}
                    </PopoverBody>
                </PopoverContent>
            </Popover>
            <Box as="img" src={BugScreen} alignSelf="center" height="341px" width="306px"></Box>
            <Box color="#393838" alignSelf="center" fontWeight="bold" fontSize="15px" marginTop="5px">click on dropdowns for more info:</Box>
            <Flex width="90%" alignSelf="center" justifyContent="space-between">
                <Box color="#1E1E1E" fontWeight="bold" fontSize="18px" marginTop="2px">Summary</Box>
                <Box color="#1E1E1E" fontWeight="bold" fontSize="18px" marginTop="10px">Confidence</Box>
            </Flex>
            <Flex marginTop="10px" width="90%" alignSelf="center" justifyContent="space-between">
                <Box onClick={() => handleDiseasePopup("")} color="#1E1E1E" fontWeight="bold" fontSize="15px" _hover={{ cursor: "pointer"}}>disease: phylium root rot</Box>
                <Flex onClick={() => handleDiseasePopup("")}  _hover={{ cursor: "pointer"}}>
                    <Box  color="#1E1E1E" fontWeight="bold" fontSize="15px" >67%</Box>
                    <Box  marginTop="2px" marginLeft="2px" height="18px"width="15px" as="img" src={Arrow}></Box>
                </Flex>
            </Flex>
            <Popover isOpen={diseasePopUp} onClose={() => setDiseasePopUp(false)} placement="bottom">
                <PopoverContent                         
                        position="absolute"
                        top="710px"
                        left="880px"
                        width="370px">
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                        {"Phylium root rot, caused by water molds, devastates plant roots, leading to wilting and death. Prompt action within days is vital, as it spreads swiftly in damp conditions. It thrives in poorly drained soil, posing a severe threat plant survival."}
                    </PopoverBody>
                </PopoverContent>
            </Popover>
            <Flex marginTop="10px" width="90%" alignSelf="center" justifyContent="space-between">
                <Box onClick={() => handleBugPopup("")} color="#1E1E1E" fontWeight="bold" fontSize="15px" _hover={{ cursor: "pointer"}}>bug: thrips</Box>
                <Flex onClick={() => handleBugPopup("")}  _hover={{ cursor: "pointer"}}>
                    <Box  color="#1E1E1E" fontWeight="bold" fontSize="15px" >32%</Box>
                    <Box  marginTop="2px" marginLeft="2px" height="18px"width="15px" as="img" src={Arrow}></Box>
                </Flex>
            </Flex>
            <Popover isOpen={bugPopUp} onClose={() => setBugPopUp(false)} placement="bottom">
                <PopoverContent                         
                        position="absolute"
                        top="730px"
                        left="880px"
                        width="370px">
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                        {"Thrip infestations, often following warm weather, can cause silvering and distortion of leaves, leading to stunted growth. Rapid intervention within days is crucial as they multiply swiftly, damaging plants by sucking sap and transmitting diseases."}
                    </PopoverBody>
                </PopoverContent>
            </Popover>
            <Flex width="90%" alignSelf="center" justifyContent="space-between">
                <Box color="#1E1E1E" fontWeight="bold" fontSize="20px" marginTop="10px">Treatment Suggestions</Box>
                <Box color="#1E1E1E" fontWeight="bold" fontSize="18px" marginTop="30px"></Box>
            </Flex>
            <Flex width="90%" flexDirection="column" fontFamily="Quicksand" fontWeight="semibold" color="#1E1E1" fontSize="12" padding alignSelf="center">
                <Box marginBottom="10px">root rot can be treated by cutting affected roots and leaves using sterilized scissors. leave plant out to dry for 24 hours and repot ensuring proper drainage.</Box>
                <Box>spray top and bottom of leaves with insecticidal soap or neem oil. leave for 30 min. then rinse. repeat every two days as needed.</Box>
            </Flex>
            <Button width="100px" alignSelf="center" fontSize="12px" height="20px" color="white" bg="#499742"  marginTop="auto" marginBottom="10px" _hover={{ backgroundColor: "#78BCA4"}}  onClick={() => handleNavigate("")}>menu</Button>
        </Flex>

    </Flex>
    
  )
}

export default Results