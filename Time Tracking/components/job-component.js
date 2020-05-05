import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Alert
} from "react-native";
import { Icon, Button} from 'react-native-elements';

const JobComponent = () => {
    return (
        <View style={styles.jobcomponent}>
            <View style={{ flexDirection: "row" }}>
                <View style={{ width: 10, height: '100%', backgroundColor: "orange", marginRight: 20 }}>
                </View>
                <View style={styles.pausedcontainer}>
                    <View>
                        <Text style={{ color: "orange", fontStyle: "italic", fontSize: 20 }}>Paused</Text>
                    </View>
                    <View style={{ paddingTop: 5 }}>
                        <Text style={{ fontSize: 17 }}>132611-3220391</Text>
                    </View>
                </View>
            </View>
            <View style={styles.orderdetailscontainer}>
                <Text style={{ color: 'grey', fontSize: 15 }}>CUSTOMER</Text>
                <Text style={{ fontSize: 15 }}>Boeing</Text>

            </View>
            <View style={styles.orderdetailscontainer}>

                <Text style={{ color: 'grey', fontSize: 15 }}>PO</Text>
                <Text style={{ fontSize: 15 }}>20203</Text>

            </View>
            <View style={styles.orderdetailscontainer}>

                <Text style={{ color: 'grey', fontSize: 15 }}>PROCESS TIME</Text>
                <Text style={{ fontSize: 15 }}>40 minutes</Text>

            </View>
            <View style={styles.viewdetailscontainer}>
                <Button type="clear" title="View Details" onPress={() => alert("Add product")} />
            </View>

            <View style={{ flexDirection: 'row' }}>


                <View style={styles.startbutton}>
                    <View>
                        <View>
                            <Button type="clear" icon={
                                <Icon
                                name='play-circle-filled'
                                type='material'
                                color='green'
                                size={35}
                                />
                            }
                            />

                            
                        </View>
                        <View style={{alignItems:'center'}}>
                            <Text style={{ color: 'green'}}>Start</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.stopbutton}>
                <View>
                        <View>
                            <Button type="clear" icon={
                                <Icon
                                name='stop-circle'
                                type='material-community'
                                color='red'
                                size={35}
                                />
                            }
                            />

                            
                        </View>
                        <View style={{alignItems:'center'}}>
                            <Text style={{ color: 'red'}}>Stop</Text>
                        </View>
                    </View>


                </View>
            </View>



        </View>
    )
}

export default JobComponent;



const styles = StyleSheet.create({
    jobcomponent: {
        flexDirection: 'row',
        height: 80,
        width: '100%',
        // backgroundColor: 'grey',
        justifyContent: 'space-between',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        flexWrap: 'wrap'
    },
    pausedcontainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: 5,
        // backgroundColor: 'pink',
        marginRight: 30

    },
    orderdetailscontainer: {
        height: '100%',
        width: 150,
        flexDirection: 'column',
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginRight: 10,
        paddingLeft: 20
    },
    viewdetailscontainer: {
        width: 150,
        justifyContent: 'center',
        // backgroundColor:'blue'
    },
    startbutton: {
        height: '100%',
        width: 100,
        backgroundColor: '#edf4e7',
        justifyContent: 'center',
        alignItems: 'center'
    },
    stopbutton: {
        height: '100%',
        width: 100,
        backgroundColor: '#ffebec',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
