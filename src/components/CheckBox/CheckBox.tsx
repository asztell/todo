import React from 'react';
import { CheckBox as RNECheckBox } from '@rneui/themed';
import { styles } from './CheckBox.style';

export function CheckBox({
  name,
  checked,
  onPress,
}: {
  name: string;
  checked: boolean;
  onPress: (name: string) => void;
}) {
  function onIconPress(): void {
    onPress(name);
  }

  return (
    <RNECheckBox
      size={30}
      checked={checked}
      checkedColor={styles.checkedColor}
      uncheckedColor={styles.uncheckedColor}
      onIconPress={onIconPress}
      // checkedTitle={name}
      // containerStyle={{ width: '75%' }}
      // onLongIconPress={() => console.log('onLongIconPress()')}
      // onLongPress={() => console.log('onLongPress()')}
      // textStyle={{}}
      // title='Check for Awesomeness'
      // titleProps={{}}
    />
  );
}
