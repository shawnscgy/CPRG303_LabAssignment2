import React from "react";
import { 
    View, TextInput, Button, StyleSheet, Text
} from "react-native";

type ToDoFormProps = {
    tasks : {id : number, text : string, completed : boolean}[];
    addTask : (newItem : {id : number, text : string, completed : boolean}) => void;
}
function ToDoForm(props : ToDoFormProps) : React.JSX.Element {
      const [taskText, setTaskText] = React.useState("");
      const [warning, setWarning] = React.useState("");
      function handleSetInputText(newText : string) {
        setTaskText(newText);
        if (warning !== "") {
          setWarning("");
        }
      }
    
      function generateNewItem(newText : string) {
        if (newText === "") {
          setWarning("What are u doing bro?");
          return;
        }
        if (props.tasks.find((task) => task.text === newText)) {
          setWarning("Human Clone is forbidden bro! \nHappy Halloween!");
          return;
        }
        const newItem = {id : (props.tasks.length+1), text : newText, completed : false};
        setTaskText("");
        props.addTask(newItem);
      }
      
    return (
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Add a new task..."
              onChangeText={handleSetInputText}
              value={taskText}
            />
            <Button title="Add Task" onPress={() => generateNewItem(taskText)} />
            <View style={styles.warningTxt}>
              {warning? <Text>{warning}</Text> : null}
            </View>
          </View>
      );
      
}
const styles = StyleSheet.create({
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
    warningTxt: {
      width: '80%',
      backgroundColor: 'red',
      color: 'white',
      position: 'absolute',
      top: 50,
      left: 20,
      alignItems: 'center',
    }
  });
  export default ToDoForm;