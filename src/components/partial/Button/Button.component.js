import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Text} from 'app/components/partial/Text';

import {styles} from './Button.style';

export const Button = ({type, style, children, disabled, onPress}) => {
  const containerStyle = [styles.container];
  const textStyle = [styles.text];

  if (type === 'primary') {
    containerStyle.push(styles.primaryContainer);
    textStyle.push(styles.primaryText);
  } else if (type === 'textLink') {
    containerStyle.push(styles.linkContainer);
    textStyle.push(styles.linkText);
  } else if (type === 'simple') {
    containerStyle.push(styles.simpleContainer);
    textStyle.push(styles.simpleText);
  }

  if (disabled) {
    containerStyle.push(styles.disabledContainer);
  }

  containerStyle.push(style.container);
  textStyle.push(style.text);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled}
      onPress={onPress}
      style={containerStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  // TODO: install prop-types
};

Button.defaultProps = {
  type: 'default', // default, primary, textLink
  style: {},
};

export default Button;
