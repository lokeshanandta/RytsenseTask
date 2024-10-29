import React from "react";
import { View, Image, } from "react-native";
import { Block, Button, Text } from "../components";
import { useTheme } from "../hooks";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
    dashBoard: undefined;
    appIntroSecond:undefined
  };
  type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'dashBoard'>;


const AppIntro = () => {
    const navigation = useNavigation<NavigationProp>()
    const { assets, colors, icons } = useTheme()
    return (
        <Block safe white>

            <Block
                justify={"space-between"}
                paddingTop={57}
            >
                <Block
                    row
                    justify={"space-between"}
                    marginBottom={28}
                >
                    <Block
                        flex={0}
                        height={85}
                        width={85}
                        radius={50}
                        color={colors.lightBlue}
                    />

                    <Block
                        flex={0}
                        height={39}
                        width={39}
                        marginTop={24}
                        radius={20}
                        color={colors.shadeBlue}
                    />

                    <Block
                        flex={0}
                        height={87}
                        width={87}
                        marginTop={39}
                        radius={50}
                        color={colors.lightGreen}
                    />

                </Block>
                <View
                    style={{
                        flexDirection: "row",
                        marginHorizontal: 39,
                    }}>

                    <Block
                        flex={0}
                        height={34}
                        width={34}
                        radius={50}
                        marginTop={245}
                        color={colors.lightBrown}
                    />

                    <Image
                        source={assets.appIntro}
                        resizeMode={"stretch"}
                        style={{
                            width: 247,
                            height: 247,
                        }}
                    />
                </View>

                <Block
                    flex={0}
                    height={51}
                    width={51}
                    marginBottom={56}
                    marginHorizontal={26}
                    radius={50}
                    color={colors.lightYellow}
                    alignSelf={"flex-end"}
                />

                <Text
                    color={colors.black}
                    center
                    h1
                    >
                    {"Add completed tasks"}
                </Text>
                <Block 
                flex={0}
                width={342}
                    style={{ alignSelf: "center" }}>
                <Text
                    center
                    regular
                    color={colors.black}
                    marginVertical={5}
                    style={{ alignSelf: "center" }}
                    paddingHorizontal={5}
                   
                >
                    {"You add a task only after the task is completed. The idea is to see your list of done tasks to see your productivity"}
                </Text>

                </Block>
                
                <Block
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginHorizontal: 28,
                    }}>
                    <Button 
                    onPress={()=>{navigation.navigate("dashBoard")}}
                    >
                        <Text
                            color={colors.gray}
                            center
                            style={{ fontWeight: "700",}}
                            boldh2>
                            {"Skip"}
                        </Text>
                    </Button>
                    <Button
                    onPress={()=>{navigation.navigate("appIntroSecond")}}
                        height={53}
                        width={53}
                        radius={50}
                        color={colors.lightBlue}
                    >
                        <Image
                            source={icons.left}
                            height={24}
                            width={15}
                        />
                    </Button>

                </Block>
            </Block>



        </Block>

    )
}

export default AppIntro