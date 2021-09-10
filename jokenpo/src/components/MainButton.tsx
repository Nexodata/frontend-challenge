import { ReactNode } from "react";
import { typeRockPaperScissors } from "../utils";
import { IconPaper, IconRock, IconScissors } from "./Icons";

type RPSType = { rock: string, paper: string, scissors: string };
type RPSIcons = { rock: ReactNode, paper: ReactNode, scissors: ReactNode };

interface RPSButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  choice?: typeRockPaperScissors;
}

export function RPSButton(props: RPSButtonProps) {
    const borderColor: RPSType = {
      rock: "#27AE60",
      paper: "#F1C40F",
      scissors: "#2980B9",
    }
    const IconsToRender: RPSIcons = {
      rock: <IconRock />,
      paper: <IconPaper />,
      scissors: <IconScissors />,
    }
  
    return (
      <button
        className="MainButton"
        style={{ border: `16px solid ${borderColor[props.choice || "rock"]}` }}
        onClick={props.onClick}
      >
        {IconsToRender[props.choice || "rock"]}
      </button>
    )
}
