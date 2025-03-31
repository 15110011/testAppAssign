import React, {FC, ReactNode} from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {BGRImage} from '../assets';

interface ScreenContainerProps {
  containerScrollViewStyle?: ViewStyle;
  children: ReactNode;
  scrollEnabled?: boolean;
  useBackground?: boolean;
}

const ScreenContainer: FC<ScreenContainerProps> = ({
  containerScrollViewStyle,
  children,
  scrollEnabled = false,
  useBackground = false,
}) => {
  return (
    <ImageBackground
      source={useBackground ? BGRImage : null}
      style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.contentScroll, containerScrollViewStyle]}
        scrollEnabled={scrollEnabled}
        automaticallyAdjustKeyboardInsets={true}
        keyboardDismissMode="interactive">
        <KeyboardAvoidingView
          enabled
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          pointerEvents="box-none">
          {children}
        </KeyboardAvoidingView>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentScroll: {
    // flexGrow: 1,
  },
});

export default ScreenContainer;
