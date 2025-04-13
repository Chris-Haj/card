// styles/cardStyles.js

import { StyleSheet, Platform } from 'react-native';
import COLORS from '../constants/colors';

export const cardStyles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    safeArea: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: COLORS.primary,
    },
    headerTitle: {
        color: COLORS.text.light,
        fontSize: 20,
        fontWeight: '500',
    },
    headerText: {
        color: COLORS.text.light,
        fontSize: 16,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
    },
    card: {
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 25,
        backgroundColor: '#FFFFFF',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 8,
            },
            android: {
                elevation: 8,
            },
        }),
    },
    cardHeader: {
        backgroundColor: COLORS.cyan,
        padding: 15,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        flexDirection: 'row-reverse', // Makes items align horizontally
        alignItems: 'center', // Centers items vertically
    },
    logoContainer: {
        width: 60, // Adjust this value based on your needs
        height: 60, // Adjust this value based on your needs
        marginLeft: -30 // Space between logo and text
    },
    logoImage: {
        width: '100%',
        height: '100%',
        marginLeft: -40
    },
    headerTextContainer: {
        flex: 1, // Takes up remaining space
        alignItems: 'center', // Centers text horizontally
    },
    cardHeaderText: {
        color: '#FFFFFF',
        fontSize: 10,
        marginBottom: 5,
    },

    cardBody: {
        backgroundColor: COLORS.primary,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardFooter: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        alignItems: 'center',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    infoSection: {
        marginBottom: 20,
    },
    infoLabel: {
        color: '#FFFFFF',
        fontSize: 12,
        marginBottom: 4,
    },
    infoValue: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
    },
    photoContainer: {
        alignItems: 'center',
        marginLeft: 20,
    },
    photo: {
        width: 120,
        height: 120,
        marginBottom: 10,
    },
    yearBox: {
        borderWidth: 1,
        borderColor: '#FFFFFF',
        padding: 8,
        alignItems: 'center',
        borderRadius: 4,
    },
    yearText: {
        color: '#FFFFFF',
        fontSize: 12,
        textAlign: 'center',
    },
    barcodeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    barcodeContent: {
        flex: 1,
        alignItems: 'center',
    },
    barcode: {
        width: '80%',
        height: 70,
        resizeMode: 'contain',
    },
    barcodeNumber: {
        marginTop: 10,
        fontSize: 16,
        color: '#000000',
    },
    arrowButton: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrowText: {
        fontSize: 60,
        color: '#000000',
    },
    // In your cardStyles.js, update the time-related styles:

    timeContainer: {
        alignItems: 'center',
        marginTop: -5, // Reduced from 20 to bring it closer to card
        marginBottom: 20,
    },
    timeText: {
        color: COLORS.primary,
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 8,
        letterSpacing: 28, // Add space between numbers
    },
    dateText: {
        color: COLORS.primary,
        fontSize: 22,
        fontWeight: 'bold',
        letterSpacing: 4, // Add space between numbers/dashes
    },
});