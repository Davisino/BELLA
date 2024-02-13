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
import MessageBox from "../components/MessageBox";
import { ServerResponse } from "http";

export default function Page() {
  const [value, setValue] = useState("");
  const [inputStorage, setInputStorage] = useState<String[]>([]);
  const [serverResponse, setServerResponse] = useState<any[]>([]);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isChatWitBELLA, setChatWithBELLA] = useState(true);
  const editIcon = <CiEdit />;
  const micIcon = <FaMicrophone />;

  async function handleUserQuery(userQuery: string) {
    try {
      const response = await fetch("/api/product", {
        method: "POST",
        headers: {
          "content-type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(userQuery),
      });

      const data = await response.json();
      return data.message;
    } catch (error) {
      console.log("Error fetching output response", error);
    }
  }
  function processUserInput() {
    // Display user input to screen
    setInputStorage([...inputStorage, value]);
    // Get response from BELLA
    const response = {
      text: handleUserQuery(value),
      imageUrl: dogImage,
    };

    // Remove user input from input bar
    setValue("");
    // Display response to screen
    setServerResponse([...serverResponse, response]);
  }

  return (
    <Center style={{ padding: "10px 50px 10px 50px" }}>
      <Grid grow gutter="xs" style={{ height: "auto", maxWidth: "1000px" }}>
        <Grid.Col span={isMobile ? 12 : 4}>
          <Button
            style={{ minWidth: "400px" }}
            justify="space-between"
            fullWidth
            leftSection={editIcon}
            variant="default"
            onClick={() => setChatWithBELLA(true)}
          >
            chat with bella
          </Button>
        </Grid.Col>
        <Grid.Col span={isMobile ? 12 : 4}>
          <Button
            style={{ minWidth: "400px" }}
            justify="space-between"
            fullWidth
            leftSection={micIcon}
            variant="default"
            onClick={() => setChatWithBELLA(false)}
          >
            talk to bella
          </Button>
        </Grid.Col>
        <Grid.Col span={12}>
          <div
            id="output-body"
            style={{
              maxHeight: "550px",
              overflow: "scroll",
            }}
          >
            {inputStorage.map((text, index: any) => {
              const outputQuery = serverResponse[index];
              return (
                <div key={index}>
                  <MessageBox text={text} key={index}></MessageBox>

                  <div>
                    {/* <Image
                      src={outputQuery.imageUrl}
                      alt={`Image ${index}`}
                      width={100}
                      height={100}
                    /> */}
                    <p>
                      Answer: In a banana there are approximatelly 100kcal{" "}
                      {/* {outputQuery.text} */}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Grid.Col>

        {isChatWitBELLA == true ? (
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
        ) : (
          <Grid.Col style={{ width: "100%" }} span={12}>
            <div>Talk to Bella</div>
          </Grid.Col>
        )}
      </Grid>
    </Center>
  );
}
