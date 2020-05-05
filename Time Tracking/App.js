// JOB LIST COMPONENT 

import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Button } from 'react-native';
import YourRecentJobsBar from './components/YourRecentJobsBar';
import JobListBar from './components/JobListBar';
import JobComponent from './components/job-component';
import NavBar from './components/navigation-component';
export default function App() {
    return (
      <View style={styles.container}>
        <NavBar/>
        <YourRecentJobsBar/>
        <JobListBar/>
        <JobComponent/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15
  }
})

