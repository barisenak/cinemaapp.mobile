import React from 'react';
import {TextInput as RNTextInput} from 'react-native';
import {styles} from './TextInput.style';

export const TextInput = ({style, children, ...rest}) => {
  const textInputStyle = [styles.textInput, style];

  return (
    <RNTextInput {...rest} style={textInputStyle}>
      {children}
    </RNTextInput>
  );
};

TextInput.propTypes = {
  // TODO: install prop-types
};

TextInput.defaultProps = {
  style: {},
};

export default TextInput;
