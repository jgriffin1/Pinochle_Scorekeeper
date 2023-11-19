import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  Pressable,
} from 'react-native';

import { useOrientation } from '../utils/useOrientation';

const NotePadPage = props => {
  const color_paper_yellow = props.backgroundColor || "#fff4b4";
  const color_paper_blue = props.horizontalLines || "#8ec6e1"
  const color_paper_red = props.verticalLines || "#f8957b"
  const header_height = props.headerHeight || 80;
  const line_height = props.lineHeight || 30;

  const window_height = Dimensions.get('window').height;
  const number_of_lines_on_screen = Math.floor(((window_height - header_height) / line_height));
  const extra_lines = number_of_lines_on_screen - (props?.dataList?.length || 0);

  const orientation = useOrientation();

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
    },
    body: { //this doesn't contribute to the notepad styling
      flex: 1, //fills space
      height: header_height,
      textAlign: 'left',
      verticalAlign: 'middle',
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
    body: {
      flex: 1,
      height: line_height,
      borderTopColor: color_paper_blue,
      borderTopWidth: 2,
      flexDirection: 'row',
    },
  });

  const textStyles = StyleSheet.create({
    titleText: {
      height: header_height,
      textAlignVertical: 'bottom',
      fontSize: 30,
    },
    menuText1: {
      height: header_height,
      textAlignVertical: 'bottom',
    },
    menuText2: {
      height: line_height,
      textAlignVertical: 'center',
    },
  });

  const NotepadChild = props => {
    //props.rowData = {text: ['text 1',  'txt 2', 'text 3'], rowStyle:{color: 'red'}},
    //props.rowData = {text: ['text 1',  'txt 2', 'text 3'], rowStyle:{color: 'red'}, cellStyle: [{color: 'blue'},{color: 'green'}, {color: 'purple'}]},

    /**
     * props.rowData = {
        rowStyle: {color: 'blue', borderTopColor: 'red', borderTopWidth: 2},
        cells: [
          {text: 'manual new (bold)', style: {fontWeight: 'bold'}},
          {text: 'manual new (bold)'},
        ]
      }
     */
    const childStyles = StyleSheet.create({
      viewStyle: {
        width: `${Math.floor(Number(100 / props.rowData.cells.length)).toString()}%`,
      },
      textStyle: {
        textAlign: 'center'
      }
    })

    return (
      <>
        {props.rowData.cells.map((obj, index) => (
          <View
            key={index}
            style={childStyles.viewStyle}>
            <Text
              style={[
                childStyles.textStyle,
                props.rowData.rowStyle,
                obj.style,
              ]}
            >
              {obj.text}
            </Text>
          </View>
        ))}
      </>
    )
  };

  const MarginMenuItem = ({name, ...MMIProps}) => {
    //MMIProps = Margin Menu item props
    //props = props from parent function

    return (
      <Pressable onPress={() => {
          if(!!MMIProps.menuOption){
            props.setShowWelcome(true);
          }else{
            props.setPageNumber(MMIProps.index)}
          }
        }
      >
        <Text style={MMIProps.style ? MMIProps.style : textStyles.menuText2}>({name})</Text>
      </Pressable>
    )
  }

  return (
    <>
      <ScrollView
        scrollEnabled={!props.scrollLock}
        nestedScrollEnabled={!props.scrollLock}
        contentInsetAdjustmentBehavior="automatic"
      >

        {/* Header */}
        <View style={notepad_header.parent}>
          <View style={notepad_header.leftMargin}>
            <MarginMenuItem name={'Menu'} style={textStyles.menuText1} menuOption={true}/>
          </View>
          <View style={notepad_header.redLine2}/>
          <View style={notepad_header.body}>
            <Text style={textStyles.titleText}>
              {!props.backgroundMode && "Pinochle"}
            </Text>
          </View>
        </View>

        {/* rows with data: */}
        {props.dataList && props.dataList.map((obj, index) => {
          return (
            <View style={notepad_line.parent} key={index}>
              <View style={notepad_line.marginLeft}>
                {props && props.pageNames && props.pageNames[index] && 
                  <MarginMenuItem name={props.pageNames[index]} index={index} />
                }
              </View>
              <View style={notepad_line.redLine2} />
              <View style={notepad_line.body}>
                <NotepadChild rowData={obj} />
              </View>
            </View>
          )
        })}

        {/* Fill rest of screen with empty lines */}
        {(!!orientation && extra_lines > 0) &&
          [...Array(extra_lines)].map((obj, index) => {
            let dataListLength = (props.dataList ? props.dataList.length : 0);
            let marginIndex = dataListLength + index;
            return (
              <View style={notepad_line.parent} key={index}>
                <View style={notepad_line.marginLeft}>
                  {props && props.pageNames && props.pageNames[marginIndex] && 
                    <MarginMenuItem name={props.pageNames[marginIndex]} />
                  }
                </View>
                <View style={notepad_line.redLine2} />
                <View style={notepad_line.body} />
              </View>
            )
          }
        )}
      </ScrollView>
    </>
  )
}

export default NotePadPage;