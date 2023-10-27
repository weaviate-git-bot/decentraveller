import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
// @ts-ignore
import { useNavigation } from '@react-navigation/native';
import { placeReviewsBoxStyles } from '../../styles/placeDetailStyles';
import StarComponent from '../../commons/components/StarComponent';
import { ReviewShowProps } from '../../commons/components/DecentravellerReviewsList';
import { UserProfileScreenProps } from '../users/profile/types';
import ReviewImageContainer from './ReviewImageContainer';

export type ReviewItemProps = ReviewShowProps & {
    summarized: boolean;
};

const ReviewItem: React.FC<ReviewItemProps> = ({
    id,
    placeId,
    score,
    text,
    imageCount,
    state,
    ownerNickname,
    ownerWallet,
    avatarUrl,
    createdAt,
    summarized,
    censorStatus
}) => {
    const [showMore, setshowMore] = React.useState<boolean>(!summarized);
    const navigation = useNavigation<UserProfileScreenProps>();

    const showCreatedAt = (createdAt) => {
        return createdAt.split('T')[0];
    };

    return (
        <TouchableOpacity
            style={placeReviewsBoxStyles.reviewItem}
            onPress={() => navigation.navigate('ReviewDetailScreen', { reviewId: id, placeId: placeId })}
        >
            <View style={placeReviewsBoxStyles.reviewHeader}>
                <View style={placeReviewsBoxStyles.dataContainer}>
                    <Text style={placeReviewsBoxStyles.dateText}>{showCreatedAt(createdAt)}</Text>
                    <StarComponent score={score} />
                </View>
                <TouchableOpacity
                    style={placeReviewsBoxStyles.userContainer}
                    onPress={() => navigation.navigate('UserProfileScreen', { walletId: ownerWallet })}
                >
                    <Image
                        source={{
                            uri: avatarUrl,
                        }}
                        style={placeReviewsBoxStyles.avatarImage}
                    />
                    <Text style={placeReviewsBoxStyles.userNameText}>{ownerNickname}</Text>
                </TouchableOpacity>
            </View>
            <View style={placeReviewsBoxStyles.commentContainer}>
                <Text
                    style={placeReviewsBoxStyles.commentText}
                    numberOfLines={summarized ? 3 : null}
                    ellipsizeMode="tail"
                >
                    {text}
                </Text>
            </View>
            <ReviewImageContainer placeId={placeId} reviewId={id} imageCount={imageCount} />
        </TouchableOpacity>
    );
};

export default ReviewItem;
