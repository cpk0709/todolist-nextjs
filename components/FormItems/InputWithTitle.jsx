import { Flex, Image, Input, Switch, Text } from "@chakra-ui/react";
import { ColorSchema } from "../../utils/color";
import React from "react";

const InputWithTitle = () => {
  return (
    <Flex>
      <Text>Todo</Text>
      <Flex>
        <Input />
      </Flex>
    </Flex>
  );
};

export default React.memo(InputWithTitle);
