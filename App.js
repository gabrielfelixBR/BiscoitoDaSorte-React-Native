import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

function App(){
  const [img, setImg] = useState(require('./src/biscoito.png'))
  const [textFrase, setTextFrase] = useState('')

  const frase = [
    'Siga os bons e aprenda com eles.', 
    'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'
  ]

  function quebrarBiscoito(){
    let aleatorio = Math.floor(Math.random() * frase.length)
    setImg(require('./src/biscoitoAberto.png'))
    setTextFrase('" ' + frase[aleatorio] + ' "')
  }
  
  function reinicirBiscoito(){
    setImg(require('./src/biscoito.png'))
    setFrase('')
  }

  return(
    <View style={styles.containerApp}>
      <View style={styles.containerImg}>
        <Image 
          source={img}
          style={styles.imgBiscoito}
        />
         <Text style={styles.textFrase}>{textFrase}</Text>
      </View>

      <View style={styles.containerBotoes}>
        <TouchableOpacity style={styles.bodybotaoQuebrar} onPress={quebrarBiscoito}>
          <View style={styles.botao}>
            <Text style={styles.textBotaoQuebrar}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bodybotaoReiniciar} onPress={reinicirBiscoito}>
          <View style={styles.botao}>
            <Text style={styles.textBotaoBiscoito}>Reiniciar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 35
  },  
  imgBiscoito: {
    width: 200,
    height: 200,
    marginBottom: 35
  },
  textFrase: {
    fontSize: 18,
    color: 'orange',
    textAlign: 'center',
    fontWeight: '500',
    fontStyle: 'italic',
  },
  containerBotoes: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  bodybotaoQuebrar: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: 'orange',
    width: 200,
    height: 50,
    marginBottom: 15
  },
  bodybotaoReiniciar: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: 'black',
    width: 200,
    height: 50
  },
  botao: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBotaoQuebrar: {
    color: 'orange',
    fontSize: 14,
    fontWeight:'600',
  },
  textBotaoBiscoito: {
    color: 'black',
    fontSize: 14,
    fontWeight:'600',
  }
})


export default App