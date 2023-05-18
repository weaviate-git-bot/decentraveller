import React from 'react';
import { View, Text } from 'react-native';
import {
    subTitleTextStyle,
    WelcomeStyles,
} from '../../../styles/registrationScreensStyles';
import DecentravellerButton from '../../../commons/components/DecentravellerButton';
import {registerUserScreenWordings} from "./wording";

type SuccessRegisterUserScreenProps = {
    onSuccess: () => void;
};
const SuccessRegisterUserScreen: React.FC<SuccessRegisterUserScreenProps> = (props) => {
    const { onSuccess } = props;

    const onClickContinue = () => {
        onSuccess()
    };

    return (
        <View style={WelcomeStyles.container}>
            <Text style={WelcomeStyles.title}>
                {registerUserScreenWordings.REGISTER_SUCCESS_TITLE}
            </Text>
            <Text style={subTitleTextStyle} adjustsFontSizeToFit={true} numberOfLines={2}>

            </Text>
            <DecentravellerButton loading={false} text="Next" onPress={onClickContinue} />
        </View>
    );
};

export default SuccessRegisterUserScreen;
