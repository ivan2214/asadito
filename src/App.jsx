import {
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "./firebase/firebase";

function App() {
  const [persona, setPersona] = useState([]);
  const [input, setInput] = useState({
    name: "",
    apellido: "",
  });

  const onChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  async function getPersonas() {
    /* const querySnapshot = await getDocs(collection(db, "personas"));
    querySnapshot.forEach((doc) => {
      console.log(doc);
      console.log(doc.data());
    }); */
    const data = await getDocs(collection(db, "personas"));
    setPersona(
      data.docs.map((e) => {
        return { ...e.data(), id: e.id };
      })
    );
  }

  useEffect(() => {
    getPersonas();
  }, [persona.length]);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "personas"), {
        ...input,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setInput({
      name: "",
      apellido: "",
    });
  };

  const handleDelete = async (e) => {
    const personaDoc = doc(db, "personas", e);
    await deleteDoc(personaDoc);
  };

  console.log(persona);
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      width="100%"
      minH="100vh"
      bg="gray.900"
    >
      <Flex
        direction="row"
        align="center"
        justify="center"
        width="100%"
        minH="100vh"
        wrap="wrap"
        padding="20"
      >
        <form style={{ width: "70%" }} onSubmit={(e) => onSubmit(e)}>
          <Flex direction="column" width="100%" gap="5">
            <Box>
              <FormLabel htmlFor="name" color="whiteAlpha.900">
                Nombre del gay
              </FormLabel>
              <Input
                value={input.name}
                id="name"
                color="whiteAlpha.900"
                name="name"
                onChange={(e) => onChange(e)}
                type="text"
              />
            </Box>
            <Box>
              <FormLabel htmlFor="apellido" color="whiteAlpha.900">
                apellido del payo
              </FormLabel>
              <Input
                value={input.apellido}
                id="apellido"
                color="whiteAlpha.900"
                name="apellido"
                onChange={(e) => onChange(e)}
                type="text"
              />
            </Box>
            {input.name.length > 2 ? (
              <Button colorScheme="whatsapp" type="submit">
                agregar
              </Button>
            ) : (
              <Button disabled colorScheme="whatsapp" type="submit">
                agregar
              </Button>
            )}
          </Flex>
        </form>

        <Container p="10" bg="gray.900">
          {persona?.map((e, i) => {
            console.log(e.id);
            return (
              <Box
                display="flex"
                gap="10"
                p="2"
                transition="ease"
                transitionDuration="1s"
                key={i}
              >
                <Text
                  textTransform="capitalize"
                  color="whiteAlpha.900"
                  fontSize="lg"
                >
                  😋🎉 {e.name} {e.apellido}
                </Text>
                <Button
                  colorScheme="red"
                  onClick={() => handleDelete(e.id)}
                  type="submit"
                >
                  Eliminar
                </Button>
              </Box>
            );
          })}
        </Container>
      </Flex>
    </Flex>
  );
}

export default App;
