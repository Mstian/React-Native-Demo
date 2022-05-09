import React, {Component} from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { connect } from "react-redux";
import action from "../action";
class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>我的</Text>
                <Button title="点击改变主题" onPress={() => {
                    this.props.onThemeChange('green');
                }}></Button>
            </View>    
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onThemeChange: (theme) => (dispatch(action.onThemeChange(theme)))
});

export default connect(null, mapDispatchToProps)(Index);
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})