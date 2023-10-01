import { forwardRef } from "react";

//espera la referencia y los props que vienen
export const Input = forwardRef((props, ref) => {
  return (
    <input
      type="text"
      className="bg-zinc-800 px-3 py-2 block my-2 w-full"
      //se manda por referenncia
      ref={ref}
      {...props}
    />
  );
});

export default Input;
