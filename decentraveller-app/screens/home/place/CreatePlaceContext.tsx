import React from 'react';

export interface PickerItem {
    label: string;
    value: string;
}

export type PickerStateContextType = {
    items: PickerItem[];
    setItems: React.Dispatch<React.SetStateAction<PickerItem[]>>;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type CreatePlaceContextType = {
    placeTypePicker: PickerStateContextType;
    placeName: string;
    setPlaceName: (string) => void;
};

const CreatePlaceContext = React.createContext<CreatePlaceContextType | null>(null);

const CreatePlaceProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [placeTypePickerItems, setPlaceTypePickerItems] = React.useState<PickerItem[]>([
        { label: 'GASTRONOMY', value: '0' },
        { label: 'ACCOMODATION', value: '1' },
        { label: 'ENTERTAINMENT', value: '2' },
        { label: 'OTHERS', value: '3' },
    ]);
    const [placeTypePickerValue, setPlaceTypePickerValue] = React.useState<string>(null);
    const [placeTypePickerOpen, setPlaceTypePickerOpen] = React.useState<boolean>(false);
    const [placeName, setPlaceName] = React.useState<string>(null);

    return (
        <CreatePlaceContext.Provider
            value={{
                placeTypePicker: {
                    items: placeTypePickerItems,
                    setItems: setPlaceTypePickerItems,
                    value: placeTypePickerValue,
                    setValue: setPlaceTypePickerValue,
                    open: placeTypePickerOpen,
                    setOpen: setPlaceTypePickerOpen,
                },
                placeName,
                setPlaceName,
            }}
        >
            {children}
        </CreatePlaceContext.Provider>
    );
};

export default CreatePlaceProvider;
