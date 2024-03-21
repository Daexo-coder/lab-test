import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  // Dummy data for demonstration
  const student = {
    name: 'Tebello Sehlabo',
    studentNumber: '901016627',
    currentSemester: 'January 2024',
    grades: [
      { subject: 'C++ Programming II', grade: 'C-' },
      { subject: 'Java Programming I', grade: 'C-' },
      { subject: 'Software Modeling And Analysis', grade: 'C-' },
      { subject: 'Database Systems', grade: 'C-'},
      { subject: 'Mobile Device Programming', grade: 'C-'},
      { subject: 'Probability And Statistics', grade: 'C-'},
    ],
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        <Image style={styles.profilePicture} source={require('./Robber.jpg')} />
        <Text style={styles.studentName}>{student.name}</Text>
        <Text style={styles.studentNumber}>Student Number: {student.studentNumber}</Text>
        <Text style={styles.currentSemester}>Current Semester: {student.currentSemester}</Text>
      </View>
      <View style={styles.gradesContainer}>
        <Text style={styles.gradesHeader}>Semester Grades</Text>
        {student.grades.map((grade, index) => (
          <View key={index} style={styles.gradeItem}>
            <Text style={styles.items}>{grade.subject}: {grade.grade}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#36454F',
    alignItems: 'center',
  
    height: 200,
    borderRadius: 50,
    justifyContent: 'center',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  studentName: {
    color: '#00CED1',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  studentNumber: {
    color: '#00CED1',
    fontSize: 16,
    marginBottom: 5,
  },
  currentSemester: {
    color: '#00CED1',
    fontSize: 16,
    marginBottom: 10,
  },
  gradesContainer: {
    color: '#00CED1',
    marginBottom: 20,
  },
  gradesHeader: {
    color: '#00CED1',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignItems: 'center',
  },
  gradeItem: {
    color: '#00CED1',
    marginBottom: 5,
    alignItems: 'center',
  },
  items: {
    color: '#00CED1',
  },

});

export default ProfileScreen;
