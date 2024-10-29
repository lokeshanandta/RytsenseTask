import React from "react";
import Block from "../Block";
import Image from "../Image";
import Text from "../Text";
import { useTheme } from "../../hooks";

type MyComponentProps = {
    color: string;  
    title: string;  
    value: number | string; 
  };

const CardType1: React.FC<MyComponentProps> =({
    color,
    title,
    value
})=>{
    const {icons,colors}=useTheme()
    return (
        <Block
        flex={0}
        height={82}
        width={"48%"}
        row
        center
        align={"center"}
        color={color}
        radius={20}
        paddingVertical={12}
        paddingHorizontal={10}
        
        >
        <Block>
            <Block
            row
            center
            white
            radius={20}
            width={34}
            align={"center"}
            height={36}
               >
                <Image
                height={11}
                width={11}
                source={icons.timer}
                />
                
            </Block>
            <Block 
            flex={0}
            >
            <Text
            color={colors.black}
            regularp
            marginTop={1}
            >
                {title}
            </Text>
            </Block>
            
        </Block>
        <Text
        h1
        style={{alignSelf:"flex-end"}}
        color={colors.black}
            >
            {value}
        </Text>
    </Block>
    )
}

export default CardType1