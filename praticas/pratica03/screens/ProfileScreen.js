import { StyleSheet, Text, View } from "react-native";

function ProfileScreen (){
    return (
        <View style={styles.container}>
            <View style={styles.profileSection}>
                <View style={styles.profileImage} />
                <View>
                    <Text style={styles.profileName}>Letícia Melo</Text>
                    <Text style={styles.profileRole}>Desenvolvedora React Native</Text>
                </View>
            </View>
            <Text style={styles.sectionTitle}>Habilidades</Text>
            <View style={styles.skillsSection}>
                <View style={styles.skillBadge}>
                    <Text style={styles.skillName}>React Native</Text>
                </View>
                <View style={styles.skillBadge}>
                    <Text style={styles.skillName}>JavaScript</Text>
                </View>
                <View style={styles.skillBadge}>
                    <Text style={styles.skillName}>CSS</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#FFFBFE", padding:16, },
    profileSection: { flexDirection: "row", alignContent: "center", marginBottom: 24, },
    profileImage: { width: 80, height: 80, borderRadius: 4, backgroundColor: "#EADDFF", marginRight: 16, },
    profileRole: { fontSize: 16, color: "#49454F", },
    sectionTitle: { fontSize: 18, fontWeight: "500", color: "#1C1B1F", marginBottom: 8, },
    skillsSection: { flexDirection: "row", flexWrap: "wrap", margin: -4, },
    skillBadge: { backgroundColor: "#E8DEF8", paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16, },
    skillName: { fontSize: 14, color: "#1C1B1F", },
});

export default ProfileScreen;