import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const ItensComponent = props => {
  return (
    <View style={estilo.container}>
      <View style={estilo.foto}>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: props.fotoUrl}}
        />
      </View>
      <View style={estilo.detalhes}>
        <Text style={estilo.titulo}>{props.titulo}</Text>
        <Text style={estilo.valor}>R$ {props.valor}</Text>
        <Text>Local: {props.local_anuncio}</Text>
        <Text>Dt. Publicação: {props.data_publicacao}</Text>
      </View>
    </View>
  );
};

const estilo = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: '#999',
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
  },
  foto: {
    flex: 1,
  },
  detalhes: {
    flex: 1.5,
  },
  titulo: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5,
  },
  valor: {
    color: 'green',
  },
});
export default ItensComponent;
