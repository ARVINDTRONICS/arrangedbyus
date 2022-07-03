import React from "react";
import { Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";


export const TextInput = ({ label, placeholder, size, helpText,type }) => {
  return (
    <FormControl>
      <FormLabel htmlFor="email">{label}</FormLabel>
      <Input
        type={type}
        focusBorderColor="orange.400"
        variant="outline"
        placeholder={placeholder}
        size={size}
      />
      {helpText && <FormHelperText>{helpText}</FormHelperText>}
    </FormControl>
  );
};
