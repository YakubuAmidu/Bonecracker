import { StatusBar, SafeAreaView } from 'react-native';

// Styled components
import styled from 'styled-components/native';

// SafeArea styled component
export const SafeArea = styled(SafeAreaView)`
 flex: 1;
 ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;