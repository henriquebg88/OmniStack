import {StyleSheet } from 'react-native';
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
        marginBottom:16,
        marginTop:48
    },

    incidentProperty:{
        fontSize:14,
        fontWeight:'bold',
        color: '#41414d',
        marginTop: 24
    },

    incidentValue:{
        marginTop:4,
        fontSize:15,
        color:'#737380'
    },

    contactBox:{
        backgroundColor: '#fff',
        padding:24,
        borderRadius:8,
        marginBottom:16,
    },

    heroTitle: {
        fontWeight:'bold',
        fontSize:20,
        color:'#13131a',
        lineHeight:30
    },

    heroDescription: {
        fontSize:15,
        marginTop:16,
        color:'#737380'
    },

    actions:{
        marginTop:16,
        flexDirection:'row',
        justifyContent:'space-between'
    },

    action:{
        backgroundColor: '#e02041',
        height: 50,
        width:'48%',
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center'
    },

    actionText:{
        color: '#fff',
        fontSize:15,
        fontWeight:'bold'
    }
    
})