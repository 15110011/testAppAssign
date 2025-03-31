import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import Checkbox from '../components/Checkbox';
import ScreenContainer from '../components/ScreenContainer';
import {Colors, Size, Spacing} from '../themes/themes';
import Input from '../components/Input';
import {Logo} from '../assets';
import {useAppDispatch} from '../hooks/useAppDispatch';
import {useAppSelector} from '../hooks/useAppSelector';
import {onLogin} from '../redux/reducers/authSlice';

const SignInScreen = () => {
  const dispatch = useAppDispatch();
  const {loading} = useAppSelector(state => state.auth);
  const [email, setEmail] = useState('tokenize.test@gmail.com');
  const [password, setPassword] = useState('Test#111');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    dispatch(onLogin({email, password, captcha: 'internal_testing_captcha'}));
  };

  return (
    <ScreenContainer useBackground>
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.title}>Sign in</Text>
        <Text style={styles.subtitle}>Please sign in to continue</Text>
      </View>
      <View style={styles.form}>
        <Input
          value={email}
          onChangeText={txt => setEmail(txt)}
          placeholder="Email"
          leftIcon="user"
        />
        <Input
          value={password}
          onChangeText={pwd => setPassword(pwd)}
          placeholder="Password"
          leftIcon="lock"
          rightIcon={showPassword ? 'eye-slash' : 'eye'}
          rightIconPress={() => setShowPassword(!showPassword)}
          secureTextEntry={!showPassword}
          showPassword={showPassword}
          iconStyle={'solid'}
        />
        <View style={styles.optionsRow}>
          <Checkbox
            isChecked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            title="Remember me"
          />
          <TouchableOpacity>
            <Text style={styles.optionText}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
          {loading ? (
            <ActivityIndicator size={'small'} color={Colors.blue} />
          ) : (
            <Text style={styles.signInText}> SIGN IN</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.footer}>
          <Text style={styles.footerTxt}>
            Don’t have an account yet?&nbsp;
            <Text style={styles.signUpTxt}>SIGN UP</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: Spacing.XXL * 2,
  },
  logo: {
    width: 55,
    height: 55,
    marginBottom: 20,
  },
  title: {
    fontSize: Size.size_24,
    color: Colors.white,
    fontWeight: 'bold',
  },
  subtitle: {
    color: Colors.white,
    fontSize: Size.size_16,
    marginTop: 8,
    fontWeight: '500',
  },
  form: {
    borderRadius: 16,
    padding: 20,
  },
  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eye: {
    color: Colors.white,
    fontSize: 18,
    marginLeft: 10,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: Colors.white,
    marginRight: 8,
    borderRadius: 4,
  },
  checked: {
    backgroundColor: Colors.white,
  },
  optionText: {
    color: Colors.white,
    fontSize: Size.size_14,
    fontWeight: '500',
  },
  signInButton: {
    backgroundColor: Colors.white,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signInText: {
    color: Colors.blue,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerTxt: {
    color: Colors.white,
  },
  signUpTxt: {
    fontWeight: 'bold',
  },
});

export default SignInScreen;
