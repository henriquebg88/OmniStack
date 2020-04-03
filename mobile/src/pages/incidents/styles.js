import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container : {
        flex : 1,
        paddingHorizontal : 24,
        paddingTop : Constants.statusBarHeight + 20
    },

    header : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },

    headerText : {
        fontSize: 15,
        color: '#737380'
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 48,
        marginBottom: 16,
        color: '#13131a'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    incidentList:{
        marginTop:32
    },

    incident:{
        backgroundColor: '#fff',
        padding:24,
        borderRadius:8,
        marginBottom:16
    },

    incidentProperty:{
        fontSize:14,
        fontWeight:'bold',
        color: '#41414d'
    },

    incidentValue:{
        marginTop:4,
        marginBottom:24,
        fontSize:15,
        color:'#737380'
    },

    detailsButton:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    detailsButtonText:{
        color: '#e02041',
        fontSize:15
    }
});