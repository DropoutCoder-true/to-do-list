import { Box, Container, Typography } from "@mui/material";

function App() {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "pink",
        padding: "4rem 3rem",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "3rem",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            backgroundColor: "#F6D6D6",
            color: "black",
            width: "100%",
            alignContent: "center",
          }}
        >
          To Do List
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
