import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Box
      style={{
        background:
          "linear-gradient(315deg, rgba(101,0,94,1) 3%, rgba(60,132,206,1) 38%, rgba(48,238,226,1) 68%, rgba(255,25,25,1) 98%)",
        animation: "gradient 15s ease infinite",
        backgroundSize: "400% 400%",
        backgroundAttachment: "fixed",
        minHeight: "100vh", // Ensure it covers full height
      }}
    >
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          // Removed bg="white" to make it transparent
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          // Removed borderWidth to eliminate the border
          backdropFilter="blur(10px)" // Optional: Add a blur effect to the background
        >
          <Text
            fontSize="6xl"
            fontFamily="Work sans"
            color="white"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
            letterSpacing="wider"
            textAlign="center"
            animation="pulse 2s infinite"
            _hover={{ color: "teal.300" }}
          >
            Coco_Chat
          </Text>

          <style>
            {`
              @keyframes pulse {
                0% {
                  transform: scale(1);
                }
                50% {
                  transform: scale(1.05);
                }
                100% {
                  transform: scale(1);
                }
              }
            `}
          </style>
        </Box>
        <Box
          w="100%"
          p={4}
          borderRadius="lg"
          // Removed borderWidth to eliminate the border
          style={{
            background:
              "linear-gradient(315deg, rgba(101,0,94,1) 3%, rgba(60,132,206,1) 38%, rgba(48,238,226,1) 68%, rgba(255,25,25,1) 98%)",
            animation: "gradient 15s ease infinite",
            backgroundSize: "400% 400%",
            backgroundAttachment: "fixed",
          }}
        >
          <Tabs isFitted variant="soft-rounded">
            <TabList mb="1em">
              <Tab color="white">Login</Tab>
              <Tab color="white">Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </Box>
  );
}

export default Homepage;
