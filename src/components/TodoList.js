import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Todo from "./Todo";

export default function TodoList() {
  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            variant="h2"
            gutterBottom
            sx={{ color: "text.secondary" }}
          >
            مهامي
          </Typography>
          <Divider />
          {/* Start Filter Buttons */}
          <ToggleButtonGroup
            style={{ direction: "ltr", marginTop: "30px" }}
            // value={alignment}
            exclusive
            // onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="right">غير المنجز</ToggleButton>
            <ToggleButton value="center">المنجز</ToggleButton>
            <ToggleButton value="left">الكل</ToggleButton>
          </ToggleButtonGroup>
          {/* End Filter Buttons */}

          {/* All Todos */}
          <Todo />
        </CardContent>
      </Card>
    </Container>
  );
}
