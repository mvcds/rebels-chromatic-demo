import { ButtonHTMLAttributes } from "react";
import React, { HTMLProps } from "react";

import "./TextField.css";

type Props = {
  /**
   * We show this text when the value is empty
   */
  placeholder?: string;
  /**
   * We show this text when the value is empty
   */
  disabled?: boolean;
  /**
   * We show this text when the value is empty
   */
  autoFocus?: boolean;
};

function TextField({ disabled = false, ...props }: Props) {
  return <input disabled={disabled} type="text" {...props} />;
}

export default TextField;
