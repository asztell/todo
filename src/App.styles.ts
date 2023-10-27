import { StyleSheet, Platform } from 'react-native';

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 0;

export const styles = StyleSheet.create({
  statusBariOSPadding: {
    // backgroundColor: '#222',
    // backgroundColor: '#ba2e04',
    backgroundColor: '#801e01',
    height: APPBAR_HEIGHT,
  },
  statusBar: {
    // backgroundColor: '#222',
    // backgroundColor: '#ba2e04',
    backgroundColor: '#801e01',
  },
  container: {
    flex: 1,
    padding: 40,
    marginTop: 40,
    backgroundColor: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 7,
    color: 'green',
  },
  input: {
    borderWidth: 3,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 18,
  },
});

export const stackNavigatorStyles = StyleSheet.create({
  headerStyle: {
    // backgroundColor: '#f4511e',
    // backgroundColor: '#962705',
    backgroundColor: '#ba2e04',
  },
  headerTintColor: {
    color: '#fff',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
});

export const tabNavigatorStyles = StyleSheet.create({
  tabBarActiveTintColor: {
    color: '#821109',
  },
  tabBarLabelStyle: { fontSize: 16, color: '#fff' },
  tabBarStyle: { backgroundColor: '#ba2e04' },
});

export const drawerNavigatorStyles = StyleSheet.create({
  drawerActiveTintColor: {
    backgroundColor: '#bbb',
  },
  drawerLabelStyle: { fontSize: 16, color: '#fff' },
  drawerStyle: { backgroundColor: '#333' },
  headerStyle: {
    // backgroundColor: '#f4511e',
    // backgroundColor: '#962705',
    backgroundColor: '#ba2e04',
  },
  // drawerStyle: { backgroundColor: '#ba2e04' },
});
