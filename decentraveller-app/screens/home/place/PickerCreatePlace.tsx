import DropDownPicker from 'react-native-dropdown-picker';
import { Text, View } from 'react-native';
import React from 'react';
import { registrationIndicationTextStyles } from '../../../styles/registrationScreensStyles';
import { PickerItem } from './CreatePlaceContext';

export type PickerCreatePlaceProps = {
    titleText: string;
    dropdownPlaceholder: string;
    items: PickerItem[];
    setItems: React.Dispatch<React.SetStateAction<PickerItem[]>>;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onOpen: () => void;
    onClose?: () => void;
    searchable: boolean;
    zIndex?: number;
    zIndexInverse?: number;
    onChangeSearchText?: (text: string) => void | undefined;
    loading?: boolean;
    disableLocalSearch?: boolean;
};

const PickerCreatePlace: React.FC<PickerCreatePlaceProps> = ({
    titleText,
    dropdownPlaceholder,
    items,
    setItems,
    value,
    setValue,
    open,
    onOpen,
    setOpen,
    zIndex = 1000,
    zIndexInverse = 1000,
    searchable,
    onChangeSearchText = undefined,
    loading = false,
    disableLocalSearch = false,
}) => {
    return (
        <View style={registrationIndicationTextStyles.container}>
            <Text style={registrationIndicationTextStyles.text}>{titleText}</Text>
            <DropDownPicker
                open={open}
                setOpen={setOpen}
                onOpen={onOpen}
                items={items}
                setItems={setItems}
                value={value}
                setValue={setValue}
                style={registrationIndicationTextStyles.inputField}
                placeholder={dropdownPlaceholder}
                textStyle={registrationIndicationTextStyles.pickerInputField}
                dropDownDirection="BOTTOM"
                max={5}
                itemSeparator={true}
                zIndex={zIndex}
                zIndexInverse={zIndexInverse}
                searchable={searchable}
                onChangeSearchText={onChangeSearchText}
                loading={loading}
                disableLocalSearch={disableLocalSearch}
            />
        </View>
    );
};

PickerCreatePlace.defaultProps = {
    onChangeSearchText: undefined,
};

export default PickerCreatePlace;
