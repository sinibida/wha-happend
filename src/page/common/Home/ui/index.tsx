import LinkText from "@/components/atomic/LinkText";
import { Box, List, ListItem } from "@mui/material";
import React from "react";

export default function HomePage() {
  return (
    <Box>
      <List>
        <ListItem>
          <LinkText href={"/view/bubble-sort"}>Bubble Sort</LinkText>
        </ListItem>
        <ListItem>
          <LinkText href={"/view/insertion-sort"}>Insertion Sort</LinkText>
        </ListItem>
      </List>
    </Box>
  );
}
