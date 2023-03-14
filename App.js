import { useState } from 'react';
import * as React from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import Goalitem from './components/Goalitem';
import Goalinput from './components/Goalinput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, { text: enteredGoalText, key: Math.random().toString() }]);
  }

  return (
    <View style={styles.appContainer} >
      <Goalinput onAdddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return (
            <Goalitem text={itemData.item.text} />
          );
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },

});
