import { Flex, FlexProps } from "../Flex/Flex";

//Omit - из FlexProps исключаем свойство direction
type HStackProps = Omit<FlexProps, "direction" | "ref">;

export const HStack = (props: HStackProps) => {
  return <Flex direction="row" {...props} />;
};
