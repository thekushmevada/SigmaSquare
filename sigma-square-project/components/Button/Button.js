import React from "react";

const Button = (props) => {
  const { btnText, className } = props;
  return (
    <button
      class={`bg-[#6F6657] hover:bg-[#4E4A3F] text-[#BBB093] font-bold py-2 px-4 rounded-full ${className}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
