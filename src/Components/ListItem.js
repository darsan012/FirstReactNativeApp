import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const ListItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        {/* <Icon name="home" /> */}
      </View>
    </TouchableOpacity>
  );
};

ListItem.defaultProps = {
  title: 'Hello',
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
});
export default ListItem;
