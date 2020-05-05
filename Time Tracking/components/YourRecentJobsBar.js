import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Button } from 'react-native';
import { DropdownMenu } from 'react-native-dropdown-menu';
export default function YourRecentJobsBar() { 
    return (
      <View style={styles.container}>
        <Text variant="h6" style={styles.MostRecentJobs}>Your Recent Jobs</Text>
        <Text variant = "h6" style={styles.JobsCompleted}>Jobs Completed Today: 12 jobs</Text>
        <Text variant = "h6" style={styles.JobsCompleted}>Sort By:</Text>
        <Button title="Customer"></Button>
        <View style={styles.StartNewJob}>
          <Button 
            title="+ Start New Job"
            color="white"
            accessibilityLabel="This is a button to start a new job."
          />
        </View>

        </View>
    );

}

const styles = StyleSheet.create({
  container: {
    height:100,
    justifyContent:'space-between',
    flexDirection:"row",
    backgroundColor:"white",
    alignItems:"center",
    paddingRight:20,
    paddingLeft: 20
  },
  MostRecentJobs: {
    fontSize:30,
    fontFamily:'Avenir',
    marginLeft:10,
    fontWeight:'bold'
  },
  StartNewJob: {
    fontFamily:'Avenir',
    backgroundColor:'#1291F5',
    width:150,
    borderRadius:10,
  },
  JobsCompleted: {
    fontSize:16,
    fontFamily:'Avenir',
  },
})