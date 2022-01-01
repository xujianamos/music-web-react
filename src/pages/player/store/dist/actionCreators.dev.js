"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLyricAction = exports.changeCurrentLyricIndex = exports.changeCurrentSong = exports.changeSequenceAction = exports.getSongDetailAction = void 0;

var actionType = _interopRequireWildcard(require("./constant"));

var _player = require("@/services/player");

var _mathUtils = require("@/utils/math-utils");

var _parseLyric = require("@/utils/parse-lyric");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * @description: 存储数据的action
 * @param {*}
 * @return {*}
 */
var changeCurrentSongDetailAction = function changeCurrentSongDetailAction(res) {
  return {
    type: actionType.CHANGE_CURRENT_SONG,
    currentSong: res
  };
};
/**
 * @description: 发起网络请求获取音乐详情
 * @param {*}
 * @return {*}
 */


var getSongDetailAction = function getSongDetailAction(ids) {
  return function (dispatch, getState) {
    // 根据id查找playlist中是否已经有了该歌曲
    var playList = getState().getIn(["player", "playList"]);
    var index = playList.findIndex(function (item) {
      return item.id === ids;
    });
    var song = null; //  判断是否找到歌曲

    if (index !== -1) {
      dispatch(changeCurrentSongIndexAction(index));
      song = playList[index];
      dispatch(changeCurrentSongDetailAction(song));
    } else {
      // 请求歌曲数据
      (0, _player.getSongDetail)(ids).then(function (res) {
        song = res.songs && res.songs[0];
        if (!song) return; // 1.将最新请求到的歌曲添加到播放列表中

        var newPlayList = _toConsumableArray(playList);

        newPlayList.push(song); // 2.更新redux的值

        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        dispatch(changeCurrentSongDetailAction(song));
      });
    } // 3.请求该歌曲歌词


    if (!song) return;
    dispatch(getLyricAction(song.id));
  };
};

exports.getSongDetailAction = getSongDetailAction;

var changePlayListAction = function changePlayListAction(playList) {
  return {
    type: actionType.CHANGE_PLAY_LIST,
    playList: playList
  };
};

var changeCurrentSongIndexAction = function changeCurrentSongIndexAction(index) {
  return {
    type: actionType.CHANGE_CURRENT_SONG_INDEX,
    index: index
  };
};

var changeSequenceAction = function changeSequenceAction(sequence) {
  return {
    type: actionType.CHANGE_SEQUENCE,
    sequence: sequence
  };
};

exports.changeSequenceAction = changeSequenceAction;

var changeCurrentSong = function changeCurrentSong(tag) {
  return function (dispatch, getState) {
    var playList = getState().getIn(["player", "playList"]);
    var sequence = getState().getIn(["player", "sequence"]);
    var currentSongIndex = getState().getIn(["player", "currentSongIndex"]);

    switch (sequence) {
      case 1:
        // 随机播放
        var randomIndex = (0, _mathUtils.getRandomNumber)(playList.length);

        while (randomIndex === currentSongIndex) {
          randomIndex = (0, _mathUtils.getRandomNumber)(playList.length);
        }

        currentSongIndex = randomIndex;
        break;

      default:
        // 顺序播放
        currentSongIndex += tag;
        if (currentSongIndex > playList.length) currentSongIndex = 0;
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
        break;
    }

    var currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongDetailAction(currentSong));
    dispatch(changeCurrentSongIndexAction(currentSongIndex));
  };
};

exports.changeCurrentSong = changeCurrentSong;

var changLyricListAction = function changLyricListAction(lyricList) {
  return {
    type: actionType.CHANGE_LYRIC_LIST,
    lyricList: lyricList
  };
};

var changeCurrentLyricIndex = function changeCurrentLyricIndex(index) {
  return {
    type: actionType.CHANGE_CURRENT_LYRIC_INDEX,
    index: index
  };
};

exports.changeCurrentLyricIndex = changeCurrentLyricIndex;

var getLyricAction = function getLyricAction(id) {
  return function (dispatch) {
    (0, _player.getLyric)(id).then(function (res) {
      console.log(res);
      var lyric = res.lrc.lyric;
      var lyricList = (0, _parseLyric.parseLyric)(lyric);
      dispatch(changLyricListAction(lyricList));
    });
  };
};

exports.getLyricAction = getLyricAction;