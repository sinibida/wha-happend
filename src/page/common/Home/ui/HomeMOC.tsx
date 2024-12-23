import navigationMap from "@/shared/constant/navigation";
import { Box } from "@mui/material";
import HomeMOCItem from "./HomeMOCItem";
import styles from "./HomeMOC.module.css";

export default function HomeMOC() {
  // TODO: 2 column
  return (
    <Box>
      <div className={styles.container}>
      {navigationMap.map((x) => (
        <HomeMOCItem key={x.href} item={x} />
      ))}
      </div>
    </Box>
  );
}
