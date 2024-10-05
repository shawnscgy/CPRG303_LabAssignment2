import React from "react";
import { 
    View, Text, StyleSheet, Pressable, FlatList 
} from "react-native";
type ToDoListProps = {
    tasks : {id : number, text : string, completed : boolean}[];
    isCompleted : (id : number) => void;
}
function ToDoList(props : ToDoListProps) : React.JSX.Element {
    function passIsCompleted(id: number) {
        return props.isCompleted(id);
    }
    return (
        <FlatList
            data={props.tasks}
            renderItem={({item}) => (
              <Pressable onPress={() => passIsCompleted(item.id)}>
                <View style={[styles.task, item.completed ? styles.completed : null]}>
                  <Text style={styles.taskText}>{item.text}</Text>
                </View>
              </Pressable>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
      );
}
const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 16,
    },
  });
  
  export default ToDoList;