// styles/_homestyle.ts
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  // search section
  searchGroup: {
    backgroundColor: "#00796B", // top bar green
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#fff",
    overflow: "hidden",
    height: 48,
  },
  searchControlGroup: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  searchFormText: {
    fontSize: 14,
    color: "#888",
  },
  searchControl: {
    fontSize: 14,
    color: "#000",
  },
  searchButton: {
    backgroundColor: "#FF9800", // orange search button
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },

  // filter section
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  filterContainer: {
    width: 80,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },

  // listings
  listingContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 0, // edge-to-edge
  },
  paginationContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#000",
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  showMoreButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});
