import React, { Component } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

const AboutScreen = () => {
  return (
    <View style={styles.about}>
      <View style={styles.container}></View>
      <View style={styles.paragraph}>
        <View style={styles.circle}></View>
        <Text style={styles.title}>Faites votre choix :</Text>
        <Text style={styles.text}>
          Aperhome rassemble des centaines de bars.Lorsque vous ouvrez
          l'application, vous pouvez les faire défiler en quête d'inspiration,
          mais aussi rechercher un bars ou un type de cuisine si vous savez ce
          dont vous avez envie.Vous avez trouvé un cocktail qui vous plaît ? Il
          vous suffit d'appuyer dessus pour l'ajouter à votre commande.
        </Text>
      </View>
      <View style={styles.circle2}></View>
      <Text style={styles.title2}>Commandez :</Text>
      <Text style={styles.text}>
        Commandez : Au moment du paiement, vous verez quand est ou recupéré la
        commande de la commande (taxes et frais de livraison inclus). Si tout
        vous semble correct, appuyez sur Commander : c'est aussi simple que ça !
      </Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  about: {
    backgroundColor: "#364F59",
    height: 800,
  },

  container: {
    marginTop: 40,
  },
  text: {
    marginTop: 40,
    marginLeft: 15,
    color: "white",
  },

  title: {
    color: "white",
    marginTop: 10,
  },
  title2: {
    color: "white",
    marginTop: 45,
    marginLeft: 34,
  },

  circle: {
    backgroundColor: "#F9B233",
    borderRadius: 50,
    width: 15,
    height: 15,
    marginBottom: -55,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 13,
  },
  circle2: {
    backgroundColor: "#F9B233",
    borderRadius: 50,
    width: 15,
    height: 15,
    marginBottom: -60,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },

  paragraph: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
