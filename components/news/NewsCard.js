import { View, Text } from "react-native";
import React from "react";
import { Card } from "react-native-paper";

const NewsCard = (props) => {
  return (
    <View>
      <Card
        style={{ marginVertical: 5, marginHorizontal: 10 }}
        onPress={props.onPress}
      >
        <Card.Cover source={{ uri: props.image }} />
        <Card.Content>
          <Text
            variant="titleSmall"
            style={{ color: "#1F415B", fontWeight: "400", marginTop: 10 }}
          >
            {props.title}
          </Text>
          {/* <View style={{display : "flex",flexDirection : "row",marginTop : 5}}> */}
          <Text style={{ color: "#1F415B", fontSize: 12,fontWeight: "600" }}>
            Author -{" "}
            <Text style={{ fontSize: 14,fontWeight: "300" }}>
              {" "}
              {props.author}
            </Text>
          </Text>
          <Text style={{ color: "#1F415B",fontWeight: "600" }}>
            Description -{" "}
            <Text style={{ fontSize: 14,fontWeight: "300"  }}>
              {props.description}
            </Text>{" "}
          </Text>

          {/* </View> */}
        </Card.Content>
      </Card>
    </View>
  );
};

export default NewsCard;
