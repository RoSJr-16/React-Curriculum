import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';


export default function App() {
  return (
  <View style={styles.container}>
     
      <Text style={styles.texth1}>RODOLFO F. SILVA</Text>
      <View style={styles.tarefas}>
                   <Image
            style={styles.tinyLogo}
            source={require('./src/img/images.jpg')}
          />
           <Text style={styles.text}>
               <Text style={{fontWeight: "bold"}}>Profissão: </Text>Programador
                <br/>
                <Text style={{fontWeight: "bold"}}>Idade: </Text> 39 anos
                <br/>
                <Text style={{fontWeight: "bold"}}>Telefone: </Text> (11) 4002-8922
                <br/>
                <Text style={{fontWeight: "bold"}}>Endereço: </Text> Rua da Lima, 189
          </Text>
      </View>

      <br/>


      <View  style={styles.tarefas}>
          
           <Text style={styles.text}>
            <Text style={{fontWeight: "bold"}}>EXPERIÊNCIAS</Text>
            <br/>
            <br/>
              1978 | Serviu o exército
              <br/>
              1980 | Programador Junior na Nintendo
              <br/>
              1987 | Chefe de Cozinha
              <br/>
              1993 | Programador Junior na Capcom
              <br/>
              2001 | Programador Senior na Konami
          </Text>
      </View>

      <br/>
      
      <View style={styles.tarefas}>
           <Text style={styles.text}>
            <Text style={{fontWeight: "bold"}}>FORMAÇÕES</Text>
            <br/>
            <br/>
                Programação na USP -  1985
                <br/>
                Doutorado Programação na USP - 1997
            </Text>
      </View>

      <View style={styles.tarefas}>
           <Text style={styles.text}>
            <Text style={{fontWeight: "bold"}}>LINGUAS</Text>
            <br/>
            <br/>
                Inglês, Espanhol e Russo
            </Text>
      </View>
      <br/>


    
  </View>
  );
}

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    backgroundColor: '#00183bff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '120%',
   
  },  
  fundo:{
    height: '100%',
    width: '100%', 
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute'
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: '25%',
    shadowColor:  '60px -16px teal;'
  },
  tarefas:{
    display: 'flex',
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60%',
    gap: '20px', 
    marginTop: '10px',
    border: 'solid gray 2px',
    padding: '10px',
    paddingLeft: '30px',
    paddingRight: '30px',
    borderRadius: '10px'
  }, 
  text:{
    color: '#fff',
     width: '50%',
     fontSize: '10px',
     textAlign: 'justify'
  },
  texth1:{
    color: '#fff',
     width: '50%',
     fontSize: '25px',
     textAlign: 'center'
  }
});