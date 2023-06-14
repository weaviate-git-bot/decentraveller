import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {addReviewsScreenWordings} from "./wording";
import DecentravellerButton from "../../commons/components/DecentravellerButton";

const imagePath1 = '../../assets/images/ar4.jpeg'

const AddReviewComment = () => {
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);

    const handleRating = (selectedRating) => {
        setRating(selectedRating);
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <TouchableOpacity
                    key={i}
                    activeOpacity={0.7}
                    onPress={() => handleRating(i)}
                >
                    <Text>
                        <Ionicons
                            name={i <= rating ? 'star' : 'star-outline'}
                            size={30}
                            color={i <= rating ? '#FFD700' : '#cc6060'}
                        />
                    </Text>
                </TouchableOpacity>
            );
        }
        return stars;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.commentTitle}>{addReviewsScreenWordings.ADD_COMMENT_TITLE}</Text>
            <View style={styles.commentExampleContainer}>
                <Image source={require('../../assets/images/example-girl.jpeg')} style={styles.imageUserExample} />
                <View style={styles.dialogContainer}>
                    <Image source={require('../../assets/images/dialog.png')}/>
                    <Text style={styles.dialogText}>{addReviewsScreenWordings.EXAMPLE_COMMENT_REVIEW}</Text>
                </View>
            </View>

            <Text style={styles.commentSubtitle}>{addReviewsScreenWordings.ADD_RATE}</Text>
            <View style={styles.starContainer}>{renderStars()}</View>
            <Text style={styles.commentSubtitle}>{addReviewsScreenWordings.ADD_COMMENT_SUBTITLE}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    multiline
                    placeholder="Insert comment here"
                    placeholderTextColor="gray"
                    value={comment}
                    onChangeText={setComment}
                />
            </View>


            <DecentravellerButton text={'Finish'} loading={false} onPress={()=>{
                console.log("raiting=",rating)
                console.log("text=", comment)
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFE1E1',
        padding: 25,
    },
    commentExampleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 30,
        marginLeft: -10
    },

    imageUserExample: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 25,
        marginTop: 20,
    },
    commentTitle: {
        fontSize: 15,
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'left',
        marginRight: 10,
        marginLeft: 10,
    },
    commentSubtitle: {
        fontSize: 15,
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'left',
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
    },
    dialogText: {
        position: 'absolute',
        top: '20%',
        color: 'gray',
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    dialogContainer: {
        alignItems: 'center',
        marginLeft: -10
    },
    inputContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 10,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        minHeight: 200,
        backgroundColor: 'white',
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        color: 'black',
        position: 'absolute',
        top: 10,
        left: 10,
    },
    placeholderText: {
        position: 'absolute',
        top: 10,
        left: 10,
        fontSize: 16,
        color: 'gray',
    },
    starContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
    },
});


export default AddReviewComment;
