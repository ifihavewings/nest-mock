-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 10.1.128.114    Database: scb_bill
-- ------------------------------------------------------
-- Server version	5.7.38

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `scb_agency_partner`
--

DROP TABLE IF EXISTS `scb_agency_partner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_agency_partner` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `channel_code` varchar(6) DEFAULT NULL COMMENT '业务办理渠道代码',
  `agency_code` varchar(32) DEFAULT NULL COMMENT '机构参与者代码',
  `agency_encode` varchar(32) DEFAULT NULL COMMENT '机构参与者编码',
  `agency_category` varchar(6) DEFAULT NULL COMMENT '机构参与者类别代码',
  `agency_type_code` varchar(6) DEFAULT NULL COMMENT '机构参与者类型代码',
  `agency_name` varchar(128) DEFAULT NULL COMMENT '机构参与者全称（中文）',
  `agency_english_name` varchar(32) DEFAULT NULL COMMENT '机构参与者全称（英文）',
  `agency_short_name` varchar(128) DEFAULT NULL COMMENT '机构参与者简称（中文）',
  `agency_short_english_name` varchar(32) DEFAULT NULL COMMENT '机构参与者简称（英文）',
  `credit_code` varchar(18) DEFAULT NULL COMMENT '统一社会信用代码',
  `province_code` varchar(6) DEFAULT NULL COMMENT '省份代码',
  `legal_person_code` varchar(16) DEFAULT NULL COMMENT '法人级别代码',
  `product_start_date` datetime DEFAULT NULL COMMENT '产品有效日期开始日期',
  `product_end_date` datetime DEFAULT NULL COMMENT '产品有效日期结束日期',
  `agency_partner_state` varchar(4) DEFAULT NULL COMMENT '机构参与者状态',
  `trade_account_state` varchar(4) DEFAULT NULL COMMENT '交易账户状态',
  `trusteeship_state` varchar(4) DEFAULT NULL COMMENT '托管账户状态',
  `legal_person` varchar(128) DEFAULT NULL COMMENT '法定代表人或负责人',
  `register_capital` decimal(24,2) DEFAULT NULL COMMENT '注册资本',
  `address` varchar(128) DEFAULT NULL COMMENT '地址',
  `contacts_person` varchar(64) DEFAULT NULL COMMENT '联系人',
  `telephone` varchar(11) DEFAULT NULL COMMENT '联系电话',
  `fax` varchar(32) DEFAULT NULL COMMENT '传真',
  `postcode` varchar(6) DEFAULT NULL COMMENT '邮编',
  `pay_bank_number` varchar(32) DEFAULT NULL COMMENT '机构参与者大额支付系统行号',
  `mercialdraft_bank_number` varchar(32) DEFAULT NULL COMMENT '电票代理行大额支付系统行号',
  `mercialdraft_account_number` varchar(32) DEFAULT NULL COMMENT '电票代理账户账号',
  `remark` varchar(128) DEFAULT '' COMMENT '说明',
  `delete_flag` char(1) DEFAULT '0' COMMENT '删除标识，是：1，否：0',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` bigint(20) unsigned DEFAULT NULL COMMENT '创建人ID(申请人id)',
  `creator` varchar(30) DEFAULT NULL COMMENT '创建人名称(申请人名称)',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `update_by` bigint(20) unsigned DEFAULT NULL COMMENT '修改人ID',
  `updater` varchar(30) DEFAULT NULL COMMENT '更新人名称',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COMMENT='机构参与者信息表';
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-11 16:23:34
