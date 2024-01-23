"use client"; // This is a client component 👈🏽
import { Input, InputWrapper, Center, CloseButton } from "@mantine/core";
import { useState } from "react";
import { Grid } from "@mantine/core";
import edit from "../../../public/edit.svg";
import mic from "../../../public/mic.svg";
import mic_off from "../../../public/mic-off.svg";
import { Button } from "@mantine/core";
import { FaMicrophone } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";

import Image from "next/image";

export default function Page() {
  const [value, setValue] = useState("");

  const edit = <CiEdit />;
  const mic = <FaMicrophone />;
  return (
    <Center>
      <Grid grow gutter="xs">
        <Grid.Col span={4}>
          <Button
            justify="space-between"
            fullWidth
            leftSection={edit}
            variant="default"
            mt="md"
          >
            chat with bella
          </Button>
        </Grid.Col>

        <Grid.Col span={4}>
          <Button
            justify="space-between"
            fullWidth
            leftSection={mic}
            variant="default"
            mt="md"
          >
            talk to bella
          </Button>{" "}
        </Grid.Col>

        <Grid.Col span={6}>
          <InputWrapper
            id="input-demo"
            label="Ask about workout routines or meal plans"
            size="xl"
          >
            <Input
              mt="xl"
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              rightSectionPointerEvents="all"
              id="input-demo"
              placeholder="message BELLA..."
              rightSection={
                <CloseButton
                  aria-label="Clear input"
                  onClick={() => setValue("")}
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
