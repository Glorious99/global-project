import { Flex, FlexProps } from "../Flex/Flex";

//Omit - из FlexProps исключаем свойство direction
type VStackProps = Omit<FlexProps, "direction" | "ref">;

export const VStack = (props: VStackProps) => {
  const { align = "start" } = props;
  return <Flex {...props} direction="column" align={align} />;
};
