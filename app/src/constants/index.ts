export type SCREENS_TYPES = 'Camera' | 'Home' | 'Tasks' | 'Profile';
export const SCREENS: { [key in SCREENS_TYPES]: string } = {
  Camera: 'Camera',
  Home: 'Home',
  Profile: 'Profile',
  Tasks: 'Tasks',
};
