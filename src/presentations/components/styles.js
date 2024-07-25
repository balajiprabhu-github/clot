import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  defaultContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  splashContainer: {
    flex: 1,
    backgroundColor: "#8E6CEF",
    alignItems: "center",
    justifyContent: "center",
  },

  appLogoImage: {
    width: 175,
    height: 80,
  },

  backButton: {
    backgroundColor: "#F4F4F4",
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  backButtonIcon: {
    width: 16,
    height: 16,
  },

  primaryButtonDisabled: {
    height: 50,
    backgroundColor: "#F4F4F4",
    borderRadius: 40,
    padding: 16,
    alignItems: "center",
  },

  primaryButtonEnabled: {
    height: 50,
    backgroundColor: "#8E6CEF",
    borderRadius: 40,
    padding: 16,
    alignItems: "center",
  },

  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  primaryButtonTextDisabled: {
    color: "#A0A0A0",
    fontSize: 16,
    fontWeight: "bold",
  },

  categoryItem: {
    height: 120,
    width: 80,
    alignItems: "center",
    marginRight: 18,
  },

  categoryImage: {
    height: 70,
    width: 70,
    margin: 0,
    borderRadius: 35,
  },

  categoryTitle: {
    fontSize: 14,
    marginTop: 8,
  },

  productTile: {
    width: 160,
    height: 300,
    borderRadius: 8,
    backgroundColor: "#fff",
    margin: 8,
    position: "relative",
  },
  productTileImageContainer: {
    width: "100%",
    height: 220,
    position: "relative",
  },
  productTileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "center",
    borderRadius: 8,
  },
  productTileRatingContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: "rgba(244, 244, 244, 0.5)",
    borderRadius: 4,
    padding: 5,
  },
  productTileRating: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 12,
  },
  productTileTitle: {
    fontSize: 12,
    color: "#000",
    paddingLeft: 8,
    marginTop: 8,
    overflow: "hidden",
  },
  productTilePrice: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
    paddingLeft: 8,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  primaryTextInput: {
    padding: 18,
    backgroundColor: "#F4F4F4",
    borderRadius: 8,
  },

  subTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
  },

  homeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  categoryContainer: {
    paddingVertical: 10,
  },
  productContainer: {
    paddingVertical: 20,
  },
  row: {
    justifyContent: "space-between",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});

export default styles;
