import React, { useEffect, useState } from "react";
import Block from "./Block";
import Text from "./Text";
import getCurrentWeekDates from "../function/getCurrentWeekDates";
import Button from "./Button";
import { useTheme ,useData } from "../hooks";
const CalenderContainer = () => {
    const {dates, setDates}=useData()

    const {colors,fonts}=useTheme()

    useEffect(() => {
        const date = getCurrentWeekDates()
        setDates([...date])
    }, [])

    const handleDateSelect = (date) => {
        setDates(dates.map(item =>
          item.date === date
            ? { ...item, isSelected: true }
            : { ...item, isSelected:new Date().getDate() === item.date?true: false }
        ));
      };

    return (
        <Block
        flex={0}
        marginTop={10}
            row
            justify={"space-between"}
            align={"center"}
        >
         
            { dates?.map((el,index)=>{
                
                
                return (
                    <Block
                    key={el.date}
                    align={"center"}
                    radius={10}
                    marginHorizontal={3}
                    paddingVertical={10}
                    style={{
                        ...(el.isSelected ? {
                            borderColor: "#00A1F2",
                            borderWidth: 2,
                            backgroundColor:new Date().getDate() === el.date ? 'transparent' : '#D6F4FF'
                        } : {}),
                    }}
                >
                    <Button onPress={()=>{
                      handleDateSelect(el.date)
                    }}>
                    <Text
                        style={{fontSize:12, fontFamily: fonts.regular,}}
                    >
                        {el.day}
                    </Text>
    
                    <Text
                        style={{fontSize:20, 
                            fontFamily: fonts.regular,
                            fontWeight:"400"
                        }}
                    >
                        {el.date}
                    </Text>

                    </Button>
                   
                </Block>
                )
            })}
          



       
        </Block>
    )
}

export default CalenderContainer