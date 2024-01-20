import React from "react";
import { createRoot } from "react-dom/client";
import { Paper, Typography, makeStyles, Theme } from "@material-ui/core";

// 適用するCSSクラスの定義
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

// Headコンポーネントのインターフェースを定義
interface HeadProps {
  headline: string;
}

const Head: React.FC<HeadProps> = ({ headline }) => {
  return (
    <Typography variant="h3" component="h1">
      {headline}
    </Typography>
  );
};

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Head headline="Hello World" />
    </Paper>
  );
};

const root = createRoot(document.getElementById("contents")!);
root.render(<App />);

// End
