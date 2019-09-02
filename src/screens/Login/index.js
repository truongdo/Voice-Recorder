import React, { Component } from "react";
import {
    ImageBackground,
    Image,
} from "react-native";
import {
    View,
    RoundTextInput,
    Button,
    TouchableOpacityHitSlop,
    Text, Checkbox
} from "~/src/themes/ThemeComponent";
import { connect } from "react-redux";
import I18n from "~/src/I18n";
import { DEVICE_WIDTH, DEVICE_HEIGHT } from "~/src/themes/common";
import styles from "./styles";
import LoadingModal from "~/src/components/LoadingModal";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StackActions, NavigationActions } from "react-navigation";
import lodash from 'lodash'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: props.username || "",
            password: "",
            errPassword: "",
            errUserName: "",
            loading: false,
            saveLogin: false
        };
    }

    _handlePressSaveLogin = () => {
        this.setState({ saveLogin: !this.state.saveLogin })
    }

    _handleLogin = lodash.throttle(() => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: "Drawer" })],
            key: undefined
        });
        this.props.navigation.dispatch(resetAction);
    }, 500)


    render() {

        return (
            <View className='flex white'>
                <LoadingModal visible={this.state.loading} />
                <ImageBackground
                    source={require('~/src/image/bg_login.png')}
                    style={{ width: DEVICE_WIDTH, height: DEVICE_HEIGHT }}
                    resizeMode={'stretch'}
                >
                    <View className='flex ph16'>
                        <View className='space60' />
                        <View className='row-center'>
                            <Image source={require('~/src/image/logo_login.png')}
                                style={{ width: 185, height: 67 }}
                                resizeMode={'cover'}
                            />
                        </View>
                        <View className='space56' />
                        <RoundTextInput
                            value={this.state.userName}
                            error={this.state.errUserName}
                            onChangeText={text => this.setState({ userName: text, errUserName: '' })}
                            placeholder={I18n.t('account')}
                        />
                        <View className='space16' />
                        <RoundTextInput
                            value={this.state.password}
                            error={this.state.errPassword}
                            onChangeText={text => this.setState({ password: text, errPassword: '' })}
                            placeholder={I18n.t('password')}
                            secureTextEntry={true}
                        />
                        <View className='space40' />

                        <Button
                            onPress={this._handleLogin}
                            text={I18n.t('login')}
                        />
                        <View className='space40' />
                        <View className='row-space-between'>

                            <Checkbox
                                text={I18n.t('save_login')}
                                checked={this.state.saveLogin}
                                onPress={this._handlePressSaveLogin}
                            />
                            <TouchableOpacityHitSlop>
                                <Text className='error s13'>{I18n.t('forgot_password_question')}</Text>
                            </TouchableOpacityHitSlop>

                        </View>
                        {/* <KeyboardAwareScrollView
                            showsVerticalScrollIndicator={false}
                            bounces={false}
                            keyboardShouldPersistTaps={"handled"}
                            enableOnAndroid={true}
                        >
                        </KeyboardAwareScrollView> */}
                    </View>

                </ImageBackground>
            </View>
        );
    }
}
export default Login