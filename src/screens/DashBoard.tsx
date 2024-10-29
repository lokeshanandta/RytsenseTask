import React from "react";
import { Block, Text, Image, Button } from "../components";
import { useTheme, useData } from "../hooks";
import CardType1 from "../components/CardContainer/CardType1";
import CalenderContainer from "../components/CalenderContainer";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScrollView } from "react-native";

export type RootStackParamList = {
    addTask: undefined;
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'addTask'>;

const Dashboard = () => {
    const { colors, assets, icons, fonts } = useTheme()
    const { events, dates } = useData()
    const navigation = useNavigation<NavigationProp>()
    const eventDate = dates.find((item) => item.isSelected === true && new Date().getDate() != item.date) ? dates.find((item) => item.isSelected === true && new Date().getDate() != item.date) : dates.find((item) => item.isSelected === true && new Date().getDate() === item.date)
    const foundEvent = events.find((item) => item.hasOwnProperty(eventDate.date));
    console.log(events, "foundEvent", eventDate, foundEvent);

    return (
        <Block white>
            <Block
                marginTop={57}
                scroll
                marginHorizontal={15}
            >

                <Text
                    color={colors.black}
                    boldp
                    style={{
                        fontSize: 16,
                        fontWeight: "700",
                    }}>
                    {"Hello"}
                </Text>

                <Text
                    color={colors.lightBlack}
                    regularp
                >
                    {"You completed tasks today"}
                </Text>
                <Block
                    flex={0}
                    marginVertical={15}
                    row
                    justify={"space-between"}
                    align={"center"}
                >

                    <CardType1
                        color={"#B4D9F2"}
                        title={"Today"}
                        value={"6"}
                    />

                    <CardType1
                        color={"#FFE8FA"}
                        title={"Week"}
                        value={"6"}
                    />

                </Block>

                <Block
                    flex={0}
                    row
                    justify={"space-between"}
                    align={"center"}
                >

                    <CardType1
                        color={"#C1FFA3"}
                        title={"Month"}
                        value={"10"}
                    />

                    <CardType1
                        color={"#F9F871"}
                        title={"Total"}
                        value={"36"}
                    />

                </Block>
                <CalenderContainer />
                <Block
                    flex={0}
                    marginTop={10}

                >
                 
                    {foundEvent?.[eventDate.date].length > 0 && foundEvent?.[eventDate.date]?.map((details, subIndex) => (
                           <ScrollView>
                        <Block
                            flex={0}
                            color={"#00A3FF"}
                            width={"95%"}
                            height={81}
                            radius={10}
                            marginBottom={10}
                            style={{
                                alignSelf: "center"
                            }}>
                            <Block
                                flex={0}
                                color={"#E3F2FD"}
                                width={"99%"}
                             
                                height={81}
                                style={{ alignSelf: "flex-end" }}
                                radius={10}
                                row


                            >
                                <Block flex={0}
                                    marginHorizontal={10}
                                    style={{
                                        width: 24,
                                        height: 24,
                                        position: 'relative',
                                        alignSelf:"center"
                                    }}>
                                    <Image
                                        height={24}
                                        width={24}
                                        source={icons.ellipse}

                                    />
                                    <Image
                                        height={16}
                                        width={20}
                                        source={icons.check}
                                        style={{
                                            position: 'absolute',
                                            top: 4,
                                            left: 4,
                                        }}
                                    />
                                </Block>
                                <Block flex={0} width={"68%"}>

                                    <Text
                                    marginLeft={10}
                                    marginTop={10}
                                        style={{

                                            fontSize: 16,
                                            fontFamily: fonts.regular,
                                            fontWeight: "400"

                                        }}
                                    >{details}</Text>
                                </Block>

                                <Text
                                color={"#404756"}
                                    style={{
                                        alignSelf: "flex-end",
                                        fontFamily: fonts.light,
                                        fontWeight: "300"
                                    }}
                                    marginBottom={5}
                                    marginRight={5}
                                >{"4.50 Pm"}</Text>

                            </Block>
                        </Block>
                        </ScrollView>
                    ))}

                    {!foundEvent?.[eventDate.date]?.length && <Image
                        source={assets.group}
                        style={{ alignSelf: "center" }}
                    />}


                </Block>
                
            </Block>
            <Button
                    onPress={() => {
                        navigation.navigate("addTask")
                    }}
                    row
                    color={colors.lightBlue}
                    width={198}
                    height={58}
                    radius={25}
                    style={{ alignSelf: "flex-end" }}
                    justify="center"
                    align="center"
                    position="absolute"
                    bottom={0}
                    marginBottom={15}
                    marginRight={10}
                    right={0}
                >
                    <Image
                        source={icons.plus}
                        marginHorizontal={10}
                    />
                    <Text
                        style={{
                            fontSize: 20,
                            fontFamily: fonts.regular,
                            fontWeight: "400"
                        }}
                        color={colors.white}
                        marginHorizontal={15}

                    >
                        {"New Task"}
                    </Text>
                </Button>
        </Block>

    )
}

export default Dashboard