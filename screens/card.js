// screens/card.js

import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Image } from 'react-native';
import { cardStyles } from '../styles/cardStyles';
import COLORS from '../constants/colors';

const StudentCard = () => {
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
                <Text style={cardStyles.cardHeaderText}>האוניברסיטה העברית בירושלים</Text>
                <Text style={cardStyles.cardHeaderSubText}>THE HEBREW UNIVERSITY OF JERUSALEM</Text>
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
                    <Text style={cardStyles.infoValue}>212523906</Text>
                  </View>
                </View>

                {/* Right Side - Photo and Year */}
                <View style={cardStyles.photoContainer}>
                  <Image
                    style={cardStyles.photo}
                    source={require('../images/mejpeg.jpeg')} // Make sure to add your photo
                  />
                  <View style={cardStyles.yearBox}>
                    <Text style={cardStyles.yearText}>תשפ״ה</Text>
                    <Text style={cardStyles.yearText}>2024-2025</Text>
                  </View>
                </View>
              </View>

              {/* White Bottom Section */}
              <View style={cardStyles.cardFooter}>
                <Text>
                  207824772
                </Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default StudentCard;