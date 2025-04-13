// styles/cardStyles.js

import { StyleSheet, Platform } from 'react-native'; // Added Platform import
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
        borderRadius: 25, // Increased border radius
        backgroundColor: '#FFFFFF',
        // Enhanced shadow for iOS
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
            // Enhanced shadow for Android
            android: {
                elevation: 8,
            },
        }),
    },
    cardHeader: {
        backgroundColor: COLORS.cyan,
        padding: 15,
        alignItems: 'center',
        borderTopLeftRadius: 25, // Match the card's border radius
        borderTopRightRadius: 25,
    },
    cardHeaderText: {
        color: '#FFFFFF',
        fontSize: 16,
        marginBottom: 5,
    },
    cardHeaderSubText: {
        color: '#FFFFFF',
        fontSize: 14,
    },
    cardBody: {
        backgroundColor: COLORS.primary,
        padding: 20,
        minHeight: 200,
    },
    cardFooter: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        alignItems: 'center',
        borderBottomLeftRadius: 25, // Match the card's border radius
        borderBottomRightRadius: 25,
    },

    cardBody: {
        backgroundColor: COLORS.primary,
        padding: 20,
        flexDirection: 'row', // Makes the container horizontal
        justifyContent: 'space-between',
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
    barcode: {
        width: '60%',
        height: '60',
        margin: '20',
    },

    cardFooter: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
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
        width: '80%',  // Adjust as needed
        height: 70,    // Adjust as needed
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
        fontSize: 80,
        color: '#000000',
    },

    // styles/cardStyles.js
    // Add these new styles

    cardFooter: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
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
        width: '80%',  // Adjust as needed
        height: 70,    // Adjust as needed
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
        fontSize: 30,
        color: '#000000',
    },
    // styles/cardStyles.js
    // Add these new styles

    timeContainer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    timeText: {
        color: COLORS.primary,
        fontSize: 24,
        fontWeight: '500',
        marginBottom: 8,
    },
    dateText: {
        color: COLORS.primary,
        fontSize: 18,
    },
});