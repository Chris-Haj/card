import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install expo vector icons
import COLORS from '../constants/colors';





const StudentCard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={styles.headerTitle}>Student Card</Text>
        <Text style={styles.headerRight}>He</Text>
      </View>

      {/* Card Container */}
      <View style={styles.cardContainer}>
        {/* University Logo Section */}
        <View style={styles.logoSection}>
          <Text style={styles.hebrewText}>האוניברסיטה העברית בירושלים</Text>
          <Text style={styles.englishText}>THE HEBREW UNIVERSITY OF JERUSALEM</Text>
        </View>

        {/* Student Info Section */}
        <View style={styles.infoSection}>
          <View style={styles.leftInfo}>
            <View style={styles.infoItem}>
              <Text style={styles.label}>Student Name</Text>
              <Text style={styles.value}>Christopher Haj</Text>
            </View>

            <View style={styles.infoItem}>
              <Text style={styles.label}>Academic Institution</Text>
              <Text style={styles.value}>The Hebrew University{'\n'}of Jerusalem</Text>
            </View>

            <View style={styles.infoItem}>
              <Text style={styles.label}>ID</Text>
              <Text style={styles.value}>207824772</Text>
            </View>
          </View>

          <View style={styles.rightInfo}>
            <Image
              style={styles.studentPhoto}
              source={require('../images/mejpeg.jpeg')} // Add your photo path
            />
            <View style={styles.yearContainer}>
              <Text style={styles.yearText}>תשפ״ה</Text>
              <Text style={styles.yearText}>2024-2025</Text>
            </View>
          </View>
        </View>

        {/* Barcode Section */}
        <View style={styles.barcodeSection}>

          <Text style={styles.barcodeNumber}>207824772</Text>
        </View>
      </View>

      {/* Expiry Date */}
      <Text style={styles.expiryDate}>08-04-2025</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D2D3A',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  headerRight: {
    color: 'white',
    fontSize: 16,
  },
  cardContainer: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  logoSection: {
    backgroundColor: '#009688',
    padding: 15,
    alignItems: 'center',
  },
  hebrewText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  englishText: {
    color: 'white',
    fontSize: 14,
  },
  infoSection: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#2D2D3A',
  },
  leftInfo: {
    flex: 1,
  },
  rightInfo: {
    alignItems: 'center',
  },
  infoItem: {
    marginBottom: 15,
  },
  label: {
    color: '#fff',
    fontSize: 12,
    marginBottom: 5,
  },
  value: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  studentPhoto: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  yearContainer: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 8,
    alignItems: 'center',
  },
  yearText: {
    color: 'white',
    fontSize: 12,
  },
  barcodeSection: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },
  barcode: {
    width: '100%',
    height: 70,
    resizeMode: 'contain',
  },
  barcodeNumber: {
    marginTop: 10,
    fontSize: 16,
    color: '#000',
  },
  expiryDate: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default StudentCard;