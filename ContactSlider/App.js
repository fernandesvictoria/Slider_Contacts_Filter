import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, SafeAreaView, StatusBar, Platform } from "react-native";
import * as Contacts from "expo-contacts";
import Slider from "@react-native-community/slider";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [minNumbers, setMinNumbers] = useState(1);

  // Carrega os contatos
  useEffect(() => {
    (async () => {
      // 1. requestPermissionsAsync() - Solicita permissão para acessar contatos
      const { status } = await Contacts.requestPermissionsAsync();
      
      if (status === "granted") {
        // 2. getContactsAsync() - Obtém a lista de contatos
        const { data } = await Contacts.getContactsAsync({
          // 3. Fields.PhoneNumbers - Especifica que queremos os números de telefone
          fields: [Contacts.Fields.PhoneNumbers],
        });
        setContacts(data);
        setFilteredContacts(data);
      }
    })();
  }, []);

  //Filtrando contatos baseado no número mínimo de telefones
  useEffect(() => {
    const filtered = contacts.filter(
      (contact) =>
        contact.phoneNumbers && contact.phoneNumbers.length >= minNumbers
    );
    setFilteredContacts(filtered);
  }, [minNumbers, contacts]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        <Text style={styles.title}>Filtrar Contatos</Text>
        <Text style={styles.subtitle}>Mínimo de números: {minNumbers}</Text>
        
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={5}
          step={1}
          value={minNumbers}
          onValueChange={setMinNumbers}
          minimumTrackTintColor="#6e48aa"
          maximumTrackTintColor="#3a3a3a"
          thumbTintColor="#6e48aa"
        />
        
        <FlatList
          data={filteredContacts}
          keyExtractor={(item) => item.id || Math.random().toString()}
          renderItem={({ item }) => (
            <View style={styles.contactCard}>
              <Text style={styles.contactName}>{item.name}</Text>
              {item.phoneNumbers &&
                item.phoneNumbers.map((phone, index) => (
                  <Text key={index} style={styles.phoneNumber}>
                    {index + 1}. {phone.number}
                  </Text>
                ))}
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    color: "#ffffff",
  },
  subtitle: {
    color: "#aaaaaa",
    marginBottom: 5,
    textAlign: "center",
  },
  slider: {
    width: "100%",
    marginVertical: 25,
    height: 40,
  },
  contactCard: {
    padding: 18,
    marginBottom: 15,
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  contactName: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
    color: "#ffffff",
  },
  contactCount: {
    color: "#bbbbbb",
    marginBottom: 10,
  },
  phoneNumber: {
    color: "#6e48aa",
    marginLeft: 15,
    marginTop: 5,
    fontSize: 15,
  },
});