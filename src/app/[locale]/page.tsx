import LinkText from "@/components/atomic/LinkText";
import { Box, List, ListItem } from "@mui/material";

export default function Page() {
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
