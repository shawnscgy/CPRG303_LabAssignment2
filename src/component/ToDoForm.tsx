import React from "react";
import { 
    View, TextInput, Button, StyleSheet
} from "react-native";

type ToDoFormProps = {
    tasks : {id : number, text : string, completed : boolean}[];
    addTask : (newItem : {id : number, text : string, completed : boolean}) => void;
}
function ToDoForm(props : ToDoFormProps) : React.JSX.Element {
      const [inputText, setInputText] = React.useState("");
      function handleSetInputText(newText : string) {
        setInputText(newText);
      }
    
      function generateNewItem(newText : string) {
        const newItem = {id : (props.tasks.length+1), text : newText, completed : false};
        setInputText("");
        props.addTask(newItem);
      }
      
    return (
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Add a new task..."
              onChangeText={handleSetInputText}
              value={inputText}
            />
            <Button title="Add" onPress={() => generateNewItem(inputText)} />
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
  });
  export default ToDoForm;