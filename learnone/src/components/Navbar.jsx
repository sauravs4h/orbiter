import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  IconButton,
  useDisclosure,
  VStack,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update isMobile state on window resize
  window.addEventListener("resize", () => {
    setIsMobile(window.innerWidth < 768);
  });

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          Your Logo
        </Heading>
      </Flex>
      {isMobile ? (
        <>
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            color="white"
            aria-label="Open Menu"
            onClick={onToggle}
          />
          {isOpen && (
            <Box
              position="absolute"
              top="0"
              right="0"
              left="0"
              bottom="0"
              zIndex="999"
            >
              <VStack
                spacing={4}
                mt="5rem"
                bg="transparent" // Set transparent background
              >
                <Link href="#" onClick={onToggle}>
                  Home
                </Link>
                <Link href="#" onClick={onToggle}>
                  Products
                </Link>
                <Link href="#" onClick={onToggle}>
                  Contact Us
                </Link>
                <Link href="#" onClick={onToggle}>
                  Cart
                </Link>
              </VStack>
            </Box>
          )}
        </>
      ) : (
        <Box display={{ base: "none", md: "block" }}>
          <Flex align="center" justify="center" direction="row" spacing={8}>
            <Link href="#">Home</Link>
            <Link href="#">Products</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">Cart</Link>
          </Flex>
        </Box>
      )}
    </Flex>
  );
};

export default Navbar;
