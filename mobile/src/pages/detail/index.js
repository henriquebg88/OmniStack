import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Incidents(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={() => {}}>
                    <Feather name='arrow-left' size={28} color='#E82041' />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                    <Text style={[styles.incidentProperty, { marginTop : 0 }]}>ONG</Text>
                    <Text style={styles.incidentValue}>APAD</Text>
                    
                    <Text style={styles.incidentProperty}>CASO</Text>
                    <Text style={styles.incidentValue}>Cachorro faminto</Text>
                    
                    <Text style={styles.incidentProperty}>VALOR :</Text>
                    <Text style={styles.incidentValue}>R$ 39,00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o heroi desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato.</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={() => {}} >
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={() => {}} >
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    );
} 