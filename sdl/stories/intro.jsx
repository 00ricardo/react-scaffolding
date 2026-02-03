import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
export default function Intro() {
  return (
    <Container maxWidth="lg">
      <Box my={8}>
        <Paper elevation={3} sx={{ padding: 4 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Welcome to your Storybook
            </Typography>
          </div>
        </Paper>
      </Box>
    </Container>
  );
}
