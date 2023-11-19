import NotePadPage from "../NotePadPage";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

const WelcomePage = (props) => {
    const [count, setCount] = useState(0);

    const welcomePageStyle = StyleSheet.create({
        startMenuWrapper: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
        },
        startMenuTitle: {
            marginTop: '50%',
            textAlign: 'center',
            borderWidth: 4,
            fontSize: 30,
            borderColor: 'green',
            fontWeight: 'bold',
        },
        titleButton: {
            marginTop: 20,
            borderColor: "gray",
            borderWidth: 3,
            borderRadius: 1,
            borderStyle: 'dotted',
            width: '30%',
            height: '5%',
            alignSelf: 'center',
            justifyContent: 'center'
        },
        titleButton_hover: {
            // ...testStyle.titleButton,

        },
        titleButtonText: {
            alignSelf: 'center',
            fontSize: 20,

        },
        titleButtonText_hover: {
            // ...titleButtonText
        }
    })

    return (
        <>
            <NotePadPage
                scrollLock={true}
                backgroundMode={true}
                setShowWelcome = {props.setShowWelcome}
            />
            <View style={welcomePageStyle.startMenuWrapper}>
                <Text style={welcomePageStyle.startMenuTitle}>Welcome {count}</Text>
                <Pressable style={welcomePageStyle.titleButton} onPress={() => setCount(c => c + 1)}>
                    <Text style={welcomePageStyle.titleButtonText}>Count</Text>
                </Pressable>
                <Pressable style={welcomePageStyle.titleButton} onPress={() => props.setShowWelcome(false)}>
                    <Text style={welcomePageStyle.titleButtonText}>Start</Text>
                </Pressable>
                <Pressable style={welcomePageStyle.titleButton} onPress={() => props.primeStorage()}>
                    <Text style={welcomePageStyle.titleButtonText}>Prime Storage? Maybe</Text>
                </Pressable>
                <Pressable style={welcomePageStyle.titleButton} onPress={() => props.deletePageById(7)}>
                    <Text style={welcomePageStyle.titleButtonText}>Delete 7</Text>
                </Pressable>
            </View>
        </>
    )
}

export default WelcomePage;