import React from 'react';
import { ScreenProps } from 'react-native-screens';
import { Lists as ListsContent } from '../../components';

// type TabScreenProps = {
//   navigation: {
//     jumpTo: (arg0: string) => void;
//
//     goBack: () => void;
//     navigate: (arg0: string) => void;
//     reset: (arg0: { index: number; routes: { name: string }[] }) => void;
//     setParams: (arg0: { list: { name: string } }) => void;
//     dispatch: (arg0: { type: string; payload: { name: string } }) => void;
//     isFocused: () => boolean;
//     canGoBack: () => boolean;
//     getId: () => string;
//     getParent: () => string;
//     getState: () => { key: string; routeNames: string[]; routes: any[] };
//     addListener: (
//       arg0: string,
//       arg1: (arg0: { name: string }) => void,
//     ) => { remove: () => void };
//     removeListener: (
//       arg0: string,
//       arg1: (arg0: { name: string }) => void,
//     ) => void;
//     setOptions: (arg0: { headerTitle: string }) => void;
//   };
//   route: {
//     name: string;
//     key: string;
//   };
// };
console.log('');
// type StackScreenProps = {
//   navigation: {
//     replace: (arg0: string) => void;
//     push: (arg0: string) => void;
//     pop: () => void;
//     popToTop: () => void;
//     ...
//   };
//   route: {...};
// };
console.log('');
// type DrawerScreenProps = {
//   navigation: {
//     jumpTo: (arg0: string) => void;
//     closeDrawer: () => void;
//     openDrawer: () => void;
//     toggleDrawer: () => void;
//     ...
//   };
//   route: {...};
// };

export function Lists(props: ScreenProps): JSX.Element {
  console.log(
    'Lists props',
    JSON.stringify(
      props,
      (key, val) => {
        return typeof val === 'function' ? val + '' : val;
      },
      4,
    ),
  );
  return <ListsContent />;
}
