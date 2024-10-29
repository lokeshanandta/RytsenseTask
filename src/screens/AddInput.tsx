import React, { useState } from "react";
import { TextInput, } from "react-native";
import { Block, Button, Text, Image, } from "../components";
import { useTheme, useData } from "../hooks";
import { useNavigation } from "@react-navigation/native";
const AddNewTask = () => {
    const { icons, colors, fonts } = useTheme()
    const navigation = useNavigation()
    const [inputValue, setInputValue] = useState<string>()
    const { dates, setDates, events, setEvents } = useData()
    const eventDate = dates.find((item) => item.isSelected === true && new Date().getDate() != item.date) ? dates.find((item) => item.isSelected === true && new Date().getDate() != item.date).date : dates.find((item) => item.isSelected === true && new Date().getDate() === item.date).date



    const addEvent = () => {
        setEvents((prevEvents) => {
            const existingDateEntry = prevEvents.find((event) => event.hasOwnProperty(eventDate));

            if (existingDateEntry) {
                return prevEvents.map((event) =>
                    event.hasOwnProperty(eventDate)
                        ? { ...event, [eventDate]: [...event[eventDate], inputValue] }
                        : event
                );
            } else {
                return [...prevEvents, { [eventDate]: [inputValue] }];
            }
        });
        navigation.goBack()
    };
    return (
        <Block
            safe
            white
            paddingTop={58}
        >
            <Block keyboard marginHorizontal={20} >

                <Block
                    flex={0}
                    row
                    align={"center"}
                    marginBottom={28}

                >
                    <Block row align={"center"}>
                        <Button
                            onPress={() => {
                                navigation.goBack()
                            }}
                        >
                            <Image
                                source={icons.back}
                                resizeMode={"stretch"}
                                width={22}
                                height={18}
                                marginRight={10}
                            />
                        </Button>

                        <Text boldp >
                            {"All tasks list"}
                        </Text>
                    </Block>
                    <Button
                        onPress={() => {
                            addEvent()
                        }}
                    >
                        <Text boldh2
                            style={{ fontWeight: "700" }}
                        >
                            {"Done"}
                        </Text>

                    </Button>

                </Block>
                <TextInput
                    style={{
                        fontSize: 20,
                        fontWeight: '400',
                        fontFamily: fonts.regular,
                        color: colors.black,
                    }}
                    placeholder="Task than i am writ..."
                    placeholderTextColor={colors.black}
                    value={inputValue}
                    onChangeText={(value: string) => {
                        setInputValue(value)
                    }}
                />



            </Block>

        </Block>

    )
}

export default AddNewTask
