import { Flex, Image, Input, Text } from "@chakra-ui/react";
import { ColorSchema } from "../../utils/color";
import React, { useCallback } from "react";

const InputWithTitle = ({ title, value, onChange }) => {
  const handleChange = useCallback(
    (event) => {
      onChange(event.target.value);
    },
    [onChange]
  );
  return (
    <Flex>
      <Text>{title}</Text>
      <Flex>
        <Input value={value} onChange={handleChange} />
      </Flex>
    </Flex>
  );
};

export default React.memo(InputWithTitle);
