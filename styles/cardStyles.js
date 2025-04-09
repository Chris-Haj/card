// screens/card.js

import React from 'react';
import { View, Text, Image, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cardStyles } from './cardStyles';

const StudentCard = () => {
    return (
        <SafeAreaView style={cardStyles.container}>
            <StatusBar barStyle="light-content" />

            {/* Header */}
            <View style={cardStyles.header}>
                <Ionicons name="arrow-back" size={24} color="white" />
                <Text style={cardStyles.headerTitle}>Student Card</Text>
                <Text style={cardStyles.headerRight}>He</Text>
            </View>

            {/* Card Container */}
            <View style={cardStyles.cardContainer}>
                {/* University Logo Section */}
                <View style={cardStyles.logoSection}>
                    <Text style={cardStyles.hebrewText}>האוניברסיטה העברית בירושלים</Text>
                    <Text style={cardStyles.englishText}>THE HEBREW UNIVERSITY OF JERUSALEM</Text>
                </View>

                {/* Rest of your component... */}
            </View>
        </SafeAreaView>
    );
};

export default StudentCard;