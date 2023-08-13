import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';

function NotePad(props) {
    const color_paper_yellow = props.backgroundColor || "#fff4b4";
    const color_paper_blue = props.horizontalLines || "#8ec6e1"
    const color_paper_red = props.vertialLines || "#f8957b"
    const header_height = props.headerHeight || 80;
    const line_height = props.lineHeight || 30;

    const notepad_header = StyleSheet.create({
        parent: {
            height: header_height,
            backgroundColor: color_paper_yellow,
            flexDirection: 'row',
    
        },
        //left side of page with first red line
        leftMargin: {
            width: '15%',
            height: header_height,
            borderStyle: 'solid',
            borderRightColor: color_paper_red,
            borderRightWidth: 2,
        },
        //second red line:
        redLine2: {
            width: 6,
            height: header_height,
            borderStyle: 'solid',
            borderRightColor: color_paper_red,
            borderRightWidth: 2,
        }
    });
    
    const notepad_line = StyleSheet.create({
        parent: {
            height: line_height,
            backgroundColor: color_paper_yellow,
            flexDirection: 'row',
    
        },
        //left side of page with first red line
        marginLeft: {
            width: '15%',
            height: line_height,
            borderRightColor: color_paper_red,
            borderRightWidth: 2,
            borderTopColor: color_paper_blue,
            borderTopWidth: 2
        },
        //second red line:
        redLine2: {
            width: 6,
            height: line_height,
            borderRightColor: color_paper_red,
            borderRightWidth: 2,
            borderTopColor: color_paper_blue,
            borderTopWidth: 2
        },
        blueLineFinisher: {
            flex: 1,
            height: line_height,
            borderTopColor: color_paper_blue,
            borderTopWidth: 2
        }
    })

    return (
        <>
            {/* Header */}
            <View style={notepad_header.parent}>
                <View style={notepad_header.leftMargin} />
                <View style={notepad_header.redLine2} ></View>
            </View>

            {/* Rest of page: */}
            {Array.from({ length: props.rows }, () => (
                <View style={notepad_line.parent}>
                    <View style={notepad_line.marginLeft} />
                    <View style={notepad_line.redLine2} ></View>
                    <View style={notepad_line.blueLineFinisher} ></View>
                </View>
            ))}
        </>

    )
}

export default NotePad;