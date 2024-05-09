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
-- Table structure for table `scb_trade_partner`
--

DROP TABLE IF EXISTS `scb_trade_partner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_trade_partner` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `business_part` varchar(16) DEFAULT NULL COMMENT '业务主体名称',
  `business_code` varchar(9) DEFAULT NULL COMMENT '业务主体代码 CS02 金融机构CS03 企业',
  `trade_name` varchar(128) DEFAULT NULL COMMENT '交易对手名称',
  `agency_name` varchar(128) DEFAULT NULL COMMENT '机构参与者名称',
  `agency_code` varchar(32) DEFAULT NULL COMMENT '机构参与者代码',
  `society_credit_code` varchar(32) DEFAULT NULL COMMENT '统一社会信用代码',
  `channel_name` varchar(128) DEFAULT NULL COMMENT '业务办理渠道名称',
  `channel_code` varchar(16) DEFAULT NULL COMMENT '业务办理渠道代码',
  `Is_ticket_platform` char(1) DEFAULT NULL COMMENT '是否供票平台企业  0否1是',
  `bill_type` varchar(4) DEFAULT NULL COMMENT '识别类型DT01 票据账户 DT02 银行账户',
  `bill_account` varchar(64) DEFAULT NULL COMMENT '票据账号',
  `bank_account` varchar(32) DEFAULT NULL COMMENT '银行账号',
  `bank_account_name` varchar(128) DEFAULT NULL COMMENT '银行账户名称',
  `bank_code` varchar(9) DEFAULT NULL COMMENT '银行账户账号',
  `bank_open_name` varchar(128) DEFAULT NULL COMMENT '银行账户开户行机构参与者名称',
  `bank_open_code` varchar(9) DEFAULT NULL COMMENT '银行账户开户行机构参与者代码',
  `revision` varchar(32) DEFAULT NULL COMMENT '乐观锁',
  `create_by` bigint(20) DEFAULT NULL COMMENT '创建人',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_by` bigint(20) DEFAULT NULL COMMENT '更新人',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `delete_flag` char(1) DEFAULT NULL COMMENT '删除标识  是：1，否：0',
  `remark` varchar(128) DEFAULT NULL COMMENT '备注',
  `enterprise_id` bigint(20) DEFAULT NULL COMMENT '当前企业id',
  `creator` varchar(30) DEFAULT NULL COMMENT '创建人',
  `updater` varchar(30) DEFAULT NULL COMMENT '修改人',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='交易对手管理表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scb_trade_partner`
--

/*!40000 ALTER TABLE `scb_trade_partner` DISABLE KEYS */;
/*!40000 ALTER TABLE `scb_trade_partner` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-09  9:02:06
