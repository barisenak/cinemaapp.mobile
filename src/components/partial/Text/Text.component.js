import React from 'react';
import {Text as RNText} from 'react-native';

import {styles} from './Text.style';

export const Text = ({style, children, ...rest}) => {
  const textStyle = [styles.text, style];

  return (
    <RNText {...rest} style={textStyle}>
      {children}
    </RNText>
  );
};

Text.propTypes = {
  // TODO: install prop-types
};

Text.defaultProps = {
  style: {},
};

export default Text;
