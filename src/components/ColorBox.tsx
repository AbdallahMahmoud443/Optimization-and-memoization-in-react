import { memo } from "react";
/**
 * Shallow comparison, also known as reference comparison, is the process of comparing two objects by their memory location or reference. In other words, shallow comparison checks if two objects point to the same memory location.
 */
interface IProps {
  boxStyleObj: {
    backgroundColor: string;
    color: string;
  };
}

const ColorBox = ({ boxStyleObj }: IProps) => {
  return (
    <>
      <div>
        <div
          className="flex items-center  justify-center w-20 h-20 rounded-md"
          style={{
            backgroundColor: boxStyleObj.backgroundColor,
            color: boxStyleObj.color,
          }}
        >
          <span>Box</span>
        </div>
      </div>
    </>
  );
};

export default memo(ColorBox);
