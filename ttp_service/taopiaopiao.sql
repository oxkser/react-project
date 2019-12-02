/*
Navicat MySQL Data Transfer

Source Server         : MYSQL
Source Server Version : 50540
Source Host           : localhost:3306
Source Database       : taopiaopiao

Target Server Type    : MYSQL
Target Server Version : 50540
File Encoding         : 65001

Date: 2019-12-02 11:07:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tpp_cinema
-- ----------------------------
DROP TABLE IF EXISTS `tpp_cinema`;
CREATE TABLE `tpp_cinema` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cinname` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `act1` varchar(255) DEFAULT NULL,
  `act2` varchar(255) DEFAULT NULL,
  `act3` varchar(255) DEFAULT NULL,
  `act4` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tpp_cinema
-- ----------------------------
INSERT INTO `tpp_cinema` VALUES ('1', '重庆博纳电影院', '沙坪坝区风天大道37号', '29.90', '1', '1', '1', '1');
INSERT INTO `tpp_cinema` VALUES ('2', 'UME影城', '北碚区康宁路58号', '16.50', '1', '0', '1', '1');
INSERT INTO `tpp_cinema` VALUES ('3', '华谊兄弟电影', '南岸区南坪西路38号', '25.50', '1', '1', '1', '1');
INSERT INTO `tpp_cinema` VALUES ('4', '影立方773IMAX影城', '成华区建设南支路4号', '15.50', '1', '0', '1', '1');
INSERT INTO `tpp_cinema` VALUES ('5', '万达影城（SM广场店）', '成华区二环路东二段29号SM广场四楼', '19.90', '1', '0', '0', '1');
INSERT INTO `tpp_cinema` VALUES ('6', '中影星美冰雪大视界影城', '成华区荆翠西路2号 金科中心负一层', '20.50', '0', '0', '1', '1');
INSERT INTO `tpp_cinema` VALUES ('7', '中影UL城市影院驷马桥店', '成华区洪山路28号1栋1单元4楼', '34.60', '0', '1', '0', '0');
INSERT INTO `tpp_cinema` VALUES ('8', '成都百老汇影城万象城店', '成华区双庆路8号万象城三层、四层', '45.50', '1', '1', '0', '1');
INSERT INTO `tpp_cinema` VALUES ('9', '万达影城（财富又一城广场店）', '成华区府青路二段2号财富又一城5楼', '55.50', '0', '1', '0', '1');
INSERT INTO `tpp_cinema` VALUES ('10', '大地影院（上古天地广场店）', '成华区龙潭路33号上古天地广场4楼', '27.80', '0', '1', '1', '1');
INSERT INTO `tpp_cinema` VALUES ('11', '339电影城（原新时代电影城高塔旗舰店）', '成华区猛追湾四川电视塔成都339A区三楼', '28.50', '0', '1', '0', '0');
INSERT INTO `tpp_cinema` VALUES ('12', '卢米埃影城（魅力城店）', '成华区万科路9号凯德广场魅力城4层', '22.50', '1', '1', '1', '0');
INSERT INTO `tpp_cinema` VALUES ('13', '成都中视国际影城IMAX（铁建店）', '成华区东华二路38号中国铁建广场4号楼四层', '21.50', '1', '0', '0', '1');

-- ----------------------------
-- Table structure for tpp_history
-- ----------------------------
DROP TABLE IF EXISTS `tpp_history`;
CREATE TABLE `tpp_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `cinname` varchar(255) DEFAULT NULL,
  `movietitle` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `house` varchar(255) DEFAULT NULL,
  `rows` varchar(255) DEFAULT NULL,
  `col` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tpp_history
-- ----------------------------
INSERT INTO `tpp_history` VALUES ('1', '10000', '重庆博纳电影院', '海上钢琴师', '2019/11/30 下午4:53:40', '67.5', '1号厅', '1排', '1座');
INSERT INTO `tpp_history` VALUES ('7', '10000', '重庆博纳电影院', '海上钢琴师 ', '2019/11/30 下午9:13:16', '67.9', 'vip厅', '1排', '1座');
INSERT INTO `tpp_history` VALUES ('8', '10000', 'UME影城', '决战中途岛', '2019/12/1 上午11:13:05', '80', '4号厅', '3排', '6座');
INSERT INTO `tpp_history` VALUES ('9', '10000', '重庆博纳电影院', '海上钢琴师 ', '2019/12/1 上午11:43:06', '67.9', '5号厅', '3排', '4座');
INSERT INTO `tpp_history` VALUES ('10', '10001', '影立方773IMAX影城', '两只老虎', '2019/12/1 上午11:57:20', '80', '3号厅', '1排', '3座');
INSERT INTO `tpp_history` VALUES ('11', '10001', '重庆博纳电影院', '勇敢者游戏2：再战巅峰', '2019/12/1 下午4:54:02', '80', '1号厅', '1排', '1座');

-- ----------------------------
-- Table structure for tpp_movies
-- ----------------------------
DROP TABLE IF EXISTS `tpp_movies`;
CREATE TABLE `tpp_movies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `movietitle` varchar(255) DEFAULT NULL,
  `moviemark` varchar(255) DEFAULT NULL,
  `moviecount` longtext,
  `moviedate` date DEFAULT NULL,
  `moviedirect` varchar(255) DEFAULT NULL,
  `moviestar` varchar(255) DEFAULT NULL,
  `movielength` varchar(255) DEFAULT NULL,
  `moviearea` varchar(255) DEFAULT NULL,
  `movietype` varchar(255) DEFAULT NULL,
  `movieimage` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tpp_movies
-- ----------------------------
INSERT INTO `tpp_movies` VALUES ('101', '海上钢琴师 ', '9.4', '本片讲述了一个钢琴天才传奇的一生。 1900年，Virginian号豪华邮轮上，一个孤儿被遗弃在头等舱，由船上的水手抚养长大，取名1900（蒂姆•罗斯 饰）。1900慢慢长大，显示出了无师自通的非凡钢琴天赋，在船上的乐队表演钢琴，每个听过他演奏的人，都被深深打动。爵士乐鼻祖杰尼听说了1900的高超技艺，专门上船和他比赛，最后自叹弗如，黯然离去。 可惜，这一切的事情都发生在海上，1900从来不愿踏上陆地，直到有一天，他爱上了一个女孩，情愫在琴键上流淌。他会不会为了爱情，踏上陆地开始新的生活，用他的琴声惊艳世界？他将怎样谱写自己非凡的人生。', '2019-11-15', '朱塞佩·托纳多雷', '蒂姆·罗斯,普路特·泰勒·文斯,比尔·努恩,克兰伦斯·威廉姆斯三世,梅兰尼·蒂埃里', '126', '意大利', '剧情,音乐', 'https://img.alicdn.com/bao/uploaded/i2/TB1kU7UkoY1gK0jSZFCXXcwqXXa_.jpg_300x300.jpg');
INSERT INTO `tpp_movies` VALUES ('103', '两只老虎', '8.1', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-12-05', '李非', '葛优,乔杉,赵薇', '96', '中国大陆', '剧情,喜剧', 'https://img.alicdn.com/bao/uploaded/i1/TB1q0WDnqL7gK0jSZFBXXXZZpXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('104', '冰雪奇缘2', '8.8', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-29', '珍妮弗·李, 克里斯·巴克', '克里斯汀·贝尔,乔什·加德,伊迪娜·门泽尔,埃文·蕾切尔·伍德,斯特林·K·布朗,乔纳森·格罗夫', '104', '美国', '动画,喜剧,冒险', 'https://img.alicdn.com/bao/uploaded/i1/TB1J0Hkk.Y1gK0jSZFMXXaWcVXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('105', '利刃出鞘', '', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-12-20', '莱恩·约翰逊', '丹尼尔·克雷格,克里斯·埃文斯,安娜·德·阿玛斯,杰米·李·柯蒂斯,迈克尔·珊农,托妮·科莱特,唐·约翰逊,勒凯斯·斯坦菲尔德,杰登·马泰尔', '131', '美国', '犯罪,悬疑,喜剧,剧情', 'https://img.alicdn.com/bao/uploaded/i1/TB1wE0PmUT1gK0jSZFhXXaAtVXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('106', '一生有你2019', '', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-29', '卢庚戌', '徐娇,谢彬彬,晏紫东,黄婷婷', '90', '中国大陆', '爱情', 'https://img.alicdn.com/bao/uploaded/i4/TB11Hs1kkL0gK0jSZFAXXcA9pXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('107', '冰峰暴', '', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-12-29', '', '张静初,役所广司,林柏宏,维克多·韦伯斯特,诺亚·丹比', '110', '中国大陆', '动作,冒险', 'https://img.alicdn.com/bao/uploaded/i4/TB1HINOmAY2gK0jSZFgXXc5OFXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('108', '平原上的夏洛克', '', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-12-26', '徐磊', '徐朝英,张占义,宿树河', '98', '中国大陆', '喜剧,悬疑,剧情', 'https://img.alicdn.com/bao/uploaded/i2/TB1btzVmRr0gK0jSZFnXXbRRXXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('109', '衣柜里的冒险王', '', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-29', '肯·斯科特', '丹努什,贝热尼丝·贝乔,艾琳·莫里亚蒂,巴哈德·阿布迪,热拉尔·朱尼奥', '96', '法国,印度', '喜剧,爱情,冒险', 'https://img.alicdn.com/bao/uploaded/i4/TB1lLkonuH2gK0jSZJnXXaT1FXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('110', '勇敢者游戏2：再战巅峰', '', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-29', '杰克·卡斯丹', '道恩·强森,凯伦·吉兰,凯文·哈特,杰克·布莱克,奥卡菲娜,尼克·乔纳斯', '123', '美国', '冒险,动作', 'https://img.alicdn.com/bao/uploaded/i2/TB1xgzjobH1gK0jSZFwXXc7aXXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('111', '决战中途岛', '8.9', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-29', '罗兰·艾默里奇', '伍迪·哈里森,艾德·斯克林,卢克·伊万斯,帕特里克·威尔森,丹尼斯·奎德', '137', '美国', '剧情,历史', 'https://img.alicdn.com/bao/uploaded/i1/TB1_OSul.T1gK0jSZFhXXaAtVXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('112', '大约在冬季', '8.3', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-29', '', '马思纯,霍建华,魏大勋,张瑶,林柏宏', '125', '中国大陆', '爱情,剧情', 'https://img.alicdn.com/bao/uploaded/i3/TB1zv7ooAY2gK0jSZFgXXc5OFXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('114', '南方车站的聚会', '', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-29', '刁亦男', '胡歌,桂纶镁,廖凡,万茜', '113', '中国大陆', '剧情,犯罪', 'https://img.alicdn.com/bao/uploaded/i3/TB1shebmmf2gK0jSZFPXXXsopXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('115', '你是凶手', '7.9', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-12-09', '王昱', '王千源,宋佳,冯远征,李九霄', '94', '中国大陆', '剧情,悬疑,犯罪', 'https://img.alicdn.com/bao/uploaded/i4/TB1gxsmmhz1gK0jSZSgXXavwpXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('116', '少年的你', '9.7', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-29', '', '周冬雨,易烊千玺,尹昉,黄觉', '135', '中国大陆', '爱情,剧情', 'https://img.alicdn.com/bao/uploaded/i2/TB1VyjPjYY1gK0jSZTEXXXDQVXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('117', '触不可及', '8.9', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-29', '尼尔·博格', '布莱恩·科兰斯顿,凯文·哈特,妮可·基德曼', '121', '美国', '喜剧,剧情', 'https://img.alicdn.com/bao/uploaded/i1/TB17Y6GnNn1gK0jSZKPXXXvUXXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('118', '吹哨人', '', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-29', '薛晓路', '雷佳音,汤唯', '139', '中国大陆,澳大利亚', '剧情,犯罪,悬疑', 'https://img.alicdn.com/bao/uploaded/i1/TB1PCsukLb2gK0jSZK9XXaEgFXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('119', '受益人', '8.6', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-29', '申奥', '大鹏,柳岩,张子贤', '112', '中国大陆', '喜剧,爱情,犯罪', 'https://img.alicdn.com/bao/uploaded/i3/TB1rgIzkKL2gK0jSZFmXXc7iXXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('120', '若能与你共乘海浪之上', '', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-29', '汤浅政明', '片寄凉太,川荣李奈,松本穗香,伊藤健太郎', '96', '日本', '奇幻,爱情,动画', 'https://img.alicdn.com/bao/uploaded/i4/TB1SR2SmAL0gK0jSZFAXXcA9pXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('121', '变化中的中国·生活因你而火热', '', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-29', '程工, 张袆, 胥峥, 王晓峰', '魏祺,韩杨,张方勇', '106', '中国大陆', '纪录片', 'https://img.alicdn.com/bao/uploaded/i3/TB1769HnNn1gK0jSZKPXXXvUXXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('122', '星际探索', '', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-29', '詹姆士·格雷', '布拉德·皮特,汤米·李·琼斯,鲁丝·内伽,唐纳德·萨瑟兰,金伯莉·伊丽丝', '124', '美国', '科幻,冒险,灾难', 'https://img.alicdn.com/bao/uploaded/i1/TB1C6XTny_1gK0jSZFqXXcpaXXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('123', '终结者：黑暗命运', '8.5', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-29', '蒂姆·米勒', '阿诺德·施瓦辛格,琳达·汉密尔顿,麦肯兹·戴维斯,娜塔利娅·雷耶斯,加布里埃尔·鲁纳', '127', '美国', '动作,冒险,科幻', 'https://img.alicdn.com/bao/uploaded/i4/TB11iAYk7T2gK0jSZPcXXcKkpXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('124', '天气之子', '8.7', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-29', '新海诚', '森七菜,醍醐虎汰朗,本田翼,小栗旬,平泉成,梶裕贵', '113', '日本', '爱情,动画,奇幻', 'https://img.alicdn.com/bao/uploaded/i3/TB1wN5CkYr1gK0jSZR0XXbP8XXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('125', '我和我的祖国', '9.4', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-29', '陈凯歌, 张一白, 管虎, 薛晓路, 徐峥, 宁浩, 文牧野', '黄渤,张译,韩昊霖,杜江,葛优,刘昊然,宋佳,王千源,任素汐,吴京,朱一龙,王东,陈飞宇,佟丽娅,欧豪,张嘉译,惠英红,龚蓓苾,田壮壮,韩东君,辛柏青,周冬雨,任达华,江珊,王砚辉', '155', '中国大陆', '剧情', 'https://img.alicdn.com/bao/uploaded/i2/TB1LlFfhoH1gK0jSZSyXXXtlpXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('126', '骨瓷', '', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-29', '林华全', '陈奕龙,周海媚,林伟,王婉中,王佑硕', '93', '中国大陆', '惊悚,悬疑', 'https://img.alicdn.com/bao/uploaded/i2/TB1uyNLkrj1gK0jSZFOXXc7GpXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('127', '霹雳娇娃', '8.0', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-29', '伊丽莎白·班克斯', '克里斯汀·斯图尔特,娜奥米·斯科特,埃拉·巴林斯卡,伊丽莎白·班克斯', '119', '美国', '动作,冒险,喜剧', 'https://img.alicdn.com/bao/uploaded/i4/TB1WUtFmVY7gK0jSZKzXXaikpXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('128', '追凶十九年', '7.8', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-29', '徐翔云', '王泷正,宋宁峰,黄璐', '105', '中国大陆', '剧情,悬疑,犯罪', 'https://img.alicdn.com/bao/uploaded/i3/TB12dzXj7Y2gK0jSZFgXXc5OFXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('129', '中国机长', '9.3', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-29', '刘伟强', '张涵予,欧豪,杜江,袁泉,张天爱,李沁', '111', '中国大陆', '剧情,灾难', 'https://img.alicdn.com/bao/uploaded/i1/TB1mDwbgpT7gK0jSZFpXXaTkpXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('130', '深海特攻队之超能晶石', '', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-29', '曲艺', '', '76', '中国大陆', '动画,冒险,儿童,剧情,科幻', 'https://img.alicdn.com/bao/uploaded/i3/TB1K6vflHr1gK0jSZFDXXb9yVXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('131', '红色土司', '', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-29', '艺兮', '游大庆,德姬,多布杰,赵亮', '96', '中国大陆', '剧情,战争,历史', 'https://img.alicdn.com/bao/uploaded/i1/TB1EAEil7T2gK0jSZFkXXcIQFXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('132', '攀登者', '9.1', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-29', '李仁港', '吴京,章子怡,张译,井柏然,胡歌,王景春,何琳,陈龙,刘小锋,曲尼次仁,拉旺罗布,多布杰', '125', '中国大陆', '冒险,动作,爱情', 'https://img.alicdn.com/bao/uploaded/i2/TB1yyzHe3mH3KVjSZKzXXb2OXXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('133', '天池水怪', '', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-30', '朱东贤', '黄设来', '90', '中国大陆', '剧情,动画', 'https://img.alicdn.com/bao/uploaded/i4/TB1Nr2anbr1gK0jSZR0XXbP8XXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('134', '2019英国戏剧影像展', '', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-30', '林赛·特纳, 马修·戴蒙德, 史蒂芬·戴德利, Yaël Farber, 巴特雷·谢尔', '', '130', '中国大陆', '影展', 'https://img.alicdn.com/bao/uploaded/i3/TB1MLhKnxz1gK0jSZSgXXavwpXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('135', '冰雪奇缘', '8.9', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-30', '克里斯·巴克, 珍妮弗·李', '克里斯汀·贝尔,伊迪娜·门泽尔,乔纳森·格罗夫,乔什·加德', '102', '美国', '动画,喜剧,歌舞,奇幻', 'https://img.alicdn.com/bao/uploaded/i4/TB11rydfKySBuNjy1zdXXXPxFXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('136', '他们已不再变老', '8.8', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-30', '彼得·杰克逊', '', '96', '英国', '纪录片,历史,战争', 'https://img.alicdn.com/bao/uploaded/i2/TB1pOaniuP2gK0jSZFoXXauIVXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('137', '长安道', '8.3', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-30', '李骏', '范伟,焦俊艳,宋洋,陈数', '113', '中国大陆', '剧情,悬疑,犯罪', 'https://img.alicdn.com/bao/uploaded/i4/TB1o7AFlRv0gK0jSZKbXXbK2FXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('138', '那一夜，我给你开过车', '', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-30', '林晓丽', '田雨,左小青,种丹妮,刘金山', '110', '中国大陆', '喜剧,爱情', 'https://img.alicdn.com/bao/uploaded/i4/TB1ReMLlebviK0jSZFNXXaApXXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('139', '印度制造', '', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-30', '夏兰特·卡塔里亚', '拉格胡维尔·亚达夫,安努舒卡·莎玛,瓦伦·达万,Jeetendra Shastri', '123', '印度', '剧情,喜剧', 'https://img.alicdn.com/bao/uploaded/i3/TB1kbcRCpYqK1RjSZLeXXbXppXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('140', '红星照耀中国', '8.4', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-30', '王冀邢', '王鹏凯,柯南·何裴,李雪健,李幼斌,蒋雯丽', '109', '中国大陆', '历史,战争', 'https://img.alicdn.com/bao/uploaded/i4/TB1bo.va7T2gK0jSZFkXXcIQFXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('141', '零零后', '8.5', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-30', '张同道', '池亦洋,王思柔', '89', '中国大陆', '纪录片,家庭', 'https://img.alicdn.com/bao/uploaded/i1/TB130Otd1H2gK0jSZJnXXaT1FXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('142', '戏笑江湖', '', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-30', '唐堂', '林乐乐,徐江帅,袁宇龙', '92', '中国大陆', '剧情', 'https://img.alicdn.com/bao/uploaded/i4/TB1q.QPkubviK0jSZFNXXaApXXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('143', '为国而歌', '8.9', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-30', '青山, 白海滨', '王雷,古力娜扎,海一天,李宗翰', '110', '中国大陆', '剧情,历史,战争', 'https://img.alicdn.com/bao/uploaded/i4/TB1hD6BhkP2gK0jSZPxXXacQpXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('144', '昨日青空', '8.3', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-30', '奚超', '苏尚卿,王一博,段艺璇,马斑马', '82', '中国大陆', '爱情,动画', 'https://img.alicdn.com/bao/uploaded/i4/TB1_FK.vDqWBKNjSZFxXXcpLpXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('145', '道具师', '', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-30', '杜子曰', '鲍振江,胡俊铭,王艺霖', '90', '中国大陆', '悬疑,惊悚,恐怖', 'https://img.alicdn.com/bao/uploaded/i2/TB16.WefQL0gK0jSZFtXXXQCXXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('146', '海林都', '', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-30', '彭军 Jun Peng', '图门巴雅尔,高伊罕,张熙唯,关楚䆣', '104', '中国大陆', '剧情', 'https://img.alicdn.com/bao/uploaded/i1/TB1r5YQnkT2gK0jSZFkXXcIQFXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('147', '网络凶铃', '', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-30', '鹤田法男', '孙伊涵,傅孟柏,韩朴俊,张云亭,王嫚笛', '95', '中国大陆', '恐怖,惊悚', 'https://img.alicdn.com/bao/uploaded/i4/TB14KNbmoY1gK0jSZFCXXcwqXXa_.jpg_160x240.jpg');
INSERT INTO `tpp_movies` VALUES ('148', '大梦难忘', '', '剧情介绍：电影讲述了一个低配绑匪遇上极品人质，没想到绑架不成，反被葛优饰演的人质利诱，决定替他办三件事领取赏金。过程中，绑匪与人质一路互相嫌弃又惺惺相惜，引发了一系列令人啼笑皆非的... ', '2019-11-30', '谢政辉', '夏天,臧晋,张圣鹏,蒋昌义,曲海峰', '103', '中国大陆', '剧情', 'https://img.alicdn.com/bao/uploaded/i1/TB1SJhXoNv1gK0jSZFFXXb0sXXa_.jpg_160x240.jpg');

-- ----------------------------
-- Table structure for tpp_playplan
-- ----------------------------
DROP TABLE IF EXISTS `tpp_playplan`;
CREATE TABLE `tpp_playplan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mid` int(11) DEFAULT NULL,
  `playdate` date DEFAULT NULL,
  `playtime` time DEFAULT NULL,
  `cid` varchar(255) DEFAULT NULL,
  `playcost` varchar(255) DEFAULT NULL,
  `playprice` decimal(10,2) DEFAULT NULL,
  `maxnum` int(11) DEFAULT NULL,
  `getnum` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tpp_playplan
-- ----------------------------
INSERT INTO `tpp_playplan` VALUES ('1', '101', '2019-11-21', '16:00:00', '1', '150.00', '67.90', '100', '0');
INSERT INTO `tpp_playplan` VALUES ('2', '101', '2019-11-21', '17:25:00', '2', '34.80', '80.00', '100', '0');
INSERT INTO `tpp_playplan` VALUES ('3', '102', '2019-11-21', '17:25:00', '3', '34.80', '80.00', '100', '0');
INSERT INTO `tpp_playplan` VALUES ('4', '103', '2019-11-21', '17:25:00', '4', '34.80', '80.00', '100', '0');
INSERT INTO `tpp_playplan` VALUES ('5', '104', '2019-11-21', '17:25:00', '5', '34.80', '80.00', '100', '0');
INSERT INTO `tpp_playplan` VALUES ('6', '105', '2019-11-21', '17:25:00', '6', '34.80', '80.00', '100', '0');
INSERT INTO `tpp_playplan` VALUES ('7', '106', '2019-11-21', '17:25:00', '7', '34.80', '80.00', '100', '0');
INSERT INTO `tpp_playplan` VALUES ('8', '107', '2019-11-21', '17:25:00', '8', '34.80', '80.00', '100', '0');
INSERT INTO `tpp_playplan` VALUES ('9', '108', '2019-11-21', '17:25:00', '9', '34.80', '80.00', '100', '0');
INSERT INTO `tpp_playplan` VALUES ('10', '109', '2019-11-21', '17:25:00', '10', '34.80', '80.00', '100', '0');
INSERT INTO `tpp_playplan` VALUES ('11', '110', '2019-11-21', '17:25:00', '1', '34.80', '80.00', '100', '0');
INSERT INTO `tpp_playplan` VALUES ('12', '111', '2019-11-21', '17:25:00', '2', '34.80', '80.00', '100', '0');
INSERT INTO `tpp_playplan` VALUES ('13', '112', '2019-11-21', '17:25:00', '3', '34.80', '80.00', '100', '0');
INSERT INTO `tpp_playplan` VALUES ('14', '113', '2019-11-21', '17:25:00', '4', '34.80', '80.00', '100', '0');
INSERT INTO `tpp_playplan` VALUES ('15', '114', '2019-12-22', '17:25:00', '5', '34.80', '80.00', '100', '0');
INSERT INTO `tpp_playplan` VALUES ('16', '115', '2019-12-22', '17:25:00', '6', '34.80', '80.00', '100', '0');
INSERT INTO `tpp_playplan` VALUES ('17', '116', '2019-12-22', '17:25:00', '7', '34.80', '80.00', '100', '0');
INSERT INTO `tpp_playplan` VALUES ('18', '102', '2019-12-22', '17:25:00', '8', '34.80', '80.00', '100', '0');
INSERT INTO `tpp_playplan` VALUES ('19', '103', '2019-12-22', '17:25:00', '9', '34.80', '80.00', '100', '0');
INSERT INTO `tpp_playplan` VALUES ('20', '104', '2019-12-22', '17:25:00', '11', '34.80', '80.00', '100', '0');
INSERT INTO `tpp_playplan` VALUES ('21', '105', '2019-12-22', '17:25:00', '1', '34.80', '80.00', '100', '0');
INSERT INTO `tpp_playplan` VALUES ('22', '106', '2019-12-22', '17:25:00', '2', '34.80', '80.00', '100', '0');
INSERT INTO `tpp_playplan` VALUES ('23', '107', '2019-12-22', '17:25:00', '3', '34.80', '80.00', '100', null);
INSERT INTO `tpp_playplan` VALUES ('24', '108', '2019-12-22', '17:25:00', '4', '34.80', '80.00', '100', null);
INSERT INTO `tpp_playplan` VALUES ('25', '109', '2019-12-22', '17:25:00', '5', '34.80', '80.00', '100', null);
INSERT INTO `tpp_playplan` VALUES ('26', '110', '2019-12-22', '17:25:00', '6', '34.80', '80.00', '100', null);

-- ----------------------------
-- Table structure for tpp_users
-- ----------------------------
DROP TABLE IF EXISTS `tpp_users`;
CREATE TABLE `tpp_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `useremail` varchar(255) DEFAULT NULL,
  `userphone` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `userimage` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10021 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tpp_users
-- ----------------------------
INSERT INTO `tpp_users` VALUES ('10000', 'test01', '111@qq.com', '111', '111', 'https://gw.alicdn.com/i3/6000000007643/TB2c3h2r3xlpuFjy0FoXXa.lXXa_!!0-mytaobao.jpg_.webp?tdsourcetag=s_pctim_aiomsg');
INSERT INTO `tpp_users` VALUES ('10001', 'test02', '222@qq.com', '222', '222', 'https://gw.alicdn.com/i3/6000000007643/TB2c3h2r3xlpuFjy0FoXXa.lXXa_!!0-mytaobao.jpg_.webp?tdsourcetag=s_pctim_aiomsg');
INSERT INTO `tpp_users` VALUES ('10017', 'test03', '333', '333', '333', 'https://gw.alicdn.com/i3/6000000007643/TB2c3h2r3xlpuFjy0FoXXa.lXXa_!!0-mytaobao.jpg_.webp?tdsourcetag=s_pctim_aiomsg');
INSERT INTO `tpp_users` VALUES ('10018', 'test04', '333', '333', '444', 'https://gw.alicdn.com/i3/6000000007643/TB2c3h2r3xlpuFjy0FoXXa.lXXa_!!0-mytaobao.jpg_.webp?tdsourcetag=s_pctim_aiomsg');
INSERT INTO `tpp_users` VALUES ('10019', 'test05', '333', '333', '444', 'https://gw.alicdn.com/i3/6000000007643/TB2c3h2r3xlpuFjy0FoXXa.lXXa_!!0-mytaobao.jpg_.webp?tdsourcetag=s_pctim_aiomsg');
INSERT INTO `tpp_users` VALUES ('10020', 'test06', '111', '111', '111', 'https://gw.alicdn.com/i3/6000000007643/TB2c3h2r3xlpuFjy0FoXXa.lXXa_!!0-mytaobao.jpg_.webp?tdsourcetag=s_pctim_aiomsg');
