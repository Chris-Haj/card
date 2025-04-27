// screens/card.js
import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native';
import { cardStyles } from '../styles/cardStyles';
// import COLORS from '../constants/colors';

const StudentCard = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Update time and date immediately
    updateTimeAndDate();

    // Set up interval to update time every second
    const interval = setInterval(updateTimeAndDate, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const updateTimeAndDate = () => {
    const now = new Date();

    // Format time as HH:MM:SS
    const time = now.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    // Format date as DD-MM-YYYY
    const date = now.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '-');

    setCurrentTime(time);
    setCurrentDate(date);
  };

  // Move the return statement outside of updateTimeAndDate
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={cardStyles.outerContainer}>
        <SafeAreaView style={cardStyles.safeArea}>
          {/* Purple Header Section */}
          <View style={cardStyles.header}>
            <Text style={cardStyles.headerText}>Back</Text>
            <Text style={cardStyles.headerTitle}>Student Card</Text>
            <Text style={cardStyles.headerText}>He</Text>
          </View>

          <View style={cardStyles.contentContainer}>
            {/* Card */}
            <View style={cardStyles.card}>
              {/* Cyan Top Section */}
              <View style={cardStyles.cardHeader}>
                <View style={cardStyles.logoContainer}>
                  <Image
                    source={require('../images/Hebrew_University_Logo.svg.png')}
                    style={cardStyles.logoImage}
                    resizeMode="contain" // This ensures the image scales properly
                  />
                </View>
                <View style={cardStyles.headerTextContainer}>
                  <Text style={cardStyles.cardHeaderTextHebrew}>האוניברסיטה העברית בירושלים</Text>
                  <Text style={cardStyles.cardHeaderTextEnglish}>THE HEBREW UNIVERSITY OF JERUSALEM</Text>
                </View>
              </View>

              {/* Purple Middle Section */}
              <View style={cardStyles.cardBody}>
                <View style={cardStyles.infoContainer}>
                  <View style={cardStyles.infoSection}>
                    <Text style={cardStyles.infoLabel}>Student Name</Text>
                    <Text style={cardStyles.infoValue}>Christopher Haj</Text>
                  </View>

                  <View style={cardStyles.infoSection}>
                    <Text style={cardStyles.infoLabel}>Academic Institution</Text>
                    <Text style={cardStyles.infoValue}>The Hebrew University{'\n'}of Jerusalem</Text>
                  </View>

                  <View style={cardStyles.infoSection}>
                    <Text style={cardStyles.infoLabel}>ID</Text>
                    <Text style={cardStyles.infoValue}>207824772</Text>
                  </View>
                </View>

                {/* Right Side - Photo and Year */}
                <View style={cardStyles.photoContainer}>
                  <Image
                    style={cardStyles.photo}
                    source={require('../images/mejpeg.jpeg')}
                  />
                  <View style={cardStyles.yearBox}>
                    <Text style={cardStyles.yearText}>תשפ״ה</Text>
                    <Text style={cardStyles.yearText}>2024-2025</Text>
                  </View>
                </View>
              </View>

              {/* White Bottom Section */}
              <View style={cardStyles.cardFooter}>
                <View style={cardStyles.barcodeContainer}>
                  <TouchableOpacity style={cardStyles.arrowButton}>
                    <Text style={cardStyles.arrowText}>‹</Text>
                  </TouchableOpacity>

                  <View style={cardStyles.barcodeContent}>
                    <Image
                      style={cardStyles.barcode}
                      source={require('../images/wide_barcode.png')}
                    />
                    <Text style={cardStyles.barcodeNumber}>207824772</Text>
                  </View>

                  <TouchableOpacity style={cardStyles.arrowButton}>
                    <Text style={cardStyles.arrowText}>›</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Add the time and date display */}
            <View style={cardStyles.timeContainer}>
              <Text style={cardStyles.timeText}>{currentTime}</Text>
              <Text style={cardStyles.dateText}>{currentDate}</Text>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default StudentCard;