import React from "react";
import { 
    View, Button, StyleSheet
} from "react-native";
type ClearBtnProps = {
    tasks : {id : number, text : string, completed : boolean}[];
    setTasks : (tasks : {id : number, text : string, completed : boolean}[]) => void;
}
function ClearBtn(props : ClearBtnProps) : React.JSX.Element {
    function clearItems() {
        props.setTasks([]);
    }
    return (
        <View style={styles.clearBtn}>
            <Button title="Clear Tasks" onPress={clearItems} />
        </View>
    );
}
const styles = StyleSheet.create({
    clearBtn: {
        marginHorizontal: 20,
        marginTop: 50,
    },
});
export default ClearBtn;