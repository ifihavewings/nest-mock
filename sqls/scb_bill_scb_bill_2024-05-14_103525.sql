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
-- Table structure for table `scb_bill`
--

DROP TABLE IF EXISTS `scb_bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_bill` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `bill_package_num` varchar(50) DEFAULT NULL COMMENT '票据(包)号',
  `subinterval_num` varchar(100) DEFAULT NULL COMMENT '子区间号',
  `init_subinterval_num` varchar(100) DEFAULT NULL COMMENT '初始子区间',
  `bill_type` varchar(4) DEFAULT NULL COMMENT '票据种类，商票AC02，银票AC01',
  `bill_package_init_amount` decimal(13,2) DEFAULT NULL COMMENT '初始金额(元)',
  `bill_package_amount` decimal(13,2) DEFAULT NULL COMMENT '票据(包)金额（元）',
  `bill_package_available_amount` decimal(13,2) DEFAULT NULL COMMENT '票据(包)可用金额（元）',
  `is_root_bill` char(2) DEFAULT NULL COMMENT '是否根票0不是1是',
  `root_bill_id` bigint(20) DEFAULT NULL COMMENT '根票id',
  `parent_bill_id` bigint(20) DEFAULT NULL COMMENT '上一级票据id',
  `un_exchange_flag` char(4) DEFAULT NULL COMMENT '不得转让标记EM01不得转让EM00可再转让',
  `sub_transfer_flag` varchar(10) DEFAULT NULL COMMENT '分包流转标记0不是1是',
  `trade_register_state` varchar(4) DEFAULT NULL COMMENT '贸易背景登记状态',
  `lock_flag` varchar(4) DEFAULT NULL COMMENT '挑票锁定标识0未锁定1锁定',
  `freeze_status` char(2) DEFAULT NULL COMMENT '冻结标识0未冻结1全部冻结2部分冻结',
  `is_split_flag` char(2) DEFAULT NULL COMMENT '是否拆包0否1是',
  `bill_state` varchar(4) DEFAULT NULL COMMENT '票据状态：已出票CS01，已承兑CS02，已收票CS03，已到期CS04，已终止CS05，已结清CS06',
  `bill_flow_flag` varchar(6) DEFAULT NULL COMMENT '票据流转标识：待收票TF0101，可流通TF0301，已锁定TF0302，不可转让TF0303，已质押TF0304，待赎回TF0305，托收在途TF0401，追索中TF0402，已结束TF0501',
  `draw_date` datetime DEFAULT NULL COMMENT '出票日期',
  `expire_date` datetime DEFAULT NULL COMMENT '到期日期，出票日期不超6个月',
  `draw_ent_name` varchar(128) DEFAULT NULL COMMENT '出票人名称',
  `draw_ent_id` bigint(20) DEFAULT NULL COMMENT '出票人id',
  `draw_ent_code` varchar(30) DEFAULT NULL COMMENT '出票人统一社会信用代码',
  `draw_account_name` varchar(128) DEFAULT NULL COMMENT '出票人银行账户名称',
  `draw_account_no` varchar(100) DEFAULT NULL COMMENT '出票人银行账号',
  `draw_bank_name` varchar(128) DEFAULT NULL COMMENT '出票人银行账户开户行机构参与者名称',
  `draw_channel_code` varchar(50) DEFAULT NULL COMMENT '出票人渠道号',
  `draw_channel_name` varchar(128) DEFAULT NULL COMMENT '出票人渠道名称',
  `payee_is_bill_plat` varchar(4) DEFAULT NULL COMMENT '收款人是否为供票平台企业',
  `payee_ent_name` varchar(128) DEFAULT NULL COMMENT '收款人名称',
  `payee_ent_id` bigint(20) DEFAULT NULL COMMENT '收款人id',
  `payee_ent_code` varchar(30) DEFAULT NULL COMMENT '收款人统一社会信用代码',
  `payee_account_no` varchar(30) DEFAULT NULL COMMENT '收款人账户号',
  `payee_account_name` varchar(128) DEFAULT NULL COMMENT '收款人银行账户名称',
  `payee_bank_name` varchar(128) DEFAULT NULL COMMENT '收款人银行账户开户行机构参与者名称',
  `payee_bank_code` varchar(20) DEFAULT NULL COMMENT '收款人银行账户开户行机构参与者编码',
  `payee_is_special` varchar(4) DEFAULT NULL COMMENT '是否特殊收款人0不是1是',
  `payee_channel_code` varchar(50) DEFAULT NULL COMMENT '收款人渠道号',
  `payee_channel_name` varchar(128) DEFAULT NULL COMMENT '收款人渠道名称',
  `accept_is_bill_plat` varchar(10) DEFAULT NULL COMMENT '承兑人是否为供票平台企业',
  `accept_channel_name` varchar(100) DEFAULT NULL COMMENT '承兑人渠道名称',
  `accept_channel_code` varchar(20) DEFAULT NULL COMMENT '承编码兑人渠道',
  `accept_ent_name` varchar(128) DEFAULT NULL COMMENT '承兑人名称',
  `accept_ent_id` bigint(20) DEFAULT NULL COMMENT '承兑人id',
  `accept_ent_code` varchar(30) DEFAULT NULL COMMENT '承兑人统一社会信用代码',
  `accept_account_no` varchar(30) DEFAULT NULL COMMENT '承兑人账户号',
  `accept_account_name` varchar(255) DEFAULT NULL COMMENT '承兑人银行账户名称',
  `accept_bank_name` varchar(255) DEFAULT NULL COMMENT '承兑人银行账户开户行机构参与者名称',
  `accept_bank_code` varchar(20) DEFAULT NULL COMMENT '承兑人银行账户开户行机构参与者编码',
  `remark` varchar(128) DEFAULT '' COMMENT '说明',
  `delete_flag` char(1) NOT NULL DEFAULT '0' COMMENT '删除标识，是：1，否：0',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` bigint(20) unsigned NOT NULL COMMENT '创建人ID(申请人id)',
  `creator` varchar(30) NOT NULL COMMENT '创建人名称(申请人名称)',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `update_by` bigint(20) unsigned DEFAULT NULL COMMENT '修改人ID',
  `updater` varchar(30) DEFAULT NULL COMMENT '更新人名称',
  `revision` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '修改版本号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-14 10:35:29
