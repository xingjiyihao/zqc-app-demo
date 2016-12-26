/**
 * 在球场
 * zaiqiuchang.com
 */

import React, {Component} from 'react';
import {StyleSheet, Platform, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {COLOR, RES_USER_AVATARS} from '../../config';
import logger from '../../logger';
import * as components from '../';
import * as helpers from '../helpers';

export default ({navigator, object, account}) => {
  let user = helpers.userFromCache(object, account.userId);
  return (
    <View>
      <components.TextNotice>基本资料</components.TextNotice>
      <components.Block>
        <components.BlockItem
          leftText='昵称'
          rightText={user.nickname || '未填写'}
          rightIcon='angle-right'
          onPress={() => navigator.push({screen: 'zqc.EditProfileNickname', title: '修改昵称'})}
          containerStyle={{borderTopWidth: 0}}
        />
        <components.BlockItem
          leftText='头像'
          rightImage={helpers.userAvatarSource(user)}
          rightIcon='angle-right'
          onPress={() => navigator.push({screen: 'zqc.EditProfileAvatar', title: '设置头像'})}
          imageStyle={{borderRadius: 5}}
          containerStyle={{height: 60}}
        />
        <components.BlockItem
          leftText='性别'
          rightText={user.gender ? (user.gender == 'm' ? '男' : '女') : '未选择'}
          rightIcon='angle-right'
          onPress={() => navigator.showModal({screen: 'zqc.EditProfileGender'})}
        />
      </components.Block>
    </View>
  );
}

const styles = StyleSheet.create({});
