import { RotatingLines } from "react-loader-spinner";

type Props = {};

const Loader = (props: Props) => {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="36"
      visible={true}
    />
  );
};

export default Loader;
