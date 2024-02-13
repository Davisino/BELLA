import { Box } from "@mantine/core";
type props = {
  text: String;
};
export default function MessageBox({ text }: props) {
  return (
    <Box
      style={{
        borderRadius: "50%",
        width: "max-content",
        fontStyle: "italic",
        padding: "20px 0px",
      }}
      className={"messageBox"}
    >
      Query: {text}
    </Box>
  );
}
