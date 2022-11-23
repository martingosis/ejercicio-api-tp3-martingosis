import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View, Button} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const axios = require('axios').default;


const Drawer = createDrawerNavigator();

function HomeScreen(){

  const [datos, setDato] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  function pegarAPI(){
    
    setLoading(true);
    axios.get("https://hp-api.herokuapp.com/api/characters")
      
      .then(function (response){
          setDato(response.data);
          setLoading(false);
      })
      .catch(function (error){
          console.log(error);
      })
  }

  
  return(

    <View style={styles.container}>
        <Text>BIENVENIDO API DE ACTORES DE HARRY POTTER</Text>
        {!loading ? 
        <Button 
          title="Obtener Nombres"
            onPress={() => pegarAPI()}
            style={styles.boton}
        /> : <ActivityIndicator/>}
        {datos.length == 0 ? null :
          <>
          {datos.map((datos, index) => <Text key={index}>{datos.name}</Text>)}
          </>
        }
        <StatusBar style="auto" />
      </View>
  
  
  );


}

function DetailScreen(){
return(

  <View style={styles.container}>
      <Text>Pantalla de detalles</Text>
      <StatusBar style="auto" />
    </View>


);


}





export default function App() {

  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen}/>
      <Drawer.Screen name="Detalles" component={DetailScreen}/>
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton: {
    color: 'red',
    margin: 20
  }
});