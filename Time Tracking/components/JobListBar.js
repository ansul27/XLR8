import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Button } from 'react-native';
export default function JobListBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.JobList}>Job List</Text>
      <View style={styles.SelectMultipleJobs}>
        <Button title="Select Multiple Jobs" 
        color="blue">
        </Button>
      </View>
      <Button title="Cancel Jobs" color="#FA3434"></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height:50,
    justifyContent:"space-between",
    flexDirection:"row",
    backgroundColor:"#93DAD7",
    alignItems:"center",
    paddingRight:20,
    paddingLeft:20
  },
  JobList: {
    fontSize:20,
    fontWeight:"bold"
  },
  SelectMultipleJobs: {
    paddingLeft:600
  }
})

