import { ButtonHTMLAttributes } from "react";
import React, { HTMLProps } from "react";

import "./TextField.css";

type Props = HTMLProps<HTMLInputElement>;

function TextField(params: Props) {
  return <input type="text" {...params} />;
}

export default TextField;
