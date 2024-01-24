"use client";
import { useState } from "react";
import {
  Input,
  InputWrapper,
  Center,
  CloseButton,
  Button,
  Grid,
  Textarea,
} from "@mantine/core";
import { FaMicrophone } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { useMediaQuery } from "@mantine/hooks";

export default function Page() {
  const [value, setValue] = useState("");
  const isMobile = useMediaQuery("(max-width: 768px)");

  const editIcon = <CiEdit />;
  const micIcon = <FaMicrophone />;

  return (
    <Center style={{ padding: "10px 50px 10px 50px" }}>
      <Grid grow gutter="xs" style={{ height: "auto", maxWidth: "1000px" }}>
        <Grid.Col span={isMobile ? 12 : 4}>
          <Button
            justify="space-between"
            fullWidth
            leftSection={editIcon}
            variant="default"
            mt="md"
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
            mt="md"
          >
            talk to bella
          </Button>
        </Grid.Col>

        <Grid.Col span={12}>
          <Textarea
            autosize
            id="output-body"
            style={{ maxHeight: "800px", overflow: "scroll" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis
            massa eu ex imperdiet, vel pretium dui imperdiet. Aliquam varius
            varius eros egestas lacinia. Phasellus pretium odio ut tortor
            tincidunt, sed commodo enim ornare. Ut eu est mollis, fermentum orci
            ut, semper enim. Vivamus vel auctor metus. Morbi faucibus ipsum non
            ut, semper enim. Vivamus vel auctor metus. Morbi faucibus ipsum non
            ut, semper enim. Vivamus vel auctor metus. Morbi faucibus ipsum non
            ut, semper enim. Vivamus vel auctor metus. Morbi faucibus ipsum non
            ut, semper enim. Vivamus vel ut, semper enim. Vivamus vel auctor
            metus. Morbi faucibus ipsum non ut, semper enim. Vivamus vel auctor
            metus. Morbi faucibus ipsum non ut, semper enim. Vivamus vel auctor
            metus. Morbi faucibus ipsum non ut, semper enim. Vivamus vel auctor
            metus. Morbi faucibus ipsum non ut, semper enim. Vivamus vel auctor
            metus. Morbi faucibus ipsum non ut, semper enim. Vivamus vel auctor
            metus. Morbi faucibus ipsum non ut, semper enim. Vivamus vel auctor
            metus. Morbi faucibus ipsum non ut, semper enim. Vivamus vel auctor
            metus. Morbi faucibus ipsum non ut, semper enim. Vivamus vel auctor
            metus. Morbi faucibus ipsum non ut, semper enim. Vivamus vel auctor
            metus. Morbi faucibus ipsum non ut, semper enim. Vivamus vel auctor
            metus. Morbi faucibus ipsum non ut, semper enim. Vivamus vel auctor
            metus. Morbi faucibus ipsum non ut, semper enim. Vivamus vel auctor
            metus. Morbi faucibus ipsum non auctor metus. Morbi faucibus ipsum
            non ut, semper enim. Vivamus vel auctor metus. Morbi faucibus ipsum
            non odio hendrerit, at finibus neque dictum. Curabitur ut convallis
            lectus. Curabitur vitae erat dui. Aliquam elit purus, rutrum quis
            auctor sit amet, mattis id orci. Vestibulum nec nunc aliquet,
            venenatis augue sit amet, molestie risus. Maecenas vel fringilla
            metus, in ultricies lectus. Duis iaculis elit quis turpis ultrices,
            ut iaculis quam molestie. Nam vel quam nibh. Nam eu pulvinar ante.
            Nunc lacinia magna id ex commodo, eu porta arcu gravida. Donec
            vulputate auctor fringilla. Mauris nec interdum arcu, et tempus
            purus.
          </Textarea>
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
