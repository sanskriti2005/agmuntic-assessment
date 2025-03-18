import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/actions/productActions";
import {
  Box,
  Spinner,
  Alert,
  SimpleGrid,
  Image,
  Text,
  Heading,
  Button,
  VStack,
  Flex,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  return (
    <Box p={5}>
      <Flex width={"100%"} justify={"space-between"} >
        <Heading mb={5}>Product List</Heading>
        <Navbar />
      </Flex>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </Box>
  );
}

export default App;
