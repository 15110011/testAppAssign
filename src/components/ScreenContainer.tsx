import React, {FC, ReactNode} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  ViewStyle,
  View,
} from 'react-native';
import {BGRImage} from '../assets';
import {SafeAreaView} from 'react-native-safe-area-context';

interface ScreenContainerProps {
  containerScrollViewStyle?: ViewStyle;
  children: ReactNode;
  scrollEnabled?: boolean;
  useBackground?: boolean;
  style?: ViewStyle;
  isScrollView?: boolean;
}

const ScreenContainer: FC<ScreenContainerProps> = ({
  containerScrollViewStyle,
  children,
  scrollEnabled = false,
  useBackground = false,
  style,
  isScrollView = false,
}) => {
  return (
    <ImageBackground
      source={useBackground ? BGRImage : null}
      style={[styles.container]}>
      <SafeAreaView edges={['right', 'top', 'left']} style={styles.flex}>
        {isScrollView ? (
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              styles.contentScroll,
              containerScrollViewStyle,
            ]}
            scrollEnabled={scrollEnabled}
            automaticallyAdjustKeyboardInsets={true}
            keyboardDismissMode="interactive">
            {children}
          </ScrollView>
        ) : (
          <View style={style}>{children}</View>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {flex: 1},
  contentScroll: {
    // flexGrow: 1,
  },
});

export default ScreenContainer;
