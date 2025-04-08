// screens/StudentCard.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Card() {
  return (
    <View style={styles.screen}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Student Carsdasdsd</Text>
      </View>

      <View style={styles.cardContainer}>
        {/* Header */}


        {/* Card */}
        <View style={styles.card}>
          {/* Upper Section */}
          <View style={styles.upperSection}>
            <Text style={styles.label}>Student Name</Text>
            <Text style={styles.value}>Christopher Haj</Text>

            <Text style={styles.label}>Academic Institution</Text>
            <Text style={styles.value}>The Hebrew University of Jerusalem</Text>

            <Text style={styles.label}>ID</Text>
            <Text style={styles.value}>207824772</Text>

            {/* Profile Photo */}
            <Image
              style={styles.profile}
              source={require('../images/mejpeg.jpeg')}
            />

            {/* Badge */}
            <View style={styles.badge}>
              <Text style={styles.badgeText}>תשפ"ה</Text>
              <Text style={styles.badgeSubtext}>2024–2025</Text>
            </View>
          </View>

          {/* Barcode Placeholder */}
          <View style={styles.barcodeContainer}>
            <Text style={styles.barcode}>||||||||||||||||||</Text>
            <Text style={styles.value}>212523906</Text>
          </View>
        </View>

        {/* Footer Date */}
        <Text style={styles.date}>08-04-2025</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F2F3F5',
    justifyContent: 'center',
    alignItems: 'center',

  },
  cardContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 20,
    alignItems: 'center',
    elevation: 5,
  },
  header: {
    padding: 16,
    backgroundColor: '#4F2C56',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    elevation: 3,
    zIndex: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4F2C56',
    textAlign: 'center',
  },
  card: {
    width: '90%',
    marginTop: 20,
    backgroundColor: '#4F2C56',
    borderRadius: 16,
    padding: 16,
  },
  upperSection: {
    position: 'relative',
  },
  label: {
    color: '#ccc',
    fontSize: 12,
    marginTop: 10,
  },
  value: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  profile: {
    width: 90,
    height: 90,
    borderRadius: 8,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  badge: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 8,
    borderRadius: 6,
    width: 100,
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  badgeSubtext: {
    color: '#fff',
    fontSize: 12,
  },
  barcodeContainer: {
    backgroundColor: '#fff',
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
    borderRadius: 6,
  },
  barcode: {
    fontSize: 24,
    letterSpacing: 4,
  },
  date: {
    marginTop: 20,
    fontSize: 16,
    color: '#4F2C56',
    fontWeight: 'bold',
  },
});
