"use client";
import { useState } from "react";
import {
  Input,
  InputWrapper,
  Center,
  CloseButton,
  Button,
  Grid,
} from "@mantine/core";
import { FaMicrophone } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { useMediaQuery } from "@mantine/hooks";
import { IoMdSend } from "react-icons/io";
import Image from "next/image";
import dogImage from "../../../public/German-Shepherd-dog-Alsatian.webp";
export default function Page() {
  const [value, setValue] = useState("");
  const [inputStorage, setInputStorage] = useState<String[]>([]);
  const [serverResponse, setServerResponse] = useState<any[]>([]);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const editIcon = <CiEdit />;
  const micIcon = <FaMicrophone />;

  function processUserInput() {
    // Display user input to screen
    setInputStorage([...inputStorage, value]);
    // Remove user input from input bar
    setValue("");
    // Get response from BELLA
    const response = {
      text: "a picture of a dog",
      imageUrl: dogImage,
    };
    // Display response to screen
    setServerResponse([...serverResponse, response]);
  }

  return (
    <Center style={{ padding: "10px 50px 10px 50px" }}>
      <Grid grow gutter="xs" style={{ height: "auto", maxWidth: "1000px" }}>
        <Grid.Col span={isMobile ? 12 : 4}>
          <Button
            justify="space-between"
            fullWidth
            leftSection={editIcon}
            variant="default"
          >
            chat with bella
          </Button>
        </Grid.Col>

        <Grid.Col span={isMobile ? 12 : 4}>
          <Button
            justify="space-between"
            fullWidth
            leftSection={micIcon}
            variant="default"
          >
            talk to bella
          </Button>
        </Grid.Col>

        <Grid.Col span={12}>
          <div
            id="output-body"
            style={{ maxHeight: "800px", overflow: "scroll" }}
          >
            {inputStorage.map((text, index) => (
              <div key={index}>{text}</div>
            ))}

            {serverResponse.map((item, index) => (
              <div key={index}>
                <Image
                  src={item.imageUrl}
                  alt={`Image ${index}`}
                  width={100}
                  height={100}
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </Grid.Col>
        <Grid.Col span={12}>
          <InputWrapper
            id="input-demo"
            label="Ask about workout routines or meal plans"
            size="xl"
          >
            <Input
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              rightSectionPointerEvents="all"
              placeholder="message BELLA..."
              rightSection={
                <CloseButton
                  aria-label="sent input"
                  icon={<IoMdSend size={18} />}
                  onClick={() => processUserInput()}
                  style={{ display: value ? undefined : "none" }}
                />
              }
            />
          </InputWrapper>
        </Grid.Col>
      </Grid>
    </Center>
  );
}
