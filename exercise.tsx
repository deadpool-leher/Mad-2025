import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const exercise = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={Styles.container}>
      <View style={Styles.header}>
        <Image
          style={Styles.profileImage}
          source={require('./Asets/deadpool1.jpg')}
        />
        <Text style={Styles.name}>Jethro Supit</Text>
        <Text style={Styles.title}>Universitas Klabat</Text>
        <Text style={Styles.title}>Computer Science</Text>
      </View>

    

      <View style={Styles.sectionCentered}>
        <Text style={Styles.sectionTitle}>Informasi Kontak</Text>
        <Text>📧JethroSupit@gmail.com</Text>
        <Text>📱 +628998273221</Text>
        <Text>📍 Manado, Indonesia</Text>
        <Text>🔗 https://www.youtube.com/watch?v=gNPy_CO4zqA</Text>
      </View>

      <View style={Styles.sectionCentered}>
        <Text style={Styles.sectionTitle}>Pendidikan</Text>
        <Text style={Styles.itemTitle}>Universitas Klabat</Text>
        <Text style={Styles.itemSubtitle}>Informatika (2020-2024)</Text>
      </View>
      <View style={Styles.sectionCentered}>
        <Text style={Styles.sectionTitle}>Character Yang Disukai</Text>
        <Text style={Styles.itemSubtitle}>Deadpool</Text>
      </View>
    </ScrollView>
  );
};

export default exercise;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
    textAlign: 'center',
  },
  sectionCentered: {
    alignItems: 'center',
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#34495e',
    textAlign: 'center',
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 5,
    textAlign: 'center',
  },
});
